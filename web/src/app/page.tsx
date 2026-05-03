import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ServicesPreview from "@/components/sections/ServicesPreview";
import RoomsBand from "@/components/sections/RoomsBand";
import ProjectSpotlight from "@/components/sections/ProjectSpotlight";
import Approach from "@/components/sections/Approach";
import TestimonialBand from "@/components/sections/TestimonialBand";
import CTABand from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <RoomsBand />
      <ProjectSpotlight />
      <Approach />
      <TestimonialBand />
      <CTABand />
    </main>
  );
}
