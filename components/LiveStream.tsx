"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const PLAYLIST_ID = "PLZ_v3bWMqpjG6JuT_PLwL-8JXWIqhpW03"
const API_KEY = "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"

interface PlaylistItem {
  snippet: {
    publishedAt: string
    title: string
    thumbnails: {
      medium: {
        url: string
      }
    }
    resourceId: {
      videoId: string
    }
  }
}

export default function LiveStream() {
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([])
  const [mainVideoId, setMainVideoId] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setIsLoading(true)
        setError("")

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${PLAYLIST_ID}&key=${API_KEY}&order=date`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch playlist")
        }

        const data = await response.json()

        // Sort items by publishedAt in descending order (newest first)
        const sortedItems = data.items.sort(
          (a: PlaylistItem, b: PlaylistItem) =>
            new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
        )

        setPlaylistItems(sortedItems)
        // Set the most recent video as the main video
        if (sortedItems.length > 0) {
          setMainVideoId(sortedItems[0].snippet.resourceId.videoId)
        }
      } catch (error) {
        console.error("Error fetching playlist:", error)
        setError("No se pudo cargar la lista de reproducción. Por favor, intente más tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPlaylist()
  }, [])

  if (error) {
    return (
      <section className="py-8 sm:py-12 md:py-16 bg-[var(--primary-color)] text-white">
        <div className="container mx-auto px-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[var(--primary-color)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Transmisión en Vivo</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 aspect-video bg-black/20 w-full rounded-lg shadow-xl overflow-hidden">
            {isLoading ? (
              <Skeleton className="w-full h-full" />
            ) : (
              mainVideoId && (
                <iframe
                  title="Live Stream"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                />
              )
            )}
          </div>
          <div className="lg:col-span-1 overflow-y-auto max-h-[400px] space-y-4 sm:space-y-6 rounded-lg">
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3">
                      <Skeleton className="w-16 h-16 rounded-md" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))
              : playlistItems.map((item, index) => (
                  <div
                    key={item.snippet.resourceId.videoId}
                    className={`
                    flex items-center space-x-4 cursor-pointer p-3 rounded-lg transition-all
                    ${mainVideoId === item.snippet.resourceId.videoId ? "bg-white/10" : "hover:bg-white/5"}
                  `}
                    onClick={() => setMainVideoId(item.snippet.resourceId.videoId)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setMainVideoId(item.snippet.resourceId.videoId)
                      }
                    }}
                    aria-label={`Reproducir video: ${item.snippet.title}`}
                  >
                    <img
                      src={item.snippet.thumbnails.medium.url || "/placeholder.svg"}
                      alt=""
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-100 truncate">{item.snippet.title}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(item.snippet.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

