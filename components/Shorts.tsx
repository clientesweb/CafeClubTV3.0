'use client'

import { useEffect, useState, useRef } from 'react'

const shortsPlaylistId = 'PLZ_v3bWMqpjFa0xI11mahmOCxPk_1TK2s'
const apiKey = 'AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0'

interface Short {
  id: string;
  title: string;
  videoId: string;
}

export default function Shorts() {
  const [shorts, setShorts] = useState<Short[]>([])
  const shortsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${shortsPlaylistId}&key=${apiKey}&order=date`)
        const data = await response.json()
        const sortedItems = data.items.sort((a: any, b: any) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime())
        const recentShorts = sortedItems.slice(0, 5).map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId
        }))
        setShorts(recentShorts)
      } catch (error) {
        console.error('Error fetching shorts:', error)
      }
    }

    fetchShorts()
  }, [])

  const scrollShorts = (direction: 'left' | 'right') => {
    if (shortsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -315 : 315
      shortsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="shorts" className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Shorts</h2>
        <div className="shorts-carousel-container relative">
          <div id="shorts-container" ref={shortsContainerRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4">
            {shorts.map((short) => (
              <div key={short.id} className="short-video flex-shrink-0 w-[80%] max-w-[315px] snap-center">
                <div className="short-wrapper relative w-full pb-[177.78%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${short.videoId}?autoplay=0&controls=1&mute=0&loop=1&playlist=${short.videoId}`}
                    title={short.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full rounded-xl transition-transform duration-300 transform hover:scale-105"
                    aria-label={`Video: ${short.title}`}
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-center text-gray-700">{short.title}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollShorts('left')}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none"
            aria-label="Scroll to previous short"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollShorts('right')}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none"
            aria-label="Scroll to next short"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}