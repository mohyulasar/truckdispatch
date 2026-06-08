import type { Metadata } from "next";
import { FileText, MessageSquare, TrendingUp, Truck, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SERVICES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Load sourcing, rate negotiation, broker communication, and paperwork support for owner-operators and small fleets.",
  path: "/services",
});

const iconMap = {
  truck: Truck,
  trending: TrendingUp,
  message: MessageSquare,
  file: FileText,
};

const additionalServices = [
  "Lane and market guidance based on current freight trends",
  "Invoicing and payment follow-up support",
  "Factoring partner referrals when needed",
  "Compliance reminders for insurance and authority renewals",
  "24/7 load support while you're on the road",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Dispatch Services"
        description="Full-service truck dispatch tailored to owner-operators and small fleets. We handle the business side so you can focus on driving."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-navy">{service.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-xl bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              Additional Support Included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {additionalServices.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
