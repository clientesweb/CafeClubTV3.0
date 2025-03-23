"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      setDeferredPrompt(null)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        {/* Botón de instalar PWA */}
        <button
          id="installButton"
          onClick={installPWA}
          className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base flex items-center gap-2 transition-all duration-300 ease-in-out"
          aria-label="Instalar la aplicación"
        >
          <i className="fas fa-download text-lg sm:text-xl"></i>
          Instalar
        </button>

        {/* Logo centrado con enlace a inicio */}
        <Link href="/" className="flex justify-center">
          <Image
            src="/images/Icon512x512.png"
            alt="CafeClub TV Logo"
            width={64}
            height={64}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </Link>

        {/* Menú de navegación en pantallas grandes */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-[var(--primary-color)] font-medium transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            href="/contenido"
            className="text-gray-600 hover:text-[var(--primary-color)] font-medium transition-colors duration-300"
          >
            Contenido
          </Link>
          <Link
            href="/ganacash"
            className="text-gray-600 hover:text-[var(--primary-color)] font-medium transition-colors duration-300"
          >
            GanaCash
          </Link>
        </div>

        {/* Botón de menú en pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 z-50">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-600 hover:text-[var(--primary-color)] font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/contenido"
              className="text-gray-600 hover:text-[var(--primary-color)] font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contenido
            </Link>
            <Link
              href="/ganacash"
              className="text-gray-600 hover:text-[var(--primary-color)] font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              GanaCash
            </Link>

            {/* Redes sociales */}
            <div className="flex gap-4 pt-2 border-t border-gray-200">
              <Link
                href="https://www.facebook.com/CafeClubRadio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
              </Link>
              <Link
                href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
              </Link>
              <Link
                href="https://twitter.com/CafeClub_Lat?s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
              </Link>
              <Link
                href="https://youtube.com/c/CafeClubCanalTv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

