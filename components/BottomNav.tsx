import Link from "next/link"

interface BottomNavProps {
  activeItem?: "home" | "contenido" | "live" | "shorts" | "sponsors" | "contact"
}

export default function BottomNav({ activeItem = "home" }: BottomNavProps) {
  return (
    <nav id="bottom-nav" className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 sm:py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-x-6">
          {/* Inicio */}
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out ${
              activeItem === "home" ? "text-[var(--primary-color)]" : "text-gray-600 hover:text-[var(--primary-color)]"
            }`}
            aria-label="Ir a Inicio"
          >
            <i className="fas fa-home text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Inicio</span>
          </Link>

          {/* Contenido */}
          <Link
            href="/contenido"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out ${
              activeItem === "contenido"
                ? "text-[var(--primary-color)]"
                : "text-gray-600 hover:text-[var(--primary-color)]"
            }`}
            aria-label="Ver Contenido"
          >
            <i className="fas fa-tv text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Contenido</span>
          </Link>

          {/* En Vivo */}
          <Link
            href="/contenido#live-stream"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out ${
              activeItem === "live" ? "text-[var(--primary-color)]" : "text-gray-600 hover:text-[var(--primary-color)]"
            }`}
            aria-label="Ver En Vivo"
          >
            <i className="fas fa-broadcast-tower text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">En Vivo</span>
          </Link>

          {/* Shorts */}
          <Link
            href="/contenido#shorts"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out ${
              activeItem === "shorts"
                ? "text-[var(--primary-color)]"
                : "text-gray-600 hover:text-[var(--primary-color)]"
            }`}
            aria-label="Ver Shorts"
          >
            <i className="fas fa-film text-2xl sm:text-3xl"></i>
            <span className="text-xs sm:text-sm font-semibold">Shorts</span>
          </Link>

          {/* Contacto */}
          <Link
            href="#contact"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out ${
              activeItem === "contact"
                ? "text-[var(--primary-color)]"
                : "text-gray-600 hover:text-[var(--primary-color)]"
            }`}
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

