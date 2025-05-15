"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos actualizados de patrocinadores con URLs y dimensiones
const sponsors = [
  {
    id: 1,
    name: "Comunicar Group",
    src: "/images/sponsors/comunicar-group.png",
    url: "https://comunicargroup.com",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    name: "Teatro Sánchez Aguilar",
    src: "/images/sponsors/teatro-sanchez-aguilar.png",
    url: "https://teatrosanchezaguilar.org",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    name: "Roku",
    src: "/images/sponsors/roku.png",
    url: "https://www.roku.com",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    name: "ITB Fitness Center",
    src: "/images/sponsors/itb-fitness.png",
    url: "https://itbfitness.com",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    name: "Arts Yoga Institute",
    src: "/images/sponsors/yoga-institute.png",
    url: "https://artsyogainstitute.edu",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    name: "Latinos TV NY",
    src: "/images/sponsors/latinos-tv-ny.png",
    url: "https://www.latinostvny.com",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    name: "Venus Films",
    src: "/images/sponsors/venus-films.png",
    url: "https://venusfilms.com",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    name: "LexPro",
    src: "/images/sponsors/lexpro.png",
    url: "https://lexpro.legal",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    name: "Duality Domain",
    src: "/images/sponsors/duality-domain.png",
    url: "https://www.dualitydomain.com",
    width: 800,
    height: 600,
  },
]

export default function Sponsors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [visibleSponsors, setVisibleSponsors] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  // Determinar cuántos patrocinadores mostrar según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSponsors(1)
      } else if (window.innerWidth < 1024) {
        setVisibleSponsors(2)
      } else if (window.innerWidth < 1280) {
        setVisibleSponsors(3)
      } else {
        setVisibleSponsors(4)
      }
    }

    // Inicializar
    handleResize()

    // Agregar listener para cambios de tamaño
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Iniciar animación cuando el componente está en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      // Asegurarse de que el primer conjunto de logos sea visible
      if (carouselRef.current) {
        setActiveIndex(0)
      }
    }
  }, [isInView, controls])

  // Autoplay para el carrusel
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        const maxIndex = sponsors.length - visibleSponsors
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [autoplay, visibleSponsors])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev <= 0 ? sponsors.length - visibleSponsors : prev - 1))
  }

  const handleNext = () => {
    setAutoplay(false)
    const maxIndex = sponsors.length - visibleSponsors
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setActiveIndex(index)
  }

  // Calcular el número máximo de indicadores
  const maxIndicators = sponsors.length - visibleSponsors + 1

  return (
    <section
      id="sponsors"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-accent/50 dark:bg-gray-900/50"
      ref={containerRef}
    >
      {/* Fondo con efecto de malla */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Nuestros Patrocinadores</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas y marcas que confían en nosotros y hacen posible llevar contenido de calidad a nuestra audiencia
          </p>
        </motion.div>

        {/* Carrusel de patrocinadores */}
        <div className="relative max-w-7xl mx-auto">
          {/* Controles de navegación */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 -ml-4 sm:-ml-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background hover:text-[#B01E23]"
              aria-label="Patrocinador anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 -mr-4 sm:-mr-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background hover:text-[#B01E23]"
              aria-label="Siguiente patrocinador"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Contenedor del carrusel */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-border/50"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleSponsors)}%)`,
                width: `${sponsors.length * (100 / visibleSponsors)}%`,
              }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="relative flex-shrink-0 p-4 sm:p-6 md:p-8"
                  style={{ width: `${100 / visibleSponsors}%` }}
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative w-full h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center"
                    aria-label={`Visitar sitio web de ${sponsor.name}`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] mx-auto h-full flex items-center justify-center">
                        <Image
                          src={sponsor.src || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={sponsor.width}
                          height={sponsor.height}
                          className="object-contain max-h-[80px] sm:max-h-[100px] md:max-h-[120px] max-w-full transition-all duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Overlay con efecto hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/5 dark:bg-white/5 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-[#B01E23] dark:text-white text-sm font-medium flex items-center">
                          Visitar <ExternalLink className="ml-1 w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndicators }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#B01E23] w-8" : "bg-[#B01E23]/30 hover:bg-[#B01E23]/50"
                }`}
                aria-label={`Ir al grupo de patrocinadores ${index + 1}`}
              />
            ))}
          </div>

          {/* Texto de patrocinio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
            }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground">
              ¿Interesado en patrocinar nuestro contenido?{" "}
              <a href="#contact" className="text-[#B01E23] hover:underline font-medium">
                Contáctanos
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
