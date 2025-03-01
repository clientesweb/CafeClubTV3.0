"use client"

import { useEffect, useState, useCallback } from "react"

const livePlaylistId = "PLZ_v3bWMqpjHgBO9YXQroGPRsCoaxjZ0S"
const apiKey = "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"

interface PlaylistItem {
  snippet: {
    title: string
    thumbnails: {
      medium: {
        url: string
      }
    }
    resourceId: {
      videoId: string
    }
    publishedAt: string // Añadimos esta propiedad para ordenar por fecha
  }
}

export default function LiveStream() {
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([])
  const [mainVideoId, setMainVideoId] = useState("")

  const fetchPlaylist = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${livePlaylistId}&key=${apiKey}`,
      )
      const data = await response.json()

      // Ordenar por fecha de publicación (más reciente primero) y tomar los últimos 5
      const sortedItems = data.items
        .sort(
          (a: PlaylistItem, b: PlaylistItem) =>
            new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
        )
        .slice(0, 5)

      setPlaylistItems(sortedItems)

      // Siempre establecer el video más reciente como principal
      if (sortedItems.length > 0) {
        setMainVideoId(sortedItems[0].snippet.resourceId.videoId)
      }
    } catch (error) {
      console.error("Error fetching playlist:", error)
    }
  }, [])

  useEffect(() => {
    fetchPlaylist()
    // Actualizar la lista cada 15 minutos
    const interval = setInterval(fetchPlaylist, 15 * 60 * 1000)

    return () => clearInterval(interval)
  }, [fetchPlaylist])

  return (
    <section id="live-stream" className="py-8 sm:py-12 md:py-16 bg-[var(--primary-color)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Transmisión en Vivo</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 aspect-video bg-black w-full rounded-lg shadow-xl">
            {mainVideoId && (
              <iframe
                title="Live Stream"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="lg:col-span-1 overflow-y-auto max-h-[400px] space-y-4 sm:space-y-6">
            {playlistItems.map((item, index) => (
              <div
                key={item.snippet.resourceId.videoId}
                className={`playlist-video flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-lg transition-all ${
                  item.snippet.resourceId.videoId === mainVideoId ? "bg-gray-700" : ""
                }`}
                onClick={() => setMainVideoId(item.snippet.resourceId.videoId)}
                aria-label={`Ver video: ${item.snippet.title}`}
              >
                <img
                  src={item.snippet.thumbnails.medium.url || "/placeholder.svg"}
                  alt={item.snippet.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-300 truncate">{item.snippet.title}</p>
                  <p className="text-xs text-gray-400">{new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

