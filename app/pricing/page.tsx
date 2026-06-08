import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Transparent dispatch pricing for owner-operators and small fleets. No hidden fees — custom quotes based on fleet size.",
  path: "/pricing",
});

const included = [
  "Load sourcing and booking",
  "Rate negotiation",
  "Broker communication and check calls",
  "Rate confirmation support",
  "Dedicated dispatcher",
  "You approve every load",
];

const notIncluded = [
  "Fuel, tolls, or operating expenses",
  "Insurance or authority fees",
  "Factoring fees (referrals available)",
  "Equipment maintenance",
];

const comparison = [
  { feature: "Load sourcing", diy: false, gds: true },
  { feature: "Rate negotiation", diy: "Self", gds: "Expert team" },
  { feature: "Time on load boards", diy: "Hours daily", gds: "Zero" },
  { feature: "Broker relationships", diy: "Build yourself", gds: "Established network" },
  { feature: "Dedicated support", diy: false, gds: true },
  { feature: "Scales with fleet", diy: false, gds: true },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-green-600" />;
  }
  if (value === false) {
    return <X className="mx-auto h-5 w-5 text-red-400" />;
  }
  return <span className="text-sm text-slate-600">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Simple, Transparent Pricing"
        description="Our dispatch fee is a percentage of gross load revenue — typically 5–8% depending on fleet size and service level. No hidden fees."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-4xl font-bold text-navy sm:text-5xl">5–8%</p>
            <p className="mt-2 text-lg text-slate-600">of gross load revenue</p>
            <p className="mt-4 text-base text-slate-600">
              Exact rate depends on number of trucks, equipment type, and lanes.
              Request a custom quote — no obligation.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Get Your Custom Quote
            </Button>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">What&apos;s Included</h2>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">Not Included</h2>
              <ul className="mt-4 space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <X className="h-5 w-5 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile: card layout */}
          <div className="mt-16 space-y-4 lg:hidden">
            <h2 className="text-xl font-bold text-navy">DIY vs Global Dispatch Services</h2>
            {comparison.map((row) => (
              <div key={row.feature} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-navy">{row.feature}</p>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-slate-500">DIY Dispatch</p>
                    <div className="mt-1">
                      <ComparisonCell value={row.diy} />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-accent">Global Dispatch</p>
                    <div className="mt-1">
                      <ComparisonCell value={row.gds} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="mt-16 hidden overflow-hidden rounded-xl border border-slate-200 lg:block">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">DIY Dispatch</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Global Dispatch Services
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-navy">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.diy} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.gds} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
