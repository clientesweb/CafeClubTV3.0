const CACHE_NAME = "ceretti-management-v1"
const urlsToCache = [
  "/",
  "/shop",
  "/blog",
  "/portfolio",
  "/paquetes",
  "/checkout",
  "/site.webmanifest",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/images/instagram-3d-logo.png",
  "/images/youtube-3d-logo.png",
  "/images/spotify-3d-logo.png",
  "/images/tiktok-3d-logo.png",
  "/images/facebook-3d-logo.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          // Don't cache API calls or external resources
          if (event.request.url.includes("/api/") || !event.request.url.startsWith(self.location.origin)) {
            return
          }
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

