import { Coins, Eye } from "lucide-react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BottomNav from "@/components/BottomNav"

export const metadata = {
  title: "GanaCash - Gana premios en efectivo | CafeClubTV",
  description:
    "Acumula minutos viendo CaféClub TV y participa para ganar dinero en efectivo. ¡Convierte tu tiempo en recompensas reales!",
  keywords: "premios, dinero en efectivo, ruleta, juegos, recompensas, CafeClubTV, ganar dinero",
  openGraph: {
    title: "GanaCash - Gana premios en efectivo | CafeClubTV",
    description:
      "Acumula minutos viendo CaféClub TV y participa para ganar dinero en efectivo. ¡Convierte tu tiempo en recompensas reales!",
    url: "https://www.cafeclubtv.com/ganacash",
    siteName: "CafeClubTV",
    images: [
      {
        url: "/images/og-image-cafeclubtv.jpg",
        width: 1200,
        height: 630,
        alt: "GanaCash - Gana premios en efectivo | CafeClubTV",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CafeClub_Lat",
    title: "GanaCash - Gana premios en efectivo | CafeClubTV",
    description:
      "Acumula minutos viendo CaféClub TV y participa para ganar dinero en efectivo. ¡Convierte tu tiempo en recompensas reales!",
    images: ["/images/og-image-cafeclubtv.jpg"],
  },
  alternates: {
    canonical: "/ganacash",
  },
}

export default function GanaCashPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-brand to-secondary-brand text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Logo Section */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-8">
              <Image
                src="/images/ganacash.png"
                alt="GanaCash Logo"
                width={1200}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Coming Soon Title */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-pulse font-heading">
                ¡Muy Pronto: Gana Cash con CaféClub!
              </h1>
              <div className="absolute -inset-1 bg-yellow-400/20 blur-xl rounded-full -z-10" />
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl mb-6">
                Con Gana Cash, acumula minutos viendo el canal CaféClub y participa para ganar dinero en efectivo.
                Disfruta de nuestros contenidos y convierte tu tiempo en recompensas reales.
              </p>
              <p className="text-lg sm:text-xl mb-6">
                ¿No quieres esperar? También puedes participar directamente en la ruleta haciendo tu aporte al canal y
                empezar a ganar de inmediato.
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                ¡La oportunidad de disfrutar y ganar dinero en efectivo llega MUY PRONTO! Mantente conectado para no
                perderte esta emocionante experiencia con CaféClub.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mt-8 sm:mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors">
                <Eye className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 mx-auto text-yellow-400" />
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Acumula Minutos</h2>
                <p className="text-sm sm:text-base text-gray-300">Gana mientras disfrutas del contenido de CaféClub</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors">
                <Coins className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 mx-auto text-yellow-400" />
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Gana Efectivo</h2>
                <p className="text-sm sm:text-base text-gray-300">Convierte tu tiempo en recompensas reales</p>
              </div>
            </div>

            {/* WhatsApp Subscription */}
            <div className="w-full max-w-md mt-8 sm:mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  ¿Quieres ser el primero en enterarte?
                </h3>
                <a
                  href="https://wa.me/593978606269?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20GanaCash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 sm:px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 sm:mt-16 text-xs sm:text-sm text-gray-400 text-center">
              <p>© {new Date().getFullYear()} GanaCash. Todos los derechos reservados.</p>
              <p className="mt-2">Powered by Duality Domain</p>
            </footer>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNav />
    </>
  )
}

