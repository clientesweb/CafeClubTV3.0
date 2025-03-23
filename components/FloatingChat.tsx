"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingChat() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowNotification(true)
    }, 3000) // Mostrar notificación después de 3 segundos

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    let hideTimer: NodeJS.Timeout

    if (showNotification) {
      hideTimer = setTimeout(() => {
        setShowNotification(false)
      }, 5000) // Cerrar notificación automáticamente después de 5 segundos
    }

    return () => clearTimeout(hideTimer)
  }, [showNotification])

  return (
    <div id="floating-chat" className="fixed right-4 bottom-24 flex flex-col gap-2 items-end z-40">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-secondary-brand rounded-lg shadow-lg p-4 mb-2 max-w-xs border border-cafe-red/20"
          >
            <p className="text-sm font-medium">Próximamente disfrutarás de los mejores premios</p>
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-1 right-1 text-muted-foreground hover:text-foreground"
              aria-label="Cerrar notificación"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="/ganacash"
        className="relative bg-cafe-red hover:bg-cafe-red/90 text-white rounded-full p-3 flex items-center justify-center w-14 h-14 transition-colors duration-300 shadow-lg"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png"
          alt="Gana Cash Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span className="sr-only">Ir a GanaCash</span>
        {showNotification && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
        )}
      </Link>

      <Link
        href="https://wa.me/593978606269"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cafe-red hover:bg-cafe-red/90 text-white rounded-full p-3 flex items-center justify-center w-14 h-14 transition-colors duration-300 shadow-lg"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        <span className="sr-only">Chat en WhatsApp</span>
      </Link>
    </div>
  )
}

