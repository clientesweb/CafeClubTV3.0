"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const sponsors = [
  { id: 1, src: "/images/sponsor.png", alt: "Sponsor 1", url: "#" },
  { id: 2, src: "/images/sponsor2.png", alt: "Sponsor 2", url: "#" },
  { id: 3, src: "/images/sponsor3.png", alt: "Sponsor 3", url: "#" },
  { id: 4, src: "/images/sponsor4.png", alt: "Sponsor 4", url: "#" },
  { id: 5, src: "/images/sponsor7.png", alt: "Sponsor 5", url: "#" },
]

export default function Sponsors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  // Iniciar animación cuando el componente está en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Autoplay para el carrusel
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % sponsors.length)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + sponsors.length) % sponsors.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % sponsors.length)
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setActiveIndex(index)
  }

  return (
    <section
      id="sponsors"
      className="py-20 relative overflow-hidden bg-accent/50 dark:bg-gray-900/50"
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
        <div className="relative max-w-5xl mx-auto">
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

          {/* Carrusel principal */}
          <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-border/50">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                className="absolute inset-0 flex items-center justify-center p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.8,
                  zIndex: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center group"
                >
                  <div className="relative w-[200px] h-[100px] sm:w-[250px] sm:h-[125px]">
                    <Image
                      src={sponsor.src || "/placeholder.svg"}
                      alt={sponsor.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      className="transition-all duration-300 group-hover:scale-105 drop-shadow-md"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#B01E23]/0 group-hover:bg-[#B01E23]/5 transition-colors duration-300 rounded-lg"></div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {sponsors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#B01E23] w-8" : "bg-[#B01E23]/30 hover:bg-[#B01E23]/50"
                }`}
                aria-label={`Ir al patrocinador ${index + 1}`}
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

