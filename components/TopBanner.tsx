import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-[#8B0000] text-white">
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-grow">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <p className="text-sm">
              ¿Te sientes con suerte? ¡Premiamos tu fidelidad con nuestra Ruleta!
            </p>
          </div>
          <Link 
            href="/ganacash"
            className="inline-flex items-center justify-center rounded text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-[#8B0000] hover:bg-gray-100 px-2.5 py-1 whitespace-nowrap"
          >
            Gira Gratis
          </Link>
        </div>
      </div>
    </div>
  )
}

