import Image from 'next/image'

export default function DownloadApp() {
  return (
    <section id="download-app" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Descarga Nuestra Aplicación</h2>
            <p className="text-gray-600 mb-8 text-lg max-w-xl">Lleva CafeClub TV contigo a donde vayas. Descarga nuestra aplicación y disfruta de contenido exclusivo, notificaciones de transmisiones en vivo y mucho más.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-block transition transform hover:scale-105">
                <Image src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Descargar en Google Play" width={646} height={250} className="h-14 w-auto" />
              </a>
              <a href="#" className="inline-block transition transform hover:scale-105">
                <Image src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Descargar en App Store" width={120} height={40} className="h-14 w-auto" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image src="/images/mockup.jpg" alt="Mockup de la aplicación CafeClub TV" width={500} height={500} className="max-w-full h-auto rounded-3xl shadow-2xl" />
            <Image src="https://img.freepik.com/free-vector/realistic-coffee-time-background-with-coffee-cup_79603-1652.jpg" alt="Característica 1 de la app" width={200} height={200} className="absolute top-1/4 -left-8 w-1/3 rounded-xl shadow-lg" />
            <Image src="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg" alt="Característica 2 de la app" width={200} height={200} className="absolute bottom-1/4 -right-8 w-1/3 rounded-xl shadow-lg" />
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-full transform rotate-12">
              ¡Nuevo!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

