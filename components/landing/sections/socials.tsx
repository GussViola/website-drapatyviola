"use client";
import Link from "next/link";
import { landingData } from "@/data/landing/landingData";
import { trackEvent } from "@/lib/gtm";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function SocialsSection() {
  const { title, links } = landingData.socials;

  const getIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="w-6 h-6" />;
      case "Facebook":
        return <Facebook className="w-6 h-6" />;
      case "YouTube":
        return <Youtube className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 border-y border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <h3 className="text-lg font-medium text-gray-600">{title}</h3>
        <div className="flex items-center gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-primary shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300 hover:-translate-y-1"
              onClick={() =>
                trackEvent(`${link.platform.toLowerCase()}-click`, "socials")
              }
              aria-label={link.platform}
            >
              {getIcon(link.platform)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
