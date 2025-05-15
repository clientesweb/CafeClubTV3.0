"use client"

import { useState, useEffect } from "react"
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
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 mb-2 max-w-xs border border-red-200"
          >
            <p className="text-sm font-medium">¿Necesitas ayuda? Contáctanos por WhatsApp</p>
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              aria-label="Cerrar notificación"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="https://wa.me/593978606269"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#B01E23] hover:bg-[#8B0000] text-white rounded-full p-3 flex items-center justify-center w-14 h-14 transition-colors duration-300 shadow-lg"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        <span className="sr-only">Chat en WhatsApp</span>
      </Link>
    </div>
  )
}
