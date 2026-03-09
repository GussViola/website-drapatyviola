import { landingData } from "@/data/landing/landingData"
import { CheckCircle2 } from "lucide-react"

export function TrustBarSection() {
  const { trustBar } = landingData

  return (
    <div className="w-full bg-white border-b border-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-600">
          {trustBar.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
