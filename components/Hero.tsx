'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image: '/images/hero1.png',
    title: 'Tu programa de TV',
    description: 'Con CaféClub TV, transforma tus ideas en un programa único y alcanza una audiencia global.',
    buttonText: 'Promociones'
  },
  {
    image: '/images/hero2.png',
    title: 'Productos y servicios al mundo',
    description: 'Promociona tu negocio internacionalmente y atrae más clientes.',
    buttonText: 'Inscríbete Ahora'
  },
  {
    image: '/images/hero3.png',
    title: 'Únete: Cafetería Virtual',
    description: 'Conéctate desde cualquier lugar y fortalece relaciones en un espacio innovador.',
    buttonText: 'Contáctanos'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section id="hero" className="relative h-screen max-h-[1080px] overflow-hidden" aria-label="Hero Carousel">
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
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            layout="fill" 
            objectFit="cover" 
            priority={currentSlide === 0}
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-24">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-left text-white max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">{slides[currentSlide].title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">{slides[currentSlide].description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
          >
            {slides[currentSlide].buttonText}
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white transition duration-300 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          ></button>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

