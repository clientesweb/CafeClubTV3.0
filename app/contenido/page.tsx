import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import FeaturedPrograms from "@/components/FeaturedPrograms"
import LiveStream from "@/components/LiveStream"
import Shorts from "@/components/Shorts"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import ContentHero from "@/components/ContentHero"

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

