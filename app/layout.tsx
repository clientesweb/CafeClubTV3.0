import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "CafeClubTV - Tu lugar para disfrutar de los mejores videos y playlists",
  description:
    "Bienvenido a CafeClubTV, tu destino para disfrutar de los mejores videos, playlists y entretenimiento de calidad.",
  keywords:
    "videos, playlists, entretenimiento, música, CafeClubTV, videos en línea, streaming, Guayaquil, Miami, Ecuador",
  robots: "index, follow",
  openGraph: {
    title: "CafeClubTV - Tu lugar para disfrutar de los mejores videos y playlists",
    description: "Disfruta de entretenimiento de calidad con nuestros videos y playlists",
    url: "https://www.cafeclubtv.com",
    siteName: "CafeClubTV",
    images: [
      {
        url: "/images/og-image-cafeclubtv.jpg",
        width: 1200,
        height: 630,
        alt: "CafeClubTV - Entretenimiento de calidad",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CafeClub_Lat",
    title: "CafeClubTV - Tu lugar para disfrutar de los mejores videos y playlists",
    description:
      "Bienvenido a CafeClubTV, tu destino para disfrutar de los mejores videos, playlists y entretenimiento de calidad.",
    images: ["/images/og-image-cafeclubtv.jpg"],
  },
  metadataBase: new URL("https://www.cafeclubtv.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
    },
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#B01E23" />
        <meta name="msapplication-navbutton-color" content="#B01E23" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#B01E23" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Bienvenido a CafeClubTV, tu destino para disfrutar de los mejores videos, playlists y entretenimiento de calidad."
        />
        <meta name="author" content="CafeClubTV" />
        <meta name="publisher" content="CafeClubTV" />
        <meta
          name="keywords"
          content="videos, playlists, entretenimiento, música, CafeClubTV, videos en línea, streaming, Guayaquil, Miami, Ecuador"
        />
        <meta name="robots" content="index, follow" />

        {/* Datos estructurados de SEO local */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CafeClubTV",
            "url": "https://www.cafeclubtv.com",
            "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+593978606269",
              "contactType": "Customer Service",
              "areaServed": "EC",
              "availableLanguage": "Spanish"
            },
            "sameAs": [
              "https://www.facebook.com/CafeClubRadio/",
              "https://twitter.com/CafeClub_Lat?s=08",
              "https://www.instagram.com/@cafeclubtv",
              "https://youtube.com/c/CafeClubCanalTv"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mystic Pointe Drive",
              "addressLocality": "Miami/Aventura",
              "addressRegion": "FL",
              "postalCode": "33180",
              "addressCountry": "US"
            }
          }
        `}
        </script>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          strategy="afterInteractive"
        />
        <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />
      </head>
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme={undefined}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

