'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const sponsors = [
  { id: 1, src: '/images/sponsor.png', alt: 'Sponsor 1' },
  { id: 2, src: '/images/sponsor2.png', alt: 'Sponsor 2' },
  { id: 3, src: '/images/sponsor3.png', alt: 'Sponsor 3' },
  { id: 4, src: '/images/sponsor4.png', alt: 'Sponsor 4' },
  { id: 5, src: '/images/sponsor7.png', alt: 'Sponsor 5' },
]

export default function Sponsors() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed as needed

      scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`)
      scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`)
    }
  }, [])

  return (
    <section id="sponsors" className="py-16 bg-gradient-to-r from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Nuestros Patrocinadores
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex animate-scroll"
            aria-live="polite"
            role="region"
            aria-label="Carrusel de patrocinadores"
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 px-4 w-[200px]"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={200}
                  height={100}
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

