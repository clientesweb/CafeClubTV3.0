import Link from "next/link"
import Image from "next/image"

interface BannerLinkProps {
  href: string
  imageSrc: string
  imageAlt: string
  title: string
}

export default function BannerLink({ href, imageSrc, imageAlt, title }: BannerLinkProps) {
  return (
    <section
      className="my-8 sm:my-12 container mx-auto px-4"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
    >
      <h2 id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`} className="sr-only">
        {title}
      </h2>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B01E23] rounded-xl"
        aria-label={`Visitar ${title}`}
      >
        <div className="banner-container">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
            className="banner-image"
            loading="lazy"
          />
          <div className="banner-overlay" aria-hidden="true"></div>
        </div>
      </Link>
    </section>
  )
}
