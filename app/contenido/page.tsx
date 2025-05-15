import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import FeaturedPrograms from "@/components/FeaturedPrograms"
import LiveStream from "@/components/LiveStream"
import Shorts from "@/components/Shorts"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import ContentHero from "@/components/ContentHero"

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
        <ContentHero />
        <FeaturedPrograms />
        <LiveStream showPlaylist={true} />
        <Shorts />
      </main>
      <Footer />
      <BottomNav activeItem="contenido" />
      <FloatingChat />
    </>
  )
}
