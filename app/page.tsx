import TopBanner from '../components/TopBanner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedPrograms from '../components/FeaturedPrograms'
import LiveStream from '../components/LiveStream'
import Shorts from '../components/Shorts'
import AdBanner from '../components/AdBanner'
import Sponsors from '../components/Sponsors'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'
import FloatingChat from '../components/FloatingChat'

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPrograms />
        <LiveStream />
        <Shorts />
        <AdBanner />
        <Sponsors />
        <DownloadApp />
      </main>
      <Footer />
      <BottomNav />
      <FloatingChat />
    </>
  )
}
