import Image from 'next/image'

export default function AdBanner() {
  return (
    <section id="ad-banner" className="relative h-64 sm:h-96 overflow-hidden">
      <Image src="/images/banner.jpg" alt="Banner publicitario" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <a href="#" className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-3 px-6 rounded text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Juega Ahora
        </a>
      </div>
    </section>
  )
}

