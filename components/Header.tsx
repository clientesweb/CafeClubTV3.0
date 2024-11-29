import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <button id="installButton" className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded text-sm sm:text-base flex items-center">
        <i className="fas fa-download mr-2"></i>
        Instalar
      </button>
      
      <Image src="/images/Icon512x512.png" alt="CafeClub TV Logo" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
      
      <div className="flex gap-2 sm:gap-4 items-center">
        <Link href="https://www.facebook.com/CafeClubRadio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-[var(--primary-color)]">
          <i className="fab fa-facebook-f text-sm sm:text-base"></i>
        </Link>
        <Link href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-[var(--primary-color)]">
          <i className="fab fa-instagram text-sm sm:text-base"></i>
        </Link>
        <Link href="https://twitter.com/CafeClub_Lat?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-[var(--primary-color)]">
          <i className="fab fa-twitter text-sm sm:text-base"></i>
        </Link>
        <Link href="https://youtube.com/c/CafeClubCanalTv" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-gray-600 hover:text-[var(--primary-color)]">
          <i className="fab fa-youtube text-sm sm:text-base"></i>
        </Link>
      </div>
    </header>
  )
}

