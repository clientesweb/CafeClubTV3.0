import Link from 'next/link'

export default function BottomNav() {
  return (
    <nav id="bottom-nav" className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 sm:py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-x-6">
          {/* Programas */}
          <Link 
            href="#featured-programs" 
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)] transition-all duration-200 ease-in-out"
            aria-label="Ir a Programas"
          >
            <i className="fas fa-tv text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Programas</span>
          </Link>
          
          {/* En Vivo */}
          <Link 
            href="#live-stream" 
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)] transition-all duration-200 ease-in-out"
            aria-label="Ver En Vivo"
          >
            <i className="fas fa-broadcast-tower text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">En Vivo</span>
          </Link>
          
          {/* Shorts */}
          <Link 
            href="#shorts" 
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)] transition-all duration-200 ease-in-out"
            aria-label="Ver Shorts"
          >
            <i className="fas fa-film text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Shorts</span>
          </Link>
          
          {/* Sponsors */}
          <Link 
            href="#sponsors" 
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)] transition-all duration-200 ease-in-out"
            aria-label="Ver Sponsors"
          >
            <i className="fas fa-handshake text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Sponsors</span>
          </Link>
          
          {/* Contacto */}
          <Link 
            href="#contact" 
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)] transition-all duration-200 ease-in-out"
            aria-label="Ir a Contacto"
          >
            <i className="fas fa-envelope text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Contacto</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}