import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VoxCasinoOverview } from "@/components/slot-overview"
import CommentsSection from "@/components/comments-section"
import { Footer } from "@/components/footer"
import FAQSection from "@/components/faq"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VoxCasinoOverview />
        <FAQSection />
        <CommentsSection />
      </main>
      <Footer />
    </div>
  )
}
