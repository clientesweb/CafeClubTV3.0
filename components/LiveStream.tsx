"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, RefreshCw, Calendar, Clock, Users, Tv } from "lucide-react"

const livePlaylistId = "PLZ_v3bWMqpjHgBO9YXQroGPRsCoaxjZ0S"
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"

interface PlaylistItem {
  snippet: {
    title: string
    thumbnails: {
      medium: {
        url: string
      }
      high?: {
        url: string
      }
      standard?: {
        url: string
      }
    }
    resourceId: {
      videoId: string
    }
    publishedAt: string
    description?: string
    channelTitle?: string
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
  const [isLive, setIsLive] = useState(false)
  const [viewerCount, setViewerCount] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  const videoContainerRef = useRef<HTMLDivElement>(null)

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

        // Simular si está en vivo (en un entorno real, esto vendría de la API)
        setIsLive(Math.random() > 0.5)
        setViewerCount(Math.floor(Math.random() * 1000) + 100)
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

  // Obtener la información del video actual
  const currentVideo = playlistItems.find((item) => item.snippet.resourceId.videoId === mainVideoId)

  return (
    <section
      id="live-stream"
      className={`relative ${showPlaylist ? "py-8 sm:py-12 md:py-16 bg-[#B01E23]" : ""}`}
      aria-labelledby="live-stream-title"
    >
      {/* Fondo con efecto de patrón para la versión con playlist */}
      {showPlaylist && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        ></div>
      )}

      <div className="container mx-auto px-4">
        {showPlaylist && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-10"
          >
            <h2
              id="live-stream-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white font-heading"
            >
              Transmisión en Vivo
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
              Disfruta de nuestras transmisiones en vivo y contenido reciente. ¡No te pierdas ningún momento!
            </p>
          </motion.div>
        )}

        {isLoading ? (
          <div
            className="flex flex-col items-center justify-center min-h-[300px] gap-4"
            aria-live="polite"
            aria-busy="true"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" role="status"></div>
            <p className={`text-sm ${showPlaylist ? "text-white/80" : "text-muted-foreground"}`}>
              Cargando transmisión...
            </p>
            <span className="sr-only">Cargando transmisión en vivo, por favor espere</span>
          </div>
        ) : error ? (
          <div
            className={`text-center p-8 rounded-xl ${showPlaylist ? "bg-white/10 backdrop-blur-sm" : "bg-accent"}`}
            aria-live="assertive"
          >
            <p className={showPlaylist ? "text-white" : "text-foreground"}>{error}</p>
            <Button
              onClick={fetchPlaylist}
              className={`mt-4 ${
                showPlaylist
                  ? "bg-white text-[#B01E23] hover:bg-white/90"
                  : "bg-[#B01E23] text-white hover:bg-[#8B0000]"
              } transition-colors`}
              aria-label="Intentar cargar la transmisión nuevamente"
            >
              <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
              Reintentar
            </Button>
          </div>
        ) : (
          <div className={`grid ${showPlaylist ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"} gap-8`}>
            {/* Estado de transmisión en vivo (ahora fuera del video) */}
            {isLive && (
              <div className={`${showPlaylist ? "lg:col-span-2" : ""} flex items-center gap-3 mb-3`}>
                <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium live-pulse">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  EN VIVO
                </div>

                {viewerCount && (
                  <div className="flex items-center text-sm bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{viewerCount} espectadores</span>
                  </div>
                )}
              </div>
            )}

            {/* Video principal */}
            <div
              ref={videoContainerRef}
              className={`${
                showPlaylist ? "lg:col-span-2" : ""
              } relative overflow-hidden bg-black rounded-xl shadow-xl`}
            >
              {/* Reproductor de video */}
              <div className="aspect-video w-full">
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
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>

              {/* Información del video (solo visible cuando no se muestra la playlist) */}
              {!showPlaylist && currentVideo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 sm:p-6 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-2">{currentVideo.snippet.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(currentVideo.snippet.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(currentVideo.snippet.publishedAt).toLocaleTimeString()}
                    </div>
                    <div className="flex items-center">
                      <Tv className="h-4 w-4 mr-1" />
                      {currentVideo.snippet.channelTitle || "CafeClub TV"}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {currentVideo.snippet.description ||
                      "Disfruta de nuestra transmisión en vivo y contenido exclusivo."}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Lista de reproducción */}
            {showPlaylist && (
              <div className="lg:col-span-1">
                {/* Pestañas */}
                <div className="flex mb-4 bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab(0)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 0 ? "bg-white text-[#B01E23]" : "text-white hover:bg-white/10"
                    }`}
                  >
                    Recientes
                  </button>
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 1 ? "bg-white text-[#B01E23]" : "text-white hover:bg-white/10"
                    }`}
                  >
                    Programados
                  </button>
                </div>

                {/* Lista de videos */}
                <div className="overflow-y-auto max-h-[400px] space-y-3 custom-scrollbar">
                  <AnimatePresence mode="wait">
                    {activeTab === 0 ? (
                      <motion.div
                        key="recent"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {playlistItems.map((item, index) => (
                          <motion.div
                            key={item.snippet.resourceId.videoId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                              item.snippet.resourceId.videoId === mainVideoId ? "bg-white/20" : "hover:bg-white/10"
                            }`}
                            onClick={() => setMainVideoId(item.snippet.resourceId.videoId)}
                            aria-label={`Ver video: ${item.snippet.title}`}
                          >
                            {/* Miniatura con indicador de reproducción */}
                            <div className="relative flex-shrink-0">
                              <img
                                src={item.snippet.thumbnails.medium.url || "/placeholder.svg"}
                                alt={item.snippet.title}
                                className="w-20 h-12 object-cover rounded-md"
                              />
                              {item.snippet.resourceId.videoId === mainVideoId && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                  <Play className="h-4 w-4 text-white" fill="white" />
                                </div>
                              )}
                            </div>

                            {/* Información del video */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate">{item.snippet.title}</p>
                              <p className="text-xs text-white/70">
                                {new Date(item.snippet.publishedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="scheduled"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 text-center text-white/80"
                      >
                        <p>Próximamente transmisiones programadas</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
