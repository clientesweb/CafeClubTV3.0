import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-color)] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección Acerca de */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Acerca de CafeClub TV</h3>
            <Image 
              src="/images/Icon512x512.png" 
              alt="Logo de CafeClub TV" 
              width={96} 
              height={96} 
              className="w-24 h-24 mb-4 object-contain" 
              priority // Esta opción mejora el rendimiento de la imagen clave
            />
            <p className="text-gray-200 text-sm sm:text-base">
              Canal internacional 100% digital. Programas variados sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas.
            </p>
          </div>

          {/* Sección Enlaces Rápidos */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-200 hover:text-white text-sm sm:text-base" aria-label="Ir a la página de inicio">Inicio</Link></li>
              <li><Link href="#" className="text-gray-200 hover:text-white text-sm sm:text-base" aria-label="Ir a la página de Programas">Programas</Link></li>
              <li><Link href="#" className="text-gray-200 hover:text-white text-sm sm:text-base" aria-label="Ir a la página de En Vivo">En Vivo</Link></li>
              <li><Link href="#" className="text-gray-200 hover:text-white text-sm sm:text-base" aria-label="Ir a la página de Contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Sección Redes Sociales */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/CafeClubRadio/" target="_blank" rel="noopener noreferrer" aria-label="Ir al Facebook de CafeClub TV">
                <i className="fab fa-facebook-f text-lg sm:text-xl"></i>
              </Link>
              <Link href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep" target="_blank" rel="noopener noreferrer" aria-label="Ir al Instagram de CafeClub TV">
                <i className="fab fa-instagram text-lg sm:text-xl"></i>
              </Link>
              <Link href="https://twitter.com/CafeClub_Lat?s=08" target="_blank" rel="noopener noreferrer" aria-label="Ir al Twitter de CafeClub TV">
                <i className="fab fa-twitter text-lg sm:text-xl"></i>
              </Link>
              <Link href="https://youtube.com/c/CafeClubCanalTv" target="_blank" rel="noopener noreferrer" aria-label="Ir al canal de YouTube de CafeClub TV">
                <i className="fab fa-youtube text-lg sm:text-xl"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#A50000] pt-8 text-center">
          <p className="text-sm sm:text-base">&copy; 2023 CafeClub TV. Todos los derechos reservados.</p>
          <p className="text-sm sm:text-base mt-2">Powered by Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}