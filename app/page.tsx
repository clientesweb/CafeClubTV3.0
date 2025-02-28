"use client"

import { ErrorBoundary } from "react-error-boundary"
import TopBanner from "../components/TopBanner"
import Header from "../components/Header"
import Hero from "../components/Hero"
import FeaturedPrograms from "../components/FeaturedPrograms"
import LiveStream from "../components/LiveStream"
import Shorts from "../components/Shorts"
import AdBanner from "../components/AdBanner"
import Sponsors from "../components/Sponsors"
import DownloadApp from "../components/DownloadApp"
import Footer from "../components/Footer"
import BottomNav from "../components/BottomNav"
import FloatingChat from "../components/FloatingChat"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TopBanner />
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPrograms />
        <LiveStream />
        <Shorts />
        <AdBanner />
        <Sponsors />
        <DownloadApp />
      </main>
      <Footer />
      <BottomNav />
      <FloatingChat />
    </ErrorBoundary>
  )
}

