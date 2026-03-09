"use client"
import Image from "next/image"
import Link from "next/link"
import { landingData } from "@/data/landing/landingData"
import { trackEvent } from "@/lib/gtm"
import { Button } from "../ui/button"

export function HeroSection() {
  const { title, subtitle, ctaPrimary, ctaSecondary } = landingData.hero

  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 flex flex-col items-center justify-center bg-orange-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/slides/IMG_6125.jpg"
          alt="Fundo Dra. Paty Viola"
          fill
          className="object-cover opacity-40 blur-[4px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-orange-50/90" />
      </div>
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/profile_dra_paty_viola.png"
            alt="Dra. Paty Viola"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 160px"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 max-w-3xl mb-4">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href={ctaPrimary.href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp-click", "hero")}>
            <Button size="lg" className="w-full sm:w-auto text-md bg-green-600 hover:bg-green-700 focus-visible:ring-green-700">
              {ctaPrimary.label}
            </Button>
          </Link>
          <Link href={ctaSecondary.href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("booking-click", "hero")}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-md">
              {ctaSecondary.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
