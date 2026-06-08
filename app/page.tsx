import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQTeaser } from "@/components/sections/FAQTeaser";
import { CTABand } from "@/components/sections/CTABand";
import {
  MobileCTABar,
  MobileCTASpacer,
} from "@/components/layout/MobileCTABar";
import { SITE } from "@/lib/constants";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "Truck Dispatch Service",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorksSection compact />
      <WhoWeServe />
      <Testimonials />
      <FAQTeaser />
      <CTABand />
      <MobileCTASpacer />
      <MobileCTABar />
    </>
  );
}
