/**
 * app.js — Tomicoach
 * -----------------------------------------------------------------------
 * Controlador principal. Reutiliza la misma base de 353 ejercicios y el
 * mismo criterio de diseño de Becker App, pero con login real (Firebase)
 * y dos roles: Entrenador (ve y administra a todos los alumnos) y Alumno
 * (ve y entrena solo su propia rutina).
 */

const App = (() => {

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function icon(nombre, clase = '') {
    return `<svg class="icon ${clase}" aria-hidden="true"><use href="assets/iconos/sprite.svg#icon-${nombre}"></use></svg>`;
  }
  function poseIcon(categoria, clase = '') {
    return `<svg class="pose-icon ${clase}" aria-hidden="true"><use href="assets/iconos/poses.svg#pose-${categoria}"></use></svg>`;
  }
  function escapeHtml(str = '') {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function formatNumero(n, decimales = 0) {
    if (n === null || n === undefined || isNaN(n)) return '—';
    return Number(n).toLocaleString('es-ES', { minimumFractionDigits: decimales, maximumFractionDigits: decimales });
  }
  function formatFecha(iso, opciones = { day: '2-digit', month: 'short', year: 'numeric' }) {
    return new Date(iso).toLocaleDateString('es-ES', opciones);
  }
  function formatDuracion(seg) {
    if (!seg) return '—';
    const min = Math.round(seg / 60);
    if (min < 60) return `${min} min`;
    return `${Math.floor(min / 60)}h ${min % 60}min`;
  }
  function debounce(fn, ms = 200) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

  const state = { vistaActual: null, alumnoSeleccionadoUid: null, sesionActiva: null, calendario: null };
  const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const DIAS_SEMANA = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  // ---------------------------------------------------------------------
  // Toast + Modal (idéntico criterio a Becker App)
  // ---------------------------------------------------------------------
  function toast(mensaje, tipo = 'info', duracion = 3200) {
    const cont = $('#toast-container');
    if (!cont) return;
    const el = document.createElement('div');
    el.className = `toast toast-${tipo}`;
    const iconos = { info: 'info', exito: 'check-circle', error: 'warning', logro: 'trophy' };
    el.innerHTML = `${icon(iconos[tipo] || 'info')}<span>${escapeHtml(mensaje)}</span>`;
    cont.appendChild(el);
    requestAnimationFrame(() => el.classList.add('toast-show'));
    setTimeout(() => { el.classList.remove('toast-show'); setTimeout(() => el.remove(), 300); }, duracion);
  }

  function abrirModal(html, { ancho = 'md', id = 'modal-generico' } = {}) {
    const root = $('#modal-root');
    root.innerHTML = `<div class="modal-overlay" data-modal-overlay><div class="modal modal-${ancho}" id="${id}" role="dialog" aria-modal="true">${html}</div></div>`;
    root.classList.add('modal-root-visible');
    document.body.classList.add('no-scroll');
    $('[data-modal-overlay]', root).addEventListener('click', (e) => { if (e.target.hasAttribute('data-modal-overlay')) cerrarModal(); });
    $$('[data-cerrar-modal]', root).forEach(b => b.addEventListener('click', cerrarModal));
  }
  function cerrarModal() {
    const root = $('#modal-root');
    root.innerHTML = '';
    root.classList.remove('modal-root-visible');
    document.body.classList.remove('no-scroll');
  }

  // ---------------------------------------------------------------------
  // Ilustraciones de ejercicios (mismo criterio que Becker App)
  // ---------------------------------------------------------------------
  function categoriaIlustracion(ej) {
    const n = (ej.nombre || '').toLowerCase();
    const g = ej.grupoMuscular;
    if (ej.objetivos && ej.objetivos.includes('cardio')) return 'cardio-funcional';
    if (g === 'Pecho') return /apertura|cruce|pec deck|contractora|pull-?over/.test(n) ? 'elevacion-brazo' : 'press-horizontal';
    if (g === 'Espalda') {
      if (/peso muerto|buenos días|good morning/.test(n)) return 'bisagra-cadera';
      if (/dominada|jalón|jalon|pull-?over|pulldown/.test(n)) return 'dominada';
      return 'remo';
    }
    if (g === 'Hombros') return /elevaci[oó]n|p[aá]jaro|face pull|encogimiento/.test(n) ? 'elevacion-brazo' : 'press-vertical';
    if (g === 'Bíceps') return 'curl-brazo';
    if (g === 'Tríceps') return 'extension-brazo';
    if (g === 'Trapecios') return 'elevacion-brazo';
    if (g === 'Antebrazos') return 'carga-general';
    if (g === 'Abdomen') return /plancha|hollow|postura hueca|dead hang|rollout|ab wheel/.test(n) ? 'core-plancha' : 'core-crunch';
    if (g === 'Oblicuos') return 'core-crunch';
    if (g === 'Cuádriceps') return /zancada|step up|lunge|pistol/.test(n) ? 'zancada-gemelo' : 'sentadilla';
    if (g === 'Isquiotibiales') return 'bisagra-cadera';
    if (g === 'Glúteos') return /hip thrust|puente/.test(n) ? 'bisagra-cadera' : 'zancada-gemelo';
    if (g === 'Gemelos' || g === 'Aductores' || g === 'Abductores') return 'zancada-gemelo';
    if (g === 'Lumbares') return 'bisagra-cadera';
    if (g === 'Manguito rotador') return 'elevacion-brazo';
    if (g === 'Cuello' || g === 'Columna' || g === 'Cadera' || g === 'Tobillos') return 'estiramiento';
    return 'carga-general';
  }
  function imagenEjercicioHTML(ej) {
    const pose = poseIcon(categoriaIlustracion(ej));
    // OJO: a propósito NO usamos el GIF acá. Poner un GIF animado en cada
    // miniatura de una lista de 40-60 ejercicios hace que el celular tenga
    // que descargar y animar todos a la vez, y la app se siente pesada/lenta.
    // El GIF animado se reserva para la pantalla de detalle (un ejercicio
    // a la vez). Acá usamos la ilustración fija, o la foto estática si existe.
    if (ej.imagenesExternas && ej.imagenesExternas.length) {
      return `${pose}<img src="${escapeHtml(ej.imagenesExternas[0])}" alt="" loading="lazy" class="foto-ejercicio" onerror="this.remove()">`;
    }
    return pose;
  }
  function getExerciseById(id) { return EXERCISE_DATABASE.find(e => e.id === id) || null; }

  // ---------------------------------------------------------------------
  // Pantalla de detalle de ejercicio (foto/GIF, errores frecuentes,
  // consejos de técnica, variantes). Se abre como modal desde cualquier
  // lugar donde aparezca un ejercicio.
  // ---------------------------------------------------------------------
  function abrirDetalleEjercicio(ejercicioId) {
    const ej = getExerciseById(ejercicioId);
    if (!ej) return;

    const galeriaHtml = (ej.gifs && ej.gifs.length)
      ? `<div class="detalle-ejercicio-galeria">
          ${ej.gifs.slice(0, 4).map(g => `<img src="${escapeHtml(g.url)}" alt="${escapeHtml(ej.nombre)}" loading="lazy" class="detalle-ejercicio-gif" onerror="this.remove()">`).join('')}
        </div>`
      : `<div class="detalle-ejercicio-fallback">${poseIcon(categoriaIlustracion(ej), 'detalle-ejercicio-fallback-icono')}</div>`;

    const listaHtml = (titulo, iconoNombre, items) => (items && items.length) ? `
      <h4 class="detalle-ejercicio-subtitulo">${icon(iconoNombre)} ${titulo}</h4>
      <ul class="lista-detalle-ejercicio">${items.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>` : '';

    abrirModal(`
      <div class="modal-header"><h3>${escapeHtml(ej.nombre)}</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        ${galeriaHtml}
        <div class="detalle-ejercicio-meta">
          <span class="badge">${escapeHtml(ej.grupoMuscular)}</span>
          <span class="badge">${escapeHtml(ej.equipamiento)}</span>
          <span class="badge">${escapeHtml(ej.dificultad)}</span>
        </div>
        <p class="texto-suave" style="margin-top:.9rem">${escapeHtml(ej.descripcion)}</p>
        ${listaHtml('Errores frecuentes', 'warning', ej.erroresFrecuentes)}
        ${listaHtml('Consejos de técnica', 'check', ej.consejos)}
        ${listaHtml('Variantes', 'repeat', ej.variantes)}
      </div>`, { ancho: 'lg', id: 'modal-detalle-ejercicio' });
  }

  // ---------------------------------------------------------------------
  // Programas por objetivo (mismo contenido que Becker App, resumido)
  // ---------------------------------------------------------------------
  const NIVEL_ORDEN = { 'Principiante': 1, 'Intermedio': 2, 'Avanzado': 3 };

  const PROGRAMAS_OBJETIVO = {
    'ganancia-muscular': { nombre: 'Ganancia muscular', icono: 'trophy',
      frecuencia: '5 días / semana',
      resumen: 'Rutina de 5 días que reparte todos los grupos musculares de la semana para maximizar el volumen de entrenamiento.',
      metodologia: [
        'Rango de 8 a 12 repeticiones por serie: el punto donde más evidencia hay de estímulo para el crecimiento muscular (hipertrofia).',
        'Descansos de 60 a 90 segundos entre series: suficiente para recuperar sin perder densidad de entrenamiento.',
        'Se reparten los grupos musculares en 5 días distintos para poder entrenar cada músculo con buen volumen semanal, sin acumular fatiga excesiva en una sola sesión.',
        'La progresión se basa en sumar repeticiones primero y peso después (doble progresión), mantenida en el tiempo.'
      ], dias: [
      { nombre: 'Día 1 — Pecho, hombros y tríceps', series: 3, reps: 10, descanso: 75, bloques: [{ grupo: 'Pecho', cantidad: 2 }, { grupo: 'Hombros', cantidad: 2 }, { grupo: 'Tríceps', cantidad: 2 }] },
      { nombre: 'Día 2 — Espalda y bíceps', series: 3, reps: 10, descanso: 75, bloques: [{ grupo: 'Espalda', cantidad: 3 }, { grupo: 'Bíceps', cantidad: 2 }, { grupo: 'Trapecios', cantidad: 1 }] },
      { nombre: 'Día 3 — Piernas completo', series: 3, reps: 10, descanso: 90, bloques: [{ grupo: 'Cuádriceps', cantidad: 2 }, { grupo: 'Isquiotibiales', cantidad: 2 }, { grupo: 'Glúteos', cantidad: 1 }, { grupo: 'Gemelos', cantidad: 1 }] },
      { nombre: 'Día 4 — Tren superior', series: 3, reps: 12, descanso: 60, bloques: [{ grupo: 'Pecho', cantidad: 1 }, { grupo: 'Espalda', cantidad: 1 }, { grupo: 'Hombros', cantidad: 1 }, { grupo: 'Bíceps', cantidad: 1 }, { grupo: 'Tríceps', cantidad: 1 }] },
      { nombre: 'Día 5 — Tren inferior', series: 3, reps: 12, descanso: 60, bloques: [{ grupo: 'Cuádriceps', cantidad: 1 }, { grupo: 'Isquiotibiales', cantidad: 1 }, { grupo: 'Glúteos', cantidad: 2 }, { grupo: 'Aductores', cantidad: 1 }, { grupo: 'Abductores', cantidad: 1 }] }
    ]},
    'fuerza': { nombre: 'Fuerza', icono: 'barbell',
      frecuencia: '3 días / semana',
      resumen: 'Levantamientos compuestos pesados con pocas repeticiones y descansos largos, para maximizar la fuerza máxima.',
      metodologia: [
        'Rango de 4 a 6 repeticiones por serie, con cargas altas y técnica muy controlada.',
        'Descansos largos (2 a 3 minutos) para permitir recuperación casi completa entre series pesadas: en fuerza importa más la calidad de cada serie que la fatiga acumulada.',
        'El foco está en pocos ejercicios compuestos por sesión (sentadilla, press de banca, peso muerto, press militar, remo) en vez de mucha variedad — así se puede progresar en cada uno de forma medible.',
        'La progresión se basa en sumar peso de forma constante y gradual (sobrecarga progresiva), priorizando siempre la técnica sobre el número en la barra.'
      ], dias: [
      { nombre: 'Día 1 — Sentadilla y pecho', series: 5, reps: 5, descanso: 180, bloques: [{ grupo: 'Cuádriceps', cantidad: 1, preferirCompuesto: true }, { grupo: 'Pecho', cantidad: 1, preferirCompuesto: true }, { grupo: 'Hombros', cantidad: 1, preferirCompuesto: true }, { grupo: 'Abdomen', cantidad: 1 }] },
      { nombre: 'Día 2 — Peso muerto y espalda', series: 5, reps: 5, descanso: 180, bloques: [{ grupo: 'Isquiotibiales', cantidad: 1, preferirCompuesto: true }, { grupo: 'Espalda', cantidad: 2, preferirCompuesto: true }, { grupo: 'Antebrazos', cantidad: 1 }] },
      { nombre: 'Día 3 — Cuerpo completo pesado', series: 4, reps: 6, descanso: 150, bloques: [{ grupo: 'Glúteos', cantidad: 1, preferirCompuesto: true }, { grupo: 'Espalda', cantidad: 1, preferirCompuesto: true }, { grupo: 'Pecho', cantidad: 1, preferirCompuesto: true }, { grupo: 'Trapecios', cantidad: 1 }] }
    ]},
    'perdida-grasa': { nombre: 'Pérdida de grasa', icono: 'flame',
      frecuencia: '4 días / semana',
      resumen: 'Circuitos de cuerpo completo combinando fuerza y cardio, con descansos cortos para mantener el pulso alto.',
      metodologia: [
        'Rango de 12 a 15 repeticiones por serie, con descansos cortos (30 a 45 segundos) para elevar el gasto calórico de la sesión.',
        'Se combinan ejercicios compuestos (que reclutan más músculo y gastan más energía) con movimientos de acondicionamiento tipo cardio.',
        'Entrenar cuerpo completo 4 veces por semana mantiene alta la frecuencia de estímulo muscular — clave para preservar masa magra mientras se busca un déficit calórico.',
        'La pérdida de grasa depende principalmente de la alimentación (déficit calórico sostenido); el entrenamiento acompaña preservando músculo y mejorando la condición física general.'
      ], dias: [
      { nombre: 'Circuito 1', series: 3, reps: 14, descanso: 40, bloques: [{ grupo: 'Cuádriceps', cantidad: 1 }, { grupo: 'Pecho', cantidad: 1 }, { grupo: 'Espalda', cantidad: 1 }, { grupo: 'Abdomen', cantidad: 1 }, { cardioAmplio: true, cantidad: 1 }] },
      { nombre: 'Circuito 2', series: 3, reps: 14, descanso: 40, bloques: [{ grupo: 'Glúteos', cantidad: 1 }, { grupo: 'Hombros', cantidad: 1 }, { grupo: 'Espalda', cantidad: 1 }, { grupo: 'Oblicuos', cantidad: 1 }, { cardioAmplio: true, cantidad: 1 }] },
      { nombre: 'Circuito 3', series: 3, reps: 14, descanso: 40, bloques: [{ grupo: 'Isquiotibiales', cantidad: 1 }, { grupo: 'Pecho', cantidad: 1 }, { grupo: 'Bíceps', cantidad: 1 }, { grupo: 'Abdomen', cantidad: 1 }, { cardioAmplio: true, cantidad: 1 }] },
      { nombre: 'Circuito 4 — cuerpo completo', series: 3, reps: 15, descanso: 30, bloques: [{ grupo: 'Cuádriceps', cantidad: 1 }, { grupo: 'Espalda', cantidad: 1 }, { grupo: 'Hombros', cantidad: 1 }, { cardioAmplio: true, cantidad: 2 }] }
    ]},
    'cardio': { nombre: 'Cardio', icono: 'timer',
      frecuencia: '3 días / semana',
      resumen: 'Sesiones de acondicionamiento metabólico con movimientos funcionales, pensadas para mejorar resistencia cardiovascular.',
      metodologia: [
        'Repeticiones altas (15 a 20) o por tiempo, con descansos muy cortos (20 a 30 segundos) para mantener elevada la frecuencia cardíaca durante toda la sesión.',
        'Predominan ejercicios con peso corporal y movimientos multiarticulares (burpees, mountain climbers, saltos) que exigen más al sistema cardiovascular que al muscular aislado.',
        'Este tipo de trabajo mejora la capacidad aeróbica y anaeróbica, y es un buen complemento — no reemplazo — de un plan de fuerza.',
        'Al ser un estímulo exigente, se recomienda no encadenar más de 3 sesiones por semana sin días de por medio para permitir recuperación.'
      ], dias: [
      { nombre: 'Acondicionamiento 1', series: 4, reps: 15, descanso: 25, bloques: [{ cardioAmplio: true, cantidad: 3 }, { grupo: 'Abdomen', cantidad: 2 }] },
      { nombre: 'Acondicionamiento 2', series: 4, reps: 15, descanso: 25, bloques: [{ cardioAmplio: true, cantidad: 3 }, { grupo: 'Oblicuos', cantidad: 1 }, { grupo: 'Gemelos', cantidad: 1 }] },
      { nombre: 'Acondicionamiento 3', series: 4, reps: 15, descanso: 25, bloques: [{ cardioAmplio: true, cantidad: 2 }, { grupo: 'Glúteos', cantidad: 1 }, { grupo: 'Abdomen', cantidad: 2 }] }
    ]},
    'movilidad': { nombre: 'Movilidad y elongación', icono: 'repeat',
      frecuencia: '3 días / semana',
      resumen: 'Rutina de movilidad y estiramientos para mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.',
      metodologia: [
        'Los estiramientos estáticos se mantienen entre 20 y 30 segundos, respirando profundo, sin rebotar y sin llegar a dolor agudo.',
        'Los ejercicios de movilidad dinámica (círculos, rotaciones) se hacen con repeticiones controladas en vez de sostenidas.',
        'Trabajar la movilidad de forma regular ayuda a prevenir lesiones y mejora la técnica en los demás objetivos (fuerza, hipertrofia, cardio).',
        'Es un buen complemento después de entrenar, o como sesión aparte en los días de descanso activo.'
      ], dias: [
      { nombre: 'Día 1 — Tren superior y columna', series: 2, reps: 1, descanso: 20, bloques: [{ grupo: 'Cuello', cantidad: 1 }, { grupo: 'Hombros', cantidad: 2 }, { grupo: 'Pecho', cantidad: 1 }, { grupo: 'Columna', cantidad: 2 }, { grupo: 'Trapecios', cantidad: 1 }] },
      { nombre: 'Día 2 — Cadera y piernas', series: 2, reps: 1, descanso: 20, bloques: [{ grupo: 'Cadera', cantidad: 3 }, { grupo: 'Isquiotibiales', cantidad: 2 }, { grupo: 'Cuádriceps', cantidad: 1 }, { grupo: 'Glúteos', cantidad: 1 }] },
      { nombre: 'Día 3 — Piernas, tobillos y espalda', series: 2, reps: 1, descanso: 20, bloques: [{ grupo: 'Gemelos', cantidad: 2 }, { grupo: 'Tobillos', cantidad: 2 }, { grupo: 'Espalda', cantidad: 2 }, { grupo: 'Antebrazos', cantidad: 1 }] }
    ]},
    'libre': { nombre: 'Libre (armado a mano)', icono: 'edit',
      resumen: 'Empieza una rutina en blanco y armala vos mismo, día por día y ejercicio por ejercicio — sin generación automática.',
      dias: []
    }
  };

  function elegirEjercicios(pool, grupo, cantidad, preferirCompuesto) {
    let candidatos = pool.filter(e => e.grupoMuscular === grupo);
    if (preferirCompuesto) {
      const compuestos = candidatos.filter(e => e.tipo === 'Compuesto');
      if (compuestos.length >= cantidad) candidatos = compuestos;
    }
    // Priorizamos los que tienen GIF real (sin dejar afuera al resto si no alcanzan),
    // para que las rutinas estándar muestren la técnica en video siempre que sea posible.
    return ordenarPriorizandoGif(candidatos).slice(0, cantidad);
  }

  function ordenarPriorizandoGif(lista) {
    return lista.slice().sort((a, b) => {
      const gifA = a.gifs && a.gifs.length ? 1 : 0;
      const gifB = b.gifs && b.gifs.length ? 1 : 0;
      if (gifA !== gifB) return gifB - gifA;
      return a.nombre.localeCompare(b.nombre, 'es');
    });
  }

  function generarRutinaDesdeObjetivo(objetivoKey, nivel) {
    const programa = PROGRAMAS_OBJETIVO[objetivoKey];
    const topeNivel = NIVEL_ORDEN[nivel] || 3;
    const dentroDelNivel = e => (NIVEL_ORDEN[e.dificultad] || 1) <= topeNivel;
    const pool = EXERCISE_DATABASE.filter(e => dentroDelNivel(e) && e.objetivos && e.objetivos.includes(objetivoKey));
    // Pool amplio para bloques "cardioAmplio": ejercicios de cardio, o de pérdida de grasa
    // hechos con el propio peso corporal (sin necesitar máquinas específicas).
    const poolCardioAmplio = EXERCISE_DATABASE.filter(e => dentroDelNivel(e) && e.objetivos &&
      (e.objetivos.includes('cardio') || (e.objetivos.includes('perdida-grasa') && e.equipamiento === 'Peso corporal')));
    const usados = new Set();
    const dias = programa.dias.map(diaDef => {
      const ejercicios = [];
      diaDef.bloques.forEach(bloque => {
        const elegidos = bloque.cardioAmplio
          ? ordenarPriorizandoGif(poolCardioAmplio.filter(e => !usados.has(e.id))).slice(0, bloque.cantidad)
          : elegirEjercicios(pool.filter(e => !usados.has(e.id)), bloque.grupo, bloque.cantidad, bloque.preferirCompuesto);
        elegidos.forEach(ej => {
          usados.add(ej.id);
          ejercicios.push({
            id: `ej-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            ejercicioId: ej.id,
            seriesObjetivo: Array.from({ length: diaDef.series }, () => ({ reps: diaDef.reps, peso: 0 })),
            descansoSeg: diaDef.descanso
          });
        });
      });
      return { id: `dia-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, nombre: diaDef.nombre, ejercicios };
    });

    // Calentamiento sugerido: 1 ejercicio de movilidad por cada zona clave del objetivo.
    const GRUPOS_CALENTAMIENTO = {
      'fuerza': ['Hombros', 'Cadera', 'Columna'],
      'ganancia-muscular': ['Hombros', 'Cadera', 'Columna'],
      'perdida-grasa': ['Cadera', 'Tobillos', 'Columna'],
      'cardio': ['Tobillos', 'Cadera', 'Cuello']
    };
    let calentamiento = [];
    if (GRUPOS_CALENTAMIENTO[objetivoKey]) {
      const poolMovilidad = EXERCISE_DATABASE.filter(e => e.objetivos && e.objetivos.includes('movilidad'));
      calentamiento = GRUPOS_CALENTAMIENTO[objetivoKey]
        .map(grupo => ordenarPriorizandoGif(poolMovilidad.filter(e => e.grupoMuscular === grupo))[0])
        .filter(Boolean)
        .map(e => e.id);
    }

    return { nombre: `${programa.nombre} — nivel ${nivel.toLowerCase()}`, objetivo: objetivoKey, nivel, dias, calentamiento };
  }

  // ---------------------------------------------------------------------
  // Selector de ejercicios reutilizable
  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------
  // Filtros de ejercicios compartidos (selector para agregar a rutina)
  // ---------------------------------------------------------------------
  function filtrarEjercicios(lista, filtros) {
    let resultado = lista;
    const texto = (filtros.texto || '').trim().toLowerCase();
    if (texto) resultado = resultado.filter(e => e.nombre.toLowerCase().includes(texto));
    if (filtros.grupo) resultado = resultado.filter(e => e.grupoMuscular === filtros.grupo);
    if (filtros.equipo) resultado = resultado.filter(e => e.equipamiento === filtros.equipo);
    if (filtros.dificultad) resultado = resultado.filter(e => e.dificultad === filtros.dificultad);
    if (filtros.tipo) resultado = resultado.filter(e => e.tipo === filtros.tipo);
    if (filtros.soloConGif) resultado = resultado.filter(e => e.gifs && e.gifs.length);
    return [...resultado].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  }

  function panelFiltrosHTML(idPrefijo, filtros) {
    const opcionesGrupo = MUSCLE_GROUPS.map(g => `<option value="${g}" ${filtros.grupo === g ? 'selected' : ''}>${g}</option>`).join('');
    const opcionesEquipo = EQUIPMENT_LIST.map(eq => `<option value="${eq}" ${filtros.equipo === eq ? 'selected' : ''}>${eq}</option>`).join('');
    return `
      <div class="panel-filtros" id="${idPrefijo}-filtros">
        <div class="buscador-wrap">
          ${icon('search')}
          <input type="text" id="${idPrefijo}-buscador-input" placeholder="Buscar ejercicio..." value="${escapeHtml(filtros.texto || '')}" autocomplete="off">
        </div>
        <div class="filtros-fila">
          <select data-filtro="grupo" id="${idPrefijo}-filtro-grupo"><option value="">Todos los grupos</option>${opcionesGrupo}</select>
          <select data-filtro="equipo" id="${idPrefijo}-filtro-equipo"><option value="">Todo el equipamiento</option>${opcionesEquipo}</select>
          <select data-filtro="dificultad" id="${idPrefijo}-filtro-dificultad">
            <option value="">Toda dificultad</option>
            <option value="Principiante" ${filtros.dificultad === 'Principiante' ? 'selected' : ''}>Principiante</option>
            <option value="Intermedio" ${filtros.dificultad === 'Intermedio' ? 'selected' : ''}>Intermedio</option>
            <option value="Avanzado" ${filtros.dificultad === 'Avanzado' ? 'selected' : ''}>Avanzado</option>
          </select>
          <select data-filtro="tipo" id="${idPrefijo}-filtro-tipo">
            <option value="">Todo tipo</option>
            <option value="Compuesto" ${filtros.tipo === 'Compuesto' ? 'selected' : ''}>Compuesto</option>
            <option value="Aislado" ${filtros.tipo === 'Aislado' ? 'selected' : ''}>Aislado</option>
          </select>
        </div>
        <div class="filtros-chips" id="${idPrefijo}-chips"></div>
      </div>`;
  }

  function chipsFiltrosHTML(filtros) {
    return `
      <button class="chip ${filtros.soloConGif ? 'chip-activo' : ''}" data-solo-gif="1">${icon('info')} Con GIF</button>
      ${(filtros.grupo || filtros.equipo || filtros.dificultad || filtros.tipo || filtros.soloConGif) ? `<button class="chip chip-limpiar" data-limpiar-filtros="1">${icon('close')} Limpiar filtros</button>` : ''}`;
  }

  function activarPanelFiltros(idPrefijo, filtrosObj, onChange) {
    const buscador = $(`#${idPrefijo}-buscador-input`);
    if (buscador) buscador.addEventListener('input', debounce((e) => { filtrosObj.texto = e.target.value; onChange(); }, 200));
    ['grupo', 'equipo', 'dificultad', 'tipo'].forEach(campo => {
      const sel = $(`#${idPrefijo}-filtro-${campo}`);
      if (sel) sel.addEventListener('change', (e) => { filtrosObj[campo] = e.target.value; onChange(); });
    });

    const chipsCont = $(`#${idPrefijo}-chips`);
    function pintarChips() {
      if (!chipsCont) return;
      chipsCont.innerHTML = chipsFiltrosHTML(filtrosObj);
      $('[data-solo-gif]', chipsCont)?.addEventListener('click', () => { filtrosObj.soloConGif = !filtrosObj.soloConGif; pintarChips(); onChange(); });
      $('[data-limpiar-filtros]', chipsCont)?.addEventListener('click', () => {
        Object.assign(filtrosObj, { grupo: '', equipo: '', dificultad: '', tipo: '', soloConGif: false });
        ['grupo', 'equipo', 'dificultad', 'tipo'].forEach(campo => { const sel = $(`#${idPrefijo}-filtro-${campo}`); if (sel) sel.value = ''; });
        pintarChips();
        onChange();
      });
    }
    pintarChips();
  }

  let filtrosSelector = {};
  function abrirSelectorEjercicios(onSeleccionar) {
    filtrosSelector = { texto: '', grupo: '', equipo: '', dificultad: '', tipo: '', soloConGif: false };
    abrirModal(`
      <div class="modal-header"><h3>${icon('search')} Agregar ejercicio</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        ${panelFiltrosHTML('selector', filtrosSelector)}
        <div id="selector-resultados" class="grid-ejercicios grid-ejercicios-modal"></div>
      </div>`, { ancho: 'lg', id: 'modal-selector-ejercicio' });

    function pintar() {
      const cont = $('#selector-resultados');
      const filtrados = filtrarEjercicios(EXERCISE_DATABASE, filtrosSelector).slice(0, 60);
      cont.innerHTML = filtrados.map(e => `
        <div class="tarjeta-ejercicio" data-id="${e.id}" role="button" tabindex="0">
          <div class="tarjeta-ejercicio-imagen">
            ${imagenEjercicioHTML(e)}
            ${e.gifs && e.gifs.length ? `<span class="badge-gif" title="Tiene GIF real">GIF</span>` : ''}
            <button class="btn-icono tarjeta-ejercicio-btn-info" data-ver-detalle="${e.id}" title="Ver detalle" aria-label="Ver detalle">${icon('info')}</button>
          </div>
          <div class="tarjeta-ejercicio-contenido"><h4>${escapeHtml(e.nombre)}</h4><p class="texto-suave texto-pequeno">${escapeHtml(e.grupoMuscular)} · ${escapeHtml(e.equipamiento)}</p></div>
        </div>`).join('') || `<p class="texto-suave estado-vacio">No se encontraron ejercicios con esos filtros.</p>`;
      $$('.tarjeta-ejercicio', cont).forEach(b => b.addEventListener('click', () => { cerrarModal(); onSeleccionar(getExerciseById(b.dataset.id)); }));
      $$('[data-ver-detalle]', cont).forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); abrirDetalleEjercicio(b.dataset.verDetalle); }));
    }

    pintar();
    activarPanelFiltros('selector', filtrosSelector, pintar);
    $('#selector-buscador-input')?.focus();
  }

  // ---------------------------------------------------------------------
  // Widget flotante del cronómetro de descanso
  // ---------------------------------------------------------------------
  const PRESETS_DESCANSO = [30, 45, 60, 90, 120, 180, 300];

  function abrirWidgetTimer(segundosIniciales = 90) {
    const usuario = FirebaseService.getUsuarioActual();
    if (!usuario || usuario.rol !== 'alumno') return; // el timer de descanso es solo para quien entrena
    const widget = $('#rest-timer-widget');
    if (!widget) return;
    widget.classList.add('timer-widget-visible');
    RestTimer.establecer(segundosIniciales);
    RestTimer.iniciar();
  }

  function cerrarWidgetTimer() {
    RestTimer.detener();
    $('#rest-timer-widget')?.classList.remove('timer-widget-visible');
  }

  function initWidgetTimer() {
    const widget = $('#rest-timer-widget');
    if (!widget) return;
    widget.innerHTML = `
      <div class="timer-widget-inner">
        <div class="timer-widget-header">
          <span>${icon('timer')} Descanso</span>
          <button class="btn-icono" id="btn-cerrar-timer">${icon('close')}</button>
        </div>
        <div class="timer-progreso"><div class="timer-progreso-barra"></div></div>
        <div class="timer-display">01:30</div>
        <div class="timer-presets">${PRESETS_DESCANSO.map(s => `<button data-preset="${s}">${s}s</button>`).join('')}</div>
        <div class="timer-controles">
          <button class="btn-icono" id="btn-timer-menos">${icon('minus')}</button>
          <button class="btn btn-primario btn-sm" id="btn-timer-play">${icon('play')}</button>
          <button class="btn-icono" id="btn-timer-reiniciar">${icon('repeat')}</button>
          <button class="btn-icono" id="btn-timer-mas">${icon('plus')}</button>
        </div>
      </div>`;

    $('#btn-cerrar-timer').addEventListener('click', cerrarWidgetTimer);
    $$('.timer-presets button', widget).forEach(btn => btn.addEventListener('click', () => {
      RestTimer.establecer(Number(btn.dataset.preset));
      RestTimer.iniciar();
      widget.classList.add('timer-widget-visible');
      $('#btn-timer-play').innerHTML = icon('pause');
    }));
    $('#btn-timer-menos').addEventListener('click', () => RestTimer.agregarSegundos(-15));
    $('#btn-timer-mas').addEventListener('click', () => RestTimer.agregarSegundos(15));
    $('#btn-timer-reiniciar').addEventListener('click', () => { RestTimer.reiniciar(); RestTimer.iniciar(); $('#btn-timer-play').innerHTML = icon('pause'); });
    $('#btn-timer-play').addEventListener('click', (e) => {
      if (RestTimer.estaCorriendo()) { RestTimer.pausar(); e.currentTarget.innerHTML = icon('play'); }
      else { RestTimer.iniciar(); e.currentTarget.innerHTML = icon('pause'); }
    });

    RestTimer.inicializar({
      tick: (restantes, iniciales) => {
        const mm = String(Math.floor(Math.max(0, restantes) / 60)).padStart(2, '0');
        const ss = String(Math.max(0, restantes) % 60).padStart(2, '0');
        const display = $('.timer-display', widget);
        if (display) display.textContent = `${mm}:${ss}`;
        const barra = $('.timer-progreso-barra', widget);
        if (barra) barra.style.width = `${Math.max(0, (restantes / iniciales) * 100)}%`;
      },
      fin: () => {
        $('#btn-timer-play').innerHTML = icon('play');
        toast('¡Descanso terminado!', 'logro');
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      }
    });
  }

  // ---------------------------------------------------------------------
  // Navegación por rol
  // ---------------------------------------------------------------------
  const RENDERERS = {};
  function cambiarVista(vista) {
    if (!RENDERERS[vista]) return;
    if (vista !== 'sesion') cerrarWidgetTimer();
    state.vistaActual = vista;
    $$('.view').forEach(v => v.classList.remove('view-active'));
    $(`#view-${vista}`)?.classList.add('view-active');
    $$('.nav-item').forEach(a => a.classList.toggle('nav-item-active', a.dataset.view === vista));
    $('#sidebar').classList.remove('sidebar-abierto');
    RENDERERS[vista]();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function construirSidebar(usuario) {
    const nav = $('#sidebar-nav');
    if (usuario.rol === 'superadmin') {
      nav.innerHTML = `
        <a href="#" class="nav-item" data-view="superadmin">${icon('routine')}<span>Entrenadores</span></a>`;
    } else if (usuario.rol === 'entrenador') {
      nav.innerHTML = `
        <a href="#" class="nav-item" data-view="alumnos">${icon('routine')}<span>Mis alumnos</span></a>
        <a href="#" class="nav-item" data-view="recepcion">${icon('search')}<span>Recepción</span></a>
        <a href="#" class="nav-item" data-view="finanzas">${icon('stats')}<span>Finanzas</span></a>`;
    } else {
      nav.innerHTML = `
        <a href="#" class="nav-item" data-view="inicio">${icon('trophy')}<span>Inicio</span></a>
        <a href="#" class="nav-item" data-view="mi-rutina">${icon('routine')}<span>Mi rutina</span></a>
        <a href="#" class="nav-item" data-view="mi-progreso">${icon('stats')}<span>Mi progreso</span></a>
        <a href="#" class="nav-item" data-view="calendario">${icon('calendar')}<span>Calendario</span></a>
        <a href="#" class="nav-item" data-view="calculadoras">${icon('calculator')}<span>Calculadoras</span></a>`;
    }
    $$('.nav-item', nav).forEach(a => a.addEventListener('click', (e) => { e.preventDefault(); cambiarVista(a.dataset.view); }));
    const etiquetaRol = { superadmin: 'Administrador', entrenador: 'Entrenador', alumno: 'Alumno' }[usuario.rol] || usuario.rol;
    $('#sidebar-usuario').textContent = `${usuario.nombre} · ${etiquetaRol}`;
  }

  // =======================================================================
  // VISTA DE SUPERADMIN
  // =======================================================================
  async function renderSuperadmin() {
    const cont = $('#view-superadmin');
    cont.innerHTML = `
      <div class="panel-header-flex">
        <h2>Entrenadores</h2>
        <button class="btn btn-primario btn-sm" id="btn-nuevo-codigo">${icon('plus')} Generar código</button>
      </div>
      <div id="lista-entrenadores"><p class="texto-suave">Cargando...</p></div>
      <div class="panel-header" style="margin-top:2rem"><h3>${icon('stats')} Pagos por mes</h3></div>
      <div id="resumen-pagos-mensual"><p class="texto-suave">Cargando...</p></div>
      <div class="panel-header" style="margin-top:2rem"><h3>Códigos de invitación</h3></div>
      <div id="lista-codigos"><p class="texto-suave">Cargando...</p></div>
    `;

    $('#btn-nuevo-codigo').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      if (btn.disabled) return;
      const nombreNegocio = prompt('¿Nombre del entrenador o del negocio? (solo para identificarlo en tu lista)');
      if (nombreNegocio === null) return; // canceló el prompt, no generamos nada
      btn.disabled = true;
      try {
        const codigo = await FirebaseService.crearCodigoInvitacion(nombreNegocio.trim());
        toast(`Código generado: ${codigo}`, 'exito', 6000);
      } finally {
        renderSuperadmin();
      }
    });

    const [entrenadores, codigos, pagosEntrenadores] = await Promise.all([
      FirebaseService.listarEntrenadores(),
      FirebaseService.listarCodigosInvitacion(),
      FirebaseService.getPagosDeEntrenadores().catch(() => [])
    ]);

    const listaEnt = $('#lista-entrenadores');
    if (!entrenadores.length) {
      listaEnt.innerHTML = `<div class="estado-vacio"><p>${icon('routine')} Todavía no diste de alta a ningún entrenador.</p></div>`;
    } else {
      listaEnt.innerHTML = entrenadores.map(en => `
        <div class="tarjeta-objetivo" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:.6rem">
          <div>
            <h3 style="margin-bottom:.2rem">${escapeHtml(en.nombreNegocio || en.nombre)}</h3>
            <p class="texto-suave texto-pequeno" style="margin:0 0 .2rem">${escapeHtml(en.email)}</p>
            <p class="texto-suave texto-pequeno" style="margin:0;font-family:var(--fuente-mono)">${escapeHtml(en.uid)}</p>
          </div>
          <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap">
            <span class="badge ${en.estadoCuota === 'vencido' ? 'badge-peligro' : 'badge-exito'}">${en.estadoCuota === 'vencido' ? 'Cuota vencida' : 'Cuota al día'}</span>
            <span class="badge ${en.estadoPago === 'suspendido' ? 'badge-peligro' : 'badge-exito'}">${en.estadoPago === 'suspendido' ? 'Suspendido' : 'Activo'}</span>
            <button class="btn btn-fantasma btn-sm" data-registrar-pago="${en.uid}">${icon('plus')} Registrar pago</button>
            <button class="btn btn-sm ${en.estadoPago === 'suspendido' ? 'btn-primario' : 'btn-peligro'}" data-uid="${en.uid}" data-accion="${en.estadoPago === 'suspendido' ? 'activar' : 'suspender'}">
              ${en.estadoPago === 'suspendido' ? 'Reactivar' : 'Suspender'}
            </button>
          </div>
        </div>`).join('');

      $$('[data-accion]', listaEnt).forEach(b => b.addEventListener('click', async () => {
        const nuevoEstado = b.dataset.accion === 'activar' ? 'activo' : 'suspendido';
        await FirebaseService.cambiarEstadoPagoEntrenador(b.dataset.uid, nuevoEstado);
        toast(nuevoEstado === 'suspendido' ? 'Entrenador suspendido.' : 'Entrenador reactivado.', 'exito');
        renderSuperadmin();
      }));
      $$('[data-registrar-pago]', listaEnt).forEach(b => b.addEventListener('click', () => abrirModalRegistrarPago(b.dataset.registrarPago, 'entrenador', null, renderSuperadmin)));
    }

    const nombrePorUidEntrenador = Object.fromEntries(entrenadores.map(en => [en.uid, en.nombreNegocio || en.nombre]));
    renderPanelPagos('#resumen-pagos-mensual', pagosEntrenadores, nombrePorUidEntrenador, true);

    const listaCod = $('#lista-codigos');
    if (!codigos.length) {
      listaCod.innerHTML = `<p class="texto-suave">Todavía no generaste ningún código.</p>`;
    } else {
      listaCod.innerHTML = `<div class="tabla-records-wrap"><table class="tabla-records"><thead><tr><th>Código</th><th>Para</th><th>Estado</th><th></th></tr></thead><tbody>
        ${codigos.map(c => `<tr><td>${escapeHtml(c.codigo)}</td><td>${escapeHtml(c.nombreNegocio || '—')}</td><td>${c.usado ? '<span class="badge">Usado</span>' : '<span class="badge badge-exito">Disponible</span>'}</td>
          <td><button class="btn-icono btn-icono-peligro" data-borrar-codigo="${c.codigo}" title="Borrar código">${icon('close')}</button></td></tr>`).join('')}
      </tbody></table></div>`;
      $$('[data-borrar-codigo]', listaCod).forEach(b => b.addEventListener('click', async () => {
        if (!confirm(`¿Borrar el código ${b.dataset.borrarCodigo}? Esta acción no se puede deshacer.`)) return;
        await FirebaseService.eliminarCodigoInvitacion(b.dataset.borrarCodigo);
        toast('Código borrado.', 'exito');
        renderSuperadmin();
      }));
    }
  }
  RENDERERS['superadmin'] = renderSuperadmin;

  function abrirModalRegistrarPago(uidPagador, rolPagador, entrenadorId, alRefrescar) {
    abrirModal(`
      <div class="modal-header"><h3>${icon('plus')} Registrar pago</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        <label class="campo"><span>Monto</span><input type="number" id="input-monto-pago" min="0" step="0.01" value="0" autofocus></label>
      </div>
      <div class="modal-footer">
        <button class="btn btn-fantasma" data-cerrar-modal>Cancelar</button>
        <button class="btn btn-primario" id="btn-confirmar-pago">${icon('check')} Registrar</button>
      </div>`, { id: 'modal-registrar-pago' });
    $('#btn-confirmar-pago').addEventListener('click', async () => {
      const monto = Number($('#input-monto-pago').value) || 0;
      try {
        await FirebaseService.registrarPago(uidPagador, rolPagador, entrenadorId, monto);
        cerrarModal();
        toast('Pago registrado.', 'exito');
        if (alRefrescar) alRefrescar();
      } catch (err) {
        console.error('Error registrando pago:', err);
        toast('No se pudo registrar el pago. Probá de nuevo.', 'error');
      }
    });
  }

  // =======================================================================
  // VISTAS DE ENTRENADOR
  // =======================================================================
  async function renderAlumnos() {
    const cont = $('#view-alumnos');
    const usuario = FirebaseService.getUsuarioActual();
    cont.innerHTML = `
      <div class="panel-header"><h2>Mis alumnos</h2></div>
      <div class="tarjeta-objetivo" style="margin-bottom:1.2rem">
        <p class="texto-pequeno texto-suave" style="margin:0 0 .3rem">Tu código para que se registren tus alumnos</p>
        <div style="display:flex;align-items:center;gap:.6rem;flex-wrap:wrap">
          <code id="codigo-propio" style="font-family:var(--fuente-mono);font-size:1.1rem;letter-spacing:.05em;background:var(--color-fondo-elevado);padding:.4rem .7rem;border-radius:8px">${usuario.uid}</code>
          <button class="btn btn-fantasma btn-sm" id="btn-copiar-codigo">Copiar</button>
        </div>
      </div>
      <div class="layout-dos-columnas">
        <div id="lista-alumnos" class="grid-objetivos"><p class="texto-suave">Cargando...</p></div>
        <div class="panel">
          <h3>${icon('stats')} Pagos de tus alumnos</h3>
          <div id="panel-pagos-entrenador" style="margin-top:.9rem"><p class="texto-suave">Cargando...</p></div>
        </div>
      </div>`;

    $('#btn-copiar-codigo').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(usuario.uid);
        toast('Código copiado', 'exito');
      } catch {
        toast('No se pudo copiar. Copialo a mano.', 'info');
      }
    });

    const [alumnosRes, pagosRes] = await Promise.allSettled([
      FirebaseService.listarAlumnos(),
      FirebaseService.getPagosDeAlumnos()
    ]);

    if (alumnosRes.status === 'rejected') {
      console.error('Error cargando alumnos:', alumnosRes.reason);
      $('#lista-alumnos').innerHTML = `<p class="texto-suave estado-vacio">No se pudo cargar la lista de alumnos (error de permisos o de conexión). Refrescá la página e intentá de nuevo.</p>`;
      return;
    }
    const alumnos = alumnosRes.value;
    const pagos = pagosRes.status === 'fulfilled' ? pagosRes.value : [];
    if (pagosRes.status === 'rejected') console.error('Error cargando pagos:', pagosRes.reason);
    const nombrePorUid = Object.fromEntries(alumnos.map(a => [a.uid, a.nombre]));

    renderPanelPagos('#panel-pagos-entrenador', pagos, nombrePorUid, true);

    const listaCont = $('#lista-alumnos');
    if (!alumnos.length) {
      listaCont.innerHTML = `<div class="estado-vacio"><p>${icon('routine')} Todavía no tenés alumnos registrados.</p><p class="texto-suave">Pasales el código de arriba para que se registren.</p></div>`;
      return;
    }
    listaCont.innerHTML = alumnos.map(a => `
      <div class="tarjeta-objetivo" data-uid="${a.uid}" role="button" tabindex="0" style="text-align:left;cursor:pointer">
        <div class="tarjeta-objetivo-header">
          <div class="tarjeta-objetivo-icono">${icon('routine')}</div>
          <div><h3>${escapeHtml(a.nombre)}</h3><span class="badge">${a.objetivo ? PROGRAMAS_OBJETIVO[a.objetivo]?.nombre || a.objetivo : 'Sin objetivo asignado'}</span></div>
        </div>
        <p class="texto-suave texto-pequeno">${escapeHtml(a.email)}</p>
        <div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;margin-top:.6rem">
          <span class="badge ${a.estadoCuota === 'vencido' ? 'badge-peligro' : 'badge-exito'}">${a.estadoCuota === 'vencido' ? 'Cuota vencida' : 'Cuota al día'}</span>
          <span class="badge ${a.estadoPago === 'suspendido' ? 'badge-peligro' : 'badge-exito'}">${a.estadoPago === 'suspendido' ? 'Suspendido' : 'Activo'}</span>
          <button class="btn btn-fantasma btn-sm" data-registrar-pago-alumno="${a.uid}">${icon('plus')} Registrar pago</button>
          <button class="btn btn-sm ${a.estadoPago === 'suspendido' ? 'btn-primario' : 'btn-peligro'}" data-suspender-alumno="${a.uid}" data-accion="${a.estadoPago === 'suspendido' ? 'activar' : 'suspender'}">
            ${a.estadoPago === 'suspendido' ? 'Reactivar' : 'Suspender'}
          </button>
          <button class="btn-icono btn-icono-peligro" data-eliminar-alumno="${a.uid}" data-nombre-alumno="${escapeHtml(a.nombre)}" title="Eliminar alumno permanentemente" aria-label="Eliminar alumno">${icon('trash')}</button>
        </div>
      </div>`).join('');
    $$('[data-eliminar-alumno]', listaCont).forEach(b => b.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!confirm(`¿Eliminar a ${b.dataset.nombreAlumno} PERMANENTEMENTE? Pierde su ficha y su rutina. Esta acción no se puede deshacer. Si querés poder reactivarlo más adelante, usá "Suspender" en vez de esto.`)) return;
      await FirebaseService.eliminarAlumno(b.dataset.eliminarAlumno);
      toast('Alumno eliminado.', 'exito');
      renderAlumnos();
    }));
    $$('[data-suspender-alumno]', listaCont).forEach(b => b.addEventListener('click', async (e) => {
      e.stopPropagation();
      const nuevoEstado = b.dataset.accion === 'activar' ? 'activo' : 'suspendido';
      await FirebaseService.cambiarEstadoAlumno(b.dataset.suspenderAlumno, nuevoEstado);
      toast(nuevoEstado === 'suspendido' ? 'Alumno suspendido.' : 'Alumno reactivado.', 'exito');
      renderAlumnos();
    }));
    $$('[data-registrar-pago-alumno]', listaCont).forEach(b => b.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirModalRegistrarPago(b.dataset.registrarPagoAlumno, 'alumno', usuario.uid, renderAlumnos);
    }));
    $$('[data-uid]', listaCont).forEach(b => b.addEventListener('click', () => {
      state.alumnoSeleccionadoUid = b.dataset.uid;
      cambiarVista('ficha-alumno');
    }));
  }
  RENDERERS['alumnos'] = renderAlumnos;

  // ---------------------------------------------------------------------
  // Vista: Recepción (gimnasio) — socios sin login, identificados por DNI.
  // Pensado para el modelo "control de acceso en la puerta": buscar por
  // DNI, dar de alta si no existe, marcar asistencia, ver estado de pago.
  // ---------------------------------------------------------------------
  const MODALIDADES_GYM = { musculacion: 'Musculación', pilates: 'Pilates', ambas: 'Musculación + Pilates' };

  // Calcula si un socio está vencido: si pasaron más de 31 días desde su
  // último pago (o desde el alta, si nunca pagó). No depende de que nadie
  // lo marque a mano, se recalcula solo cada vez que se muestra. El "día
  // de pago" cargado en la ficha es solo informativo (para mostrar "paga
  // el día X"), no se usa para este cálculo — así evitamos casos raros de
  // calendario (ej. alguien que pagó ayer y su día de pago es hoy).
  function socioEstaVencido(miembro) {
    const referencia = new Date(miembro.ultimoPagoFecha || miembro.fechaAlta || Date.now());
    const diasTranscurridos = (Date.now() - referencia.getTime()) / (24 * 60 * 60 * 1000);
    return diasTranscurridos > 31;
  }

  async function renderRecepcion() {
    const cont = $('#view-recepcion');
    cont.innerHTML = `
      <div class="panel-header-flex"><h2>${icon('search')} Recepción</h2>
        <div style="display:flex;gap:.5rem">
          <button class="btn btn-primario btn-sm" id="btn-nuevo-socio-directo">${icon('plus')} Nuevo socio</button>
          <button class="btn btn-fantasma btn-sm" id="btn-modo-kiosco">${icon('play')} Modo autoservicio</button>
        </div>
      </div>
      <div class="panel" style="margin-bottom:1.2rem">
        <div class="campo-fila">
          <label class="campo" style="flex:1"><span>Buscar socio por DNI</span><input type="text" id="input-buscar-dni" inputmode="numeric" placeholder="Ej: 30123456" autofocus></label>
          <button class="btn btn-primario" id="btn-buscar-dni" style="align-self:flex-end">${icon('search')} Buscar</button>
        </div>
      </div>
      <div id="resultado-busqueda-dni"></div>
      <div class="panel-header" style="margin-top:2rem"><h3>Socios de hoy</h3></div>
      <div id="lista-asistencias-hoy"><p class="texto-suave">Cargando...</p></div>
      <div class="panel-header-flex" style="margin-top:2rem">
        <h3>Todos los socios</h3>
        <div style="display:flex;gap:.5rem">
          <button class="btn btn-fantasma btn-sm" id="btn-ver-todos-socios">${icon('routine')} Ver listado completo</button>
          <button class="btn btn-fantasma btn-sm" id="btn-borrar-todos-socios" style="color:#E05B5B">${icon('trash')} Borrar todos los socios</button>
        </div>
      </div>
      <div class="filtros-fila" id="filtros-listado-socios" style="margin-top:.8rem">
        <select id="filtro-estado-socios">
          <option value="todos">Todos los estados</option>
          <option value="al_dia">Solo al día</option>
          <option value="vencido">Solo vencidos</option>
        </select>
        <select id="filtro-modalidad-socios">
          <option value="todas">Todas las modalidades</option>
          <option value="musculacion">Musculación</option>
          <option value="pilates">Pilates</option>
          <option value="ambas">Musculación + Pilates</option>
        </select>
      </div>
      <div id="lista-todos-socios" style="margin-top:.8rem"></div>
    `;

    const inputDni = $('#input-buscar-dni');
    const resultadoCont = $('#resultado-busqueda-dni');

    async function buscar() {
      const dni = inputDni.value.trim();
      if (!dni) return;
      resultadoCont.innerHTML = `<p class="texto-suave">Buscando...</p>`;
      const miembro = await FirebaseService.buscarMiembroPorDni(dni);
      if (miembro) {
        await pintarMiembroEncontrado(miembro);
      } else {
        resultadoCont.innerHTML = `
          <div class="tarjeta-objetivo">
            <p class="texto-suave">${icon('warning')} No hay ningún socio registrado con el DNI <strong>${escapeHtml(dni)}</strong>.</p>
            <button class="btn btn-primario" id="btn-dar-alta-nuevo" style="margin-top:.8rem">${icon('plus')} Registrar socio nuevo</button>
          </div>`;
        $('#btn-dar-alta-nuevo').addEventListener('click', () => abrirModalNuevoSocio(dni, buscar));
      }
    }

    async function pintarMiembroEncontrado(miembro) {
      const yaAsistio = await FirebaseService.yaAsistioHoy(miembro.dni);
      const nombreCompleto = [miembro.nombre, miembro.apellido].filter(Boolean).join(' ');
      const nombresDias = { lun: 'Lun', mar: 'Mar', mie: 'Mié', jue: 'Jue', vie: 'Vie', sab: 'Sáb', dom: 'Dom' };
      resultadoCont.innerHTML = `
        <div class="tarjeta-objetivo">
          <div class="tarjeta-objetivo-header">
            <div class="tarjeta-objetivo-icono">${icon('routine')}</div>
            <div><h3>${escapeHtml(nombreCompleto)}</h3><span class="badge">${MODALIDADES_GYM[miembro.modalidad] || miembro.modalidad}</span></div>
          </div>
          <p class="texto-suave texto-pequeno">DNI: ${escapeHtml(miembro.dni)} · Socio desde ${formatFecha(miembro.fechaAlta)}</p>
          ${miembro.dias && miembro.dias.length ? `<p class="texto-suave texto-pequeno">Entrena: ${miembro.dias.map(d => nombresDias[d] || d).join(', ')}</p>` : ''}
          ${miembro.diaPago ? `<p class="texto-suave texto-pequeno">Paga el día ${miembro.diaPago} de cada mes${miembro.ultimoPagoFecha ? ` · último pago ${formatFecha(miembro.ultimoPagoFecha)}` : ''}</p>` : ''}
          ${miembro.descripcion ? `<p class="texto-suave texto-pequeno" style="margin-top:.4rem;font-style:italic">"${escapeHtml(miembro.descripcion)}"</p>` : ''}
          <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-top:.8rem">
            <span class="badge ${socioEstaVencido(miembro) ? 'badge-peligro' : 'badge-exito'}">${socioEstaVencido(miembro) ? 'Cuota vencida' : 'Cuota al día'}</span>
            <button class="btn btn-fantasma btn-sm" id="btn-registrar-pago-socio">${icon('plus')} Registrar pago</button>
            <button class="btn btn-fantasma btn-sm" id="btn-editar-socio">${icon('edit')} Editar</button>
            <button class="btn-icono btn-icono-peligro" id="btn-borrar-socio" title="Eliminar socio">${icon('trash')}</button>
          </div>
          <button class="btn ${yaAsistio ? 'btn-fantasma' : 'btn-primario'} btn-full" id="btn-marcar-asistencia" style="margin-top:1rem" ${yaAsistio ? 'disabled' : ''}>
            ${yaAsistio ? `${icon('check-circle')} Ya registró su entrada hoy` : `${icon('check')} Marcar entrada de hoy`}
          </button>
        </div>`;

      $('#btn-marcar-asistencia').addEventListener('click', async () => {
        await FirebaseService.marcarAsistencia(miembro.dni, nombreCompleto);
        toast(`Entrada registrada: ${nombreCompleto}`, 'exito');
        pintarMiembroEncontrado(miembro);
        cargarAsistenciasDeHoy();
      });
      $('#btn-registrar-pago-socio').addEventListener('click', () => {
        abrirModalRegistrarPago(miembro.dni, 'socioGym', FirebaseService.getUsuarioActual().uid, async () => {
          await FirebaseService.actualizarMiembro(miembro.dni, { estadoCuota: 'al_dia', ultimoPagoFecha: new Date().toISOString() });
          const actualizado = await FirebaseService.buscarMiembroPorDni(miembro.dni);
          pintarMiembroEncontrado(actualizado);
        });
      });
      $('#btn-editar-socio').addEventListener('click', () => abrirModalNuevoSocio(miembro.dni, () => buscar(), miembro));
      $('#btn-borrar-socio').addEventListener('click', async () => {
        if (!confirm(`¿Eliminar a ${miembro.nombre} (DNI ${miembro.dni})? Esta acción no se puede deshacer.`)) return;
        await FirebaseService.eliminarMiembro(miembro.dni);
        toast('Socio eliminado.', 'exito');
        resultadoCont.innerHTML = '';
        inputDni.value = '';
        cargarListaSocios();
      });
    }

    $('#btn-nuevo-socio-directo').addEventListener('click', () => abrirModalNuevoSocio(inputDni.value.trim(), () => { if (inputDni.value.trim()) buscar(); else cargarListaSocios(); }));
    $('#btn-modo-kiosco').addEventListener('click', () => cambiarVista('kiosco'));
    $('#btn-buscar-dni').addEventListener('click', buscar);
    inputDni.addEventListener('keydown', (e) => { if (e.key === 'Enter') buscar(); });

    async function cargarAsistenciasDeHoy() {
      const asistencias = await FirebaseService.getAsistenciasDeHoy();
      const cont2 = $('#lista-asistencias-hoy');
      if (!cont2) return;
      cont2.innerHTML = asistencias.length ? asistencias
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        .map(a => `<div class="fila-historial" style="cursor:default"><div class="fila-historial-info"><strong>${escapeHtml(a.nombre)}</strong><span class="texto-suave">DNI ${escapeHtml(a.dni)}</span></div><span class="texto-suave texto-pequeno">${new Date(a.fecha).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}</span></div>`).join('')
        : `<p class="texto-suave estado-vacio">Todavía no entró nadie hoy.</p>`;
    }

    let filtroEstadoSocios = 'todos';
    let filtroModalidadSocios = 'todas';
    let ultimosSociosCargados = [];

    function pintarFilasSocios() {
      const cont3 = $('#lista-todos-socios');
      const filtrados = ultimosSociosCargados.filter(s => {
        if (filtroEstadoSocios === 'al_dia' && socioEstaVencido(s)) return false;
        if (filtroEstadoSocios === 'vencido' && !socioEstaVencido(s)) return false;
        if (filtroModalidadSocios !== 'todas' && s.modalidad !== filtroModalidadSocios) return false;
        return true;
      });
      cont3.innerHTML = filtrados.length ? filtrados.map(s => `
        <div class="fila-historial" data-dni-fila="${s.dni}" role="button" tabindex="0" style="cursor:pointer">
          <div class="fila-historial-info"><strong>${escapeHtml([s.nombre, s.apellido].filter(Boolean).join(' '))}</strong><span class="texto-suave">DNI ${escapeHtml(s.dni)} · ${MODALIDADES_GYM[s.modalidad] || s.modalidad}</span></div>
          <span class="badge ${socioEstaVencido(s) ? 'badge-peligro' : 'badge-exito'}">${socioEstaVencido(s) ? 'Vencido' : 'Al día'}</span>
        </div>`).join('') : `<p class="texto-suave estado-vacio">Ningún socio coincide con el filtro.</p>`;
      $$('[data-dni-fila]', cont3).forEach(f => f.addEventListener('click', () => {
        inputDni.value = f.dataset.dniFila;
        buscar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }));
    }

    async function cargarListaSocios() {
      const cont3 = $('#lista-todos-socios');
      if (!cont3 || cont3.dataset.oculto !== 'false') return;
      ultimosSociosCargados = await FirebaseService.listarMiembros();
      pintarFilasSocios();
    }

    $('#filtro-estado-socios').addEventListener('change', (e) => { filtroEstadoSocios = e.target.value; pintarFilasSocios(); });
    $('#filtro-modalidad-socios').addEventListener('change', (e) => { filtroModalidadSocios = e.target.value; pintarFilasSocios(); });

    $('#lista-todos-socios').dataset.oculto = 'true';
    $('#btn-ver-todos-socios').addEventListener('click', (e) => {
      const cont3 = $('#lista-todos-socios');
      const oculto = cont3.dataset.oculto !== 'false';
      cont3.dataset.oculto = oculto ? 'false' : 'true';
      e.currentTarget.textContent = oculto ? 'Ocultar listado' : 'Ver listado completo';
      if (oculto) { cont3.innerHTML = '<p class="texto-suave">Cargando...</p>'; cargarListaSocios(); }
      else cont3.innerHTML = '';
    });

    $('#btn-borrar-todos-socios').addEventListener('click', async () => {
      const escrito = prompt('Esto borra TODOS los socios y asistencias registradas (no se puede deshacer). Escribí BORRAR para confirmar:');
      if (escrito !== 'BORRAR') { if (escrito !== null) toast('No se borró nada — hay que escribir BORRAR exacto.', 'info'); return; }
      const resultado = await FirebaseService.borrarTodosLosSocios();
      toast(`Se borraron ${resultado.socios} socios y ${resultado.asistencias} asistencias.`, 'exito');
      resultadoCont.innerHTML = '';
      inputDni.value = '';
      cargarAsistenciasDeHoy();
      const cont3 = $('#lista-todos-socios');
      if (cont3.dataset.oculto === 'false') cargarListaSocios();
    });

    cargarAsistenciasDeHoy();
  }
  RENDERERS['recepcion'] = renderRecepcion;

  // ---------------------------------------------------------------------
  // Modo kiosco / autoservicio: pantalla para dejar en una tablet/compu
  // en la entrada. El socio escribe su propio DNI con el teclado en
  // pantalla y se le marca la asistencia solo, sin que el profe tenga
  // que buscar ni tocar nada.
  // ---------------------------------------------------------------------
  function renderModoKiosco() {
    const cont = $('#view-kiosco');
    let procesando = false;

    cont.innerHTML = `
      <button class="btn-icono kiosco-salir" id="btn-salir-kiosco" title="Salir del modo autoservicio">${icon('close')}</button>
      <div class="kiosco-pantalla">
        <p class="texto-suave" style="margin-bottom:.4rem">Ingresá tu DNI y apretá Enter para registrar tu entrada</p>
        <input type="text" id="kiosco-input-dni" class="kiosco-display kiosco-input" inputmode="numeric" maxlength="8" placeholder="DNI" autofocus>
        <div class="teclado-numerico" id="teclado-numerico">
          ${[1,2,3,4,5,6,7,8,9].map(n => `<button type="button" class="tecla-numerica" data-tecla="${n}">${n}</button>`).join('')}
          <button type="button" class="tecla-numerica" data-tecla="borrar">${icon('close')}</button>
          <button type="button" class="tecla-numerica" data-tecla="0">0</button>
          <button type="button" class="tecla-numerica tecla-numerica-accion" data-tecla="ok">${icon('check')}</button>
        </div>
        <div class="kiosco-mensaje" id="kiosco-mensaje"></div>
      </div>`;

    $('#btn-salir-kiosco').addEventListener('click', () => cambiarVista('recepcion'));

    const input = $('#kiosco-input-dni');
    const mensaje = $('#kiosco-mensaje');
    input.focus();

    function resetear() {
      input.value = '';
      procesando = false;
      mensaje.innerHTML = '';
      input.focus();
    }

    // El input solo acepta números, hasta 8 dígitos — sirve tanto para
    // tipear con teclado físico/numérico como para tocar el teclado en
    // pantalla (que además suma dígitos a este mismo input).
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(0, 8);
      mensaje.innerHTML = '';
    });

    async function confirmar() {
      if (procesando) return;
      const dni = input.value.trim();
      if (dni.length !== 8) {
        mensaje.innerHTML = `<p class="kiosco-mensaje-error">${icon('warning')} El DNI tiene que tener 8 números.</p>`;
        return;
      }
      procesando = true;
      mensaje.innerHTML = `<p class="texto-suave">Buscando...</p>`;
      const miembro = await FirebaseService.buscarMiembroPorDni(dni);
      const nombreCompleto = miembro ? [miembro.nombre, miembro.apellido].filter(Boolean).join(' ') : '';
      if (!miembro) {
        mensaje.innerHTML = `<p class="kiosco-mensaje-error">${icon('warning')} No encontramos ese DNI. Pedile a un profe que te registre.</p>`;
        setTimeout(resetear, 3500);
        return;
      }
      if (socioEstaVencido(miembro)) {
        mensaje.innerHTML = `<p class="kiosco-mensaje-error">${icon('warning')} Hola ${escapeHtml(nombreCompleto.split(' ')[0])}, tu cuota está vencida. Pasá por recepción.</p>`;
        setTimeout(resetear, 4000);
        return;
      }
      const yaAsistio = await FirebaseService.yaAsistioHoy(miembro.dni);
      if (yaAsistio) {
        mensaje.innerHTML = `<p class="kiosco-mensaje-exito">${icon('check-circle')} ¡Ya habías marcado tu entrada hoy, ${escapeHtml(nombreCompleto.split(' ')[0])}!</p>`;
        setTimeout(resetear, 3000);
        return;
      }
      await FirebaseService.marcarAsistencia(miembro.dni, nombreCompleto);
      mensaje.innerHTML = `<p class="kiosco-mensaje-exito">${icon('check-circle')} ¡Bienvenido, ${escapeHtml(nombreCompleto.split(' ')[0])}!</p>`;
      setTimeout(resetear, 3000);
    }

    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirmar(); });

    $$('[data-tecla]', cont).forEach(b => b.addEventListener('click', () => {
      if (procesando) return;
      const tecla = b.dataset.tecla;
      if (tecla === 'borrar') { input.value = input.value.slice(0, -1); return; }
      if (tecla === 'ok') { confirmar(); return; }
      if (input.value.length < 8) input.value += tecla;
      input.focus();
    }));
  }
  RENDERERS['kiosco'] = renderModoKiosco;

  // ---------------------------------------------------------------------
  // Finanzas: gastos/compras del gimnasio, separados por profesor. Samu y
  // Karen comparten un solo login, pero cada uno tiene su propia sección
  // acá adentro, sin mezclarse.
  // ---------------------------------------------------------------------
  const PROFESORES_FTS = { samu: 'Samu', karen: 'Karen' };

  async function renderFinanzas() {
    const cont = $('#view-finanzas');
    let profesorActivo = 'samu';

    cont.innerHTML = `
      <div class="panel-header"><h2>${icon('stats')} Finanzas</h2></div>
      <div class="filtros-chips" id="tabs-profesor" style="margin-bottom:1.2rem">
        ${Object.entries(PROFESORES_FTS).map(([k, nombre]) => `<button type="button" class="chip ${k === profesorActivo ? 'chip-activo' : ''}" data-profesor="${k}">${escapeHtml(nombre)}</button>`).join('')}
      </div>
      <div class="panel" style="margin-bottom:1.2rem">
        <div class="card-stat exito" style="max-width:220px">
          <div class="card-stat-icono">${icon('stats')}</div>
          <div class="card-stat-valor" id="total-gastos-profesor">$0</div>
          <div class="card-stat-label" id="total-gastos-label">Gastado por Samu</div>
        </div>
      </div>
      <div class="panel-header-flex">
        <h3>Gastos y compras</h3>
        <button class="btn btn-primario btn-sm" id="btn-agregar-gasto">${icon('plus')} Agregar gasto</button>
      </div>
      <div id="lista-gastos-profesor"><p class="texto-suave">Cargando...</p></div>
    `;

    async function cargar() {
      const cont2 = $('#lista-gastos-profesor');
      cont2.innerHTML = `<p class="texto-suave">Cargando...</p>`;
      const gastos = await FirebaseService.listarGastos(profesorActivo);
      const total = gastos.reduce((s, g) => s + (Number(g.monto) || 0), 0);
      $('#total-gastos-profesor').textContent = `$${formatNumero(total)}`;
      $('#total-gastos-label').textContent = `Gastado por ${PROFESORES_FTS[profesorActivo]}`;
      const ordenados = [...gastos].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
      cont2.innerHTML = ordenados.length ? ordenados.map(g => `
        <div class="fila-historial" style="cursor:default">
          <div class="fila-historial-info"><strong>${escapeHtml(g.descripcion)}</strong><span class="texto-suave">${formatFecha(g.fecha)}</span></div>
          <div class="fila-historial-volumen"><strong>$${formatNumero(g.monto)}</strong></div>
          <button class="btn-icono btn-icono-peligro" data-borrar-gasto="${g.id}" title="Borrar gasto">${icon('trash')}</button>
        </div>`).join('') : `<p class="texto-suave estado-vacio">${PROFESORES_FTS[profesorActivo]} todavía no cargó ningún gasto.</p>`;
      $$('[data-borrar-gasto]', cont2).forEach(b => b.addEventListener('click', async () => {
        if (!confirm('¿Borrar este gasto?')) return;
        await FirebaseService.eliminarGasto(b.dataset.borrarGasto);
        toast('Gasto borrado.', 'exito');
        cargar();
      }));
    }

    $$('#tabs-profesor [data-profesor]').forEach(b => b.addEventListener('click', () => {
      profesorActivo = b.dataset.profesor;
      $$('#tabs-profesor [data-profesor]').forEach(bb => bb.classList.toggle('chip-activo', bb.dataset.profesor === profesorActivo));
      cargar();
    }));

    $('#btn-agregar-gasto').addEventListener('click', () => {
      abrirModal(`
        <div class="modal-header"><h3>${icon('plus')} Agregar gasto — ${escapeHtml(PROFESORES_FTS[profesorActivo])}</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
        <div class="modal-body">
          <label class="campo"><span>Descripción</span><input type="text" id="input-descripcion-gasto" placeholder="Ej: Mancuernas nuevas, stock heladera..." autofocus></label>
          <label class="campo"><span>Monto</span><input type="number" id="input-monto-gasto" min="0" step="0.01" value="0"></label>
        </div>
        <div class="modal-footer">
          <button class="btn btn-fantasma" data-cerrar-modal>Cancelar</button>
          <button class="btn btn-primario" id="btn-guardar-gasto">${icon('check')} Guardar</button>
        </div>`, { id: 'modal-agregar-gasto' });
      $('#btn-guardar-gasto').addEventListener('click', async () => {
        const descripcion = $('#input-descripcion-gasto').value.trim();
        const monto = Number($('#input-monto-gasto').value) || 0;
        if (!descripcion) { toast('Completá una descripción.', 'error'); return; }
        await FirebaseService.agregarGasto({ profesor: profesorActivo, descripcion, monto });
        cerrarModal();
        toast('Gasto agregado.', 'exito');
        cargar();
      });
    });

    cargar();
  }
  RENDERERS['finanzas'] = renderFinanzas;

  const DIAS_SEMANA_GYM = [{ v: 'lun', t: 'Lun' }, { v: 'mar', t: 'Mar' }, { v: 'mie', t: 'Mié' }, { v: 'jue', t: 'Jue' }, { v: 'vie', t: 'Vie' }, { v: 'sab', t: 'Sáb' }, { v: 'dom', t: 'Dom' }];

  function abrirModalNuevoSocio(dniInicial, alGuardar, socioExistente) {
    const esEdicion = !!socioExistente;
    const diasActuales = socioExistente?.dias || [];
    abrirModal(`
      <div class="modal-header"><h3>${esEdicion ? icon('edit') : icon('plus')} ${esEdicion ? 'Editar socio' : 'Registrar socio nuevo'}</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        <label class="campo"><span>Nombre</span><input type="text" id="input-nombre-socio" value="${escapeHtml(socioExistente?.nombre || '')}" autofocus></label>
        <label class="campo"><span>Apellido</span><input type="text" id="input-apellido-socio" value="${escapeHtml(socioExistente?.apellido || '')}"></label>
        <label class="campo">
          <span>DNI (8 dígitos)</span>
          <input type="text" id="input-dni-socio" inputmode="numeric" maxlength="8" value="${escapeHtml(String(dniInicial || ''))}" ${esEdicion ? 'disabled' : ''}>
        </label>
        <p class="auth-error" id="error-dni-socio" hidden></p>
        <label class="campo"><span>Modalidad</span>
          <select id="input-modalidad-socio">
            <option value="musculacion" ${socioExistente?.modalidad === 'musculacion' ? 'selected' : ''}>Musculación</option>
            <option value="pilates" ${socioExistente?.modalidad === 'pilates' ? 'selected' : ''}>Pilates</option>
            <option value="ambas" ${socioExistente?.modalidad === 'ambas' ? 'selected' : ''}>Musculación + Pilates</option>
          </select>
        </label>
        <label class="campo"><span>Días que entrena</span></label>
        <div class="filtros-chips" id="dias-socio-chips" style="margin-top:-.6rem;margin-bottom:.9rem">
          ${DIAS_SEMANA_GYM.map(d => `<button type="button" class="chip ${diasActuales.includes(d.v) ? 'chip-activo' : ''}" data-dia="${d.v}">${d.t}</button>`).join('')}
        </div>
        <label class="campo"><span>Día de pago (del mes)</span><input type="number" id="input-diapago-socio" min="1" max="31" value="${socioExistente?.diaPago || ''}" placeholder="Ej: 10"></label>
        <label class="campo"><span>Descripción / notas</span><textarea id="input-descripcion-socio" rows="3" style="width:100%;resize:vertical;background:var(--color-fondo-elevado);border:1px solid var(--color-borde-suave);border-radius:var(--radio-sm);padding:.6rem .8rem;color:var(--color-texto);font-family:inherit">${escapeHtml(socioExistente?.descripcion || '')}</textarea></label>
      </div>
      <div class="modal-footer">
        <button class="btn btn-fantasma" data-cerrar-modal>Cancelar</button>
        <button class="btn btn-primario" id="btn-guardar-socio">${icon('check')} ${esEdicion ? 'Guardar cambios' : 'Registrar'}</button>
      </div>`, { id: 'modal-nuevo-socio' });

    const diasSeleccionados = new Set(diasActuales);
    $$('#dias-socio-chips [data-dia]').forEach(b => b.addEventListener('click', () => {
      const d = b.dataset.dia;
      if (diasSeleccionados.has(d)) { diasSeleccionados.delete(d); b.classList.remove('chip-activo'); }
      else { diasSeleccionados.add(d); b.classList.add('chip-activo'); }
    }));

    const inputDni = $('#input-dni-socio');
    const errorDni = $('#error-dni-socio');
    function dniValido(valor) { return /^\d{8}$/.test(valor); }
    inputDni.addEventListener('input', () => {
      inputDni.value = inputDni.value.replace(/\D/g, '').slice(0, 8);
      errorDni.hidden = true;
    });

    $('#btn-guardar-socio').addEventListener('click', async () => {
      const nombre = $('#input-nombre-socio').value.trim();
      const apellido = $('#input-apellido-socio').value.trim();
      const dni = inputDni.value.trim();
      const modalidad = $('#input-modalidad-socio').value;
      const diaPago = $('#input-diapago-socio').value ? Number($('#input-diapago-socio').value) : null;
      const descripcion = $('#input-descripcion-socio').value.trim();
      const dias = Array.from(diasSeleccionados);

      if (!nombre) { toast('Completá el nombre.', 'error'); return; }
      if (!esEdicion && !dniValido(dni)) {
        errorDni.textContent = 'El DNI tiene que tener exactamente 8 números.';
        errorDni.hidden = false;
        return;
      }
      try {
        if (esEdicion) {
          await FirebaseService.actualizarMiembro(dni, { nombre, apellido, modalidad, dias, diaPago, descripcion });
          toast('Socio actualizado.', 'exito');
        } else {
          await FirebaseService.registrarMiembro({ nombre, apellido, dni, modalidad, dias, diaPago, descripcion });
          toast('Socio registrado.', 'exito');
        }
        cerrarModal();
        if (alGuardar) alGuardar();
      } catch (err) {
        if (String(err.message || '').includes('Ya existe')) {
          errorDni.textContent = err.message;
          errorDni.hidden = false;
        } else {
          toast(err.message || 'No se pudo guardar.', 'error');
        }
      }
    });
  }

  // Listado real de pagos individuales (no solo el resumen por mes), con
  // botón de borrar. Se reutiliza en el panel de entrenador y de superadmin.
  function renderPanelPagos(selector, pagos, nombrePorUid, permiteBorrar) {
    const cont = $(selector);
    if (!cont) return;
    const resumenMensual = {};
    pagos.forEach(p => { const clave = (p.fecha || '').slice(0, 7); if (clave) resumenMensual[clave] = (resumenMensual[clave] || 0) + (Number(p.monto) || 0); });
    const mesesOrdenados = Object.keys(resumenMensual).sort().reverse().slice(0, 4);
    const pagosOrdenados = [...pagos].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    cont.innerHTML = `
      ${mesesOrdenados.length ? `<div class="grid-cards-resumen" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr));margin-bottom:1rem">
        ${mesesOrdenados.map(m => {
          const [anio, mes] = m.split('-');
          const nombreMes = MESES[Number(mes) - 1];
          return `<div class="card-stat exito"><div class="card-stat-valor">$${formatNumero(resumenMensual[m])}</div><div class="card-stat-label">${nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)} ${anio}</div></div>`;
        }).join('')}
      </div>` : ''}
      <div id="lista-pagos-detalle">
        ${pagosOrdenados.length ? pagosOrdenados.map(p => `
          <div class="fila-historial" style="cursor:default">
            <div class="fila-historial-info"><strong>${escapeHtml(nombrePorUid[p.uidPagador] || 'Pago')}</strong><span class="texto-suave">${formatFecha(p.fecha)}</span></div>
            <div class="fila-historial-volumen"><strong>$${formatNumero(p.monto)}</strong></div>
            ${permiteBorrar ? `<button class="btn-icono btn-icono-peligro" data-borrar-pago="${p.id}" title="Borrar pago">${icon('close')}</button>` : ''}
          </div>`).join('') : `<p class="texto-suave estado-vacio">Todavía no registraste ningún pago.</p>`}
      </div>`;

    $$('[data-borrar-pago]', cont).forEach(b => b.addEventListener('click', async () => {
      if (!confirm('¿Borrar este pago? Esta acción no se puede deshacer.')) return;
      await FirebaseService.eliminarPago(b.dataset.borrarPago);
      toast('Pago borrado.', 'exito');
      renderPanelPagos(selector, pagos.filter(p => p.id !== b.dataset.borrarPago), nombrePorUid, permiteBorrar);
    }));
  }

  async function renderFichaAlumno() {
    const cont = $('#view-ficha-alumno');
    const uid = state.alumnoSeleccionadoUid;
    if (!uid) { cambiarVista('alumnos'); return; }
    cont.innerHTML = `<p class="texto-suave">Cargando ficha...</p>`;

    const [alumnosRes, rutinaRes, historialRes] = await Promise.allSettled([
      FirebaseService.listarAlumnos(),
      FirebaseService.getRutina(uid),
      FirebaseService.getHistorial(uid)
    ]);
    if (alumnosRes.status === 'rejected') {
      cont.innerHTML = `<p class="texto-suave estado-vacio">No se pudo cargar este alumno (error de permisos o de conexión). Volvé e intentá de nuevo.</p><button class="btn btn-fantasma" id="btn-volver-alumnos-error">${icon('chevron-left')} Volver</button>`;
      $('#btn-volver-alumnos-error')?.addEventListener('click', () => cambiarVista('alumnos'));
      console.error('Error cargando alumno:', alumnosRes.reason);
      return;
    }
    const alumnos = alumnosRes.value;
    const rutina = rutinaRes.status === 'fulfilled' ? rutinaRes.value : null;
    const historial = (historialRes.status === 'fulfilled' ? historialRes.value : []).sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    if (rutinaRes.status === 'rejected') console.error('Error cargando rutina:', rutinaRes.reason);
    if (historialRes.status === 'rejected') console.error('Error cargando historial:', historialRes.reason);
    const alumno = alumnos.find(a => a.uid === uid);
    if (!alumno) { cambiarVista('alumnos'); return; }

    const diasEntrenados = new Set(historial.map(h => h.fecha.slice(0, 10))).size;

    cont.innerHTML = `
      <div class="panel-header">
        <div><button class="btn btn-fantasma btn-sm" id="btn-volver-alumnos">${icon('chevron-left')} Alumnos</button>
        <h2 style="margin-top:.5rem">${escapeHtml(alumno.nombre)}</h2>
        <p class="texto-suave">${escapeHtml(alumno.email)}</p></div>
      </div>
      <div class="grid-cards-resumen" style="grid-template-columns:repeat(3,1fr)">
        <div class="card-stat"><div class="card-stat-icono">${icon('calendar')}</div><div class="card-stat-valor">${diasEntrenados}</div><div class="card-stat-label">Días entrenados</div></div>
        <div class="card-stat"><div class="card-stat-icono">${icon('routine')}</div><div class="card-stat-valor">${historial.length}</div><div class="card-stat-label">Entrenamientos totales</div></div>
        <div class="card-stat exito"><div class="card-stat-icono">${icon('timer')}</div><div class="card-stat-valor">${formatDuracion(historial.length ? historial.reduce((s, h) => s + (h.duracionSeg || 0), 0) / historial.length : 0)}</div><div class="card-stat-label">Duración promedio</div></div>
      </div>

      <div class="panel" style="margin-bottom:1.2rem">
        <h3>${icon('flame')} Mensaje para ${escapeHtml((alumno.nombre || '').split(' ')[0] || 'el alumno')}</h3>
        <p class="texto-suave texto-pequeno" style="margin:.3rem 0 .7rem">Una nota o frase motivacional personal, visible solo para vos.</p>
        <textarea id="input-notas-alumno" rows="3" style="width:100%;resize:vertical;background:var(--color-fondo-elevado);border:1px solid var(--color-borde-suave);border-radius:var(--radio-sm);padding:.6rem .8rem;color:var(--color-texto);font-family:inherit" placeholder="Ej: Vamos con todo esta semana, subamos el peso en sentadilla 🔥">${escapeHtml(alumno.notasEntrenador || '')}</textarea>
        <button class="btn btn-fantasma btn-sm" id="btn-guardar-notas-alumno" style="margin-top:.6rem">${icon('check')} Guardar mensaje</button>
      </div>

      <div class="panel" style="margin-bottom:1.2rem">
        <h3>Objetivo asignado</h3>
        <div class="grid-objetivos-inicio" id="picker-objetivo-alumno" style="margin-top:.8rem"></div>
      </div>

      <div class="panel" style="margin-bottom:1.2rem">
        <h3>Calendario de asistencia</h3>
        <div id="calendario-asistencia" style="margin-top:.8rem"></div>
      </div>

      <div class="panel" style="margin-bottom:1.2rem">
        <h3>Progreso (volumen por sesión)</h3>
        <div class="contenedor-grafico" style="margin-top:.8rem"><canvas id="grafico-progreso-alumno"></canvas></div>
      </div>

      <div class="panel-header-flex"><h3>Rutina asignada</h3>${rutina ? `<button class="btn btn-peligro btn-sm" id="btn-borrar-rutina">${icon('close')} Borrar rutina</button>` : ''}</div>
      <div id="dias-rutina-alumno"></div>
      ${rutina ? `<button class="btn btn-fantasma" id="btn-agregar-dia-alumno">${icon('plus')} Agregar día</button>` : ''}
    `;

    $('#btn-volver-alumnos').addEventListener('click', () => cambiarVista('alumnos'));
    $('#btn-borrar-rutina')?.addEventListener('click', async () => {
      if (!confirm(`¿Borrar toda la rutina de ${alumno.nombre}? Esta acción no se puede deshacer.`)) return;
      await FirebaseService.eliminarRutina(uid);
      toast('Rutina borrada.', 'exito');
      renderFichaAlumno();
    });
    $('#btn-guardar-notas-alumno').addEventListener('click', async () => {
      await FirebaseService.actualizarFichaAlumno(uid, { notasEntrenador: $('#input-notas-alumno').value.trim() });
      toast('Mensaje guardado.', 'exito');
    });

    $('#picker-objetivo-alumno').innerHTML = Object.entries(PROGRAMAS_OBJETIVO).map(([key, p]) => `
      <button class="tarjeta-objetivo-grande ${alumno.objetivo === key ? 'tarjeta-objetivo-grande-activa' : ''}" data-objetivo="${key}">
        <span class="tarjeta-objetivo-grande-icono">${icon(p.icono)}</span>
        <span class="tarjeta-objetivo-grande-nombre">${escapeHtml(p.nombre)}</span>
      </button>`).join('');
    $$('#picker-objetivo-alumno [data-objetivo]').forEach(b => b.addEventListener('click', () => elegirObjetivoParaRutina(uid, b.dataset.objetivo, renderFichaAlumno)));

    renderCalendarioAsistencia(historial);
    renderGraficoProgresoAlumno(historial);
    renderDiasRutina(uid, rutina, true);

    $('#btn-agregar-dia-alumno')?.addEventListener('click', async () => {
      rutina.dias.push({ id: `dia-${Date.now()}`, nombre: `Día ${rutina.dias.length + 1}`, ejercicios: [] });
      await FirebaseService.guardarRutina(uid, rutina);
      renderFichaAlumno();
    });
  }
  RENDERERS['ficha-alumno'] = renderFichaAlumno;

  async function elegirObjetivoParaRutina(uid, objetivoKey, alRefrescar) {
    if (objetivoKey === 'libre') {
      const rutina = { nombre: 'Rutina libre', objetivo: 'libre', nivel: null, dias: [], calentamiento: [] };
      await FirebaseService.guardarRutina(uid, rutina);
      await FirebaseService.actualizarFichaAlumno(uid, { objetivo: 'libre', nivel: null });
      toast('Rutina en blanco creada. Agregá los días que quieras.', 'exito');
      alRefrescar();
      return;
    }
    abrirModalNivelParaAlumno(uid, objetivoKey, alRefrescar);
  }

  function abrirModalNivelParaAlumno(uid, objetivoKey, alRefrescar = renderFichaAlumno) {
    const p = PROGRAMAS_OBJETIVO[objetivoKey];
    abrirModal(`
      <div class="modal-header"><h3>${icon(p.icono)} ${escapeHtml(p.nombre)}</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        ${p.frecuencia ? `<span class="badge" style="margin-bottom:.7rem;display:inline-block">${escapeHtml(p.frecuencia)}</span>` : ''}
        ${p.resumen ? `<p class="texto-suave" style="margin-bottom:.9rem">${escapeHtml(p.resumen)}</p>` : ''}
        ${p.metodologia && p.metodologia.length ? `
          <h4 class="detalle-ejercicio-subtitulo" style="margin-bottom:.4rem">${icon('check')} Cómo está pensada</h4>
          <ul class="lista-detalle-ejercicio" style="margin-bottom:1.1rem">${p.metodologia.map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul>` : ''}
        <p class="texto-suave" style="margin-bottom:1rem">Elegí el nivel para generar la rutina de este alumno.</p>
        <div class="lista-niveles">
          ${['Principiante', 'Intermedio', 'Avanzado'].map((n, i) => `
            <label class="opcion-nivel"><input type="radio" name="nivel" value="${n}" ${i === 0 ? 'checked' : ''}><div><strong>${n}</strong></div></label>`).join('')}
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-fantasma" data-cerrar-modal>Cancelar</button>
        <button class="btn btn-primario" id="btn-confirmar-nivel-alumno">${icon('plus')} Generar rutina</button>
      </div>`, { ancho: 'lg', id: 'modal-nivel-alumno' });

    $('#btn-confirmar-nivel-alumno').addEventListener('click', async () => {
      const nivel = $('input[name="nivel"]:checked').value;
      const rutina = generarRutinaDesdeObjetivo(objetivoKey, nivel);
      await FirebaseService.guardarRutina(uid, rutina);
      await FirebaseService.actualizarFichaAlumno(uid, { objetivo: objetivoKey, nivel });
      cerrarModal();
      toast('Rutina generada y asignada.', 'logro');
      alRefrescar();
    });
  }

  function renderCalendarioAsistencia(historial) {
    const cont = $('#calendario-asistencia');
    const dias = new Set(historial.map(h => h.fecha.slice(0, 10)));
    const hoy = new Date();
    const primerDia = (new Date(hoy.getFullYear(), hoy.getMonth(), 1).getDay() + 6) % 7;
    const totalDias = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    let celdas = '';
    for (let i = 0; i < primerDia; i++) celdas += `<div class="dia-mini dia-mini-vacio"></div>`;
    for (let d = 1; d <= totalDias; d++) {
      const key = new Date(hoy.getFullYear(), hoy.getMonth(), d).toISOString().slice(0, 10);
      celdas += `<div class="dia-mini ${dias.has(key) ? 'dia-mini-activo' : ''}">${d}</div>`;
    }
    cont.innerHTML = `<div class="mini-calendario-grid">${celdas}</div>`;
  }

  let chartAlumno = null;
  function renderGraficoProgresoAlumno(historial) {
    const canvas = $('#grafico-progreso-alumno');
    if (!canvas || typeof Chart === 'undefined') return;
    if (chartAlumno) chartAlumno.destroy();
    chartAlumno = new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: historial.map(h => formatFecha(h.fecha, { day: '2-digit', month: 'short' })),
        datasets: [{ label: 'Volumen (kg)', data: historial.map(h => h.volumenTotal || 0), borderColor: MARCA.colorAcento, backgroundColor: MARCA.colorAcento + '33', fill: true, tension: .3 }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  function abrirModalEditarSeriesObjetivo(uid, rutina, di, ei, esEntrenadorEditando) {
    const item = rutina.dias[di].ejercicios[ei];
    const ej = getExerciseById(item.ejercicioId);
    if (!ej) return;
    abrirModal(`
      <div class="modal-header"><h3>${icon('edit')} ${escapeHtml(ej.nombre)}</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        <label class="campo"><span>Número de series</span><input type="number" min="1" max="12" id="input-num-series" value="${item.seriesObjetivo.length}"></label>
        <label class="campo"><span>Repeticiones objetivo</span><input type="number" min="1" id="input-reps-obj" value="${item.seriesObjetivo[0]?.reps || 10}"></label>
        <label class="campo"><span>Peso objetivo (kg)</span><input type="number" min="0" step="0.5" id="input-peso-obj" value="${item.seriesObjetivo[0]?.peso || 0}"></label>
        <label class="campo"><span>Descanso (segundos)</span><input type="number" min="0" step="15" id="input-descanso-obj" value="${item.descansoSeg || 90}"></label>
      </div>
      <div class="modal-footer">
        <button class="btn btn-fantasma" data-cerrar-modal>Cancelar</button>
        <button class="btn btn-primario" id="btn-guardar-series-obj">${icon('check')} Guardar</button>
      </div>`, { id: 'modal-editar-series' });

    $('#btn-guardar-series-obj').addEventListener('click', async () => {
      const n = Math.max(1, Number($('#input-num-series').value) || 1);
      const reps = Math.max(1, Number($('#input-reps-obj').value) || 10);
      const peso = Math.max(0, Number($('#input-peso-obj').value) || 0);
      item.seriesObjetivo = Array.from({ length: n }, () => ({ reps, peso }));
      item.descansoSeg = Math.max(0, Number($('#input-descanso-obj').value) || 90);
      await FirebaseService.guardarRutina(uid, rutina);
      cerrarModal();
      toast('Ejercicio actualizado.', 'exito');
      renderDiasRutina(uid, rutina, esEntrenadorEditando, permiteEmpezar);
    });
  }


  function renderDiasRutina(uid, rutina, esEntrenadorEditando, permiteEmpezar) {
    const cont = $('#dias-rutina-alumno');
    if (!rutina) { cont.innerHTML = `<p class="texto-suave estado-vacio">Este alumno todavía no tiene una rutina asignada. Elegí un objetivo arriba para generar una.</p>`; return; }
    cont.innerHTML = rutina.dias.map((dia, di) => `
      <div class="bloque-dia">
        <div class="dia-header"><strong>${escapeHtml(dia.nombre)}</strong>
          <div style="margin-left:auto;display:flex;gap:.4rem">
            ${permiteEmpezar && dia.ejercicios.length ? `<button class="btn btn-primario btn-sm" data-empezar-dia="${di}">${icon('play')} Empezar</button>` : ''}
            ${esEntrenadorEditando ? `<button class="btn-icono" data-renombrar-dia="${di}" title="Renombrar día" aria-label="Renombrar día">${icon('edit')}</button>` : ''}
            ${esEntrenadorEditando ? `<button class="btn btn-fantasma btn-sm" data-agregar-ej="${di}">${icon('plus')} Agregar ejercicio</button>` : ''}
            ${esEntrenadorEditando ? `<button class="btn-icono btn-icono-peligro" data-borrar-dia="${di}" title="Borrar día" aria-label="Borrar día">${icon('trash')}</button>` : ''}
          </div>
        </div>
        <div class="lista-ejercicios-dia">
          ${dia.ejercicios.map((item, ei) => {
            const ej = getExerciseById(item.ejercicioId);
            if (!ej) return '';
            return `<div class="fila-ejercicio-dia">
              <div class="fila-ejercicio-dia-icono">${icon('routine')}</div>
              <div class="fila-ejercicio-dia-info"><strong>${escapeHtml(ej.nombre)}</strong><span class="texto-suave">${item.seriesObjetivo.length} series</span></div>
              <div class="fila-ejercicio-dia-acciones">
                <button class="btn-icono" data-ver-detalle="${ej.id}" title="Ver detalle" aria-label="Ver detalle">${icon('info')}</button>
                ${esEntrenadorEditando ? `<button class="btn-icono" data-editar-series="${di}:${ei}" title="Editar series" aria-label="Editar series">${icon('edit')}</button>` : ''}
                ${esEntrenadorEditando ? `<button class="btn-icono btn-icono-peligro" data-quitar-ej="${di}:${ei}">${icon('close')}</button>` : ''}
              </div>
            </div>`;
          }).join('') || '<p class="texto-suave texto-pequeno">Sin ejercicios.</p>'}
        </div>
      </div>`).join('') || `<p class="texto-suave estado-vacio">Sin días todavía.${esEntrenadorEditando ? ' Agregá el primero con el botón de abajo.' : ''}</p>`;

    $$('[data-ver-detalle]', cont).forEach(b => b.addEventListener('click', () => abrirDetalleEjercicio(b.dataset.verDetalle)));
    $$('[data-empezar-dia]', cont).forEach(b => b.addEventListener('click', () => iniciarEntrenamiento(rutina, rutina.dias[Number(b.dataset.empezarDia)])));
    $$('[data-editar-series]', cont).forEach(b => b.addEventListener('click', () => {
      const [di, ei] = b.dataset.editarSeries.split(':').map(Number);
      abrirModalEditarSeriesObjetivo(uid, rutina, di, ei, esEntrenadorEditando);
    }));
    $$('[data-agregar-ej]', cont).forEach(b => b.addEventListener('click', () => {
      abrirSelectorEjercicios(async (ej) => {
        rutina.dias[Number(b.dataset.agregarEj)].ejercicios.push({
          id: `ej-${Date.now()}`, ejercicioId: ej.id,
          seriesObjetivo: [{ reps: 10, peso: 0 }, { reps: 10, peso: 0 }, { reps: 10, peso: 0 }], descansoSeg: 90
        });
        await FirebaseService.guardarRutina(uid, rutina);
        renderDiasRutina(uid, rutina, esEntrenadorEditando, permiteEmpezar);
        toast(`${ej.nombre} agregado.`, 'exito');
      });
    }));
    $$('[data-quitar-ej]', cont).forEach(b => b.addEventListener('click', async () => {
      const [di, ei] = b.dataset.quitarEj.split(':').map(Number);
      rutina.dias[di].ejercicios.splice(ei, 1);
      await FirebaseService.guardarRutina(uid, rutina);
      renderDiasRutina(uid, rutina, esEntrenadorEditando, permiteEmpezar);
    }));
    $$('[data-renombrar-dia]', cont).forEach(b => b.addEventListener('click', async () => {
      const di = Number(b.dataset.renombrarDia);
      const nuevoNombre = prompt('Nuevo nombre para este día:', rutina.dias[di].nombre);
      if (nuevoNombre === null || !nuevoNombre.trim()) return;
      rutina.dias[di].nombre = nuevoNombre.trim();
      await FirebaseService.guardarRutina(uid, rutina);
      renderDiasRutina(uid, rutina, esEntrenadorEditando, permiteEmpezar);
    }));
    $$('[data-borrar-dia]', cont).forEach(b => b.addEventListener('click', async () => {
      const di = Number(b.dataset.borrarDia);
      if (!confirm(`¿Borrar "${rutina.dias[di].nombre}"? Esta acción no se puede deshacer.`)) return;
      rutina.dias.splice(di, 1);
      await FirebaseService.guardarRutina(uid, rutina);
      renderDiasRutina(uid, rutina, esEntrenadorEditando, permiteEmpezar);
      toast('Día borrado.', 'exito');
    }));
  }

  // =======================================================================
  // VISTAS DE ALUMNO
  // =======================================================================
  async function renderMiRutina() {
    const cont = $('#view-mi-rutina');
    const usuario = FirebaseService.getUsuarioActual();
    const puedeEditar = usuario.autoeditar === true;
    cont.innerHTML = `<p class="texto-suave">Cargando tu rutina...</p>`;
    const rutina = await FirebaseService.getRutina(usuario.uid);

    if (!rutina) {
      cont.innerHTML = `
        <p class="texto-suave texto-pequeno" style="margin-bottom:.2rem">Hola, ${escapeHtml(usuario.nombre.split(' ')[0])} 👋</p>
        <div class="estado-vacio">
          <p>${icon('routine')} Todavía no tenés una rutina asignada.</p>
          <p class="texto-suave">${puedeEditar ? 'Elegí un objetivo abajo para generar la tuya.' : 'Tu entrenador te la va a armar pronto. Cuando lo haga, la vas a ver acá.'}</p>
        </div>
        ${puedeEditar ? `<div class="panel" style="margin-top:1.2rem"><h3>Elegí tu objetivo</h3><div id="picker-objetivo-propio" class="grid-objetivos" style="margin-top:.8rem"></div></div>` : ''}`;
      if (puedeEditar) {
        $('#picker-objetivo-propio').innerHTML = Object.entries(PROGRAMAS_OBJETIVO).map(([key, p]) => `
          <button class="tarjeta-objetivo-grande" data-objetivo="${key}">
            <span class="tarjeta-objetivo-grande-icono">${icon(p.icono)}</span>
            <span class="tarjeta-objetivo-grande-nombre">${escapeHtml(p.nombre)}</span>
          </button>`).join('');
        $$('#picker-objetivo-propio [data-objetivo]').forEach(b => b.addEventListener('click', () => elegirObjetivoParaRutina(usuario.uid, b.dataset.objetivo, renderMiRutina)));
      }
      return;
    }

    cont.innerHTML = `
      <p class="texto-suave texto-pequeno" style="margin-bottom:.2rem">Hola, ${escapeHtml(usuario.nombre.split(' ')[0])} 👋</p>
      <div class="panel-header-flex"><h2>${escapeHtml(rutina.nombre)}</h2>${puedeEditar ? `<button class="btn btn-fantasma btn-sm" id="btn-cambiar-objetivo-propio">${icon('repeat')} Cambiar objetivo</button>` : ''}</div>
      <div id="${puedeEditar ? 'dias-rutina-alumno' : 'dias-mi-rutina'}"></div>
      ${puedeEditar ? `<button class="btn btn-fantasma" id="btn-agregar-dia-propio">${icon('plus')} Agregar día</button>` : ''}`;

    if (puedeEditar) {
      // Reutilizamos exactamente el mismo editor que usa el entrenador,
      // pero apuntado a la propia rutina.
      renderDiasRutina(usuario.uid, rutina, true, true);
      $('#btn-agregar-dia-propio').addEventListener('click', () => {
        rutina.dias.push({ id: `dia-${Date.now()}`, nombre: `Día ${rutina.dias.length + 1}`, ejercicios: [] });
        FirebaseService.guardarRutina(usuario.uid, rutina);
        renderMiRutina();
      });
      $('#btn-cambiar-objetivo-propio').addEventListener('click', () => {
        abrirModal(`
          <div class="modal-header"><h3>Elegí tu objetivo</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
          <div class="modal-body"><div id="picker-objetivo-propio-modal" class="grid-objetivos"></div></div>`, { ancho: 'lg', id: 'modal-objetivo-propio' });
        $('#picker-objetivo-propio-modal').innerHTML = Object.entries(PROGRAMAS_OBJETIVO).map(([key, p]) => `
          <button class="tarjeta-objetivo-grande" data-objetivo="${key}">
            <span class="tarjeta-objetivo-grande-icono">${icon(p.icono)}</span>
            <span class="tarjeta-objetivo-grande-nombre">${escapeHtml(p.nombre)}</span>
          </button>`).join('');
        $$('#picker-objetivo-propio-modal [data-objetivo]').forEach(b => b.addEventListener('click', () => { cerrarModal(); elegirObjetivoParaRutina(usuario.uid, b.dataset.objetivo, renderMiRutina); }));
      });
      return;
    }

    const diasCont = $('#dias-mi-rutina');
    diasCont.innerHTML = rutina.dias.map((dia, di) => `
      <div class="bloque-dia">
        <div class="dia-header"><strong>${escapeHtml(dia.nombre)}</strong>
          <button class="btn btn-primario btn-sm" style="margin-left:auto" data-empezar="${di}">${icon('play')} Empezar</button>
        </div>
        <div class="lista-ejercicios-dia">
          ${dia.ejercicios.map(item => {
            const ej = getExerciseById(item.ejercicioId);
            return ej ? `<div class="fila-ejercicio-dia"><div class="fila-ejercicio-dia-icono">${imagenEjercicioHTML(ej)}</div><div class="fila-ejercicio-dia-info"><strong>${escapeHtml(ej.nombre)}</strong><span class="texto-suave">${item.seriesObjetivo.length} series</span></div><div class="fila-ejercicio-dia-acciones"><button class="btn-icono" data-ver-detalle="${ej.id}" title="Ver detalle" aria-label="Ver detalle">${icon('info')}</button></div></div>` : '';
          }).join('') || '<p class="texto-suave texto-pequeno">Sin ejercicios.</p>'}
        </div>
      </div>`).join('');
    $$('[data-ver-detalle]', diasCont).forEach(b => b.addEventListener('click', () => abrirDetalleEjercicio(b.dataset.verDetalle)));
    $$('[data-empezar]', diasCont).forEach(b => b.addEventListener('click', () => iniciarEntrenamiento(rutina, rutina.dias[Number(b.dataset.empezar)])));
  }
  RENDERERS['mi-rutina'] = renderMiRutina;

  function iniciarEntrenamiento(rutina, dia) {
    state.sesionActiva = {
      rutinaNombre: rutina.nombre, diaNombre: dia.nombre, inicio: Date.now(),
      calentamiento: rutina.calentamiento || [],
      ejercicios: dia.ejercicios.map(item => {
        const ej = getExerciseById(item.ejercicioId);
        return {
          ejercicioId: item.ejercicioId, nombre: ej?.nombre || 'Ejercicio',
          descansoSeg: item.descansoSeg || 90,
          series: item.seriesObjetivo.map(o => ({ peso: o.peso || 0, reps: o.reps || 0, rpe: null, rir: null, completada: false }))
        };
      })
    };
    cambiarVista('sesion');
  }

  let cronometroSesionIntervalo = null;
  function iniciarCronometroSesion() {
    clearInterval(cronometroSesionIntervalo);
    const actualizar = () => {
      const el = $('#sesion-cronometro');
      if (!el || !state.sesionActiva) { clearInterval(cronometroSesionIntervalo); return; }
      const mins = Math.floor((Date.now() - state.sesionActiva.inicio) / 60000);
      el.textContent = `En curso · ${mins} min`;
    };
    actualizar();
    cronometroSesionIntervalo = setInterval(actualizar, 15000);
  }

  function renderSesion() {
    const cont = $('#view-sesion');
    const s = state.sesionActiva;
    if (!s) { cont.innerHTML = `<p class="texto-suave estado-vacio">No hay ningún entrenamiento en curso.</p>`; return; }

    const itemsCalentamiento = (s.calentamiento || []).map(id => getExerciseById(id)).filter(Boolean);
    const calentamientoHtml = itemsCalentamiento.length ? `
      <details class="bloque-calentamiento-sesion" open>
        <summary>${icon('flame')} Entrada en calor sugerida (${itemsCalentamiento.length})</summary>
        <div class="lista-calentamiento">
          ${itemsCalentamiento.map(ej => `
            <div class="fila-ejercicio-dia">
              <div class="fila-ejercicio-dia-icono">${imagenEjercicioHTML(ej)}</div>
              <div class="fila-ejercicio-dia-info"><strong>${escapeHtml(ej.nombre)}</strong></div>
              <div class="fila-ejercicio-dia-acciones"><button class="btn-icono" data-ver-detalle="${ej.id}" title="Ver detalle">${icon('info')}</button></div>
            </div>`).join('')}
        </div>
      </details>` : '';

    cont.innerHTML = `
      <div class="sesion-header">
        <div><h2>${icon('play')} ${escapeHtml(s.diaNombre)}</h2><p class="texto-suave" id="sesion-cronometro">En curso · 0 min</p></div>
        <div class="sesion-header-acciones">
          <button class="btn btn-fantasma" id="btn-cancelar-sesion">${icon('close')} Cancelar</button>
          <button class="btn btn-primario" id="btn-finalizar-sesion">${icon('check')} Finalizar</button>
        </div>
      </div>
      ${calentamientoHtml}
      <div id="sesion-ejercicios"></div>`;

    iniciarCronometroSesion();

    const ejCont = $('#sesion-ejercicios');
    function pintar() {
      ejCont.innerHTML = s.ejercicios.map((ej, ei) => {
        const todasCompletas = ej.series.every(x => x.completada);
        return `
        <div class="tarjeta-ejercicio-sesion ${todasCompletas ? 'ejercicio-completado' : ''}">
          <div class="tarjeta-ejercicio-sesion-header">
            <h3>${escapeHtml(ej.nombre)} ${todasCompletas ? `<span class="badge badge-exito">${icon('check')} Completado</span>` : ''}</h3>
            <div class="fila-ejercicio-dia-acciones">
              <button class="btn-icono" data-agregar-serie="${ei}" title="Agregar serie" aria-label="Agregar serie">${icon('plus')}</button>
              <button class="btn-icono" data-ver-detalle="${ej.ejercicioId}" title="Ver técnica" aria-label="Ver técnica">${icon('info')}</button>
            </div>
          </div>
          <table class="tabla-series"><thead><tr><th>#</th><th>Kg</th><th>Reps</th><th>RPE</th><th>RIR</th><th></th></tr></thead><tbody>
            ${ej.series.map((serie, si) => `<tr class="${serie.completada ? 'fila-serie-completa' : ''}">
              <td>${si + 1}</td>
              <td><input type="number" step="0.5" min="0" class="input-serie" data-ei="${ei}" data-si="${si}" data-campo="peso" value="${serie.peso}"></td>
              <td><input type="number" min="0" class="input-serie" data-ei="${ei}" data-si="${si}" data-campo="reps" value="${serie.reps}"></td>
              <td><input type="number" min="1" max="10" class="input-serie" data-ei="${ei}" data-si="${si}" data-campo="rpe" value="${serie.rpe ?? ''}" placeholder="—"></td>
              <td><input type="number" min="0" max="5" class="input-serie" data-ei="${ei}" data-si="${si}" data-campo="rir" value="${serie.rir ?? ''}" placeholder="—"></td>
              <td><button class="checkbox-serie ${serie.completada ? 'checkbox-serie-activo' : ''}" data-ei="${ei}" data-si="${si}" title="Marcar completada">${icon('check')}</button></td>
            </tr>`).join('')}
          </tbody></table>
        </div>`;
      }).join('');

      $$('.input-serie', ejCont).forEach(inp => inp.addEventListener('change', () => {
        const valor = inp.value === '' ? null : Number(inp.value);
        s.ejercicios[inp.dataset.ei].series[inp.dataset.si][inp.dataset.campo] = valor;
      }));
      $$('.checkbox-serie', ejCont).forEach(b => b.addEventListener('click', () => {
        const ejercicio = s.ejercicios[b.dataset.ei];
        const serie = ejercicio.series[b.dataset.si];
        serie.completada = !serie.completada;
        pintar();
        if (serie.completada) abrirWidgetTimer(ejercicio.descansoSeg || 90);
      }));
      $$('[data-agregar-serie]', ejCont).forEach(b => b.addEventListener('click', () => {
        const series = s.ejercicios[b.dataset.agregarSerie].series;
        const ultima = series[series.length - 1];
        series.push({ peso: ultima?.peso || 0, reps: ultima?.reps || 0, rpe: null, rir: null, completada: false });
        pintar();
      }));
      $$('[data-ver-detalle]', ejCont).forEach(b => b.addEventListener('click', () => abrirDetalleEjercicio(b.dataset.verDetalle)));
    }
    pintar();

    $('#btn-cancelar-sesion').addEventListener('click', () => {
      abrirModal(`
        <div class="modal-header"><h3>${icon('warning')} Cancelar entrenamiento</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
        <div class="modal-body"><p>Se va a perder el progreso de esta sesión. ¿Querés continuar?</p></div>
        <div class="modal-footer">
          <button class="btn btn-fantasma" data-cerrar-modal>Seguir entrenando</button>
          <button class="btn btn-peligro" id="btn-confirmar-cancelar-sesion">${icon('trash')} Sí, cancelar</button>
        </div>`, { id: 'modal-cancelar-sesion' });
      $('#btn-confirmar-cancelar-sesion').addEventListener('click', () => {
        clearInterval(cronometroSesionIntervalo);
        cerrarWidgetTimer();
        state.sesionActiva = null;
        cerrarModal();
        cambiarVista('mi-rutina');
      });
    });

    $('#btn-finalizar-sesion').addEventListener('click', async () => {
      const usuario = FirebaseService.getUsuarioActual();
      const ejerciciosSesion = s.ejercicios.map(ej => ({
        ejercicioId: ej.ejercicioId, nombre: ej.nombre, series: ej.series,
        volumen: ej.series.filter(x => x.completada).reduce((sum, x) => sum + x.peso * x.reps, 0)
      }));
      if (!ejerciciosSesion.some(e => e.series.some(x => x.completada))) { toast('Marcá al menos una serie completada.', 'error'); return; }
      await FirebaseService.agregarEntrenamiento(usuario.uid, usuario.entrenadorId, {
        rutinaNombre: s.rutinaNombre, diaNombre: s.diaNombre,
        duracionSeg: Math.round((Date.now() - s.inicio) / 1000),
        ejercicios: ejerciciosSesion,
        volumenTotal: ejerciciosSesion.reduce((sum, e) => sum + e.volumen, 0)
      });
      clearInterval(cronometroSesionIntervalo);
      cerrarWidgetTimer();
      toast('¡Entrenamiento guardado!', 'logro');
      state.sesionActiva = null;
      cambiarVista('mi-progreso');
    });
  }
  RENDERERS['sesion'] = renderSesion;

  // ---------------------------------------------------------------------
  // Motor de estadísticas — deriva todo del historial ya cargado desde
  // Firestore (a diferencia de Becker App, acá no hay un StorageManager
  // local: el historial se pasa como parámetro a cada función).
  // ---------------------------------------------------------------------
  const Stats = {
    inicioSemana(fecha = new Date()) {
      const d = new Date(fecha);
      const dia = d.getDay();
      d.setDate(d.getDate() + ((dia === 0 ? -6 : 1) - dia));
      d.setHours(0, 0, 0, 0);
      return d;
    },
    finSemana(fecha = new Date()) {
      const fin = Stats.inicioSemana(fecha);
      fin.setDate(fin.getDate() + 7);
      return fin;
    },
    toDateKey(iso) { return new Date(iso).toISOString().slice(0, 10); },
    resumenDe(sesiones) {
      let volumenTotal = 0, seriesTotales = 0, repsTotales = 0, pesoMax = 0, duracionSeg = 0;
      sesiones.forEach(s => {
        duracionSeg += s.duracionSeg || 0;
        (s.ejercicios || []).forEach(ej => (ej.series || []).forEach(serie => {
          if (!serie.completada) return;
          seriesTotales++;
          repsTotales += Number(serie.reps) || 0;
          volumenTotal += (Number(serie.peso) || 0) * (Number(serie.reps) || 0);
          if (serie.peso > pesoMax) pesoMax = serie.peso;
        }));
      });
      return { entrenamientos: sesiones.length, volumenTotal, seriesTotales, repsTotales, pesoMax, duracionSeg };
    },
    getResumenSemanal(historial, fechaRef = new Date()) {
      const desde = Stats.inicioSemana(fechaRef), hasta = Stats.finSemana(fechaRef);
      return Stats.resumenDe(historial.filter(s => { const f = new Date(s.fecha); return f >= desde && f < hasta; }));
    },
    getRacha(historial) {
      if (!historial.length) return 0;
      const dias = new Set(historial.map(s => Stats.toDateKey(s.fecha)));
      let cursor = new Date();
      if (!dias.has(Stats.toDateKey(cursor.toISOString()))) cursor.setDate(cursor.getDate() - 1);
      let racha = 0;
      while (dias.has(Stats.toDateKey(cursor.toISOString()))) { racha++; cursor.setDate(cursor.getDate() - 1); }
      return racha;
    },
    getCalendarioActividad(historial, anio, mes) {
      const mapa = {};
      historial.forEach(s => {
        const f = new Date(s.fecha);
        if (f.getFullYear() === anio && f.getMonth() === mes) (mapa[f.getDate()] = mapa[f.getDate()] || []).push(s.id);
      });
      return mapa;
    },
    getPRs(historial) {
      const records = {};
      historial.forEach(s => (s.ejercicios || []).forEach(ej => (ej.series || []).forEach(serie => {
        if (!serie.completada || !serie.peso) return;
        const actual = records[ej.ejercicioId];
        if (!actual || serie.peso > actual.pesoMax) records[ej.ejercicioId] = { pesoMax: serie.peso, reps: serie.reps, fecha: s.fecha, nombre: ej.nombre };
      })));
      return records;
    }
  };

  // ---------------------------------------------------------------------
  // Vista: Inicio (alumno)
  // ---------------------------------------------------------------------
  const FRASES_MOTIVACIONALES = [
    'El único entrenamiento malo es el que no hiciste.',
    'La disciplina vence a la motivación cuando esta última se apaga.',
    'No busques resultados rápidos, buscá resultados que duren.',
    'Cada serie completada es una promesa cumplida con vos mismo.',
    'El progreso no siempre se ve en la balanza, a veces se siente en la barra.',
    'Hoy es un buen día para superar a la versión de ayer.',
    'La constancia transforma más que la intensidad de un solo día.',
    'Tu único rival de verdad sos vos mismo hace una semana.',
    'Los resultados llegan cuando el esfuerzo se vuelve rutina.',
    'Nadie dijo que sería fácil, pero vale la pena.',
    'Un entrenamiento a la vez, un día a la vez.',
    'La fuerza no viene de lo que podés hacer, sino de superar lo que pensabas que no podías.',
    'El cuerpo logra lo que la mente cree.',
    'Pequeños pasos constantes ganan carreras largas.',
    'Hoy entrenás por el vos del futuro.'
  ];
  function fraseMotivacionalDelDia() {
    const diaDelAnio = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    return FRASES_MOTIVACIONALES[diaDelAnio % FRASES_MOTIVACIONALES.length];
  }

  let relojInicioIntervalo = null;
  async function renderInicio() {
    const cont = $('#view-inicio');
    const usuario = FirebaseService.getUsuarioActual();
    cont.innerHTML = `<p class="texto-suave">Cargando...</p>`;
    let historial;
    try { historial = await FirebaseService.getHistorial(usuario.uid); }
    catch (err) { console.error(err); cont.innerHTML = `<p class="texto-suave estado-vacio">No se pudo cargar tu resumen. Probá de nuevo en un momento.</p>`; return; }

    const ahora = new Date();
    const resumen = Stats.getResumenSemanal(historial, ahora);
    const racha = Stats.getRacha(historial);
    const inicioSem = Stats.inicioSemana(ahora);
    const finSem = new Date(inicioSem.getTime() + 6 * 86400000);
    const prs = Stats.getPRs(historial);
    const pesoMaxGlobal = Object.values(prs).reduce((m, r) => Math.max(m, r.pesoMax || 0), 0);

    cont.innerHTML = `
      <div class="inicio-saludo">
        <h1>Hola, ${escapeHtml((usuario.nombre || '').split(' ')[0] || '')}</h1>
        <p class="texto-suave" id="inicio-fecha-hora"></p>
      </div>
      <div class="tarjeta-objetivo" style="margin-bottom:1.2rem;background:var(--color-acento-suave);border-color:var(--color-acento)">
        <p style="margin:0;font-style:italic">${icon('flame')} ${escapeHtml(usuario.notasEntrenador?.trim() || fraseMotivacionalDelDia())}</p>
        ${usuario.notasEntrenador?.trim() ? `<p class="texto-suave texto-pequeno" style="margin:.4rem 0 0">— Mensaje de tu entrenador</p>` : ''}
      </div>
      <div id="inicio-semana-actual" style="margin-bottom:1.2rem">
        <div class="chip-semana">${icon('calendar')} Esta semana · ${formatFecha(inicioSem)} — ${formatFecha(finSem)}</div>
      </div>
      <div class="grid-cards-resumen" id="inicio-cards"></div>
      <div class="panel" style="margin-top:1.4rem">
        <h3>${icon('calendar')} Este mes</h3>
        <div class="calendario-encabezado" style="margin-top:.9rem">${DIAS_SEMANA.map(d => `<span>${d}</span>`).join('')}</div>
        <div class="calendario-grid" id="inicio-calendario-mini"></div>
      </div>`;

    actualizarRelojInicio();
    const cards = [
      { icono: 'routine', valor: resumen.entrenamientos, label: 'Entrenamientos (semana)', color: '' },
      { icono: 'repeat', valor: resumen.seriesTotales, label: 'Series realizadas', color: '' },
      { icono: 'stats', valor: `${formatNumero(resumen.volumenTotal)} kg`, label: 'Volumen levantado', color: 'exito' },
      { icono: 'trophy', valor: `${formatNumero(pesoMaxGlobal)} kg`, label: 'Récord personal máximo', color: 'exito' },
      { icono: 'flame', valor: `${racha} ${racha === 1 ? 'día' : 'días'}`, label: 'Racha actual', color: racha > 0 ? 'exito' : '' },
      { icono: 'timer', valor: formatDuracion(resumen.duracionSeg), label: 'Tiempo entrenado (semana)', color: '' }
    ];
    $('#inicio-cards').innerHTML = cards.map(c => `
      <div class="card-stat ${c.color}"><div class="card-stat-icono">${icon(c.icono)}</div><div class="card-stat-valor">${c.valor}</div><div class="card-stat-label">${c.label}</div></div>`).join('');

    renderCalendarioMiniInicio(historial, ahora);
  }
  RENDERERS['inicio'] = renderInicio;

  function actualizarRelojInicio() {
    clearInterval(relojInicioIntervalo);
    const render = () => {
      const el = $('#inicio-fecha-hora');
      if (!el) { clearInterval(relojInicioIntervalo); return; }
      const fecha = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      el.textContent = fecha.charAt(0).toUpperCase() + fecha.slice(1);
    };
    render();
    relojInicioIntervalo = setInterval(render, 30000);
  }

  function renderCalendarioMiniInicio(historial, ahora) {
    const cont = $('#inicio-calendario-mini');
    if (!cont) return;
    const actividad = Stats.getCalendarioActividad(historial, ahora.getFullYear(), ahora.getMonth());
    const primerDiaSemana = (new Date(ahora.getFullYear(), ahora.getMonth(), 1).getDay() + 6) % 7;
    const totalDias = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0).getDate();
    let celdas = '';
    for (let i = 0; i < primerDiaSemana; i++) celdas += `<div class="dia-calendario dia-calendario-vacio"></div>`;
    for (let d = 1; d <= totalDias; d++) {
      const entreno = !!actividad[d];
      const esHoy = d === ahora.getDate();
      celdas += `<div class="dia-calendario ${entreno ? 'dia-calendario-activo' : ''} ${esHoy ? 'dia-calendario-hoy' : ''}"><span class="dia-calendario-numero">${d}</span>${entreno ? '<span class="dia-calendario-punto"></span>' : ''}</div>`;
    }
    cont.innerHTML = celdas;
  }

  // ---------------------------------------------------------------------
  // Vista: Calendario (alumno) — mes completo, navegable
  // ---------------------------------------------------------------------
  async function renderCalendario() {
    const cont = $('#view-calendario');
    const usuario = FirebaseService.getUsuarioActual();
    cont.innerHTML = `<p class="texto-suave">Cargando...</p>`;
    let historial;
    try { historial = await FirebaseService.getHistorial(usuario.uid); }
    catch (err) { console.error(err); cont.innerHTML = `<p class="texto-suave estado-vacio">No se pudo cargar el calendario.</p>`; return; }

    if (!state.calendario) state.calendario = { anio: new Date().getFullYear(), mes: new Date().getMonth() };

    cont.innerHTML = `
      <div class="vista-header">
        <h2>${icon('calendar')} Calendario</h2>
        <div class="calendario-nav">
          <button class="btn-icono" id="btn-mes-anterior">${icon('chevron-left')}</button>
          <span id="calendario-titulo"></span>
          <button class="btn-icono" id="btn-mes-siguiente">${icon('chevron-right')}</button>
        </div>
      </div>
      <div class="calendario-encabezado">${DIAS_SEMANA.map(d => `<span>${d}</span>`).join('')}</div>
      <div class="calendario-grid" id="calendario-grid"></div>`;

    function pintarGrid() {
      const { anio, mes } = state.calendario;
      $('#calendario-titulo').textContent = `${MESES[mes].charAt(0).toUpperCase() + MESES[mes].slice(1)} ${anio}`;
      const actividad = Stats.getCalendarioActividad(historial, anio, mes);
      const primerDiaSemana = (new Date(anio, mes, 1).getDay() + 6) % 7;
      const totalDias = new Date(anio, mes + 1, 0).getDate();
      const hoy = new Date();
      let celdas = '';
      for (let i = 0; i < primerDiaSemana; i++) celdas += `<div class="dia-calendario dia-calendario-vacio"></div>`;
      for (let d = 1; d <= totalDias; d++) {
        const sesiones = actividad[d] || [];
        const esHoy = d === hoy.getDate() && mes === hoy.getMonth() && anio === hoy.getFullYear();
        celdas += `<button class="dia-calendario ${sesiones.length ? 'dia-calendario-activo' : ''} ${esHoy ? 'dia-calendario-hoy' : ''}" ${sesiones.length ? `data-sesiones="${sesiones.join(',')}"` : 'disabled'}>
          <span class="dia-calendario-numero">${d}</span>${sesiones.length ? '<span class="dia-calendario-punto"></span>' : ''}</button>`;
      }
      $('#calendario-grid').innerHTML = celdas;
      $$('.dia-calendario[data-sesiones]', $('#calendario-grid')).forEach(btn => btn.addEventListener('click', () => {
        const ids = btn.dataset.sesiones.split(',');
        const sesiones = ids.map(id => historial.find(h => h.id === id)).filter(Boolean);
        if (sesiones.length === 1) abrirModalDetalleSesion(sesiones[0]);
        else abrirModalListaSesionesDia(sesiones);
      }));
    }
    $('#btn-mes-anterior').addEventListener('click', () => {
      state.calendario.mes--; if (state.calendario.mes < 0) { state.calendario.mes = 11; state.calendario.anio--; }
      pintarGrid();
    });
    $('#btn-mes-siguiente').addEventListener('click', () => {
      state.calendario.mes++; if (state.calendario.mes > 11) { state.calendario.mes = 0; state.calendario.anio++; }
      pintarGrid();
    });
    pintarGrid();
  }
  RENDERERS['calendario'] = renderCalendario;

  function abrirModalListaSesionesDia(sesiones) {
    abrirModal(`
      <div class="modal-header"><h3>${icon('calendar')} Entrenamientos de ese día</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">${sesiones.map(s => `
        <button class="fila-historial" data-id="${s.id}"><div class="fila-historial-info"><strong>${escapeHtml(s.diaNombre || s.rutinaNombre || 'Entrenamiento')}</strong></div>${icon('chevron-right')}</button>`).join('')}</div>`,
      { id: 'modal-sesiones-dia' });
    $$('.fila-historial', $('#modal-root')).forEach(f => f.addEventListener('click', () => {
      const s = sesiones.find(x => x.id === f.dataset.id);
      if (s) abrirModalDetalleSesion(s);
    }));
  }

  // ---------------------------------------------------------------------
  // Vista: Calculadoras — sin dependencia de datos, igual que Becker App
  // ---------------------------------------------------------------------
  const DISCOS_DISPONIBLES = [25, 20, 15, 10, 5, 2.5, 1.25];

  function renderCalculadoras() {
    const cont = $('#view-calculadoras');
    cont.innerHTML = `
      <div class="vista-header"><h2>${icon('calculator')} Calculadoras</h2></div>
      <div class="calc-tabs" id="calc-tabs">
        <button class="calc-tab calc-tab-activo" data-calc="1rm">1RM</button>
        <button class="calc-tab" data-calc="imc">IMC</button>
        <button class="calc-tab" data-calc="volumen">Volumen sesión</button>
        <button class="calc-tab" data-calc="carga">Carga barra</button>
        <button class="calc-tab" data-calc="porcentaje">Peso por %</button>
        <button class="calc-tab" data-calc="discos">Discos</button>
      </div>
      <div class="panel" id="calc-contenido"></div>`;
    $$('.calc-tab', cont).forEach(btn => btn.addEventListener('click', () => {
      $$('.calc-tab', cont).forEach(b => b.classList.remove('calc-tab-activo'));
      btn.classList.add('calc-tab-activo');
      renderCalculadora(btn.dataset.calc);
    }));
    renderCalculadora('1rm');
  }
  RENDERERS['calculadoras'] = renderCalculadoras;

  function renderCalculadora(tipo) {
    const cont = $('#calc-contenido');
    const plantillas = {
      '1rm': `<h3>Calculadora de 1RM (fórmula de Epley)</h3>
        <div class="campo-fila">
          <label class="campo"><span>Peso levantado (kg)</span><input type="number" id="c1-peso" min="0" step="0.5" value="60"></label>
          <label class="campo"><span>Repeticiones realizadas</span><input type="number" id="c1-reps" min="1" max="15" value="8"></label>
        </div>
        <div class="resultado-calc" id="c1-resultado"></div>
        <p class="texto-suave">Estimación orientativa. La precisión disminuye a partir de 12-15 repeticiones.</p>`,
      'imc': `<h3>Índice de Masa Corporal</h3>
        <div class="campo-fila">
          <label class="campo"><span>Peso (kg)</span><input type="number" id="c2-peso" min="0" step="0.1" value="75"></label>
          <label class="campo"><span>Altura (cm)</span><input type="number" id="c2-altura" min="0" step="0.5" value="175"></label>
        </div>
        <div class="resultado-calc" id="c2-resultado"></div>`,
      'volumen': `<h3>Volumen total de una sesión</h3>
        <p class="texto-suave">Ingresá series en formato <code>peso x reps</code> separadas por coma. Ej: <code>80x8, 80x8, 82.5x6</code></p>
        <label class="campo"><input type="text" id="c4-series" placeholder="80x8, 80x8, 82.5x6"></label>
        <div class="resultado-calc" id="c4-resultado"></div>`,
      'carga': `<h3>Carga total de la barra</h3>
        <div class="campo-fila">
          <label class="campo"><span>Peso de la barra (kg)</span><input type="number" id="c5-barra" min="0" step="0.5" value="20"></label>
          <label class="campo"><span>Peso por lado (kg)</span><input type="number" id="c5-lado" min="0" step="0.5" value="20"></label>
        </div>
        <div class="resultado-calc" id="c5-resultado"></div>`,
      'porcentaje': `<h3>Peso según porcentaje de tu 1RM</h3>
        <div class="campo-fila">
          <label class="campo"><span>1RM (kg)</span><input type="number" id="c6-1rm" min="0" step="0.5" value="100"></label>
          <label class="campo"><span>Porcentaje (%)</span><input type="number" id="c6-pct" min="0" max="120" value="80"></label>
        </div>
        <div class="resultado-calc" id="c6-resultado"></div>`,
      'discos': `<h3>Calculadora de discos</h3>
        <div class="campo-fila">
          <label class="campo"><span>Peso objetivo total (kg)</span><input type="number" id="c7-total" min="0" step="0.5" value="100"></label>
          <label class="campo"><span>Peso de la barra (kg)</span><input type="number" id="c7-barra" min="0" step="0.5" value="20"></label>
        </div>
        <div class="resultado-calc" id="c7-resultado"></div>
        <p class="texto-suave">Discos disponibles por lado: ${DISCOS_DISPONIBLES.join(', ')} kg</p>`
    };
    cont.innerHTML = plantillas[tipo];

    const recalcular = {
      '1rm': () => {
        const peso = Number($('#c1-peso').value) || 0, reps = Number($('#c1-reps').value) || 1;
        const rm = peso * (1 + reps / 30);
        $('#c1-resultado').innerHTML = `<strong>1RM estimado: ${formatNumero(rm, 1)} kg</strong>
          <div class="tabla-porcentajes">${[95, 90, 85, 80, 75, 70, 65, 60].map(p => `<div><span>${p}%</span><span>${formatNumero(rm * p / 100, 1)} kg</span></div>`).join('')}</div>`;
      },
      'imc': () => {
        const peso = Number($('#c2-peso').value) || 0, alturaM = (Number($('#c2-altura').value) || 1) / 100;
        const imc = peso / (alturaM * alturaM);
        let categoria = 'Peso normal';
        if (imc < 18.5) categoria = 'Bajo peso'; else if (imc >= 25 && imc < 30) categoria = 'Sobrepeso'; else if (imc >= 30) categoria = 'Obesidad';
        $('#c2-resultado').innerHTML = `<strong>IMC: ${formatNumero(imc, 1)}</strong><br><span class="texto-suave">Categoría: ${categoria}</span>`;
      },
      'volumen': () => {
        const texto = $('#c4-series').value.trim();
        if (!texto) { $('#c4-resultado').innerHTML = ''; return; }
        const partes = texto.split(',').map(p => p.trim()).filter(Boolean);
        let volumen = 0, validas = 0;
        partes.forEach(p => { const m = p.match(/^([\d.]+)\s*x\s*([\d.]+)$/i); if (m) { volumen += Number(m[1]) * Number(m[2]); validas++; } });
        $('#c4-resultado').innerHTML = validas ? `<strong>Volumen total: ${formatNumero(volumen, 1)} kg</strong><br><span class="texto-suave">${validas} serie(s) reconocida(s)</span>` : `<span class="texto-suave">Formato no reconocido. Usá "peso x reps".</span>`;
      },
      'carga': () => {
        const barra = Number($('#c5-barra').value) || 0, lado = Number($('#c5-lado').value) || 0;
        $('#c5-resultado').innerHTML = `<strong>Carga total: ${formatNumero(barra + lado * 2, 1)} kg</strong>`;
      },
      'porcentaje': () => {
        const rm = Number($('#c6-1rm').value) || 0, pct = Number($('#c6-pct').value) || 0;
        $('#c6-resultado').innerHTML = `<strong>${formatNumero(rm * pct / 100, 1)} kg</strong>`;
      },
      'discos': () => {
        let objetivo = Number($('#c7-total').value) || 0;
        const barra = Number($('#c7-barra').value) || 0;
        let porLado = Math.max(0, (objetivo - barra) / 2);
        const usados = [];
        DISCOS_DISPONIBLES.forEach(d => { while (porLado >= d - 0.001) { usados.push(d); porLado -= d; } });
        $('#c7-resultado').innerHTML = usados.length
          ? `<strong>Por lado:</strong> ${usados.map(d => `${d}kg`).join(' + ')}<br><span class="texto-suave">Total real: ${formatNumero(barra + usados.reduce((a, b) => a + b, 0) * 2, 2)} kg</span>`
          : `<span class="texto-suave">Ingresá un peso objetivo mayor que la barra.</span>`;
      }
    };
    $$('input', cont).forEach(input => input.addEventListener('input', debounce(() => recalcular[tipo](), 120)));
    recalcular[tipo]();
  }


  async function renderMiProgreso() {
    const cont = $('#view-mi-progreso');
    const usuario = FirebaseService.getUsuarioActual();
    cont.innerHTML = `<p class="texto-suave">Cargando...</p>`;
    let historial;
    try {
      historial = await FirebaseService.getHistorial(usuario.uid);
    } catch (err) {
      console.error('Error cargando historial:', err);
      const necesitaIndice = (err && err.message || '').includes('index');
      cont.innerHTML = `<div class="estado-vacio">
        <p class="texto-suave">${necesitaIndice
          ? 'Falta crear un índice en Firestore para esta consulta. Revisá la consola del navegador (F12): el error de Firebase trae un link que lo crea automáticamente con un clic.'
          : 'No se pudo cargar el historial (error de permisos o de conexión).'}</p>
        <p class="texto-pequeno texto-suave" style="margin-top:.6rem;word-break:break-all">${escapeHtml(err?.message || String(err))}</p>
      </div>`;
      return;
    }
    historial.sort((a, b) => new Date(a.fecha) - new Date(b.fecha)); // ascendente: para el gráfico
    const historialOrdenado = [...historial].reverse(); // descendente: para la lista (más reciente primero)
    cont.innerHTML = `
      <div class="panel-header"><h2>Mi progreso</h2></div>
      <div class="grid-cards-resumen" style="grid-template-columns:repeat(2,1fr)">
        <div class="card-stat"><div class="card-stat-icono">${icon('routine')}</div><div class="card-stat-valor">${historial.length}</div><div class="card-stat-label">Entrenamientos</div></div>
        <div class="card-stat exito"><div class="card-stat-icono">${icon('timer')}</div><div class="card-stat-valor">${formatDuracion(historial.length ? historial.reduce((s, h) => s + (h.duracionSeg || 0), 0) / historial.length : 0)}</div><div class="card-stat-label">Duración promedio</div></div>
      </div>
      <div class="panel"><h3>Volumen por sesión</h3><div class="contenedor-grafico" style="margin-top:.8rem"><canvas id="grafico-mi-progreso"></canvas></div></div>
      <div class="panel" style="margin-top:1.2rem">
        <h3>${icon('history')} Historial de entrenamientos</h3>
        <div id="historial-alumno-lista" class="lista-historial" style="margin-top:.9rem"></div>
      </div>`;
    renderGraficoProgresoAlumno.call(null, historial);
    const canvas = $('#grafico-mi-progreso');
    if (canvas && typeof Chart !== 'undefined') {
      new Chart(canvas.getContext('2d'), {
        type: 'line',
        data: { labels: historial.map(h => formatFecha(h.fecha, { day: '2-digit', month: 'short' })), datasets: [{ label: 'Volumen (kg)', data: historial.map(h => h.volumenTotal || 0), borderColor: MARCA.colorAcento, backgroundColor: MARCA.colorAcento + '33', fill: true, tension: .3 }] },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }

    const listaCont = $('#historial-alumno-lista');
    if (!historialOrdenado.length) {
      listaCont.innerHTML = `<p class="texto-suave estado-vacio">Todavía no registraste ningún entrenamiento. ¡Empezá uno desde "Mi rutina"!</p>`;
      return;
    }
    listaCont.innerHTML = historialOrdenado.map(s => {
      const seriesCompletas = (s.ejercicios || []).reduce((n, ej) => n + ej.series.filter(x => x.completada).length, 0);
      return `
        <button class="fila-historial" data-id="${s.id}">
          <div class="fila-historial-fecha"><strong>${formatFecha(s.fecha, { day: '2-digit', month: 'short' })}</strong><span class="texto-suave">${formatFecha(s.fecha, { year: 'numeric' })}</span></div>
          <div class="fila-historial-info"><strong>${escapeHtml(s.diaNombre || s.rutinaNombre || 'Entrenamiento')}</strong><span class="texto-suave">${(s.ejercicios || []).length} ejercicios · ${seriesCompletas} series · ${formatDuracion(s.duracionSeg)}</span></div>
          <div class="fila-historial-volumen"><strong>${formatNumero(s.volumenTotal || 0)} kg</strong><span class="texto-suave">volumen</span></div>
          ${icon('chevron-right')}
        </button>`;
    }).join('');
    $$('.fila-historial', listaCont).forEach(fila => fila.addEventListener('click', () => {
      const sesion = historialOrdenado.find(h => h.id === fila.dataset.id);
      if (sesion) abrirModalDetalleSesion(sesion);
    }));
  }
  RENDERERS['mi-progreso'] = renderMiProgreso;

  function abrirModalDetalleSesion(s) {
    abrirModal(`
      <div class="modal-header"><h3>${escapeHtml(s.diaNombre || s.rutinaNombre || 'Entrenamiento')}</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        <p class="texto-suave">${formatFecha(s.fecha, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · ${formatDuracion(s.duracionSeg)}</p>
        ${(s.ejercicios || []).map(ej => `
          <div class="detalle-sesion-ejercicio">
            <h4>${escapeHtml(ej.nombre)}</h4>
            <table class="tabla-series tabla-series-lectura">
              <thead><tr><th>#</th><th>Peso</th><th>Reps</th><th>RPE</th><th>RIR</th><th></th></tr></thead>
              <tbody>
                ${ej.series.map((x, i) => `<tr class="${x.completada ? '' : 'fila-serie-incompleta'}">
                  <td>${i + 1}</td><td>${x.peso} kg</td><td>${x.reps}</td><td>${x.rpe ?? '—'}</td><td>${x.rir ?? '—'}</td>
                  <td>${x.completada ? icon('check-circle') : '—'}</td></tr>`).join('')}
              </tbody>
            </table>
            <p class="texto-suave">Volumen: ${formatNumero(ej.volumen || 0)} kg</p>
          </div>`).join('')}
      </div>
      <div class="modal-footer"><button class="btn btn-primario" data-cerrar-modal>${icon('check')} Cerrar</button></div>`,
      { ancho: 'lg', id: 'modal-detalle-sesion' });
  }

  // ---------------------------------------------------------------------
  // Autenticación (UI)
  // ---------------------------------------------------------------------
  function initAuthUI() {
    $$('.auth-tab').forEach(tab => tab.addEventListener('click', () => {
      $$('.auth-tab').forEach(t => t.classList.remove('auth-tab-activo'));
      tab.classList.add('auth-tab-activo');
      $('#form-login').hidden = tab.dataset.tab !== 'login';
      $('#form-registro').hidden = tab.dataset.tab !== 'registro';
    }));

    const chequearEmailSuperadmin = () => {
      const esSuperadmin = $('#registro-email').value.trim().toLowerCase() === EMAIL_SUPERADMIN.toLowerCase();
      const campoCodigo = $('#campo-codigo');
      if (campoCodigo) {
        campoCodigo.hidden = esSuperadmin;
        $('#registro-codigo').required = !esSuperadmin;
      }
    };
    ['input', 'change', 'keyup', 'blur'].forEach(ev => {
      $('#registro-email')?.addEventListener(ev, chequearEmailSuperadmin);
    });

    $('#form-login').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = $('#login-error'); err.hidden = true;
      const email = $('#login-email').value.trim();
      const password = $('#login-password').value;
      try {
        const usuario = await FirebaseService.iniciarSesion(email, password);
        await entrarConUsuario(usuario);
      } catch (ex) {
        if (ex.code === 'app/cuenta-eliminada') {
          abrirModalCuentaEliminada(email, password);
          return;
        }
        err.textContent = traducirErrorFirebase(ex); err.hidden = false;
      }
    });

    $('#form-registro').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = $('#registro-error'); err.hidden = true;
      try {
        const usuario = await FirebaseService.registrarUsuario({
          nombre: $('#registro-nombre').value.trim(),
          email: $('#registro-email').value.trim(),
          password: $('#registro-password').value,
          codigo: $('#registro-codigo').value.trim()
        });
        await entrarConUsuario(usuario);
      } catch (ex) {
        err.textContent = traducirErrorFirebase(ex); err.hidden = false;
      }
    });

    $('#btn-olvide-password').addEventListener('click', async () => {
      const email = $('#login-email').value.trim();
      if (!email) { toast('Escribí tu email arriba primero.', 'error'); return; }
      try { await FirebaseService.recuperarContrasena(email); toast('Te mandamos un email para restablecer tu contraseña.', 'exito'); }
      catch (ex) { toast(traducirErrorFirebase(ex), 'error'); }
    });

    $('#btn-cerrar-sesion').addEventListener('click', () => { cerrarWidgetTimer(); FirebaseService.cerrarSesion(); });
    $('#btn-cerrar-sesion-suspendido')?.addEventListener('click', () => { cerrarWidgetTimer(); FirebaseService.cerrarSesion(); });
    $('#btn-menu-movil')?.addEventListener('click', () => $('#sidebar').classList.toggle('sidebar-abierto'));
  }

  function abrirModalCuentaEliminada(email, password) {
    abrirModal(`
      <div class="modal-header"><h3>${icon('warning')} Cuenta eliminada</h3><button data-cerrar-modal class="btn-icono">${icon('close')}</button></div>
      <div class="modal-body">
        <p class="texto-suave" style="margin-bottom:1rem">Tu ficha fue eliminada por tu entrenador. Para volver a entrar, pedile un código de invitación nuevo y completá estos datos (tu email y contraseña se mantienen, solo hace falta recrear tu ficha).</p>
        <label class="campo"><span>Nombre completo</span><input type="text" id="input-nombre-recuperacion" autofocus></label>
        <label class="campo"><span>Código de invitación</span><input type="text" id="input-codigo-recuperacion" style="text-transform:uppercase"></label>
        <p class="auth-error" id="error-recuperacion" hidden></p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-fantasma" data-cerrar-modal>Cancelar</button>
        <button class="btn btn-primario" id="btn-confirmar-recuperacion">${icon('check')} Completar registro</button>
      </div>`, { id: 'modal-cuenta-eliminada' });

    $('#btn-confirmar-recuperacion').addEventListener('click', async () => {
      const errEl = $('#error-recuperacion'); errEl.hidden = true;
      const nombre = $('#input-nombre-recuperacion').value.trim();
      const codigo = $('#input-codigo-recuperacion').value.trim();
      if (!nombre || !codigo) { errEl.textContent = 'Completá los dos campos.'; errEl.hidden = false; return; }
      try {
        const usuario = await FirebaseService.completarRegistroTrasEliminacion({ email, password, nombre, codigo });
        cerrarModal();
        await entrarConUsuario(usuario);
      } catch (ex) {
        errEl.textContent = traducirErrorFirebase(ex); errEl.hidden = false;
      }
    });
  }

  function traducirErrorFirebase(ex) {
    const c = ex.code || '';
    if (c.includes('email-already-in-use')) return 'Ese email ya está registrado. Probá iniciar sesión.';
    if (c.includes('invalid-email')) return 'El email no es válido.';
    if (c.includes('weak-password')) return 'La contraseña necesita al menos 6 caracteres.';
    if (c.includes('user-not-found') || c.includes('wrong-password') || c.includes('invalid-credential')) return 'Email o contraseña incorrectos.';
    if (c.includes('too-many-requests')) return 'Demasiados intentos. Probá de nuevo en un rato.';
    if (c.includes('permission-denied')) return 'No se pudo crear la cuenta por un problema de permisos. Avisale a Becker.';
    if (!c && ex.message) return ex.message;
    return 'Ocurrió un error. Probá de nuevo.';
  }

  // ---------------------------------------------------------------------
  // Inicialización
  // ---------------------------------------------------------------------
  function ocultarSplash() {
    const splash = $('#splash-screen');
    if (!splash) return;
    setTimeout(() => { splash.classList.add('splash-oculto'); setTimeout(() => splash.remove(), 600); }, 900);
  }

  function aplicarMarcaEnDOM() {
    $$('[data-marca="nombre"]').forEach(el => { el.textContent = MARCA.nombre; });
    $$('[data-marca="sufijo"]').forEach(el => { el.textContent = MARCA.sufijo; });
  }

  function init() {
    aplicarMarcaEnDOM();
    initAuthUI();
    initWidgetTimer();

    if (!FirebaseService.configurado()) {
      ocultarSplash();
      $('#pantalla-auth').hidden = false;
      abrirModal(`
        <div class="modal-header"><h3>${icon('warning')} Falta conectar Firebase</h3></div>
        <div class="modal-body"><p>Esta app todavía no tiene un proyecto de Firebase conectado. Completá <code>js/firebase-config.js</code> con los datos de tu proyecto para poder usarla.</p></div>`, { id: 'modal-sin-firebase' });
      return;
    }

    FirebaseService.init();
    FirebaseService.onCambioSesion((usuario) => {
      ocultarSplash();
      if (!usuario) {
        ultimoUidRenderizado = null;
        $('#pantalla-auth').hidden = false;
        $('#app').hidden = true;
        return;
      }
      entrarConUsuario(usuario);
    });
  }

  let ultimoUidRenderizado = null;

  async function mostrarPantallaSuspendido() {
    $('#pantalla-auth').hidden = true;
    $('#app').hidden = true;
    $('#pantalla-suspendido').hidden = false;
  }

  async function entrarConUsuario(usuario) {
    // Un entrenador suspendido no entra.
    if (usuario.rol === 'entrenador' && usuario.estadoPago === 'suspendido') {
      mostrarPantallaSuspendido();
      return;
    }
    // Un alumno suspendido directamente, o cuyo entrenador está
    // suspendido, tampoco entra.
    if (usuario.rol === 'alumno') {
      if (usuario.estadoPago === 'suspendido') { mostrarPantallaSuspendido(); return; }
      const estado = await FirebaseService.getEstadoEntrenador(usuario.entrenadorId);
      if (estado === 'suspendido') { mostrarPantallaSuspendido(); return; }
    }

    // Evita re-renderizar todo si ya se está mostrando la sesión de este
    // mismo usuario: esta función se puede disparar dos veces casi al mismo
    // tiempo (una desde el formulario de login/registro, otra desde el
    // aviso de sesión de Firebase), y sin este chequeo eso duplicaba
    // botones y sus acciones (ej. "Generar código" creaba dos códigos).
    if (ultimoUidRenderizado === usuario.uid && !$('#app').hidden) return;
    ultimoUidRenderizado = usuario.uid;

    $('#pantalla-suspendido').hidden = true;
    $('#pantalla-auth').hidden = true;
    $('#app').hidden = false;
    cerrarWidgetTimer();
    construirSidebar(usuario);
    const vistaInicial = usuario.rol === 'superadmin' ? 'superadmin' : usuario.rol === 'entrenador' ? 'alumnos' : 'inicio';
    cambiarVista(vistaInicial);
  }

  return { init, $, $$ };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
