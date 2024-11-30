'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
    }
  };

  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
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
        <div className="flex justify-center">
          <Image
            src="/images/Icon512x512.png"
            alt="CafeClub TV Logo"
            width={64}
            height={64}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>

        {/* Redes sociales con iconos modernos */}
        <div className="flex gap-3 sm:gap-4 items-center">
          <Link href="https://www.facebook.com/CafeClubRadio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f text-base sm:text-lg text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
          </Link>
          <Link href="https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram text-base sm:text-lg text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
          </Link>
          <Link href="https://twitter.com/CafeClub_Lat?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter text-base sm:text-lg text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
          </Link>
          <Link href="https://youtube.com/c/CafeClubCanalTv" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <i className="fab fa-youtube text-base sm:text-lg text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-300"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

