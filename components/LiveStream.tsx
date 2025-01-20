"use client"

import { useEffect, useState } from "react"

const livePlaylistId = "PLZ_v3bWMqpjEYZDAFLI-0GuAH4BpA5PiL"
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
  }
}

export default function LiveStream() {
  const [isClient, setIsClient] = useState(false)
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([])
  const [mainVideoId, setMainVideoId] = useState("")

  useEffect(() => {
    setIsClient(true)
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${livePlaylistId}&key=${apiKey}`,
        )
        const data = await response.json()
        setPlaylistItems(data.items)
        if (data.items.length > 0) {
          setMainVideoId(data.items[0].snippet.resourceId.videoId)
        }
      } catch (error) {
        console.error("Error fetching playlist:", error)
      }
    }

    fetchPlaylist()
  }, [])

  if (!isClient) {
    return <div className="py-8 sm:py-12 md:py-16 bg-[var(--primary-color)] text-white">Cargando transmisión...</div>
  }

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
                key={index}
                className="playlist-video flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-lg transition-all"
                onClick={() => setMainVideoId(item.snippet.resourceId.videoId)}
                aria-label={`Ver video: ${item.snippet.title}`}
              >
                <img
                  src={item.snippet.thumbnails.medium.url || "/placeholder.svg"}
                  alt={item.snippet.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <p className="text-sm font-medium text-gray-300 truncate">{item.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

