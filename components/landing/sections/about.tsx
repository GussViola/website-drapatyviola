import { landingData } from "@/data/landing/landingData"
import { Section, SectionHeading } from "../ui/section"

export function AboutSection() {
  const { title, paragraphs } = landingData.about

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>{title}</SectionHeading>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-justify">
          {paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}
