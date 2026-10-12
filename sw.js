// Çevrimiçi zorunlu PWA için minimal service worker.
// Offline cache YOK — kullanıcı her zaman canlı veriyle çalışır.
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Kasıtlı olarak hiçbir şey cache'lenmez.
});