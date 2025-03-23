"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero1.png",
    title: "Tu programa de TV",
    description: "Con CaféClub TV, transforma tus ideas en un programa único y alcanza una audiencia global.",
    buttonText: "Promociones",
    buttonLink: "#commercial-proposals",
  },
  {
    image: "/images/hero2.png",
    title: "Productos y servicios al mundo",
    description: "Promociona tu negocio internacionalmente y atrae más clientes.",
    buttonText: "Inscríbete Ahora",
    buttonLink: "#commercial-proposals",
  },
  {
    image: "/images/hero3.png",
    title: "Franquicia CafeClubTV®",
    description: "¡Ahora puedes tener tu propia franquicia con una App exclusiva y contenido personalizado!",
    buttonText: "Contáctanos",
    buttonLink: "#contact",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentSlideContent = useMemo(() => slides[currentSlide], [currentSlide])

  return (
    <section id="hero" className="relative h-screen max-h-[1080px] overflow-hidden">
      {/* Background gradient overlay for consistent branding */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B01E23]/80 to-black/50 z-10"></div>

      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideContent.image || "/placeholder.svg"}
            alt={currentSlideContent.title}
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
            }}
            className="brightness-[0.6] transition-transform duration-10000 transform scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white text-[#B01E23]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  CaféClub TV
                </motion.span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading drop-shadow-md">
                  {currentSlideContent.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">{currentSlideContent.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="bg-[#B01E23] text-white hover:bg-[#8B0000] shadow-lg hover:scale-105 transition-transform"
                  >
                    <a href={currentSlideContent.buttonLink}>
                      {currentSlideContent.buttonText}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white"
                  >
                    <a href="/contenido">Ver Programación</a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

