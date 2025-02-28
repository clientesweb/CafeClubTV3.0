import Image from "next/image"

export default function AdBanner() {
  return (
    <section
      id="ad-banner"
      className="relative h-64 sm:h-96 overflow-hidden rounded-lg shadow-xl"
      aria-labelledby="banner-title"
      role="banner"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/banner.jpg"
        alt="Banner publicitario para ganar dinero jugando a la ruleta"
        fill
        sizes="100vw"
        priority // Para cargar la imagen de manera más rápida
        className="object-cover opacity-80"
      />

      {/* Superposición con un toque oscuro para resaltar el texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center px-4 sm:px-8">
        <div className="text-center text-white">
          <h2 id="banner-title" className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md">
            ¡Gana Cash Jugando a la Ruleta!
          </h2>
          <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
            ¡Participa ahora y haz girar la rueda para ganar grandes premios en efectivo!
          </p>
          <a
            href="#"
            className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-3 px-8 rounded-full text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            aria-label="Jugar ahora en la ruleta para ganar dinero"
          >
            Juega Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

