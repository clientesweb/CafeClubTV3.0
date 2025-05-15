"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#B01E23] text-white pt-16 pb-28 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sección Acerca de */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png"
                alt="Logo de CafeClub TV"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-heading text-xl font-bold">
                  CaféClub<span className="text-white">TV</span>
                </h3>
              </div>
            </div>
            <p className="text-white/90 mb-6">
              Canal internacional 100% digital. Programas variados sobre salud, negocios, deportes, belleza, viajes y
              entrevistas exclusivas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/CafeClubRadio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B01E23]"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/CafeClub_Lat?s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B01E23]"
              >
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B01E23]"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/c/CafeClubCanalTv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Youtube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B01E23]"
              >
                <Youtube size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Sección Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/contenido"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                  Programas
                </Link>
              </li>
              <li>
                <Link
                  href="/contenido#live-stream"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                  En Vivo
                </Link>
              </li>
              <li>
                <Link
                  href="/contenido#shorts"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                  Shorts
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-white mt-0.5" />
                <span className="text-white/80">Mystic Pointe Drive, Miami/Aventura, FL 33180, US</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white" />
                <a href="tel:+593978606269" className="text-white/80 hover:text-white transition-colors">
                  +593 978 606 269
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-white" />
                <a href="mailto:info@cafeclubtv.com" className="text-white/80 hover:text-white transition-colors">
                  info@cafeclubtv.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sección Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Suscríbete</h3>
            <p className="text-white/80 mb-4">
              Recibe nuestras últimas noticias y actualizaciones directamente en tu bandeja de entrada.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()} aria-labelledby="newsletter-heading">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email-input" className="sr-only">
                  Tu correo electrónico
                </label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  aria-label="Tu correo electrónico"
                  aria-required="true"
                />
                <Button
                  variant="default"
                  type="submit"
                  className="bg-white text-[#B01E23] hover:bg-white/90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B01E23]"
                >
                  Suscribirse
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">&copy; {new Date().getFullYear()} CafeClub TV. Todos los derechos reservados.</p>
          <p className="text-white/60 mt-2 mb-4 md:mb-0">Powered by Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}
