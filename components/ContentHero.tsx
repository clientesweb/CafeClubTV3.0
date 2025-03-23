"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContentHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-cafe-red to-cafe-red/70 z-0">
        {/* Patrón de puntos superpuesto */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-heading">
            Descubre Nuestra <span className="text-gold">Programación</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Explora nuestra colección de programas exclusivos, shorts y contenido premium creado para ti
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="lg" asChild className="bg-white text-cafe-red hover:bg-white/90">
                <a href="#featured-programs">Ver Programas</a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                <a href="#shorts">Ver Shorts</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-1/4 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 opacity-20">
        <motion.div
          animate={{
            rotate: 360,
            y: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="w-full h-full rounded-full border-4 border-white"
        />
      </div>

      <div className="absolute bottom-1/4 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24 opacity-20">
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="w-full h-full bg-gold rounded-lg"
        />
      </div>

      {/* Imagen de TV/Pantalla decorativa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 right-0 w-full md:w-1/2 h-full pointer-events-none"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png"
          alt="CafeClub TV Logo"
          fill
          style={{ objectFit: "contain", objectPosition: "right bottom" }}
          priority
        />
      </motion.div>
    </section>
  )
}

