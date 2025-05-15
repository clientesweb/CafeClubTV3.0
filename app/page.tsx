import TopBanner from "@/components/TopBanner"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LiveStream from "@/components/LiveStream"
import Sponsors from "@/components/Sponsors"
import AdBanner from "@/components/AdBanner"
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

        {/* LiveStream con el mismo estilo que en la página de contenido */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#B01E23]">
          <LiveStream showPlaylist={true} />
        </section>

        {/* Banner publicitario inferior */}
        <AdBanner
          position="bottom"
          title="¡Crea tu Propio Programa de TV!"
          description="Convierte tus ideas en un programa profesional y alcanza una audiencia global"
          buttonText="Empieza Ahora"
          buttonLink="#commercial-proposals"
          imageSrc="/images/ad-program.jpg"
          imageAlt="Banner publicitario para crear tu propio programa de TV"
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
