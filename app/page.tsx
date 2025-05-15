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
import Image from "next/image"
import Link from "next/link"

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
        <section className="my-8 sm:my-12 container mx-auto px-4" aria-labelledby="latinos-partner-title">
          <h2 id="latinos-partner-title" className="sr-only">
            Latinos TV NY Partner
          </h2>
          <Link
            href="https://www.latinostvny.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-xl"
            aria-label="Visitar Latinos TV NY Partner"
          >
            <div className="relative w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/banner-latinos-partner.jpg"
                alt="Latinos TV NY Partner - Colaboración con CafeClub TV"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                priority
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </Link>
        </section>

        {/* LiveStream con el mismo estilo que en la página de contenido */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#B01E23]">
          <LiveStream showPlaylist={true} />
        </section>

        {/* Banner de Duality Domain */}
        <section className="my-8 sm:my-12 container mx-auto px-4" aria-labelledby="duality-domain-title">
          <h2 id="duality-domain-title" className="sr-only">
            Duality Domain
          </h2>
          <Link
            href="https://www.dualitydomain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-xl"
            aria-label="Visitar Duality Domain - Servicios de desarrollo web"
          >
            <div className="relative w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/banner-duality-domain.jpg"
                alt="Duality Domain - Servicios de desarrollo web y diseño digital"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </Link>
        </section>

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
