/**
 * sw.js — Service Worker
 * -----------------------------------------------------------------------
 * A diferencia de Becker App, esta app tiene datos en vivo (Firebase), así
 * que el Service Worker SOLO cachea el "cascarón" de la app (HTML, CSS,
 * JS, íconos) para que instale rápido y funcione offline la interfaz —
 * pero NUNCA cachea pedidos a Firebase/Google ni a APIs externas, para
 * que los datos de alumnos, rutinas y entrenamientos siempre estén al día.
 */

const CACHE_VERSION = 'v5';
const CACHE_SHELL = `tomicoach-shell-${CACHE_VERSION}`;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/marca.js',
  './js/database.js',
  './js/firebase-config.js',
  './js/firebase-service.js',
  './js/timer.js',
  './js/app.js',
  './assets/iconos/sprite.svg',
  './assets/iconos/poses.svg',
  './assets/iconos/logo-mark.png',
  './assets/iconos/logo-splash.png',
  './assets/iconos/icon-192.png',
  './assets/iconos/icon-512.png',
  './assets/iconos/icon-maskable-192.png',
  './assets/iconos/icon-maskable-512.png',
  './assets/iconos/apple-touch-icon.png'
];

// Dominios que NUNCA se cachean: Firebase, Google APIs, fuentes/librerías externas.
const DOMINIOS_SIN_CACHE = [
  'googleapis.com', 'gstatic.com', 'firebaseio.com', 'firebaseapp.com',
  'google.com', 'cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com',
  'raw.githubusercontent.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_SHELL).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(nombres.filter((n) => n !== CACHE_SHELL).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const esMismoOrigen = url.origin === self.location.origin;
  const esDominioExcluido = DOMINIOS_SIN_CACHE.some((d) => url.hostname.includes(d));

  if (!esMismoOrigen || esDominioExcluido) {
    return; // dejar pasar directo a la red, sin intervención del Service Worker
  }

  event.respondWith(redPrimeroConRespaldo(req));
});

// Red primero: siempre trae la última versión si hay conexión (así los
// cambios se ven al instante, sin esperar a la "próxima visita"). Si no
// hay conexión, recién ahí usa lo que tenga guardado como respaldo.
async function redPrimeroConRespaldo(req) {
  const cache = await caches.open(CACHE_SHELL);
  try {
    const res = await fetch(req);
    if (res && res.status === 200) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const cacheado = await cache.match(req);
    if (cacheado) return cacheado;
    if (req.mode === 'navigate') { const shell = await cache.match('./index.html'); if (shell) return shell; }
    return new Response('Sin conexión.', { status: 503, statusText: 'Offline' });
  }
}
