import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import LiveStream from "@/components/LiveStream"
import Sponsors from "@/components/Sponsors"
import AdBanner from "@/components/AdBanner"
import DownloadApp from "@/components/DownloadApp"
import CommercialProposals from "@/components/CommercialProposals"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"
import FloatingChat from "@/components/FloatingChat"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <AboutUs />

        {/* Contenedor grande para LiveStream */}
        <section className="py-8 sm:py-12 md:py-16 bg-accent dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center font-heading">En Vivo</h2>
            <div className="max-w-5xl mx-auto">
              <LiveStream showPlaylist={false} />

              {/* Botón para explorar más */}
              <div className="mt-8 text-center">
                <Link
                  href="/contenido"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#B01E23] hover:bg-[#8B0000] text-white font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Programación completa
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CommercialProposals />
        <Sponsors />
        <AdBanner />
        <DownloadApp />
      </main>
      <Footer />
      <BottomNav activeItem="home" />
      <FloatingChat />
    </>
  )
}

