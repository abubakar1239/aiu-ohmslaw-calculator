self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open( "ohm'slaw calculator cache").then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});