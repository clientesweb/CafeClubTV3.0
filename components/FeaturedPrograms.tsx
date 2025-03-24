"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Calendar, Clock, ExternalLink } from "lucide-react"

const programs = [
  {
    title: "DE LEY! con María Paula",
    image: "/images/programa1.jpg",
    schedule: "Jueves 20:00 PM",
    description: "Análisis legal de temas de actualidad con expertos invitados",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjEXDXovYZECqH1qxi8ymnTe&si=VKIYygF-jj2_PJ3l",
    host: "María Paula Delgado",
    category: "Actualidad",
  },
  {
    title: "Hola Gutis!",
    image: "/images/programa2.jpg",
    schedule: "Miércoles 12:00 PM",
    description: "Entrevistas y conversaciones con personalidades destacadas",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGamAX8f5SVv451mwHq_bQq&si=VA--l8LRYg8dvxbW",
    host: "Karyna Arteaga y Kary Abad",
    category: "Entrevistas",
  },
  {
    title: "Café con Music",
    image: "/images/programa7.jpg",
    schedule: "Jueves 14:00 PM",
    description: "Lo mejor de la música actual y clásica con artistas invitados",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGxVyk1uBjUqMySYkbi6e3j&si=cdKZ--gAbwcB1ZxY",
    host: "DJ Marcos",
    category: "Música",
  },
  {
    title: "Cafeteros",
    image: "/images/programa3.jpg",
    schedule: "Lunes y Miércoles 10:00 AM",
    description: "Noticias y actualidad del mundo del café y gastronomía",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGGJD55fn6RP4lNo1sZZSEP&si=3ZphX4i3eR8abpes",
    host: "Pablo Valdivieso, Julius Grunauer y Nicole Fontaine",
    category: "Gastronomía",
  },
  {
    title: "OM Talks",
    image: "/images/programa4.jpg",
    schedule: "Miércoles 22:00 PM",
    description: "Conversaciones sobre bienestar, meditación y vida saludable",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjEU5H15CbmplsuGxtY66OwJ&si=lZFY_KZ5mNvz3SoH",
    host: "Sonnia Valverde",
    category: "Bienestar",
  },
  {
    title: "Café COACHING",
    image: "/images/programa5.jpg",
    schedule: "Lunes 20:00 PM",
    description: "Desarrollo personal y profesional con técnicas de coaching",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjFxAFBsSb6EGJipJIRJT1x5&si=I10PfA73ad8Eb0LG",
    host: "Miriam Rojas",
    category: "Desarrollo",
  },
  {
    title: "Café Ole",
    image: "/images/programa6.jpg",
    schedule: "Lunes 16:00 PM",
    description: "Cultura, tradiciones y actualidad hispana en un formato dinámico",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGcaIqVFVvXDoHSCQyXwTYh&si=Twc6ZBj-bLWgW57N",
    host: "Sylvia Ángel Eyes",
    category: "Cultura",
  },
  {
    title: "Tech Capital",
    image: "/images/tech-capital.png",
    schedule: "Lunes 19:00 PM",
    description: "Análisis de mercados financieros, inversiones y tecnología",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGQRHb9b3FSBw4oKiG2zDrh&si=bRgaPHzHBxROI2vR",
    host: "Héctor Bermúdez",
    category: "Finanzas",
  },
  {
    title: "El Búho COMUNICA",
    image: "/images/programa8.jpg",
    schedule: "Viernes 18:00 PM",
    description: "Comunicación efectiva y estrategias para conectar con audiencias",
    link: "#",
    host: "Karina Arteaga",
    category: "Comunicación",
  },
]

// Categorías únicas para filtrado
const categories = ["Todos", ...Array.from(new Set(programs.map((program) => program.category)))]

export default function FeaturedPrograms() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredPrograms =
    activeCategory === "Todos" ? programs : programs.filter((program) => program.category === activeCategory)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section id="featured-programs" className="py-16 sm:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-accent/30 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#B01E23]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#B01E23]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading text-[#B01E23] dark:text-white">
            Parrilla de Programas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra variedad de programas exclusivos creados para informar, entretener e inspirar
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#B01E23] text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Contenedor de programas con controles de navegación */}
        <div className="relative">
          {/* Botón de navegación izquierda */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors -ml-4 sm:-ml-6"
            aria-label="Ver programas anteriores"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Carrusel de programas */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-8 pt-2 custom-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProgram(index)}
                onHoverEnd={() => setHoveredProgram(null)}
                className="flex-shrink-0 w-72 sm:w-80 snap-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                  {/* Imagen con overlay */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className={`transition-transform duration-700 ${hoveredProgram === index ? "scale-110" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Categoría */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#B01E23]/90 text-white text-xs font-medium rounded">
                      {program.category}
                    </div>

                    {/* Botón de reproducción */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Reproducir ${program.title}`}
                        className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      >
                        <Play className="w-6 h-6 text-[#B01E23] ml-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl mb-2 text-[#B01E23] dark:text-white line-clamp-1">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{program.description}</p>

                    <div className="mt-auto space-y-3">
                      {/* Presentador */}
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                        {program.host}
                      </div>

                      {/* Horario */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          {program.schedule.split(" ")[0]}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {program.schedule.split(" ").slice(1).join(" ")}
                        </div>
                      </div>

                      {/* Botón */}
                      <Button
                        variant="default"
                        asChild
                        className="w-full bg-[#B01E23] hover:bg-[#8B0000] text-white mt-2 group"
                      >
                        <Link
                          href={program.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver programa ${program.title}`}
                        >
                          Ver programa
                          <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón de navegación derecha */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors -mr-4 sm:-mr-6"
            aria-label="Ver más programas"
          >
            <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Botón para ver todos los programas */}
        <div className="text-center mt-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[#B01E23] text-[#B01E23] hover:bg-[#B01E23]/10 dark:text-white dark:border-white"
            >
              <Link href="/contenido">
                Ver toda la programación
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

