"use client"

import { useEffect, useState, useCallback } from "react"

const livePlaylistId = "PLZ_v3bWMqpjHgBO9YXQroGPRsCoaxjZ0S"
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"

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
    publishedAt: string
  }
}

interface LiveStreamProps {
  showPlaylist?: boolean
}

export default function LiveStream({ showPlaylist = true }: LiveStreamProps) {
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([])
  const [mainVideoId, setMainVideoId] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPlaylist = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${livePlaylistId}&key=${apiKey}`,
      )

      if (!response.ok) {
        throw new Error(`Error al cargar la lista de reproducción: ${response.status}`)
      }

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

      setError(null)
    } catch (error) {
      console.error("Error fetching playlist:", error)
      setError("No se pudo cargar la lista de reproducción. Por favor, inténtalo de nuevo más tarde.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPlaylist()
    // Actualizar la lista cada 15 minutos
    const interval = setInterval(fetchPlaylist, 15 * 60 * 1000)

    return () => clearInterval(interval)
  }, [fetchPlaylist])

  return (
    <section id="live-stream" className={showPlaylist ? "py-8 sm:py-12 md:py-16 bg-cafe-red text-white" : ""}>
      <div className="container mx-auto px-4">
        {showPlaylist && (
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center font-heading">Transmisión en Vivo</h2>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : error ? (
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <p>{error}</p>
            <button
              onClick={fetchPlaylist}
              className="mt-4 px-4 py-2 bg-white text-cafe-red rounded-md hover:bg-white/90 transition-colors"
            >
              Reintentar
            </button>
          </div>
        ) : (
          <div className={`grid ${showPlaylist ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
            <div
              className={`${showPlaylist ? "lg:col-span-2" : ""} aspect-video bg-black w-full rounded-lg shadow-xl overflow-hidden`}
            >
              {mainVideoId && (
                <iframe
                  title="Live Stream"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&modestbranding=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
            </div>
            {showPlaylist && (
              <div className="lg:col-span-1 overflow-y-auto max-h-[400px] space-y-4 sm:space-y-6 custom-scrollbar">
                {playlistItems.map((item, index) => (
                  <div
                    key={item.snippet.resourceId.videoId}
                    className={`flex items-center space-x-4 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all ${
                      item.snippet.resourceId.videoId === mainVideoId ? "bg-white/10" : ""
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
                      <p className="text-sm font-medium text-white truncate">{item.snippet.title}</p>
                      <p className="text-xs text-white/70">{new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

