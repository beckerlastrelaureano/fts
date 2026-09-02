/**
 * marca.js — Configuración de marca (branding) de ESTE cliente: FTS
 * (Funtrainsports)
 */

const MARCA = {
  nombre: 'F',
  sufijo: 'TS',

  nombreCompleto: 'FTS',
  descripcion: 'Gestioná a tus alumnos, asignales rutinas y seguí su progreso y asistencia.',

  tagline: 'MUSCULACIÓN · PILATES · FUNCIONAL',

  // Amarillo/negro de FTS (Funtrainsports)
  colorAcento: '#F2C230',
  colorAcentoClaro: '#F7D666',
  colorAcentoRgb: '242, 194, 48',
};

(function aplicarMarca() {
  document.title = `${MARCA.nombreCompleto} — Panel de entrenador`;
  const setMeta = (selector, attr, valor) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, valor);
  };
  setMeta('meta[name="description"]', 'content', `${MARCA.nombreCompleto}: ${MARCA.descripcion}`);
  setMeta('meta[name="theme-color"]', 'content', MARCA.colorAcento);
  setMeta('meta[name="apple-mobile-web-app-title"]', 'content', MARCA.nombreCompleto);
  const raiz = document.documentElement.style;
  raiz.setProperty('--color-acento', MARCA.colorAcento);
  raiz.setProperty('--color-acento-claro', MARCA.colorAcentoClaro);
  raiz.setProperty('--color-acento-rgb', MARCA.colorAcentoRgb);
})();
