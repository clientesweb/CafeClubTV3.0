import Image from "next/image"
import { Button } from "@/components/ui/button"

interface AdBannerProps {
  position?: "top" | "middle" | "bottom"
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
  imageAlt?: string
}

export default function AdBanner({
  position = "middle",
  title = "¡Gana Cash Jugando a la Ruleta!",
  description = "¡Participa ahora y haz girar la rueda para ganar grandes premios en efectivo!",
  buttonText = "Juega Ahora",
  buttonLink = "/ganacash",
  imageSrc = "/images/banner.jpg",
  imageAlt = "Banner publicitario para ganar dinero jugando a la ruleta",
}: AdBannerProps) {
  return (
    <section
      id={`ad-banner-${position}`}
      className="relative h-64 sm:h-96 overflow-hidden rounded-lg shadow-xl mx-4 sm:mx-8 my-8"
      aria-labelledby={`banner-title-${position}`}
      role="banner"
    >
      {/* Imagen de fondo */}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={imageAlt}
        fill
        style={{ objectFit: "cover" }}
        priority
        className="brightness-75"
      />

      {/* Superposición con un toque oscuro para resaltar el texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center px-4 sm:px-8">
        <div className="text-center text-white">
          <h2
            id={`banner-title-${position}`}
            className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md font-heading"
          >
            {title}
          </h2>
          <p className="text-lg sm:text-xl mb-6 drop-shadow-md">{description}</p>
          <Button
            variant="default"
            size="lg"
            asChild
            className="bg-[#B01E23] hover:bg-[#8B0000] text-white shadow-lg hover:scale-105 transition-transform"
          >
            <a href={buttonLink} aria-label={`${buttonText} - ${title}`}>
              {buttonText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

