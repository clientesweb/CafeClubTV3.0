import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CafeClubTV - Tu lugar para disfrutar de los mejores videos y playlists',
  description: 'Bienvenido a CafeClubTV, tu destino para disfrutar de los mejores videos, playlists y entretenimiento de calidad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/Icon512x512.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Icon512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-navbutton-color" content="#8B0000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#8B0000" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" />
        <Script src="https://www.youtube.com/iframe_api" />
      </body>
    </html>
  )
}

