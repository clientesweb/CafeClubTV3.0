import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

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
    site_name: "CafeClubTV",
    images: [
      {
        url: "/images/Icon512x512.png",
        width: 512,
        height: 512,
        alt: "CafeClubTV Logo",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CafeClub_Lat",
    title: "CafeClubTV - Tu lugar para disfrutar de los mejores videos y playlists",
    description:
      "Bienvenido a CafeClubTV, tu destino para disfrutar de los mejores videos, playlists y entretenimiento de calidad.",
    image: "/images/Icon512x512.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-navbutton-color" content="#8B0000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#8B0000" />
        <link rel="icon" href="/images/Icon512x512.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Icon512x512.png" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "CafeClubTV",
                "url": "https://www.cafeclubtv.com",
                "logo": "https://www.cafeclubtv.com/images/Icon512x512.png",
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
            `,
          }}
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          strategy="afterInteractive"
        />
        <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />

        {/* Service Worker Registration */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}

