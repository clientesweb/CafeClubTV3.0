"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingChat() {
  const [isClient, setIsClient] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const showTimer = setTimeout(() => {
      setShowNotification(true)
    }, 3000) // Mostrar notificación después de 3 segundos

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isClient) return

    let hideTimer: NodeJS.Timeout

    if (showNotification) {
      hideTimer = setTimeout(() => {
        setShowNotification(false)
      }, 5000) // Cerrar notificación automáticamente después de 5 segundos
    }

    return () => clearTimeout(hideTimer)
  }, [showNotification, isClient])

  if (!isClient) {
    return null
  }

  return (
    <div id="floating-chat" className="fixed right-4 bottom-24 flex flex-col gap-2 items-end">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="bg-white rounded-lg shadow-lg p-4 mb-2 max-w-xs"
          >
            <p className="text-sm text-gray-800 font-medium">Próximamente disfrutarás de los mejores premios</p>
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar notificación"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="/ganacash"
        className="relative bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white rounded-full p-2 sm:p-3 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300"
      >
        <Image
          src="/images/ganacash.png"
          alt="Gana Cash Logo"
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10"
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
        className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white rounded-full p-2 sm:p-3 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300"
      >
        <Image
          src="/images/Icon512x512.png"
          alt="CafeClub TV Logo"
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span className="sr-only">Chat en WhatsApp</span>
      </Link>
    </div>
  )
}

