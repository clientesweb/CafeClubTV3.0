"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Datos de patrocinadores
const sponsors = [
  {
    id: 1,
    name: "Comunicar Group",
    src: "/images/sponsors/comunicar-group.png",
    url: "https://comunicargroup.com",
  },
  {
    id: 2,
    name: "Teatro Sánchez Aguilar",
    src: "/images/sponsors/teatro-sanchez-aguilar.png",
    url: "https://teatrosanchezaguilar.org",
  },
  {
    id: 3,
    name: "Roku",
    src: "/images/sponsors/roku.png",
    url: "https://www.roku.com",
  },
  {
    id: 4,
    name: "ITB Fitness Center",
    src: "/images/sponsors/itb-fitness.png",
    url: "https://itbfitness.com",
  },
  {
    id: 5,
    name: "Arts Yoga Institute",
    src: "/images/sponsors/yoga-institute.png",
    url: "https://artsyogainstitute.edu",
  },
  {
    id: 6,
    name: "Latinos TV NY",
    src: "/images/sponsors/latinos-tv-ny.png",
    url: "https://www.latinostvny.com",
  },
  {
    id: 7,
    name: "Venus Films",
    src: "/images/sponsors/venus-films.png",
    url: "https://venusfilms.com",
  },
  {
    id: 8,
    name: "LexPro",
    src: "/images/sponsors/lexpro.png",
    url: "https://lexpro.legal",
  },
  {
    id: 9,
    name: "Duality Domain",
    src: "/images/sponsors/duality-domain.png",
    url: "https://www.dualitydomain.com",
  },
]

export default function Sponsors() {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  // Determinar cuántos patrocinadores mostrar según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calcular el número total de páginas
  const totalPages = Math.ceil(sponsors.length / itemsPerPage)

  // Obtener los patrocinadores para la página actual
  const currentSponsors = sponsors.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  // Funciones para navegar entre páginas
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  // Pausar autoplay cuando el usuario interactúa con el carrusel
  const pauseAutoplay = () => setAutoplayEnabled(false)
  const resumeAutoplay = () => setAutoplayEnabled(true)

  // Autoplay
  useEffect(() => {
    if (!autoplayEnabled) return

    const interval = setInterval(() => {
      goToNextPage()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentPage, totalPages, autoplayEnabled])

  return (
    <section
      id="sponsors"
      className="py-16 bg-gradient-to-b from-accent/30 to-background"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">
            Nuestros <span className="text-[#B01E23]">Patrocinadores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            Empresas y marcas que confían en nosotros y hacen posible llevar contenido de calidad a nuestra audiencia
          </p>
        </motion.div>

        {/* Carrusel mejorado */}
        <div className="relative max-w-6xl mx-auto" ref={containerRef}>
          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              goToPrevPage()
              pauseAutoplay()
            }}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Patrocinadores anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              goToNextPage()
              pauseAutoplay()
            }}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Siguientes patrocinadores"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Contenedor de logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`page-${currentPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {currentSponsors.map((sponsor, index) => (
                  <motion.a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center h-32 sm:h-36 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 transition-all duration-300 group overflow-hidden"
                    aria-label={`Visitar sitio web de ${sponsor.name}`}
                    onMouseEnter={() => setHoveredSponsor(sponsor.id)}
                    onMouseLeave={() => setHoveredSponsor(null)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Borde decorativo animado */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B01E23]/20 rounded-lg transition-colors duration-300"></div>

                    {/* Contenedor de imagen */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={sponsor.src || "/placeholder.svg"}
                        alt={sponsor.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: "contain", objectPosition: "center" }}
                        className="max-w-[85%] max-h-[85%] transition-all duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay con nombre y botón */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#B01E23]/90 to-[#B01E23]/70 flex flex-col items-center justify-center p-3 transition-all duration-300 ${hoveredSponsor === sponsor.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <p className="text-white font-medium text-center mb-2">{sponsor.name}</p>
                      <div className="flex items-center text-white text-sm">
                        <span>Visitar</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Indicadores de página mejorados */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index)
                  pauseAutoplay()
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === index ? "bg-[#B01E23] w-8" : "bg-[#B01E23]/30 hover:bg-[#B01E23]/50 w-2"
                }`}
                aria-label={`Ir a la página ${index + 1} de patrocinadores`}
              />
            ))}
          </div>
        </div>

        {/* Texto de patrocinio mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-muted-foreground">
              ¿Interesado en patrocinar nuestro contenido?{" "}
              <a href="#contact" className="text-[#B01E23] hover:underline font-medium inline-flex items-center">
                Contáctanos
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
