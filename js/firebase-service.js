/**
 * firebase-service.js
 * -----------------------------------------------------------------------
 * Toda la comunicación con Firebase pasa por acá. El resto de la app no
 * llama a firebase.* directamente, solo a las funciones de este archivo.
 *
 * Modelo de tres roles: superadmin (Becker, único) / entrenador (cada PT
 * que compra la app) / alumno (cliente de un entrenador puntual).
 *
 * Colecciones en Firestore:
 *   usuarios/{uid}          -> { rol, nombre, email, entrenadorId, objetivo,
 *                                 nivel, estadoPago, nombreNegocio, fechaAlta }
 *   codigosInvitacion/{cod} -> { tipo: 'entrenador', nombreNegocio, usado,
 *                                 fechaCreacion }
 *   rutinas/{alumnoUid}     -> { nombre, tipo, objetivo, nivel, metodologia,
 *                                 calentamiento: [ejercicioId...],
 *                                 dias: [ {id, nombre, ejercicios:[...]} ],
 *                                 actualizada }
 *   entrenamientos/{id}     -> { alumnoUid, entrenadorId, fecha, rutinaNombre,
 *                                 diaNombre, duracionSeg, ejercicios: [...],
 *                                 volumenTotal }
 *
 * Cada alumno tiene UNA sola rutina activa a la vez (documento con su
 * propio uid como ID). El historial de entrenamientos nunca se sobrescribe:
 * cada sesión es un documento nuevo, para siempre.
 *
 * Nota sobre el registro: las reglas de Firestore exigen estar autenticado
 * para poder leer "codigosInvitacion" o la ficha de un entrenador, así que
 * el orden real es: 1) crear el login en Firebase Auth, 2) YA autenticado,
 * validar el código contra Firestore, 3) si es válido, crear la ficha en
 * "usuarios". Si el código no es válido, se borra el login recién creado
 * para no dejar una cuenta fantasma sin ficha.
 */

const FirebaseService = (() => {

  let app, auth, db;
  let usuarioActual = null; // { uid, rol, nombre, email, entrenadorId?, objetivo, nivel, estadoPago? }

  function init() {
    app = firebase.initializeApp(FIREBASE_CONFIG);
    auth = firebase.auth();
    db = firebase.firestore();
  }

  function configurado() {
    return FIREBASE_CONFIG.apiKey !== "TU_API_KEY";
  }

  // ---------------------------------------------------------------------
  // Códigos: se acepta tanto un código de invitación (para entrenadores
  // nuevos) como el uid de un entrenador (su "código propio", para dar de
  // alta alumnos). Requiere sesión iniciada (lo llama registrarUsuario
  // después de crear el login).
  // ---------------------------------------------------------------------
  async function resolverCodigo(codigo) {
    const cod = (codigo || '').trim();
    if (!cod) return { tipo: 'invalido', motivo: 'Ingresá el código que te pasaron para registrarte.' };

    const docInvitacion = await db.collection('codigosInvitacion').doc(cod).get();
    if (docInvitacion.exists) {
      const datos = docInvitacion.data();
      if (datos.usado) return { tipo: 'invalido', motivo: 'Ese código de invitación ya fue usado.' };
      if (datos.tipo !== 'entrenador') return { tipo: 'invalido', motivo: 'Código de invitación no válido.' };
      return { tipo: 'entrenador-nuevo', codigo: cod, nombreNegocio: datos.nombreNegocio || '' };
    }

    const docEntrenador = await db.collection('usuarios').doc(cod).get();
    if (docEntrenador.exists && docEntrenador.data().rol === 'entrenador') {
      return { tipo: 'alumno-de', entrenadorUid: cod };
    }

    return { tipo: 'invalido', motivo: 'No encontramos ese código. Revisalo con la persona que te lo dio.' };
  }

  // ---------------------------------------------------------------------
  // Autenticación
  // ---------------------------------------------------------------------
  function onCambioSesion(callback) {
    auth.onAuthStateChanged(async (user) => {
      if (!user) { usuarioActual = null; callback(null); return; }
      const doc = await db.collection('usuarios').doc(user.uid).get();
      if (!doc.exists) return; // ficha recién creándose (carrera con el registro): no hacer nada, el flujo de registro va a mostrar la app
      usuarioActual = { uid: user.uid, ...doc.data() };
      callback(usuarioActual);
    });
  }

  /**
   * Registra una cuenta nueva. `codigo` es obligatorio salvo que el email
   * coincida con EMAIL_SUPERADMIN. Lanza un Error con mensaje legible si
   * el código no es válido.
   */
  async function registrarUsuario({ nombre, email, password, codigo }) {
    const esSuperadmin = email.trim().toLowerCase() === EMAIL_SUPERADMIN.toLowerCase();
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    let resuelto = null;

    try {
      let datos;

      if (esSuperadmin) {
        datos = { rol: 'superadmin', nombre, email, fechaAlta: new Date().toISOString() };
      } else {
        resuelto = await resolverCodigo(codigo);
        if (resuelto.tipo === 'invalido') throw new Error(resuelto.motivo);

        if (resuelto.tipo === 'entrenador-nuevo') {
          datos = {
            rol: 'entrenador', nombre, email,
            nombreNegocio: resuelto.nombreNegocio || nombre,
            estadoPago: 'activo',
            fechaAlta: new Date().toISOString()
          };
        } else {
          datos = {
            rol: 'alumno', nombre, email,
            entrenadorId: resuelto.entrenadorUid,
            objetivo: null, nivel: null,
            fechaAlta: new Date().toISOString()
          };
        }
      }

      await db.collection('usuarios').doc(cred.user.uid).set(datos);

      if (resuelto && resuelto.tipo === 'entrenador-nuevo') {
        await db.collection('codigosInvitacion').doc(resuelto.codigo).update({ usado: true });
      }

      usuarioActual = { uid: cred.user.uid, ...datos };
      return usuarioActual;
    } catch (err) {
      // Si algo falló después de crear el login (código inválido, etc.),
      // deshacemos el login para no dejar una cuenta fantasma.
      await cred.user.delete().catch(() => {});
      throw err;
    }
  }

  async function iniciarSesion(email, password) {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    const doc = await db.collection('usuarios').doc(cred.user.uid).get();
    if (!doc.exists) {
      // La cuenta de Firebase existe pero su ficha fue borrada por el
      // entrenador (o el superadmin): la cerramos de nuevo y avisamos.
      await auth.signOut();
      const err = new Error('CUENTA_ELIMINADA');
      err.code = 'app/cuenta-eliminada';
      throw err;
    }
    usuarioActual = { uid: cred.user.uid, ...doc.data() };
    return usuarioActual;
  }

  // Se usa después de detectar CUENTA_ELIMINADA: vuelve a autenticar con el
  // mismo email/contraseña (la cuenta de Firebase Auth sigue existiendo,
  // solo se borró la ficha) y crea una ficha nueva con un código nuevo,
  // sin tener que dar de alta una cuenta de Firebase distinta.
  async function completarRegistroTrasEliminacion({ email, password, nombre, codigo }) {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    const resuelto = await resolverCodigo(codigo);
    if (resuelto.tipo === 'invalido') { await auth.signOut(); throw new Error(resuelto.motivo); }

    const datos = resuelto.tipo === 'entrenador-nuevo'
      ? { rol: 'entrenador', nombre, email, nombreNegocio: resuelto.nombreNegocio || nombre, estadoPago: 'activo', fechaAlta: new Date().toISOString() }
      : { rol: 'alumno', nombre, email, entrenadorId: resuelto.entrenadorUid, objetivo: null, nivel: null, fechaAlta: new Date().toISOString() };

    await db.collection('usuarios').doc(cred.user.uid).set(datos);
    if (resuelto.tipo === 'entrenador-nuevo') await db.collection('codigosInvitacion').doc(resuelto.codigo).update({ usado: true });

    usuarioActual = { uid: cred.user.uid, ...datos };
    return usuarioActual;
  }

  // El entrenador elimina PERMANENTEMENTE a un alumno: se borra su ficha y
  // su rutina. Ojo: la cuenta de Firebase Auth del alumno sigue existiendo
  // (no se puede borrar desde el navegador del entrenador); por eso, si
  // ese alumno intenta loguearse de nuevo, iniciarSesion() lo va a detectar
  // como CUENTA_ELIMINADA y le va a pedir completar el registro de nuevo.
  async function eliminarAlumno(alumnoUid) {
    await db.collection('rutinas').doc(alumnoUid).delete().catch(() => {});
    await db.collection('usuarios').doc(alumnoUid).delete();
  }

  function cerrarSesion() {
    return auth.signOut();
  }

  function recuperarContrasena(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function getUsuarioActual() {
    return usuarioActual;
  }

  // ---------------------------------------------------------------------
  // Superadmin: gestión de entrenadores
  // ---------------------------------------------------------------------
  async function listarEntrenadores() {
    const snap = await db.collection('usuarios').where('rol', '==', 'entrenador').get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  }

  function generarCodigoInvitacion() {
    // Código corto, legible para pasar por WhatsApp: 8 caracteres, sin
    // caracteres ambiguos (0/O, 1/I/l).
    const alfabeto = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    let cod = '';
    for (let i = 0; i < 8; i++) cod += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    return cod;
  }

  async function crearCodigoInvitacion(nombreNegocio) {
    const codigo = generarCodigoInvitacion();
    await db.collection('codigosInvitacion').doc(codigo).set({
      tipo: 'entrenador',
      nombreNegocio: nombreNegocio || '',
      usado: false,
      fechaCreacion: new Date().toISOString()
    });
    return codigo;
  }

  async function listarCodigosInvitacion() {
    const snap = await db.collection('codigosInvitacion').orderBy('fechaCreacion', 'desc').get();
    return snap.docs.map(d => ({ codigo: d.id, ...d.data() }));
  }

  async function cambiarEstadoPagoEntrenador(entrenadorUid, estadoPago) {
    await db.collection('usuarios').doc(entrenadorUid).update({ estadoPago });
  }

  // ---------------------------------------------------------------------
  // Entrenador: sus alumnos
  // ---------------------------------------------------------------------
  async function listarAlumnos() {
    if (!usuarioActual) return [];
    const snap = await db.collection('usuarios')
      .where('rol', '==', 'alumno')
      .where('entrenadorId', '==', usuarioActual.uid)
      .get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  }

  async function actualizarFichaAlumno(alumnoUid, { objetivo, nivel, notasEntrenador }) {
    const datos = {};
    if (objetivo !== undefined) datos.objetivo = objetivo;
    if (nivel !== undefined) datos.nivel = nivel;
    if (notasEntrenador !== undefined) datos.notasEntrenador = notasEntrenador;
    await db.collection('usuarios').doc(alumnoUid).update(datos);
  }

  // Estado del entrenador de un alumno (para mostrar pantalla de suspensión)
  async function getEstadoEntrenador(entrenadorUid) {
    const doc = await db.collection('usuarios').doc(entrenadorUid).get();
    return doc.exists ? doc.data().estadoPago : null;
  }

  // ---------------------------------------------------------------------
  // Rutina activa del alumno (un documento por alumno, se sobrescribe)
  // ---------------------------------------------------------------------
  async function getRutina(alumnoUid) {
    const doc = await db.collection('rutinas').doc(alumnoUid).get();
    return doc.exists ? doc.data() : null;
  }

  async function guardarRutina(alumnoUid, rutina) {
    rutina.actualizada = new Date().toISOString();
    await db.collection('rutinas').doc(alumnoUid).set(rutina);
    return rutina;
  }

  async function eliminarRutina(alumnoUid) {
    await db.collection('rutinas').doc(alumnoUid).delete();
  }

  async function cambiarEstadoAlumno(alumnoUid, estadoPago) {
    await db.collection('usuarios').doc(alumnoUid).update({ estadoPago });
  }

  // ---------------------------------------------------------------------
  // Entrenamientos (historial append-only)
  // ---------------------------------------------------------------------
  async function agregarEntrenamiento(alumnoUid, entrenadorId, sesion) {
    sesion.alumnoUid = alumnoUid;
    sesion.entrenadorId = entrenadorId;
    sesion.fecha = sesion.fecha || new Date().toISOString();
    const ref = await db.collection('entrenamientos').add(sesion);
    return { id: ref.id, ...sesion };
  }

  async function getHistorial(alumnoUid) {
    let query = db.collection('entrenamientos').where('alumnoUid', '==', alumnoUid);
    // Si quien pregunta es el entrenador (no el propio alumno), la regla de
    // seguridad necesita que la consulta también filtre por entrenadorId,
    // para poder verificarla sin tener que leer todos los entrenamientos.
    if (usuarioActual && usuarioActual.rol === 'entrenador') {
      query = query.where('entrenadorId', '==', usuarioActual.uid);
    }
    // Sin orderBy a propósito: combinar un "where" con "orderBy" en un campo
    // distinto exige crear un índice compuesto en la consola de Firebase.
    // Como igual ordenamos en el código donde se muestra, lo evitamos.
    const snap = await query.get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  // ---------------------------------------------------------------------
  // Pagos: entrenador→superadmin (cuota de la plataforma) y
  // alumno→entrenador (cuota de entrenamiento). estadoCuota es un concepto
  // distinto de estadoPago (que es la suspensión de la cuenta).
  // ---------------------------------------------------------------------
  async function registrarPago(uidPagador, rolPagador, entrenadorId, monto, registradoPor) {
    const fecha = new Date().toISOString();
    await db.collection('pagos').add({ uidPagador, rolPagador, entrenadorId: entrenadorId || null, monto: Number(monto) || 0, registradoPor: registradoPor || null, fecha });
    // Los socios de gimnasio (rolPagador 'socioGym') no tienen ficha en
    // "usuarios" — esa colección es solo para cuentas con login (alumnos
    // de PT, entrenadores). Su estadoCuota se actualiza aparte, en
    // miembrosGym, desde quien llama a esta función.
    if (rolPagador !== 'socioGym') {
      await db.collection('usuarios').doc(uidPagador).update({ estadoCuota: 'al_dia', ultimoPagoFecha: fecha, ultimoPagoMonto: Number(monto) || 0 });
    }
  }

  async function marcarCuotaVencida(uid) {
    await db.collection('usuarios').doc(uid).update({ estadoCuota: 'vencido' });
  }

  // Pagos de los alumnos de ESTE entrenador (o de un alumno puntual).
  async function getPagosDeAlumnos(alumnoUid) {
    let query = db.collection('pagos').where('entrenadorId', '==', usuarioActual.uid);
    if (alumnoUid) query = query.where('uidPagador', '==', alumnoUid);
    const snap = await query.get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  // Solo superadmin: todos los pagos de entrenadores, para el resumen mensual.
  async function getPagosDeEntrenadores() {
    const snap = await db.collection('pagos').where('rolPagador', '==', 'entrenador').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async function eliminarCodigoInvitacion(codigo) {
    await db.collection('codigosInvitacion').doc(codigo).delete();
  }

  async function eliminarPago(id) {
    await db.collection('pagos').doc(id).delete();
  }

  // ---------------------------------------------------------------------
  // Recepción de gimnasio: socios sin cuenta de login, identificados por
  // DNI (el DNI es directamente el ID del documento). Pensado para el
  // modelo "gimnasio con control de acceso en la puerta", distinto del
  // modelo de alumno con email/contraseña de las apps de PT.
  // ---------------------------------------------------------------------
  async function buscarMiembroPorDni(dni) {
    const doc = await db.collection('miembrosGym').doc(String(dni).trim()).get();
    if (!doc.exists) return null;
    const datos = doc.data();
    // Solo devolvemos el socio si es de ESTE entrenador (los datos ya están
    // filtrados por regla de seguridad, esto es además una guarda del lado
    // del cliente para no mostrar por error un socio de otro gimnasio).
    if (datos.entrenadorId !== usuarioActual.uid) return null;
    return { dni: doc.id, ...datos };
  }

  async function registrarMiembro({ nombre, apellido, dni, modalidad, dias, diaPago, descripcion }) {
    const dniLimpio = String(dni).trim();
    const ref = db.collection('miembrosGym').doc(dniLimpio);
    const yaExiste = (await ref.get()).exists;
    if (yaExiste) throw new Error('Ya existe un socio registrado con ese DNI.');
    const datos = {
      nombre, apellido: apellido || '', modalidad, // 'musculacion' | 'pilates' | 'ambas'
      dias: dias || [], diaPago: diaPago || '', descripcion: descripcion || '',
      entrenadorId: usuarioActual.uid,
      estadoCuota: 'al_dia',
      ultimoPagoFecha: null,
      fechaAlta: new Date().toISOString()
    };
    await ref.set(datos);
    return { dni: dniLimpio, ...datos };
  }

  async function actualizarMiembro(dni, cambios) {
    await db.collection('miembrosGym').doc(String(dni).trim()).update(cambios);
  }

  async function eliminarMiembro(dni) {
    await db.collection('miembrosGym').doc(String(dni).trim()).delete();
  }

  async function listarMiembros() {
    if (!usuarioActual) return [];
    const snap = await db.collection('miembrosGym').where('entrenadorId', '==', usuarioActual.uid).get();
    return snap.docs.map(d => ({ dni: d.id, ...d.data() }));
  }

  // Borra TODOS los socios y asistencias de ESTE entrenador (no toca a
  // otros gimnasios que compartan la misma base). Usa lotes de Firestore
  // (hasta 500 borrados por lote) para que sea rápido con muchos socios.
  async function borrarTodosLosSocios() {
    if (!usuarioActual) return { socios: 0, asistencias: 0 };
    const [sniMiembros, snapAsistencias] = await Promise.all([
      db.collection('miembrosGym').where('entrenadorId', '==', usuarioActual.uid).get(),
      db.collection('asistenciasGym').where('entrenadorId', '==', usuarioActual.uid).get()
    ]);
    const todosLosDocs = [...sniMiembros.docs, ...snapAsistencias.docs];
    for (let i = 0; i < todosLosDocs.length; i += 500) {
      const lote = db.batch();
      todosLosDocs.slice(i, i + 500).forEach(d => lote.delete(d.ref));
      await lote.commit();
    }
    return { socios: sniMiembros.size, asistencias: snapAsistencias.size };
  }

  function inicioDeHoy() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  async function yaAsistioHoy(dni) {
    const snap = await db.collection('asistenciasGym')
      .where('entrenadorId', '==', usuarioActual.uid)
      .where('dni', '==', String(dni).trim())
      .get();
    const hoy = inicioDeHoy().getTime();
    return snap.docs.some(d => new Date(d.data().fecha).getTime() >= hoy);
  }

  async function marcarAsistencia(dni, nombre) {
    await db.collection('asistenciasGym').add({
      dni: String(dni).trim(), nombre,
      entrenadorId: usuarioActual.uid,
      fecha: new Date().toISOString()
    });
  }

  async function getAsistenciasDeHoy() {
    const snap = await db.collection('asistenciasGym').where('entrenadorId', '==', usuarioActual.uid).get();
    const hoy = inicioDeHoy().getTime();
    return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(a => new Date(a.fecha).getTime() >= hoy);
  }

  // Trae TODAS las asistencias de este gimnasio (para filtrar por fecha o
  // armar el ranking del mes del lado del cliente). Un gimnasio chico/medio
  // no tiene tantos registros como para que esto sea un problema.
  async function getTodasLasAsistencias() {
    const snap = await db.collection('asistenciasGym').where('entrenadorId', '==', usuarioActual.uid).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async function getAsistenciasDeFecha(fechaISO) {
    const inicio = new Date(fechaISO); inicio.setHours(0, 0, 0, 0);
    const fin = new Date(fechaISO); fin.setHours(23, 59, 59, 999);
    const todas = await getTodasLasAsistencias();
    return todas.filter(a => {
      const t = new Date(a.fecha).getTime();
      return t >= inicio.getTime() && t <= fin.getTime();
    });
  }

  async function getRankingAsistenciasDelMes() {
    const inicioMes = new Date(); inicioMes.setDate(1); inicioMes.setHours(0, 0, 0, 0);
    const todas = await getTodasLasAsistencias();
    const delMes = todas.filter(a => new Date(a.fecha).getTime() >= inicioMes.getTime());
    const conteo = {};
    delMes.forEach(a => {
      if (!conteo[a.dni]) conteo[a.dni] = { dni: a.dni, nombre: a.nombre, veces: 0 };
      conteo[a.dni].veces++;
    });
    return Object.values(conteo).sort((a, b) => b.veces - a.veces);
  }

  // ---------------------------------------------------------------------
  // Gastos del gimnasio, separados por profesor (comparten un solo login,
  // pero cada uno lleva su propio registro de compras/gastos).
  // ---------------------------------------------------------------------
  async function agregarGasto({ profesor, descripcion, categoria, monto }) {
    await db.collection('gastosGym').add({
      profesor, descripcion, categoria: categoria || 'otro', monto: Number(monto) || 0,
      entrenadorId: usuarioActual.uid,
      fecha: new Date().toISOString()
    });
  }

  async function listarGastos(profesor) {
    const snap = await db.collection('gastosGym')
      .where('entrenadorId', '==', usuarioActual.uid)
      .where('profesor', '==', profesor)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async function eliminarGasto(id) {
    await db.collection('gastosGym').doc(id).delete();
  }

  // ---------------------------------------------------------------------
  // Agenda de Pilates: un documento por combinación profe+día+horario, con
  // la lista de alumnos anotados en ese turno. CLASES_PILATES_SEED trae la
  // data real que ya estaba en el Excel del gimnasio, para no perderla al
  // pasar al sistema nuevo — se usa una sola vez si la colección está vacía.
  // ---------------------------------------------------------------------
  const CLASES_PILATES_SEED = [{"profe": "male", "dia": "miercoles", "horario": "06:00", "alumnos": ["Marcos Martin (septiembre)"], "cupoMaximo": 4}, {"profe": "male", "dia": "lunes", "horario": "07:00", "alumnos": ["Franco Pignatta", "Laura Baudino", "Sebastian Pereyra", "Sol Marzari"], "cupoMaximo": 4}, {"profe": "male", "dia": "miercoles", "horario": "07:00", "alumnos": ["franco Pignatta", "Camila Romani", "Sebastian Pereyra", "Laura Baudino"], "cupoMaximo": 4}, {"profe": "male", "dia": "jueves", "horario": "07:00", "alumnos": ["Mateo Zuñiga", "Guille Molina"], "cupoMaximo": 4}, {"profe": "male", "dia": "viernes", "horario": "07:00", "alumnos": ["Laura baudino", "Franco Pignatta", "sebastian Pereyra", "Sol marzari"], "cupoMaximo": 4}, {"profe": "male", "dia": "martes", "horario": "12:00", "alumnos": ["Andrea Canillas", "Valeria Bonessi"], "cupoMaximo": 4}, {"profe": "male", "dia": "jueves", "horario": "12:00", "alumnos": ["Andrea Canillas", "Valeria Bonessi"], "cupoMaximo": 4}, {"profe": "male", "dia": "lunes", "horario": "13:30", "alumnos": ["Carina", "Yaye Garro", "Micaela Pereyra"], "cupoMaximo": 4}, {"profe": "male", "dia": "martes", "horario": "13:30", "alumnos": ["Micaela Pereyra", "Delfina Castresana", "Sofia Castellano", "Valen Talavera"], "cupoMaximo": 4}, {"profe": "male", "dia": "jueves", "horario": "13:30", "alumnos": ["Micaela Pereyra", "Delfina Castresana", "Sofia Castellano", "Valen Talavera"], "cupoMaximo": 4}, {"profe": "male", "dia": "martes", "horario": "17:30", "alumnos": ["Elian Fredes", "Seba Andreoli", "Fefi del Monaco"], "cupoMaximo": 4}, {"profe": "male", "dia": "lunes", "horario": "18:30", "alumnos": ["Silvia Canella", "Emilia Castro", "Julian Crespo"], "cupoMaximo": 4}, {"profe": "male", "dia": "martes", "horario": "18:30", "alumnos": ["Juan Ignacio", "Joaquín Rios", "Julian Crespo"], "cupoMaximo": 4}, {"profe": "male", "dia": "miercoles", "horario": "18:30", "alumnos": ["Alicia Armoa", "Ruben Garcia", "Silvia Canella", "Mili Avalos"], "cupoMaximo": 4}, {"profe": "male", "dia": "jueves", "horario": "18:30", "alumnos": ["Seba Andreoli", "Fefi del Monaco"], "cupoMaximo": 4}, {"profe": "male", "dia": "viernes", "horario": "18:30", "alumnos": ["Alicia Armoa", "Ruben Garcia", "mili avalos", "Silvia Canella"], "cupoMaximo": 4}, {"profe": "sol", "dia": "lunes", "horario": "08:00", "alumnos": ["Nati Pineda", "Karen Ponce", "Cami Romani", "Gilda Bertorello"], "cupoMaximo": 4}, {"profe": "sol", "dia": "miercoles", "horario": "08:00", "alumnos": ["Belu campos", "Juli Poch", "Anto Noriega"], "cupoMaximo": 4}, {"profe": "sol", "dia": "jueves", "horario": "08:00", "alumnos": ["Nati Pineda", "Gilda Bertorello"], "cupoMaximo": 4}, {"profe": "sol", "dia": "viernes", "horario": "08:00", "alumnos": ["Gilda Bertorello", "Anto Noriega"], "cupoMaximo": 4}, {"profe": "sol", "dia": "lunes", "horario": "09:00", "alumnos": ["Juli Poch", "Kimei Juricich", "Guille Molina", "Angi Biondi"], "cupoMaximo": 4}, {"profe": "sol", "dia": "miercoles", "horario": "09:00", "alumnos": ["Kimei Juricich"], "cupoMaximo": 4}, {"profe": "sol", "dia": "jueves", "horario": "10:00", "alumnos": ["Dai Manuel", "Angi Biondi", "Khate García"], "cupoMaximo": 4}, {"profe": "sol", "dia": "lunes", "horario": "19:30", "alumnos": ["Sofia Seijo", "Ara Garcia", "Cami Barovero", "Dai Vicente"], "cupoMaximo": 4}, {"profe": "sol", "dia": "miercoles", "horario": "19:30", "alumnos": ["Cami Betz", "Ara Garcia", "Dai Vicente", "Yani Rios"], "cupoMaximo": 4}, {"profe": "sol", "dia": "jueves", "horario": "19:30", "alumnos": ["Yani Rios", "Karina Drehock"], "cupoMaximo": 4}, {"profe": "sol", "dia": "viernes", "horario": "19:30", "alumnos": ["Yani Balent", "Dai Vicente", "Ara Garcia", "Sofia Seijo"], "cupoMaximo": 4}, {"profe": "sol", "dia": "lunes", "horario": "20:30", "alumnos": ["Nancy Hourcade", "Glatigny Marina", "Mateo Zuñiga", "Melisa Piaza"], "cupoMaximo": 4}, {"profe": "sol", "dia": "miercoles", "horario": "20:30", "alumnos": ["Glatigny Marina", "Renata baigorria", "Maggie Manuel"], "cupoMaximo": 4}, {"profe": "sol", "dia": "jueves", "horario": "20:30", "alumnos": ["Cami Barovero", "Lu Lucero", "Gonzalo Martínez", "Macarena Barbosa"], "cupoMaximo": 4}, {"profe": "aye", "dia": "lunes", "horario": "14:30", "alumnos": ["Sil andreoli", "Vani Muñoz", "Josefina Galan"], "cupoMaximo": 4}, {"profe": "aye", "dia": "martes", "horario": "14:30", "alumnos": ["Alfo Bertone"], "cupoMaximo": 4}, {"profe": "aye", "dia": "miercoles", "horario": "14:30", "alumnos": ["Dai Iglesias", "Ana Paula pirchio", "Josefina Galan"], "cupoMaximo": 4}, {"profe": "aye", "dia": "viernes", "horario": "14:30", "alumnos": ["Ana Paula Pirchio", "Alfo Bertone", "Josefina Galan"], "cupoMaximo": 4}, {"profe": "aye", "dia": "lunes", "horario": "15:30", "alumnos": ["Mirta Núñez", "Laura Bravo", "Nany Mazzoky"], "cupoMaximo": 4}, {"profe": "aye", "dia": "martes", "horario": "15:30", "alumnos": ["Nadina Sidoni", "Belen Campos", "Lean Pereyra", "Nany Mazzoky"], "cupoMaximo": 4}, {"profe": "aye", "dia": "miercoles", "horario": "15:30", "alumnos": ["Gonza Peiretti", "Greta Gisoue", "Mirta Núñez"], "cupoMaximo": 4}, {"profe": "aye", "dia": "jueves", "horario": "15:30", "alumnos": ["Meli Piazza", "Nancy Hourcade", "Lean pereyra", "Rusa Scheger"], "cupoMaximo": 4}, {"profe": "aye", "dia": "viernes", "horario": "15:30", "alumnos": ["Belén Campos", "Mirta Núñez", "Laura Bravo", "Karina Drehock (por este viernes)"], "cupoMaximo": 4}, {"profe": "aye", "dia": "lunes", "horario": "16:30", "alumnos": ["Greta Gisoue", "Jazmin Zabala"], "cupoMaximo": 4}, {"profe": "aye", "dia": "miercoles", "horario": "17:30", "alumnos": ["Pablo Gandino", "Jazmin Zabala"], "cupoMaximo": 4}, {"profe": "aye", "dia": "viernes", "horario": "17:30", "alumnos": ["Pablo Gandino", "Jazmin Zabala"], "cupoMaximo": 4}, {"profe": "agos", "dia": "lunes", "horario": "11:00", "alumnos": ["Lucia Edreira", "Camila Betz"], "cupoMaximo": 4}, {"profe": "agos", "dia": "jueves", "horario": "11:00", "alumnos": ["Lucia Edreira", "Marta Zabala"], "cupoMaximo": 4}, {"profe": "agos", "dia": "martes", "horario": "19:30", "alumnos": ["Maru García (mamá Agos", "Yani Ríos", "Karina Drehock"], "cupoMaximo": 4}, {"profe": "agos", "dia": "martes", "horario": "20:30", "alumnos": ["Lu Lucero", "Maca Barbosa", "Cami García", "Brisa Muratori"], "cupoMaximo": 4}, {"profe": "agos", "dia": "viernes", "horario": "20:30", "alumnos": ["Cami García", "Nicolas Bergonzi", "Nany Mazzokky", "Brisa Muratori"], "cupoMaximo": 4}]
;

  async function listarClasesPilates() {
    if (!usuarioActual) return [];
    const snap = await db.collection('clasesPilates').where('entrenadorId', '==', usuarioActual.uid).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async function importarClasesPilatesSiVacio() {
    const actuales = await listarClasesPilates();
    if (actuales.length > 0) return 0;
    const lote = db.batch();
    CLASES_PILATES_SEED.forEach(c => {
      const ref = db.collection('clasesPilates').doc();
      lote.set(ref, { ...c, entrenadorId: usuarioActual.uid });
    });
    await lote.commit();
    return CLASES_PILATES_SEED.length;
  }

  async function crearClasePilates({ profe, dia, horario, cupoMaximo }) {
    await db.collection('clasesPilates').add({
      profe, dia, horario, cupoMaximo: cupoMaximo || 4, alumnos: [],
      entrenadorId: usuarioActual.uid
    });
  }

  async function actualizarAlumnosClasePilates(id, alumnos) {
    await db.collection('clasesPilates').doc(id).update({ alumnos });
  }

  async function eliminarClasePilates(id) {
    await db.collection('clasesPilates').doc(id).delete();
  }

  return {
    init, configurado,
    resolverCodigo,
    onCambioSesion, registrarUsuario, iniciarSesion, cerrarSesion, recuperarContrasena, getUsuarioActual, completarRegistroTrasEliminacion,
    listarEntrenadores, crearCodigoInvitacion, listarCodigosInvitacion, cambiarEstadoPagoEntrenador, eliminarCodigoInvitacion,
    listarAlumnos, actualizarFichaAlumno, getEstadoEntrenador, cambiarEstadoAlumno, eliminarAlumno,
    getRutina, guardarRutina, eliminarRutina,
    agregarEntrenamiento, getHistorial,
    registrarPago, marcarCuotaVencida, getPagosDeAlumnos, getPagosDeEntrenadores, eliminarPago,
    buscarMiembroPorDni, registrarMiembro, actualizarMiembro, eliminarMiembro, listarMiembros, borrarTodosLosSocios,
    yaAsistioHoy, marcarAsistencia, getAsistenciasDeHoy, getAsistenciasDeFecha, getRankingAsistenciasDelMes,
    agregarGasto, listarGastos, eliminarGasto,
    listarClasesPilates, importarClasesPilatesSiVacio, crearClasePilates, actualizarAlumnosClasePilates, eliminarClasePilates
  };
})();
