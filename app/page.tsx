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

// Definimos los metadatos directamente en layout.tsx, así que no necesitamos importar nada aquí

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />

        {/* Banner de Latinos Partner */}
        <section className="my-8 sm:my-12 container mx-auto px-4">
          <Link href="https://www.latinostvny.com" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/banner-latinos-partner.jpg"
                alt="Latinos TV NY Partner"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </Link>
        </section>

        {/* LiveStream con el mismo estilo que en la página de contenido */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#B01E23]">
          <LiveStream showPlaylist={true} />
        </section>

        {/* Banner de Duality Domain */}
        <section className="my-8 sm:my-12 container mx-auto px-4">
          <Link href="https://www.dualitydomain.com" target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/banner-duality-domain.jpg"
                alt="Duality Domain"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
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
