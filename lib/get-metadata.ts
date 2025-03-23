import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/utils"

interface MetadataProps {
  title?: string
  description?: string
  image?: string
  url?: string
  keywords?: string
  type?: "website" | "article" | "video" | "profile"
  publishedTime?: string
  authors?: string[]
}

export function getMetadata({
  title = "CafeClubTV - Tu lugar para disfrutar de los mejores videos y playlists",
  description = "Bienvenido a CafeClubTV, tu destino para disfrutar de los mejores videos, playlists y entretenimiento de calidad.",
  image = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafeclubtv-og-image-9Hs2Nt0Ik5Ux3Wd7Lp4Qr6.jpg",
  url = "/",
  keywords = "videos, playlists, entretenimiento, música, CafeClubTV, videos en línea, streaming, Guayaquil, Miami, Ecuador",
  type = "website",
  publishedTime,
  authors,
}: MetadataProps): Metadata {
  // Asegurarse de que la URL sea absoluta
  const ogUrl = absoluteUrl(url)

  // Metadatos básicos
  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: authors ? authors.map((author) => ({ name: author })) : undefined,
    openGraph: {
      title,
      description,
      url: ogUrl,
      siteName: "CafeClubTV",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "es_ES",
      type,
    },
    twitter: {
      card: "summary_large_image",
      site: "@CafeClub_Lat",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }

  // Añadir metadatos específicos para artículos si es necesario
  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      publishedTime,
      authors: authors,
    }
  }

  return metadata
}

