import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CTABand } from "@/components/sections/CTABand";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "How It Works",
  description:
    "See how Global Dispatch Services onboards carriers and starts booking loads within 48 hours.",
  path: "/how-it-works",
});

const requirements = [
  "Active MC authority in your name",
  "Valid insurance (cargo and liability)",
  "Equipment ready to haul (dry van, reefer, flatbed, etc.)",
  "Willingness to communicate load preferences and availability",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        description="From your first quote request to your first booked load — here's exactly what to expect when you partner with us."
      />

      <HowItWorksSection />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            What You&apos;ll Need to Get Started
          </h2>
          <ul className="mt-6 space-y-4">
            {requirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  ✓
                </span>
                {req}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-slate-600">
            Not sure if you qualify? Contact us for a free consultation — we&apos;ll
            walk you through the requirements and answer any questions.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
