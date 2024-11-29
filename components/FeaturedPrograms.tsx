import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    title: 'Consultorio Para el Alma',
    image: '/images/programa1.jpg',
    schedule: 'Martes 10:00 AM',
    link: 'https://www.youtube.com/playlist?list=TU_PLAYLIST_ID'
  },
  {
    title: 'Hola Gutis!',
    image: '/images/programa2.jpg',
    schedule: 'Miércoles 12:00 PM',
    link: 'https://www.youtube.com/playlist?list=TU_PLAYLIST_ID'
  },
  {
    title: 'OM Talks',
    image: '/images/programa4.jpg',
    schedule: 'Miércoles 22:00 PM',
    link: 'https://www.youtube.com/playlist?list=TU_PLAYLIST_ID'
  },
  {
    title: 'Cafeteros',
    image: '/images/programa3.jpg',
    schedule: 'Jueves 20:00 PM',
    link: 'https://www.youtube.com/playlist?list=TU_PLAYLIST_ID'
  }
]

export default function FeaturedPrograms() {
  return (
    <section id="featured-programs" className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Parrilla de Programas</h2>
        <div className="program-scroll-container overflow-x-auto">
          <div className="flex space-x-4">
            {programs.map((program, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-80 md:w-96">
                <Image src={program.image} alt={program.title} width={384} height={216} className="w-full h-36 sm:h-44 md:h-52 object-cover rounded-lg" />
                <div className="mt-2 sm:mt-3">
                  <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">{program.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{program.schedule}</p>
                  <Link href={program.link} className="mt-2 sm:mt-3 inline-block bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-1 sm:py-2 px-3 sm:px-4 rounded text-sm sm:text-base">
                    Ver programa
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

