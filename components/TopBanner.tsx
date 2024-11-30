import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-[#8B0000] text-white">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              ¿Te sientes con suerte? ¡Premiamos tu fidelidad con nuestra Ruleta!
            </p>
          </div>
          <Link 
            href="/ruleta"
            className="inline-flex items-center justify-center rounded text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-[#8B0000] hover:bg-gray-100 px-3 py-1"
          >
            Gira Gratis
          </Link>
        </div>
      </div>
    </div>
  )
}

