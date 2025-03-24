"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Award, Users, Globe, Tv, Heart, TrendingUp, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("historia")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(videoRef, { once: true, amount: 0.3 })

  const tabs = [
    { id: "historia", label: "Nuestra Historia" },
    { id: "mision", label: "Misión y Visión" },
    { id: "equipo", label: "Nuestro Equipo" },
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Espectadores" },
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Países" },
    { icon: <Tv className="w-6 h-6" />, value: "200+", label: "Programas" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "5M+", label: "Visualizaciones" },
  ]

  const team = [
    {
      name: "Carlos Sánchez",
      role: "Director General",
      image: "/images/team1.jpg",
      bio: "Fundador y visionario detrás de CafeClub TV. Con más de 15 años de experiencia en medios digitales.",
    },
    {
      name: "María González",
      role: "Directora de Contenido",
      image: "/images/team2.jpg",
      bio: "Experta en producción audiovisual con un enfoque innovador para crear contenido que conecta con la audiencia.",
    },
    {
      name: "Juan Pérez",
      role: "Director Técnico",
      image: "/images/team3.jpg",
      bio: "Ingeniero de sistemas especializado en plataformas de streaming y tecnologías emergentes.",
    },
  ]

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión",
      description: "Amamos lo que hacemos y lo transmitimos en cada contenido",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Calidad",
      description: "Nos comprometemos con la excelencia en cada producción",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Diversidad",
      description: "Valoramos diferentes perspectivas y culturas",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovación",
      description: "Constantemente buscamos nuevas formas de crear y distribuir contenido",
    },
  ]

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section id="about-us" className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Sobre Nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CafeClub TV es un canal internacional 100% digital con programación variada y de calidad para todos los
              gustos
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mt-8 mb-12 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#B01E23] text-white shadow-lg"
                    : "bg-accent text-foreground hover:bg-accent/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido de Historia */}
        {activeTab === "historia" && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video o imagen destacada */}
            <div ref={videoRef} className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              {isVideoPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RRex2MDqVZ8?autoplay=1"
                  title="CafeClub TV Historia"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              ) : (
                <>
                  <Image
                    src="/images/hero1.png"
                    alt="Historia de CafeClub TV"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.button
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      onClick={handlePlayVideo}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                      aria-label="Reproducir video"
                    >
                      <Play className="w-8 h-8 text-[#B01E23] ml-1" />
                    </motion.button>
                  </div>
                </>
              )}
            </div>

            {/* Texto de historia */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold mb-6 font-heading">Nuestra Historia</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CafeClub TV nació en 2018 como un proyecto innovador para llevar contenido de calidad a audiencias de
                  habla hispana en todo el mundo. Lo que comenzó como un pequeño estudio en Guayaquil, Ecuador,
                  rápidamente se expandió para convertirse en una plataforma internacional.
                </p>
                <p>
                  Nuestra visión siempre ha sido crear un espacio donde los creadores de contenido puedan expresarse
                  libremente y conectar con audiencias globales. A lo largo de los años, hemos evolucionado de ser un
                  simple canal a convertirnos en una plataforma multimedia completa.
                </p>
                <p>
                  Hoy, CafeClub TV opera desde estudios en Ecuador y Miami, produciendo contenido original que se
                  distribuye a más de 15 países, con una comunidad creciente de espectadores fieles que disfrutan de
                  nuestra programación variada.
                </p>
              </div>

              {/* Línea de tiempo */}
              <div className="mt-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
                <div className="space-y-6">
                  {[
                    { year: "2018", event: "Fundación de CafeClub TV en Guayaquil" },
                    { year: "2020", event: "Expansión a Miami y lanzamiento de la plataforma digital" },
                    { year: "2022", event: "Alcance de 1 millón de espectadores mensuales" },
                    { year: "2023", event: "Lanzamiento de la aplicación móvil y sistema de franquicias" },
                  ].map((item, index) => (
                    <div key={index} className="ml-6 relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#B01E23]"></div>
                      <div className="font-bold text-[#B01E23]">{item.year}</div>
                      <div className="text-muted-foreground">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Contenido de Misión y Visión */}
        {activeTab === "mision" && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto de misión y visión */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 font-heading">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Crear y distribuir contenido de alta calidad que informe, entretenga e inspire a nuestra audiencia
                  global, ofreciendo una plataforma para que voces diversas puedan compartir sus historias y conectar
                  con espectadores de todo el mundo hispanohablante.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 font-heading">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Ser la plataforma líder de contenido digital en español, reconocida por la calidad de nuestra
                  programación, la innovación tecnológica y el impacto positivo en nuestras comunidades, expandiendo
                  nuestra presencia a todos los países de habla hispana.
                </p>
              </div>

              {/* Valores */}
              <h3 className="text-2xl font-bold mb-4 font-heading">Nuestros Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#B01E23]/10 flex items-center justify-center text-[#B01E23] flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Estadísticas */}
            <div>
              <div className="bg-gradient-to-br from-[#B01E23] to-[#8B0000] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center font-heading">CafeClub TV en Números</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Imagen decorativa */}
              <div className="mt-8 relative h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero2.png"
                  alt="CafeClub TV Visión"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-lg font-medium">
                      "Creemos en el poder de las historias para transformar el mundo"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de Equipo */}
        {activeTab === "equipo" && (
          <div>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Nuestro equipo está formado por profesionales apasionados y creativos dedicados a ofrecer la mejor
              experiencia de contenido digital.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image || "/placeholder.svg?height=300&width=300"}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-[#B01E23] font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                    <div className="mt-4 flex gap-3">
                      <a href="#" className="text-muted-foreground hover:text-[#B01E23] transition-colors">
                        <i className="fab fa-linkedin text-lg"></i>
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-[#B01E23] transition-colors">
                        <i className="fab fa-twitter text-lg"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Unirse al equipo */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 font-heading">¿Quieres unirte a nuestro equipo?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Siempre estamos buscando talentos apasionados para unirse a nuestra familia. Si te apasionan los medios
                digitales y quieres formar parte de algo grande, ¡contáctanos!
              </p>
              <Button variant="default" asChild className="bg-[#B01E23] hover:bg-[#8B0000] text-white">
                <a
                  href="https://wa.me/593978606269?text=Hola,%20me%20interesa%20unirme%20al%20equipo%20de%20CafeClub%20TV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar mi CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

