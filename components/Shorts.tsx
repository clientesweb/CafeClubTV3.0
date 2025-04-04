"use client"

import { useEffect, useState, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const shortsPlaylistId = "PLZ_v3bWMqpjFa0xI11mahmOCxPk_1TK2s"
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"

interface Short {
  id: string
  title: string
  videoId: string
}

export default function Shorts() {
  const [shorts, setShorts] = useState<Short[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const shortsContainerRef = useRef<HTMLDivElement>(null)
  const fullScreenContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${shortsPlaylistId}&key=${apiKey}&order=date`,
        )

        if (!response.ok) {
          throw new Error(`Error al cargar los shorts: ${response.status}`)
        }

        const data = await response.json()
        const sortedItems = data.items.sort(
          (a: any, b: any) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
        )
        const recentShorts = sortedItems.slice(0, 5).map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId,
        }))
        setShorts(recentShorts)
        setError(null)
      } catch (error) {
        console.error("Error fetching shorts:", error)
        setError("No se pudieron cargar los shorts. Por favor, inténtalo de nuevo más tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchShorts()
  }, [])

  const scrollShorts = (direction: "left" | "right") => {
    if (shortsContainerRef.current) {
      const scrollAmount = direction === "left" ? -315 : 315
      shortsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const toggleFullScreen = (index: number) => {
    setIsFullScreen(!isFullScreen)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isFullScreen && fullScreenContainerRef.current) {
      const handleScroll = () => {
        if (fullScreenContainerRef.current) {
          const scrollPosition = fullScreenContainerRef.current.scrollTop
          const videoHeight = fullScreenContainerRef.current.clientHeight
          const newIndex = Math.round(scrollPosition / videoHeight)
          if (newIndex !== currentIndex && newIndex >= 0 && newIndex < shorts.length) {
            setCurrentIndex(newIndex)
          }
        }
      }

      fullScreenContainerRef.current.addEventListener("scroll", handleScroll)
      return () => {
        if (fullScreenContainerRef.current) {
          fullScreenContainerRef.current.removeEventListener("scroll", handleScroll)
        }
      }
    }
  }, [isFullScreen, currentIndex, shorts.length])

  return (
    <>
      <section id="shorts" className="py-8 sm:py-12 md:py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center font-heading">Shorts</h2>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B01E23]"></div>
            </div>
          ) : error ? (
            <div className="text-center p-6 bg-red-500/10 rounded-lg">
              <p>{error}</p>
              <Button
                variant="default"
                onClick={() => window.location.reload()}
                className="mt-4 bg-[#B01E23] hover:bg-[#8B0000] text-white"
              >
                Reintentar
              </Button>
            </div>
          ) : (
            <div className="shorts-carousel-container relative">
              <div
                id="shorts-container"
                ref={shortsContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 custom-scrollbar"
              >
                {shorts.map((short, index) => (
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
                      <Button
                        onClick={() => toggleFullScreen(index)}
                        className="absolute bottom-2 right-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                        aria-label="Ver en pantalla completa"
                        variant="ghost"
                        size="icon"
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
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-center">{short.title}</p>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollShorts("left")}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3"
                aria-label="Desplazarse al short anterior"
                variant="ghost"
                size="icon"
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
              </Button>
              <Button
                onClick={() => scrollShorts("right")}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3"
                aria-label="Desplazarse al siguiente short"
                variant="ghost"
                size="icon"
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
              </Button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 overflow-y-auto snap-y snap-mandatory"
            ref={fullScreenContainerRef}
          >
            {shorts.map((short, index) => (
              <div key={short.id} className="relative w-full h-screen snap-start">
                {index === currentIndex && (
                  <iframe
                    src={`https://www.youtube.com/embed/${short.videoId}?autoplay=1&controls=0&mute=0&loop=1&playlist=${short.videoId}`}
                    title={short.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
                <div className="absolute top-4 left-4 text-white text-xl font-bold">{short.title}</div>
              </div>
            ))}
            <Button
              className="fixed top-4 right-4 text-white"
              onClick={() => setIsFullScreen(false)}
              aria-label="Cerrar pantalla completa"
              variant="ghost"
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

