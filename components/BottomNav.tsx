import Link from 'next/link'

export default function BottomNav() {
  return (
    <nav id="bottom-nav" className="fixed bottom-0 left-0 right-0 bg-white border-t py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#featured-programs" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)]">
            <i className="fas fa-tv text-lg sm:text-xl"></i>
            <span className="text-xs sm:text-sm">Programas</span>
          </Link>
          <Link href="#live-stream" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)]">
            <i className="fas fa-broadcast-tower text-lg sm:text-xl"></i>
            <span className="text-xs sm:text-sm">En Vivo</span>
          </Link>
          <Link href="#shorts" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)]">
            <i className="fas fa-film text-lg sm:text-xl"></i>
            <span className="text-xs sm:text-sm">Shorts</span>
          </Link>
          <Link href="#sponsors" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)]">
            <i className="fas fa-handshake text-lg sm:text-xl"></i>
            <span className="text-xs sm:text-sm">Sponsors</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[var(--primary-color)]">
            <i className="fas fa-envelope text-lg sm:text-xl"></i>
            <span className="text-xs sm:text-sm">Contacto</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

