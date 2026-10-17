const CACHE = 'farm-book-v5';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Network first so testers always get the latest version; cache is the offline fallback.
  e.respondWith(fetch(e.request).then(res => {
    const host = new URL(e.request.url).hostname;
    if (res.ok && (host === location.hostname || /fonts\.(googleapis|gstatic)\.com$/.test(host))) {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return res;
  }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html'))));
});
