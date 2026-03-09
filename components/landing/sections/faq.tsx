import { landingData } from "@/data/landing/landingData"
import { Section, SectionHeading } from "../ui/section"

export function FAQSection() {
  const { title, questions } = landingData.faq

  return (
    <Section className="bg-white">
      <SectionHeading>{title}</SectionHeading>
      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((faq, idx) => (
          <div key={idx} className="bg-orange-50/30 p-6 rounded-xl border border-orange-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{faq.q}</h4>
            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
