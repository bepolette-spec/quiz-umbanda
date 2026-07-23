// Service worker simples para habilitar PWA
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Por enquanto não fazemos cache especial, só deixamos as requisições seguirem
});
