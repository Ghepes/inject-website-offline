const CACHE_NAME = 'offline-html-v3';

// We use a dot in front (./) for paths relative to the current location of sw.js !
const WP_SAVE_FILES = [
    './',
    './index.html'
];

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Instant activation
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('SW: I am caching index.html');
            return cache.addAll(WP_SAVE_FILES);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
    console.log('SW: I took control of the page!');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((response) => {
            // If we found the file in the Cache, we return it. Otherwise, we request it from the internet.
            return response || fetch(event.request);
        }).catch((error) => {
            console.log('SW Error (We are offline missing from the cache):', event.request.url);
            
            // CRITICAL: For the browser to not display the server connection error,
            // we must forcefully return an empty/false Response.
            return new Response('The application runs offline.', {
                status: 200,
                statusText: 'OK',
                headers: new Headers({ 'Content-Type': 'text/plain' })
            });
        })
    );
});