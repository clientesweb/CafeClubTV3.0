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

// Definimos los metadatos directamente en layout.tsx, así que no necesitamos importar nada aquí

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />

        {/* LiveStream con el mismo estilo que en la página de contenido */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#B01E23]">
          <LiveStream showPlaylist={true} />
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
