"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("scroll", handleScroll)
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png"
                    alt="CafeClub TV Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="font-heading text-xl font-bold text-red-600">CaféClub</span>
                  <span className="font-heading text-xl font-bold ml-1">TV</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                Inicio
              </Link>

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-red-600 transition-colors flex items-center"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Contenido
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-48 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        <Link
                          href="/contenido"
                          className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition-colors"
                          role="menuitem"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Todos los Programas
                        </Link>
                        <Link
                          href="/contenido#live-stream"
                          className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition-colors"
                          role="menuitem"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          En Vivo
                        </Link>
                        <Link
                          href="/contenido#shorts"
                          className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition-colors"
                          role="menuitem"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Shorts
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/ganacash"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                GanaCash
              </Link>

              <Link
                href="#contact"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                Contacto
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {deferredPrompt && (
                <Button
                  variant="brand"
                  size="sm"
                  onClick={installPWA}
                  className="hidden sm:flex"
                  aria-label="Instalar aplicación"
                >
                  <i className="fas fa-download mr-2"></i>
                  Instalar
                </Button>
              )}

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="md:hidden"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-white/10"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/contenido"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contenido
                </Link>
                <Link
                  href="/ganacash"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GanaCash
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>

                {deferredPrompt && (
                  <Button variant="brand" onClick={installPWA} className="w-full mt-4" aria-label="Instalar aplicación">
                    <i className="fas fa-download mr-2"></i>
                    Instalar Aplicación
                  </Button>
                )}

                {/* Social links */}
                <div className="pt-4 border-t border-gray-200 dark:border-white/10 mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Síguenos en:</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/CafeClubRadio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a
                      href="https://twitter.com/CafeClub_Lat?s=08"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a
                      href="https://youtube.com/c/CafeClubCanalTv"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube"
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <i className="fab fa-youtube text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

