"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertCircle, X } from "lucide-react"
import { motion } from "framer-motion"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-[#B01E23] text-white"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-grow">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <p className="text-sm">¡Bienvenido a CafeClub TV! Disfruta de nuestra programación en vivo.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contenido"
              className="inline-flex items-center justify-center rounded text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-[#B01E23] hover:bg-gray-100 px-2.5 py-1 whitespace-nowrap"
            >
              Ver Programación
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
