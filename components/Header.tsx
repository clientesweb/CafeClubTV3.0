import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-gradient-to-r from-[#4e9af1] to-[#1e3c72] rounded-xl shadow-lg">
      <button
        id="installButton"
        className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base flex items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      >
        <i className="fas fa-download mr-2"></i>
        Instalar
      </button>
      
      <div className="relative">
        <Image
          src="images/Icon512x512.png"
          alt="CafeClub TV Logo"
          width={48}
          height={48}
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      
      <div className="flex gap-4 sm:gap-6 items-center">
        <Link
          href="https://www.facebook.com/CafeClubRadio/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-200 hover:text-[var(--primary-color)] transform transition duration-300 ease-in-out hover:scale-110 hover:text-white"
        >
          <i className="fab fa-facebook-f text-lg sm:text-xl"></i>
        </Link>
        <Link
          href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-200 hover:text-[var(--primary-color)] transform transition duration-300 ease-in-out hover:scale-110 hover:text-white"
        >
          <i className="fab fa-instagram text-lg sm:text-xl"></i>
        </Link>
        <Link
          href="https://twitter.com/CafeClub_Lat?s=08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-200 hover:text-[var(--primary-color)] transform transition duration-300 ease-in-out hover:scale-110 hover:text-white"
        >
          <i className="fab fa-twitter text-lg sm:text-xl"></i>
        </Link>
        <Link
          href="https://youtube.com/c/CafeClubCanalTv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
          className="text-gray-200 hover:text-[var(--primary-color)] transform transition duration-300 ease-in-out hover:scale-110 hover:text-white"
        >
          <i className="fab fa-youtube text-lg sm:text-xl"></i>
        </Link>
      </div>
    </header>
  )
}