import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "DE LEY!",
    image: "/images/programa1.jpg",
    schedule: "Jueves 20:00 PM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjEXDXovYZECqH1qxi8ymnTe&si=VKIYygF-jj2_PJ3l",
  },
  {
    title: "Hola Gutis!",
    image: "/images/programa2.jpg",
    schedule: "Miércoles 12:00 PM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGamAX8f5SVv451mwHq_bQq&si=VA--l8LRYg8dvxbW",
  },
  {
    title: "Café con Music",
    image: "/images/programa7.jpg",
    schedule: "Jueves 14:00 PM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGxVyk1uBjUqMySYkbi6e3j&si=cdKZ--gAbwcB1ZxY",
  },
  {
    title: "Cafeteros",
    image: "/images/programa3.jpg",
    schedule: "Lunes y Miércoles 10:00 AM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGGJD55fn6RP4lNo1sZZSEP&si=3ZphX4i3eR8abpes",
  },
  {
    title: "OM Talks",
    image: "/images/programa4.jpg",
    schedule: "Miércoles 22:00 PM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjEU5H15CbmplsuGxtY66OwJ&si=lZFY_KZ5mNvz3SoH",
  },
  {
    title: "Café COACHING con Miriam Rojas",
    image: "/images/programa5.jpg",
    schedule: "Lunes 20:00 PM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjFxAFBsSb6EGJipJIRJT1x5&si=I10PfA73ad8Eb0LG",
  },
  {
    title: "Café Ole",
    image: "/images/programa6.jpg",
    schedule: "Lunes 16:00 PM",
    link: "https://youtube.com/playlist?list=PLZ_v3bWMqpjGcaIqVFVvXDoHSCQyXwTYh&si=Twc6ZBj-bLWgW57N",
  },
]

export default function FeaturedPrograms() {
  return (
    <section id="featured-programs" className="py-8 sm:py-12 md:py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center font-heading">Parrilla de Programas</h2>
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex space-x-4 gap-4 md:gap-8 pb-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-80 md:w-96 rounded-xl bg-card shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={384}
                  height={216}
                  className="w-full h-44 sm:h-52 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 text-brand">{program.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2">{program.schedule}</p>
                  <Button variant="brand" asChild>
                    <Link href={program.link} aria-label={`Ver programa ${program.title}`}>
                      Ver programa
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

