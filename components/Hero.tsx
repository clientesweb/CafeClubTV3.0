"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/images/hero1.png",
    title: "Tu programa de TV",
    description: "Con CaféClub TV, transforma tus ideas en un programa único y alcanza una audiencia global.",
    buttonText: "Promociones",
  },
  {
    image: "/images/hero2.png",
    title: "Productos y servicios al mundo",
    description: "Promociona tu negocio internacionalmente y atrae más clientes.",
    buttonText: "Inscríbete Ahora",
  },
  {
    image: "/images/hero3.png",
    title: "Franquicia CafeClubTV®: ¡lleva nuestra pasión a tu país!",
    description:
      "¡Ahora puedes tener tu propia franquicia con una App exclusiva y contenido personalizado para tus espectadores!.",
    buttonText: "Contáctanos",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preload images to avoid flickering
    const preloadImages = async () => {
      try {
        await Promise.all(
          slides.map((slide) => {
            return new Promise((resolve, reject) => {
              const img = new Image()
              img.src = slide.image
              img.onload = resolve
              img.onerror = reject
            })
          }),
        )
        setIsLoading(false)
      } catch (error) {
        console.error("Error preloading images:", error)
        setIsLoading(false)
      }
    }

    preloadImages()

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentSlideContent = useMemo(() => slides[currentSlide], [currentSlide])

  if (isLoading) {
    return (
      <section className="relative h-screen max-h-[1080px] bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </section>
    )
  }

  return (
    <section id="hero" className="relative h-screen max-h-[1080px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideContent.image || "/placeholder.svg"}
            alt={currentSlideContent.title}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 lg:px-24">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-left text-white max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-4 leading-tight">
            {currentSlideContent.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">{currentSlideContent.description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-lg transition duration-300 ease-in-out"
          >
            {currentSlideContent.buttonText}
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center space-x-2 sm:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white transition duration-300 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

