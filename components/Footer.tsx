import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary-brand text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sección Acerca de */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo de CafeClub TV"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-heading text-xl font-bold">
                  CaféClub<span className="text-brand">TV</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Canal internacional 100% digital. Programas variados sobre salud, negocios, deportes, belleza, viajes y
              entrevistas exclusivas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/CafeClubRadio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/CafeClub_Lat?s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/c/CafeClubCanalTv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Sección Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/contenido"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Programas
                </Link>
              </li>
              <li>
                <Link
                  href="/contenido#live-stream"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  En Vivo
                </Link>
              </li>
              <li>
                <Link
                  href="/contenido#shorts"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  Shorts
                </Link>
              </li>
              <li>
                <Link
                  href="/ganacash"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                  GanaCash
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand mt-0.5" />
                <span className="text-gray-300">Mystic Pointe Drive, Miami/Aventura, FL 33180, US</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand" />
                <a href="tel:+593978606269" className="text-gray-300 hover:text-white transition-colors">
                  +593 978 606 269
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand" />
                <a href="mailto:info@cafeclubtv.com" className="text-gray-300 hover:text-white transition-colors">
                  info@cafeclubtv.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sección Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Suscríbete</h3>
            <p className="text-gray-300 mb-4">
              Recibe nuestras últimas noticias y actualizaciones directamente en tu bandeja de entrada.
            </p>
            <form className="space-y-3">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  aria-label="Tu correo electrónico"
                />
                <Button variant="brand" type="submit">
                  Suscribirse
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} CafeClub TV. Todos los derechos reservados.</p>
          <p className="text-gray-400 mt-2">Powered by Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}

