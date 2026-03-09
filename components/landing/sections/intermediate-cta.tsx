"use client";
import Link from "next/link";
import { landingData } from "@/data/landing/landingData";
import { trackEvent } from "@/lib/gtm";
import { Button } from "../ui/button";
import { Section } from "../ui/section";

export function IntermediateCtaSection() {
  const { title, label, href } = landingData.intermediateCta;

  return (
    <Section className="bg-primary text-white">
      <div className="flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">{title}</h2>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp-click", "intermediate-cta")}
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-orange-50 font-semibold text-lg px-8"
          >
            {label}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
