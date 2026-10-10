import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { MarqueeStrip } from "../components/MarqueeStrip"
import { WhyBanToo } from "../components/WhyBanToo"
import { WashCycleSection } from "../components/WashCycleSection"
import { AppShowcase } from "../components/AppShowcase"
import { ThreeApps } from "../components/ThreeApps"
import { Faq } from "../components/Faq"
import { FinalCta } from "../components/FinalCta"
import { Footer } from "../components/Footer"
import { ZONES, SERVICES } from "../lib/content"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip items={ZONES} tone="dark" />
        <MarqueeStrip items={SERVICES} tone="light" reverse />
        <WhyBanToo />
        <div id="cycle">
          <WashCycleSection />
        </div>
        <AppShowcase />
        <ThreeApps />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
