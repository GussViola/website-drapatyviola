import Image from "next/image"
import { landingData } from "@/data/landing/landingData"
import { Section, SectionHeading } from "../ui/section"

export function GallerySection() {
  const { title, images } = landingData.gallery

  return (
    <Section className="bg-white">
      <SectionHeading>{title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
