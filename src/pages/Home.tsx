import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { MarqueeStrip } from "../components/MarqueeStrip"
import { Showcase } from "../components/Showcase"
import { Steps } from "../components/Steps"
import { WhyBanToo } from "../components/WhyBanToo"
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
        <Showcase />
        <WhyBanToo />
        <Steps />
        <ThreeApps />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
