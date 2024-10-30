self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('expense-tracker-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/styles.css',
                '/assets/js/index.js',
                '/assets/js/db.js',
                '/manifest.json',
                '/icons/icon-192x192.png',
                '/icons/icon-256x256.png',
                'https://cdn.jsdelivr.net/npm/chart.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
                'https://use.fontawesome.com/releases/v5.15.1/css/all.css',
                'https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Press+Start+2P&display=swap'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
