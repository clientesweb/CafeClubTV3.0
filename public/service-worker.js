const CACHE_NAME = "cafeclubtv-v2"
const urlsToCache = ["/", "/images/logo.png", "/favicon.ico", "/apple-touch-icon.png", "/manifest.json"]

// Evento de instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

// Evento de activación del Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Evento de "fetch" para interceptar las solicitudes y usar el cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Si el archivo está en el cache, devolverlo
        if (response) {
          return response
        }
        // Si no está en el cache, hacer la solicitud a la red
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })
          }
          return networkResponse
        })
      })
      .catch(() => {
        // Si no hay conexión, devolver una página offline
        return caches.match("/")
      }),
  )
})

// Evento para manejar las notificaciones push
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: "/images/logo.png",
      badge: "/images/logo.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

// Evento de clic en las notificaciones
self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(clients.openWindow("https://www.cafeclubtv.com"))
})

