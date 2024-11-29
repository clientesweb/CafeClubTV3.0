'use client';  // Marca este archivo como un componente de cliente

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const installPWA = () => {
    if (window.DeferredPrompt) {
      window.DeferredPrompt.prompt();
      window.DeferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        // Explicitly defining the type of choiceResult
        console.log(choiceResult.outcome);
      });
    }
  };

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Botón de instalar PWA */}
      <button
        id="installButton"
        onClick={installPWA}
        className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base flex items-center gap-2 transition-all duration-300 ease-in-out"
        aria-label="Instalar la aplicación"
      >
        <i className="fas fa-download text-lg sm:text-xl"></i>
        Instalar
      </button>

      {/* Logo centrado */}
      <div className="flex justify-center flex-grow">
        <Image
          src="images/Icon512x512.png"
          alt="CafeClub TV Logo"
          width={64}
          height={64}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto"
        />
      </div>

      {/* Redes sociales con iconos modernos */}
      <div className="flex gap-3 sm:gap-5 items-center">
        <Link href="https://www.facebook.com/CafeClubRadio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f text-lg sm:text-xl text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
        </Link>
        <Link href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram text-lg sm:text-xl text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
        </Link>
        <Link href="https://twitter.com/CafeClub_Lat?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter text-lg sm:text-xl text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
        </Link>
        <Link href="https://youtube.com/c/CafeClubCanalTv" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
          <i className="fab fa-youtube text-lg sm:text-xl text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
        </Link>
      </div>
    </header>
  );
}