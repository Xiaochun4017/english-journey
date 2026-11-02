/* English Journey Service Worker — 网络优先，离线时用缓存兜底 */
const CACHE = "ej-cache-v1";

self.addEventListener("install", (e) => {
    self.skipWaiting();
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (e) => {
    if (e.request.method !== "GET") return;
    e.respondWith(
        fetch(e.request).then(res => {
            // 在线：直接用最新版，同时更新缓存
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy));
            return res;
        }).catch(() =>
            // 离线：读缓存
            caches.match(e.request).then(hit => hit || caches.match("./"))
        )
    );
});
