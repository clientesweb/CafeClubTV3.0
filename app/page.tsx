import dynamic from "next/dynamic"
import TopBanner from "../components/TopBanner"
import Header from "../components/Header"
import Hero from "../components/Hero"
import FeaturedPrograms from "../components/FeaturedPrograms"

const LiveStream = dynamic(() => import("../components/LiveStream"))
const Shorts = dynamic(() => import("../components/Shorts"))
const AdBanner = dynamic(() => import("../components/AdBanner"))
const Sponsors = dynamic(() => import("../components/Sponsors"))
const DownloadApp = dynamic(() => import("../components/DownloadApp"))
const Footer = dynamic(() => import("../components/Footer"))
const BottomNav = dynamic(() => import("../components/BottomNav"))
const FloatingChat = dynamic(() => import("../components/FloatingChat"))

export default function Home() {
  return (
    <div>
      <TopBanner />
      <Header />
      <Hero />
      <FeaturedPrograms />
      <LiveStream />
      <Shorts />
      <AdBanner />
      <Sponsors />
      <DownloadApp />
      <Footer />
      <BottomNav />
      <FloatingChat />
    </div>
  )
}

