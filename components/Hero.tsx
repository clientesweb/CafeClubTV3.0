'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    title: 'Franquicia CafeClubTV®: ¡lleva nuestra pasión a tu país!',
    description: '¡Ahora puedes tener tu propia franquicia con una App exclusiva y contenido personalizado para tus espectadores!.',
    buttonText: 'Contáctanos'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen max-h-[1080px] overflow-hidden">
      <div className="h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
            <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-24">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-left text-white max-w-2xl"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">{slide.title}</h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-6">{slide.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
                >
                  {slide.buttonText}
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white transition duration-300 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}