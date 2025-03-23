import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AdBanner() {
  return (
    <section
      id="ad-banner"
      className="relative h-64 sm:h-96 overflow-hidden rounded-lg shadow-xl mx-4 sm:mx-8 my-8"
      aria-labelledby="banner-title"
      role="banner"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/banner.jpg"
        alt="Banner publicitario para ganar dinero jugando a la ruleta"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="brightness-75"
      />

      {/* Superposición con un toque oscuro para resaltar el texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center px-4 sm:px-8">
        <div className="text-center text-white">
          <h2 id="banner-title" className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md font-heading">
            ¡Gana Cash Jugando a la Ruleta!
          </h2>
          <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
            ¡Participa ahora y haz girar la rueda para ganar grandes premios en efectivo!
          </p>
          <Button variant="brand" size="lg" asChild className="shadow-lg hover:scale-105 transition-transform">
            <a href="/ganacash" aria-label="Jugar ahora en la ruleta para ganar dinero">
              Juega Ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

