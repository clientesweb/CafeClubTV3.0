import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import FeaturedPrograms from "@/components/FeaturedPrograms"
import LiveStream from "@/components/LiveStream"
import Shorts from "@/components/Shorts"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from "lucide-react"

export const metadata = {
  title: "Programación y Contenido | CafeClubTV",
  description: "Explora nuestra colección de programas exclusivos, shorts y contenido premium creado para ti.",
  keywords: "programas de TV, contenido digital, transmisión en vivo, shorts, CafeClubTV, entretenimiento",
  openGraph: {
    title: "Programación y Contenido | CafeClubTV",
    description: "Explora nuestra colección de programas exclusivos, shorts y contenido premium creado para ti.",
    url: "https://www.cafeclubtv.com/contenido",
    siteName: "CafeClubTV",
    images: [
      {
        url: "/images/og-image-cafeclubtv.jpg",
        width: 1200,
        height: 630,
        alt: "Programación y Contenido | CafeClubTV",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CafeClub_Lat",
    title: "Programación y Contenido | CafeClubTV",
    description: "Explora nuestra colección de programas exclusivos, shorts y contenido premium creado para ti.",
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
        <section className="relative h-[70vh] overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero2.png"
              alt="CafeClub TV Programación"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B01E23]/80 to-black/50"></div>
          </div>

          {/* Contenido del hero */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-heading drop-shadow-lg">
              Disfruta Nuestro Contenido
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl drop-shadow-md">
              Descubre la variedad de nuestra programación con shows exclusivos para todos los gustos
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-[#B01E23] hover:bg-[#8B0000] text-white shadow-lg group"
              >
                <a href="#featured-programs">
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
                <a href="#live-stream">
                  <Play className="mr-2 h-5 w-5" />
                  Ver En Vivo
                </a>
              </Button>
            </div>
          </div>
        </section>

        <FeaturedPrograms />

        {/* Banner de BONOGOL TV antes del LiveStream */}
        <section className="my-8 sm:my-12 container mx-auto px-4">
          <Link
            href="https://youtube.com/@bonogoltv?si=49TwYsAMqnmc29F2"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/bonogol-tv-banner.jpg"
                alt="BONOGOL TV - Locos por ganar"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </Link>
        </section>

        <LiveStream showPlaylist={true} />
        <Shorts />
      </main>
      <Footer />
      <BottomNav activeItem="contenido" />
      <FloatingChat />
    </>
  )
}
