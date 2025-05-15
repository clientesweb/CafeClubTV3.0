const CACHE_NAME = "cafeclubtv-v3"
const OFFLINE_URL = "/offline.html"

// Recursos que se cachearán inmediatamente al instalar el Service Worker
const PRECACHE_ASSETS = [
  "/",
  "/contenido",
  "/offline.html",
  "/manifest.json",
  "/favicon.ico",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/banner-latinos-partner.jpg",
  "/images/banner-duality-domain.jpg",
  "/images/bonogol-tv-banner.jpg",
  "/images/og-image-cafeclubtv.jpg",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js",
]

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Abriendo caché para precarga")
        return cache.addAll(PRECACHE_ASSETS)
      })
      .then(() => {
        console.log("Precarga completada")
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error("Error durante la precarga:", error)
      }),
  )
})

// Activación del Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith("cafeclubtv-") && cacheName !== CACHE_NAME
            })
            .map((cacheName) => {
              console.log("Eliminando caché antigua:", cacheName)
              return caches.delete(cacheName)
            }),
        )
      })
      .then(() => {
        console.log("Service Worker activado")
        return self.clients.claim()
      }),
  )
})

// Estrategia de caché: Network First, fallback a Cache, luego a offline.html
self.addEventListener("fetch", (event) => {
  // Solo manejar solicitudes GET
  if (event.request.method !== "GET") return

  // Ignorar solicitudes a la API de YouTube y otras APIs externas
  if (
    event.request.url.includes("youtube.com") ||
    event.request.url.includes("googleapis.com") ||
    event.request.url.includes("analytics") ||
    event.request.url.includes("fonts.googleapis.com")
  ) {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es válida, clonarla y almacenarla en caché
        if (response && response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // Si falla la red, intentar desde caché
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }

          // Si no está en caché y es una solicitud de navegación, mostrar página offline
          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_URL)
          }

          // Para otros recursos, devolver un error básico
          return new Response("No hay conexión a Internet", {
            status: 503,
            statusText: "Service Unavailable",
            headers: new Headers({
              "Content-Type": "text/plain",
            }),
          })
        })
      }),
  )
})

// Manejo de notificaciones push
self.addEventListener("push", (event) => {
  if (!event.data) return

  try {
    const data = event.data.json()
    const options = {
      body: data.body || "Nuevas actualizaciones disponibles",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
      badge: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.id || "1",
        url: data.url || "/",
      },
      actions: [
        {
          action: "explore",
          title: "Ver ahora",
          icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
        },
      ],
    }

    event.waitUntil(self.registration.showNotification(data.title || "CafeClub TV", options))
  } catch (error) {
    console.error("Error al procesar notificación push:", error)
  }
})

// Manejo de clics en notificaciones
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "explore" && event.notification.data && event.notification.data.url) {
    event.waitUntil(clients.openWindow(event.notification.data.url))
  } else {
    event.waitUntil(clients.openWindow("/"))
  }
})

// Sincronización en segundo plano
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-newsletter") {
    event.waitUntil(syncNewsletter())
  }
})

// Función para sincronizar suscripciones al newsletter
async function syncNewsletter() {
  try {
    const db = await openDB()
    const pendingSubscriptions = await db.getAll("pendingSubscriptions")

    for (const subscription of pendingSubscriptions) {
      try {
        const response = await fetch("/api/newsletter/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscription),
        })

        if (response.ok) {
          await db.delete("pendingSubscriptions", subscription.id)
        }
      } catch (error) {
        console.error("Error al sincronizar suscripción:", error)
      }
    }
  } catch (error) {
    console.error("Error al acceder a IndexedDB:", error)
  }
}

// Función para abrir la base de datos IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("CafeClubTV", 1)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      if (!db.objectStoreNames.contains("pendingSubscriptions")) {
        db.createObjectStore("pendingSubscriptions", { keyPath: "id", autoIncrement: true })
      }
    }
  })
}
