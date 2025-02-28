"use client"

import { useEffect, useState, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "./Button"
import { motion, AnimatePresence } from "framer-motion"

const shortsPlaylistId = "PLZ_v3bWMqpjFa0xI11mahmOCxPk_1TK2s"
const apiKey = "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"

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
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${shortsPlaylistId}&key=${apiKey}`,
        )

        if (!response.ok) {
          throw new Error(`Error fetching shorts: ${response.status}`)
        }

        const data = await response.json()

        if (!data.items || data.items.length === 0) {
          setShorts([])
          setError("No se encontraron shorts en la lista de reproducción")
          return
        }

        const sortedItems = data.items
          .sort(
            (a: any, b: any) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
          )
          .slice(0, 5)
          .map((item: any) => ({
            id: item.id,
            title: item.snippet.title,
            videoId: item.snippet.resourceId.videoId,
          }))

        setShorts(sortedItems)
        setError(null)
      } catch (error) {
        console.error("Error fetching shorts:", error)
        setError("Error al cargar los shorts. Por favor, intenta más tarde.")
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
      <section id="shorts" className="py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Shorts</h2>

          {error && (
            <div className="text-center p-4 bg-red-100 text-red-800 rounded-lg mb-6">
              <p>{error}</p>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
            </div>
          ) : (
            <div className="shorts-carousel-container relative">
              {shorts.length > 0 ? (
                <>
                  <div
                    id="shorts-container"
                    ref={shortsContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4"
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
                        <p className="mt-2 text-sm text-center text-gray-700">{short.title}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollShorts("left")}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3"
                    aria-label="Desplazarse al short anterior"
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
                </>
              ) : (
                <div className="text-center p-8 bg-gray-200 rounded-lg">
                  <p>No hay shorts disponibles en este momento</p>
                </div>
              )}
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
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

