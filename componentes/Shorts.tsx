'use client'

import { useEffect, useState, useRef } from 'react'

const shortsPlaylistId = 'PLZ_v3bWMqpjFa0xI11mahmOCxPk_1TK2s'
const apiKey = 'AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0'

export default function Shorts() {
  const [shorts, setShorts] = useState([])
  const shortsContainerRef = useRef(null)

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${shortsPlaylistId}&key=${apiKey}&order=date`)
        const data = await response.json()
        const sortedItems = data.items.sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt))
        const recentShorts = sortedItems.slice(0, 5)
        setShorts(recentShorts)
      } catch (error) {
        console.error('Error fetching shorts:', error)
      }
    }

    fetchShorts()
  }, [])

  const scrollShorts = (direction) => {
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
          <div id="shorts-container" ref={shortsContainerRef} className="flex overflow-x-auto snap-x snap-mandatory">
            {shorts.map((short, index) => (
              <div key={index} className="short-video flex-shrink-0 w-[80%] max-w-[315px] mr-4 snap-center">
                <div className="short-wrapper relative w-full pb-[177.78%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${short.snippet.resourceId.videoId}?autoplay=0&controls=1&mute=0&loop=1&playlist=${short.snippet.resourceId.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          <button
            id="prev-short"
            onClick={() => scrollShorts('left')}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="next-short"
            onClick={() => scrollShorts('right')}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
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

