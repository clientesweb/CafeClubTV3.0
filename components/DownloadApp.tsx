"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, ChevronRight, CheckCircle } from "lucide-react"

export default function DownloadApp() {
  const [hovered, setHovered] = useState(false)

  const features = [
    "Contenido exclusivo",
    "Notificaciones de transmisiones en vivo",
    "Descarga de videos para ver sin conexión",
    "Interfaz personalizable",
    "Acceso a eventos especiales",
  ]

  return (
    <section
      id="download-app"
      className="py-20 relative overflow-hidden"
      aria-labelledby="download-app-title"
      role="region"
    >
      {/* Fondo con gradiente y efecto de malla */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 z-0"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#B01E23]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#B01E23]/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texto de presentación */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 lg:w-5/12"
          >
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[#B01E23]/10 text-[#B01E23] dark:bg-[#B01E23]/20 dark:text-white">
              Nueva Aplicación
            </div>
            <h2 id="download-app-title" className="text-4xl md:text-5xl font-bold mb-6 font-heading" tabIndex={0}>
              Lleva CafeClub TV <span className="text-[#B01E23]">Contigo</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-xl" tabIndex={0}>
              Disfruta de contenido exclusivo, notificaciones de transmisiones en vivo y mucho más. Descarga nuestra
              aplicación y lleva la experiencia CafeClub TV a donde vayas.
            </p>

            {/* Lista de características */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-[#B01E23]" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="CafeClubTv/CafeClubTV.apk"
                className="group inline-flex items-center justify-center gap-2 bg-[#B01E23] hover:bg-[#8B0000] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                aria-label="Descargar APK de CafeClub TV"
                role="button"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Descargar APK
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#B01E23] text-[#B01E23] dark:text-white hover:bg-[#B01E23]/10 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                aria-label="Próximamente en App Store"
                role="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Próximamente en iOS
              </motion.a>
            </div>
          </motion.div>

          {/* Imagen mockup de la app */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 lg:w-5/12 relative"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            <div className="relative">
              <motion.div
                animate={hovered ? { y: -10 } : { y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Image
                  src="/images/mockup.jpg"
                  alt="Mockup de la aplicación CafeClub TV"
                  width={500}
                  height={500}
                  className="max-w-full h-auto rounded-3xl shadow-2xl"
                  priority
                />

                {/* Badge de nuevo */}
                <div className="absolute -top-4 -right-4 bg-[#B01E23] text-white font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg">
                  ¡Nuevo!
                </div>
              </motion.div>

              {/* Elementos decorativos alrededor del mockup */}
              <motion.div
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#B01E23]/20 to-[#FFD700]/20 rounded-full opacity-70 blur-3xl"
                animate={hovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Círculos decorativos */}
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[#B01E23]/20 rounded-full blur-xl"></div>
              <div className="absolute -top-10 -right-10 w-16 h-16 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            </div>

            {/* QR code para descargar (opcional) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-white p-3 rounded-xl shadow-lg hidden md:block"
            >
              <div className="w-24 h-24 bg-[url('/placeholder.svg?height=100&width=100')] bg-cover bg-center"></div>
              <p className="text-xs text-center mt-1 font-medium">Escanea para descargar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

