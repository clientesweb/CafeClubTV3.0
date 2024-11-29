'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const sponsors = [
  { id: 1, src: '/images/sponsor.png', alt: 'Sponsor 1' },
  { id: 2, src: '/images/sponsor2.png', alt: 'Sponsor 2' },
  { id: 3, src: '/images/sponsor3.png', alt: 'Sponsor 3' },
  { id: 4, src: '/images/sponsor4.png', alt: 'Sponsor 4' },
  { id: 5, src: '/images/sponsor5.png', alt: 'Sponsor 5' },
  { id: 6, src: '/images/sponsor6.png', alt: 'Sponsor 6' },
]

export default function Sponsors() {
  const [sponsorIndex, setSponsorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSponsorIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const moveSponsors = (direction: 'prev' | 'next') => {
    setSponsorIndex((prevIndex) =>
      direction === 'next'
        ? (prevIndex + 1) % sponsors.length
        : (prevIndex - 1 + sponsors.length) % sponsors.length
    )
  }

  return (
    <section id="sponsors" className="py-16 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Nuestros Patrocinadores
        </h2>
        <div id="sponsors-slider" className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${sponsorIndex * 100}%)` }}
            aria-live="polite"
            role="region"
            aria-label="Carrusel de patrocinadores"
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex-shrink-0 px-4"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={200}
                  height={100}
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  loading="lazy" // Lazy load para mejorar el rendimiento
                />
              </div>
            ))}
          </div>
          {/* Botón de retroceso */}
          <button
            onClick={() => moveSponsors('prev')}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 rounded-full p-2 transition duration-300 ease-in-out"
            aria-label="Ver patrocinador anterior"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Botón de avance */}
          <button
            onClick={() => moveSponsors('next')}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 rounded-full p-2 transition duration-300 ease-in-out"
            aria-label="Ver patrocinador siguiente"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}