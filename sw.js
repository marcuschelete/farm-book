const CACHE = 'farm-book-v10';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  { const u = new URL(e.request.url); if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return; } // leave Firebase and other sites alone
  // Network first so testers always get the latest version; cache is the offline fallback.
  e.respondWith(fetch(e.request).then(res => {
    const host = new URL(e.request.url).hostname;
    if (res.ok && (host === location.hostname || /fonts\.(googleapis|gstatic)\.com$/.test(host))) {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return res;
  }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html'))));
});
