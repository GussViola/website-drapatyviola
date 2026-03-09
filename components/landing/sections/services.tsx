import { landingData } from "@/data/landing/landingData"
import { Section, SectionHeading } from "../ui/section"
import { Sparkles } from "lucide-react"

export function ServicesSection() {
  const { title, items } = landingData.services

  return (
    <Section className="bg-orange-50/50">
      <SectionHeading>{title}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((service, idx) => (
          <div 
            key={idx} 
            className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-sm border border-orange-100/50 hover:shadow-md transition-shadow"
          >
            <Sparkles className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span className="font-medium text-gray-800">{service}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
