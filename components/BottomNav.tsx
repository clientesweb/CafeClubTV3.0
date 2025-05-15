import Link from "next/link"
import { Home, Tv, Radio, Film, Mail } from "lucide-react"

interface BottomNavProps {
  activeItem?: "home" | "contenido" | "live" | "shorts" | "contact"
}

export default function BottomNav({ activeItem = "home" }: BottomNavProps) {
  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t py-2 shadow-lg z-40"
      aria-label="Navegación móvil"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Inicio */}
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-md p-1 ${
              activeItem === "home" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Ir a Inicio"
            aria-current={activeItem === "home" ? "page" : undefined}
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Inicio</span>
          </Link>

          {/* Contenido */}
          <Link
            href="/contenido"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-md p-1 ${
              activeItem === "contenido" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Ver Contenido"
            aria-current={activeItem === "contenido" ? "page" : undefined}
          >
            <Tv className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Contenido</span>
          </Link>

          {/* En Vivo */}
          <Link
            href="/contenido#live-stream"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-md p-1 ${
              activeItem === "live" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Ver En Vivo"
            aria-current={activeItem === "live" ? "page" : undefined}
          >
            <Radio className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">En Vivo</span>
          </Link>

          {/* Shorts */}
          <Link
            href="/contenido#shorts"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-md p-1 ${
              activeItem === "shorts" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Ver Shorts"
            aria-current={activeItem === "shorts" ? "page" : undefined}
          >
            <Film className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Shorts</span>
          </Link>

          {/* Contacto */}
          <Link
            href="#contact"
            className={`flex flex-col items-center gap-1 transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-md p-1 ${
              activeItem === "contact" ? "text-brand" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Ir a Contacto"
            aria-current={activeItem === "contact" ? "page" : undefined}
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Contacto</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
