"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface AdBannerProps {
  position?: "top" | "middle" | "bottom"
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
  imageAlt?: string
  autoRotate?: boolean
}

// Anuncios predefinidos para rotación automática
const predefinedAds = [
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
  {
    title: "¡Descarga Nuestra App!",
    description: "Disfruta de contenido exclusivo y notificaciones de transmisiones en vivo",
    buttonText: "Descargar",
    buttonLink: "https://clientesweb.github.io/CafeClubTv/CafeClubTV.apk",
    imageSrc: "/images/ad-app.jpg",
    imageAlt: "Banner publicitario para descargar la aplicación",
  },
]

export default function AdBanner({
  position = "middle",
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  autoRotate = false,
}: AdBannerProps) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Determinar qué anuncio mostrar
  const adToShow = autoRotate
    ? predefinedAds[currentAdIndex]
    : {
        title,
        description,
        buttonText,
        buttonLink,
        imageSrc,
        imageAlt,
      }

  // Rotación automática de anuncios
  useEffect(() => {
    if (!autoRotate || isHovered) return

    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % predefinedAds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRotate, isHovered])

  return (
    <section
      id={`ad-banner-${position}`}
      className="relative mx-4 sm:mx-8 my-12 overflow-hidden"
      aria-labelledby={`banner-title-${position}`}
      role="banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative h-64 sm:h-96 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Imagen de fondo con efecto de zoom */}
        <AnimatePresence mode="wait">
          <motion.div
            key={autoRotate ? currentAdIndex : adToShow.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={adToShow.imageSrc || "/placeholder.svg"}
              alt={adToShow.imageAlt || "Banner publicitario"}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="transition-transform duration-10000 brightness-[0.7]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Superposición con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

        {/* Contenido del banner */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={autoRotate ? `content-${currentAdIndex}` : adToShow.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Etiqueta de anuncio */}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#B01E23] text-white"
                  >
                    Anuncio
                  </motion.span>

                  <h2
                    id={`banner-title-${position}`}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md font-heading"
                  >
                    {adToShow.title}
                  </h2>

                  <p className="text-lg sm:text-xl mb-6 text-white/90 drop-shadow-md max-w-md">
                    {adToShow.description}
                  </p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="default"
                      size="lg"
                      asChild
                      className="bg-[#B01E23] hover:bg-[#8B0000] text-white shadow-lg group"
                    >
                      <a href={adToShow.buttonLink} aria-label={`${adToShow.buttonText} - ${adToShow.title}`}>
                        {adToShow.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Indicadores de navegación (solo para autoRotate) */}
        {autoRotate && (
          <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
            {predefinedAds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAdIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentAdIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ver anuncio ${index + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

