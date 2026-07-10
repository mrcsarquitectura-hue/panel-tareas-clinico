// Service Worker vacío para satisfacer los requisitos de PWA de Chrome
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
