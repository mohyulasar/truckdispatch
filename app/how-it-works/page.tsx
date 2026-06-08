import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TransparencySection } from "@/components/sections/TransparencySection";
import { CTABand } from "@/components/sections/CTABand";
import { HOW_IT_WORKS_REQUIREMENTS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "How It Works",
  description:
    "Transparent dispatch under your MC — profile setup, load approval, setup packets and rate cons to your email, and fast payment after drop.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        description="From profile setup to getting paid after drop — every step runs under your MC authority with full transparency. Setup packets, rate cons, and payment support included."
      />

      <HowItWorksSection />
      <TransparencySection />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            What You&apos;ll Need to Get Started
          </h2>
          <ul className="mt-6 space-y-4">
            {HOW_IT_WORKS_REQUIREMENTS.map((req) => (
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
