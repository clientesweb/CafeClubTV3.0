import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LiveStream from "@/components/LiveStream"
import Sponsors from "@/components/Sponsors"
import DownloadApp from "@/components/DownloadApp"
import CommercialProposals from "@/components/CommercialProposals"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import BannerLink from "@/components/BannerLink"
import "./banner-styles.css"

export const metadata = {
  title: "CafeClub TV - Canal Internacional 100% Digital | Inicio",
  description:
    "CafeClub TV, tu canal internacional 100% digital con programación variada desde Miami y Ecuador. Disfruta de nuestros programas en vivo, shorts y contenido exclusivo.",
  keywords:
    "CafeClub TV, canal digital, programas en español, transmisión en vivo, entretenimiento latino, Miami, Ecuador",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />

        {/* Banner de Latinos Partner */}
        <BannerLink
          href="https://www.latinostvny.com"
          imageSrc="/images/banner-latinos-partner.jpg"
          imageAlt="Latinos TV NY Partner - Colaboración con CafeClub TV"
          title="Latinos TV NY Partner"
        />

        {/* Banner de Dona Un Café */}
        <BannerLink
          href="https://wa.me/593978606269?text=Hola,%20me%20gustaría%20hacer%20una%20donación%20para%20apoyar%20el%20canal"
          imageSrc="/images/dona-un-cafe-banner.jpg"
          imageAlt="Dona Un Café - Apoya a CafeClub TV con tu donación"
          title="Dona Un Café"
        />

        {/* LiveStream con el mismo estilo que en la página de contenido */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#B01E23]">
          <LiveStream showPlaylist={true} />
        </section>

        {/* Banner de Duality Domain */}
        <BannerLink
          href="https://www.dualitydomain.com"
          imageSrc="/images/banner-duality-domain.jpg"
          imageAlt="Duality Domain - Servicios de desarrollo web y diseño digital"
          title="Duality Domain"
        />

        <CommercialProposals />
        <Sponsors />
        <DownloadApp />
      </main>
      <Footer />
      <BottomNav activeItem="home" />
      <FloatingChat />
    </>
  )
}
