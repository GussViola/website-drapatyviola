import { HeroSection } from "@/components/landing/sections/hero"
import { TrustBarSection } from "@/components/landing/sections/trust-bar"
import { AboutSection } from "@/components/landing/sections/about"
import { ServicesSection } from "@/components/landing/sections/services"
import { GallerySection } from "@/components/landing/sections/gallery"
import { IntermediateCtaSection } from "@/components/landing/sections/intermediate-cta"
import { LocationAndHoursSection } from "@/components/landing/sections/location-and-hours"
import { SocialsSection } from "@/components/landing/sections/socials"
import { FAQSection } from "@/components/landing/sections/faq"
import { FinalCtaSection } from "@/components/landing/sections/final-cta"
import { BoticaViolaSection } from "@/components/landing/sections/botica-viola"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <IntermediateCtaSection />
      <LocationAndHoursSection />
      <SocialsSection />
      <FAQSection />
      <FinalCtaSection />
      <BoticaViolaSection />
    </main>
  )
}
