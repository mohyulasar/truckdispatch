import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Global Dispatch Services — professional truck dispatch for owner-operators and small fleets nationwide.",
  path: "/about",
});

const values = [
  {
    title: "Transparency",
    description:
      "Clear pricing, honest communication, and no hidden fees. You always know what you're paying for.",
  },
  {
    title: "Partnership",
    description:
      "We work for you, not the brokers. Your success on the road is how we measure ours.",
  },
  {
    title: "Expertise",
    description:
      "Our dispatch team knows freight markets, lanes, and rate trends — so you get better loads.",
  },
  {
    title: "Responsiveness",
    description:
      "When you're on the road, you need answers fast. We're available when you need us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Global Dispatch Services"
        description="We help owner-operators and small fleets run more profitable operations by handling the dispatch work they'd rather not do themselves."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Our Mission</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {SITE.name} was built on a simple idea: carriers should spend their time
            driving, not searching load boards and negotiating with brokers. We provide
            professional dispatch services that find better freight, protect your rates,
            and keep your trucks moving.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We serve owner-operators running a single truck and small fleet owners
            managing up to 20 units. {SITE.serviceArea}.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Dispatch Service, Not a Broker
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {SITE.name} is a dispatch service provider. You maintain your own MC
            authority and carrier relationships. We work on your behalf to source
            loads and manage broker communication — we do not broker freight ourselves.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
