"use client"
import Link from "next/link"
import { landingData } from "@/data/landing/landingData"
import { trackEvent } from "@/lib/gtm"
import { Button } from "../ui/button"
import { Section } from "../ui/section"
import { MessageCircle } from "lucide-react"

export function FinalCtaSection() {
  const { title, subtitle, label, href } = landingData.finalCta

  return (
    <Section className="bg-orange-600 text-white pb-20 pt-20">
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">
          {title}
        </h2>
        <p className="text-xl text-orange-100">
          {subtitle}
        </p>
        <Link href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp-click", "final-cta")}>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all focus-visible:ring-green-700 flex items-center gap-3">
            <MessageCircle className="w-6 h-6" />
            {label}
          </Button>
        </Link>
      </div>
    </Section>
  )
}
