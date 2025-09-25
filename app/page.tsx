import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Performance } from "@/components/Performance"
import { Gallery } from "@/components/Gallery"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Performance />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
