'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const shortsPlaylistId = 'PLZ_v3bWMqpjFa0xI11mahmOCxPk_1TK2s'
const apiKey = 'AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0'

interface Short {
  id: string
  title: string
  videoId: string
  thumbnailUrl: string
}

export default function Shorts() {
  const [shorts, setShorts] = useState<Short[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const shortsContainerRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fetchShorts = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${shortsPlaylistId}&key=${apiKey}&order=date`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch shorts')
      }
      const data = await response.json()
      const sortedItems = data.items.sort(
        (a: any, b: any) =>
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
      )
      const recentShorts = sortedItems.slice(0, 5).map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
        thumbnailUrl: item.snippet.thumbnails.medium.url,
      }))
      setShorts(recentShorts)
    } catch (error) {
      console.error('Error fetching shorts:', error)
      setError('Failed to load shorts. Please try again later.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchShorts()
  }, [fetchShorts])

  const scrollShorts = useCallback((direction: 'left' | 'right') => {
    if (shortsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -315 : 315
      shortsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        <p>{error}</p>
        <button
          onClick={fetchShorts}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="shorts"
      className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-gray-100 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800"
        >
          Latest Shorts
        </motion.h2>
        <div className="shorts-carousel-container relative">
          <div
            id="shorts-container"
            ref={shortsContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
          >
            {shorts.map((short, index) => (
              <motion.div
                key={short.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="short-video flex-shrink-0 w-[80%] max-w-[315px] snap-center"
              >
                <div className="short-wrapper relative w-full pb-[177.78%] bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={short.thumbnailUrl}
                    alt={`Thumbnail for ${short.title}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => {
                        // Implement modal or fullscreen video player here
                        console.log(`Play video: ${short.videoId}`)
                      }}
                      className="bg-white text-gray-800 rounded-full p-3 hover:bg-opacity-90 transition-colors"
                      aria-label={`Play ${short.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-medium text-center text-gray-800 line-clamp-2">
                  {short.title}
                </h3>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => scrollShorts('left')}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            aria-label="Scroll to previous short"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollShorts('right')}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            aria-label="Scroll to next short"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

