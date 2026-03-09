"use client"
import Link from "next/link"
import { landingData } from "@/data/landing/landingData"
import { trackEvent } from "@/lib/gtm"
import { Button } from "../ui/button"
import { Section } from "../ui/section"

export function BoticaViolaSection() {
  const { title, description, ctaLabel, ctaHref } = landingData.boticaViola

  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>
        <Link 
          href={ctaHref} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={() => trackEvent("botica-orcamento-click", "botica-viola")}
        >
          <Button size="lg" className="bg-[#de6a2c] hover:bg-[#c95d24] text-white">
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </Section>
  )
}
