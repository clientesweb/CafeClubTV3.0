"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"

// Anuncios para rotación automática
const heroAds = [
  {
    title: "¡Gana Cash Jugando a la Ruleta!",
    description: "¡Participa ahora y haz girar la rueda para ganar grandes premios en efectivo!",
    buttonText: "Juega Ahora",
    buttonLink: "/ganacash",
    imageSrc: "/images/banner.jpg",
    imageAlt: "Banner publicitario para ganar dinero jugando a la ruleta",
  },
  {
    title: "¡Promociona tu Negocio con Nosotros!",
    description: "Llega a miles de espectadores y aumenta la visibilidad de tu marca",
    buttonText: "Más Información",
    buttonLink: "#commercial-proposals",
    imageSrc: "/images/ad-business.jpg",
    imageAlt: "Banner publicitario para promocionar tu negocio",
  },
  {
    title: "¡Crea tu Propio Programa de TV!",
    description: "Convierte tus ideas en un programa profesional y alcanza una audiencia global",
    buttonText: "Empieza Ahora",
    buttonLink: "#commercial-proposals",
    imageSrc: "/images/ad-program.jpg",
    imageAlt: "Banner publicitario para crear tu propio programa de TV",
  },
]

export default function ContentHero() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Rotación automática de anuncios
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % heroAds.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isHovered])

  const currentAd = heroAds[currentAdIndex]

  return (
    <section
      className="relative h-[70vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fondo con imagen y overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAdIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={currentAd.imageSrc || "/placeholder.svg"}
            alt={currentAd.imageAlt}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#B01E23]/80 to-black/50"></div>
        </motion.div>
      </AnimatePresence>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 opacity-20">
        <motion.div
          animate={{
            rotate: 360,
            y: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="w-full h-full rounded-full border-4 border-white"
        />
      </div>

      <div className="absolute bottom-1/4 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24 opacity-20">
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="w-full h-full bg-[#FFD700] rounded-lg"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentAdIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Etiqueta de anuncio */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
            >
              Anuncio Destacado
            </motion.span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-heading text-white">
              {currentAd.title}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl">{currentAd.description}</p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="default" size="lg" asChild className="bg-white text-[#B01E23] hover:bg-white/90 group">
                  <a href={currentAd.buttonLink}>
                    {currentAd.buttonText}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                  <a href="#featured-programs">
                    Ver Programas
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {heroAds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAdIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentAdIndex === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ver anuncio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

