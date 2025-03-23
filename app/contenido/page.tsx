import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import FeaturedPrograms from "@/components/FeaturedPrograms"
import LiveStream from "@/components/LiveStream"
import Shorts from "@/components/Shorts"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import ContentHero from "@/components/ContentHero"
import AdBanner from "@/components/AdBanner"
import { getMetadata } from "@/lib/get-metadata"

export const metadata = getMetadata({
  title: "Programación y Contenido | CafeClubTV",
  description: "Explora nuestra colección de programas exclusivos, shorts y contenido premium creado para ti.",
  url: "/contenido",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafeclubtv-contenido-og-Hs2Nt0Ik5Ux3Wd7Lp4Qr6.jpg",
  keywords: "programas de TV, contenido digital, transmisión en vivo, shorts, CafeClubTV, entretenimiento",
})

export default function ContenidoPage() {
  return (
    <>
      <TopBanner />
      <Header />
      <main id="main-content" className="flex-grow">
        <ContentHero />

        {/* Banner publicitario superior */}
        <AdBanner
          position="top"
          title="¡Promociona tu Negocio con Nosotros!"
          description="Llega a miles de espectadores y aumenta la visibilidad de tu marca"
          buttonText="Más Información"
          buttonLink="#commercial-proposals"
          imageSrc="/images/ad-business.jpg"
          imageAlt="Banner publicitario para promocionar tu negocio"
        />

        <FeaturedPrograms />

        {/* Banner publicitario medio */}
        <AdBanner
          position="middle"
          title="¡Crea tu Propio Programa de TV!"
          description="Convierte tus ideas en un programa profesional y alcanza una audiencia global"
          buttonText="Empieza Ahora"
          buttonLink="#commercial-proposals"
          imageSrc="/images/ad-program.jpg"
          imageAlt="Banner publicitario para crear tu propio programa de TV"
        />

        <LiveStream showPlaylist={true} />

        {/* Banner publicitario inferior */}
        <AdBanner
          position="bottom"
          title="¡Descarga Nuestra App!"
          description="Disfruta de contenido exclusivo y notificaciones de transmisiones en vivo"
          buttonText="Descargar"
          buttonLink="https://clientesweb.github.io/CafeClubTv/CafeClubTV.apk"
          imageSrc="/images/ad-app.jpg"
          imageAlt="Banner publicitario para descargar la aplicación"
        />

        <Shorts />
      </main>
      <Footer />
      <BottomNav activeItem="contenido" />
      <FloatingChat />
    </>
  )
}

