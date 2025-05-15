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
  title: "CafeClub TV - Canal Internacional 100% Digital | Programas Variados y Entretenimiento",
  description:
    "CafeClub TV ofrece programas variados sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas. Disfruta de contenido de calidad en español desde Miami y Ecuador para todo el mundo.",
  keywords:
    "CafeClub TV, canal digital, programas en español, transmisión en vivo, entretenimiento latino, Miami, Ecuador, entrevistas, deportes, salud, negocios, belleza, viajes",
  robots: "index, follow",
  openGraph: {
    title: "CafeClub TV - Canal Internacional 100% Digital | Programas Variados y Entretenimiento",
    description:
      "Disfruta de programas variados sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas en español.",
    url: "https://www.cafeclubtv.com",
    siteName: "CafeClub TV",
    images: [
      {
        url: "/images/og-image-cafeclubtv.jpg",
        width: 1200,
        height: 630,
        alt: "CafeClub TV - Canal Internacional 100% Digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CafeClub_Lat",
    title: "CafeClub TV - Canal Internacional 100% Digital | Programas Variados",
    description:
      "Programas variados sobre salud, negocios, deportes, belleza, viajes y entrevistas exclusivas en español desde Miami y Ecuador.",
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
  verification: {
    google: "verificación-google-aquí", // Reemplazar con el código real de verificación de Google
  },
  category: "entertainment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
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
        <meta name="author" content="CafeClub TV" />
        <meta name="publisher" content="CafeClub TV" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="CafeClub TV" />
        <meta name="application-name" content="CafeClub TV" />

        {/* Datos estructurados de SEO local */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CafeClub TV",
            "url": "https://www.cafeclubtv.com",
            "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon512x512-nsu8n2y0ISqY7bXqShRC4hi8Qno7df.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+593978606269",
              "contactType": "Customer Service",
              "areaServed": ["EC", "US", "LATAM"],
              "availableLanguage": "Spanish"
            },
            "sameAs": [
              "https://www.facebook.com/CafeClubRadio/",
              "https://twitter.com/CafeClub_Lat?s=08",
              "https://www.instagram.com/invites/contact/?i=1qricgcqleosj&utm_content=1imi4ep",
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

        {/* Datos estructurados para VideoObject */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BroadcastChannel",
            "name": "CafeClub TV",
            "broadcastChannelId": "CafeClubCanalTv",
            "broadcastServiceTier": "Digital",
            "inBroadcastLineup": {
              "@type": "CableOrSatelliteService",
              "name": "Internet Streaming"
            },
            "providesBroadcastService": {
              "@type": "BroadcastService",
              "name": "CafeClub TV Online",
              "broadcastDisplayName": "CafeClub TV",
              "broadcaster": {
                "@type": "Organization",
                "name": "CafeClub TV"
              },
              "videoFormat": ["HD"]
            }
          }
        `}
        </script>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          strategy="afterInteractive"
        />
        <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  })
                  .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                  });
              });
            }
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B01E23] focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme={undefined}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
