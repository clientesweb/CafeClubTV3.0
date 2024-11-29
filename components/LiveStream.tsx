'use client'

import { useEffect, useState } from 'react'

const livePlaylistId = 'PLZ_v3bWMqpjEYZDAFLI-0GuAH4BpA5PiL'
const apiKey = 'AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0'

export default function LiveStream() {
  const [playlistItems, setPlaylistItems] = useState([])
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
    <section id="live-stream" className="py-8 sm:py-12 md:py-16 bg-[var(--primary-color)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Transmisión en Vivo</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="lg:col-span-2 aspect-video bg-black w-full">
            {mainVideoId && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${mainVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="lg:col-span-1 overflow-y-auto max-h-[400px] space-y-2 sm:space-y-3">
            {playlistItems.map((item, index) => (
              <div
                key={index}
                className="playlist-video cursor-pointer"
                onClick={() => setMainVideoId(item.snippet.resourceId.videoId)}
              >
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                  className="w-24 h-auto object-cover rounded-md"
                />
                <p className="text-sm">{item.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

