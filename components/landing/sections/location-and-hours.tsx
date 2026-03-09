"use client"
import { landingData } from "@/data/landing/landingData"
import { Section, SectionHeading } from "../ui/section"
import { MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { trackEvent } from "@/lib/gtm"

export function LocationAndHoursSection() {
  const { address, hours } = landingData.locationAndHours

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Endereço */}
        <div className="flex flex-col items-start p-8 bg-orange-50/50 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-900">{address.title}</h3>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            {address.text}
          </p>
          <Link 
            href={address.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => trackEvent("map-click", "location")}
            className="w-full mt-auto"
          >
            <Button className="w-full" size="lg" variant="outline">
              {address.mapLabel}
            </Button>
          </Link>
        </div>

        {/* Horários */}
        <div className="flex flex-col items-start p-8 bg-orange-50/50 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-900">{hours.title}</h3>
          </div>
          <div className="w-full space-y-3">
            {hours.schedule.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-orange-100 pb-2 last:border-0 last:pb-0">
                <span className="font-medium text-gray-700">{item.day}</span>
                <span className="text-gray-600">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
