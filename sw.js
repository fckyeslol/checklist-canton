/* Cache estático para uso offline (GitHub Pages o servidor local con HTTPS) */
const CACHE = 'checklist-canton-v4';
const scope = self.registration.scope;

function asset(path) {
  return new URL(path, scope).href;
}

const PRECACHE = [
  asset('index.html'),
  asset('manifest.webmanifest'),
  asset('icon.svg')
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  /* Página principal: primero caché → funciona en avión / sin datos */
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(asset('index.html')).then((cached) => {
        if (cached) return cached;
        return fetch(request);
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((res) => {
        const copy = res.clone();
        if (res.ok && request.url.startsWith(scope)) {
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return res;
      });
    })
  );
});
