import Image from 'next/image'
import Link from 'next/link'

export default function FloatingChat() {
  return (
    <div id="floating-chat" className="fixed right-4 bottom-24 flex flex-col gap-2">
      <Link href="/otra-pagina" className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white rounded-full p-2 sm:p-3 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
        <Image src="/images/ganacash.png" alt="Gana Cash Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
        <span className="sr-only">Ir a otra página</span>
      </Link>
      <Link href="https://wa.me/593978606269" target="_blank" rel="noopener noreferrer" className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white rounded-full p-2 sm:p-3 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
        <Image src="/images/Icon512x512.png" alt="CafeClub TV Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
        <span className="sr-only">Chat en WhatsApp</span>
      </Link>
    </div>
  )
}

