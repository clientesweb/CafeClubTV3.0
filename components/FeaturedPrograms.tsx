import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    title: 'Consultorio Para el Alma',
    image: '/images/programa1.jpg',
    schedule: 'Martes 10:00 AM',
    link: 'https://youtube.com/playlist?list=PLZ_v3bWMqpjE3sjXw23_QF8NAfh5TiS-F&si=6qINBQ22xG02jLR5'
  },
  {
    title: 'Hola Gutis!',
    image: '/images/programa2.jpg',
    schedule: 'Miércoles 12:00 PM',
    link: 'https://youtube.com/playlist?list=PLZ_v3bWMqpjGamAX8f5SVv451mwHq_bQq&si=VA--l8LRYg8dvxbW'
  },
  {
    title: 'OM Talks',
    image: '/images/programa4.jpg',
    schedule: 'Miércoles 22:00 PM',
    link: 'https://youtube.com/playlist?list=PLZ_v3bWMqpjEU5H15CbmplsuGxtY66OwJ&si=lZFY_KZ5mNvz3SoH'
  },
  {
    title: 'Cafeteros',
    image: '/images/programa3.jpg',
    schedule: 'Lunes y Miércoles 10:00 AM',
    link: 'https://youtube.com/playlist?list=PLZ_v3bWMqpjGGJD55fn6RP4lNo1sZZSEP&si=3ZphX4i3eR8abpes'
  },
  {
    title: 'Café COACHING con Miriam Rojas',
    image: '/images/programa5.jpg',
    schedule: 'Lunes 20:00 PM',
    link: 'https://youtube.com/playlist?list=PLZ_v3bWMqpjFxAFBsSb6EGJipJIRJT1x5&si=I10PfA73ad8Eb0LG'
  },
  {
    title: 'Café Ole',
    image: '/images/programa6.jpg', // Make sure to add this image to your project
    schedule: 'Lunes 16:00 PM',
    link: 'https://youtube.com/playlist?list=PLZ_v3bWMqpjGcaIqVFVvXDoHSCQyXwTYh&si=Twc6ZBj-bLWgW57N' // Replace with the actual YouTube playlist link
  }
]

export default function FeaturedPrograms() {
  return (
    <section id="featured-programs" className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Parrilla de Programas</h2>
        <div className="program-scroll-container overflow-x-auto">
          <div className="flex space-x-4 gap-4 md:gap-8">
            {programs.map((program, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-80 md:w-96 rounded-xl bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                <Image 
                  src={program.image} 
                  alt={program.title} 
                  width={384} 
                  height={216} 
                  className="w-full h-44 sm:h-52 object-cover rounded-t-xl" 
                  loading="lazy" 
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 text-[var(--primary-color)]">{program.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-2">{program.schedule}</p>
                  <Link 
                    href={program.link} 
                    className="inline-block bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded-lg text-sm sm:text-base transition-all duration-200 ease-in-out"
                    aria-label={`Ver programa ${program.title}`}
                  >
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
