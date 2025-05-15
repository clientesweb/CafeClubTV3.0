"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos de patrocinadores
const sponsors = [
  {
    id: 1,
    name: "Comunicar Group",
    src: "/images/sponsors/comunicar-group.png",
    url: "https://comunicargroup.com",
  },
  {
    id: 2,
    name: "Teatro Sánchez Aguilar",
    src: "/images/sponsors/teatro-sanchez-aguilar.png",
    url: "https://teatrosanchezaguilar.org",
  },
  {
    id: 3,
    name: "Roku",
    src: "/images/sponsors/roku.png",
    url: "https://www.roku.com",
  },
  {
    id: 4,
    name: "ITB Fitness Center",
    src: "/images/sponsors/itb-fitness.png",
    url: "https://itbfitness.com",
  },
  {
    id: 5,
    name: "Arts Yoga Institute",
    src: "/images/sponsors/yoga-institute.png",
    url: "https://artsyogainstitute.edu",
  },
  {
    id: 6,
    name: "Latinos TV NY",
    src: "/images/sponsors/latinos-tv-ny.png",
    url: "https://www.latinostvny.com",
  },
  {
    id: 7,
    name: "Venus Films",
    src: "/images/sponsors/venus-films.png",
    url: "https://venusfilms.com",
  },
  {
    id: 8,
    name: "LexPro",
    src: "/images/sponsors/lexpro.png",
    url: "https://lexpro.legal",
  },
  {
    id: 9,
    name: "Duality Domain",
    src: "/images/sponsors/duality-domain.png",
    url: "https://www.dualitydomain.com",
  },
]

export default function Sponsors() {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  // Determinar cuántos patrocinadores mostrar según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calcular el número total de páginas
  const totalPages = Math.ceil(sponsors.length / itemsPerPage)

  // Obtener los patrocinadores para la página actual
  const currentSponsors = sponsors.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  // Funciones para navegar entre páginas
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentPage, totalPages])

  return (
    <section className="py-16 bg-accent/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center font-heading">Nuestros Patrocinadores</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
          Empresas y marcas que confían en nosotros y hacen posible llevar contenido de calidad a nuestra audiencia
        </p>

        {/* Carrusel simplificado */}
        <div className="relative max-w-6xl mx-auto">
          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
            aria-label="Patrocinadores anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
            aria-label="Siguientes patrocinadores"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Contenedor de logos */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {currentSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-28 bg-gray-50 dark:bg-gray-900 rounded-lg p-3 hover:shadow-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={`Visitar sitio web de ${sponsor.name}`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={sponsor.src || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className="max-w-[85%] max-h-[85%]"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Indicadores de página */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index ? "bg-[#B01E23] w-8" : "bg-[#B01E23]/30 hover:bg-[#B01E23]/50"
                }`}
                aria-label={`Ir a la página ${index + 1} de patrocinadores`}
              />
            ))}
          </div>
        </div>

        {/* Texto de patrocinio */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            ¿Interesado en patrocinar nuestro contenido?{" "}
            <a href="#contact" className="text-[#B01E23] hover:underline font-medium">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
