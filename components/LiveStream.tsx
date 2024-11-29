'use client'

import { useEffect, useState } from 'react'

const livePlaylistId = 'PLZ_v3bWMqpjEYZDAFLI-0GuAH4BpA5PiL'
const apiKey = 'AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0'

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
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([])
  const [mainVideoId, setMainVideoId] = useState('')

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${livePlaylistId}&key=${apiKey}`)
        const data = await response.json()
        setPlaylistItems(data.items)
        if (data.items.length > 0) {
          setMainVideoId(data.items[0].snippet.resourceId.videoId)
        }
      } catch (error) {
        console.error('Error fetching playlist:', error)
      }
    }

    fetchPlaylist()
  }, [])

  return (
    <section id="live-stream" className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-[#4e9af1] to-[#1e3c72] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-shadow-lg">Transmisión en Vivo</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="lg:col-span-2 aspect-video bg-black w-full shadow-lg rounded-lg overflow-hidden">
            {mainVideoId && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${mainVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="transition-transform duration-300 ease-in-out"
              ></iframe>
            )}
          </div>
          <div className="lg:col-span-1 overflow-y-auto max-h-[400px] space-y-2 sm:space-y-3 flex flex-col items-center">
            {playlistItems.map((item, index) => (
              <div
                key={index}
                className="playlist-video cursor-pointer group transform transition duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setMainVideoId(item.snippet.resourceId.videoId)}
              >
                <div className="relative">
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                    className="w-24 h-auto object-cover rounded-md group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
                </div>
                <p className="text-sm text-center mt-2">{item.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
      </div>
    </section>
  )
}