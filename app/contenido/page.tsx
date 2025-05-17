import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import FeaturedPrograms from "@/components/FeaturedPrograms"
import LiveStream from "@/components/LiveStream"
import Shorts from "@/components/Shorts"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import BannerLink from "@/components/BannerLink"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from "lucide-react"
import "../banner-styles.css"

export const metadata = {
  title: "Programación y Contenido | CafeClub TV - Programas Variados en Español",
  description:
    "Explora nuestra colección de programas exclusivos, transmisiones en vivo y shorts. Contenido variado sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas.",
  keywords:
    "programas de TV, contenido digital, transmisión en vivo, shorts, CafeClubTV, entretenimiento latino, programas en español",
  openGraph: {
    title: "Programación y Contenido | CafeClub TV - Programas Variados en Español",
    description:
      "Explora nuestra colección de programas exclusivos, transmisiones en vivo y shorts. Contenido variado sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas.",
    url: "https://www.cafeclubtv.com/contenido",
    siteName: "CafeClub TV",
    images: [
      {
        url: "/images/og-image-cafeclubtv.jpg",
        width: 1200,
        height: 630,
        alt: "Programación y Contenido | CafeClub TV",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CafeClub_Lat",
    title: "Programación y Contenido | CafeClub TV - Programas Variados en Español",
    description:
      "Explora nuestra colección de programas exclusivos, transmisiones en vivo y shorts. Contenido variado sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas.",
    images: ["/images/og-image-cafeclubtv.jpg"],
  },
  alternates: {
    canonical: "/contenido",
  },
}

export default function ContenidoPage() {
  return (
    <>
      <TopBanner />
      <Header />
      <main id="main-content" className="flex-grow">
        {/* Hero con contenido sobre la programación */}
        <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden" aria-labelledby="content-hero-title">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero2.png"
              alt="Fondo de programación de CafeClub TV"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
              className="brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B01E23]/80 to-black/50"></div>
          </div>

          {/* Contenido del hero */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1
              id="content-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white font-heading drop-shadow-lg"
            >
              Disfruta Nuestro Contenido
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl drop-shadow-md">
              Descubre la variedad de nuestra programación con shows exclusivos para todos los gustos
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-[#B01E23] hover:bg-[#8B0000] text-white shadow-lg group"
              >
                <a href="#featured-programs" aria-label="Ver nuestra programación completa">
                  Ver Programación
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white"
              >
                <a href="#live-stream" aria-label="Ver transmisión en vivo">
                  <Play className="mr-2 h-5 w-5" />
                  Ver En Vivo
                </a>
              </Button>
            </div>
          </div>
        </section>

        <FeaturedPrograms />

        {/* Banner de BONOGOL TV antes del LiveStream */}
        <BannerLink
          href="https://youtube.com/@bonogoltv?si=49TwYsAMqnmc29F2"
          imageSrc="/images/bonogol-tv-banner.jpg"
          imageAlt="BONOGOL TV - Locos por ganar - Canal de deportes y fútbol"
          title="BONOGOL TV"
        />

        <LiveStream showPlaylist={true} />
        <Shorts />
      </main>
      <Footer />
      <BottomNav activeItem="contenido" />
      <FloatingChat />
    </>
  )
}
