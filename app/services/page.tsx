import type { Metadata } from "next";
import { FileText, MessageSquare, TrendingUp, Truck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { MultilingualSupport } from "@/components/sections/MultilingualSupport";
import { SupportCoverage } from "@/components/sections/SupportCoverage";
import { LoadIssueResolution } from "@/components/sections/LoadIssueResolution";
import { GetPaidSection } from "@/components/sections/GetPaidSection";
import { CarrierSupportServices } from "@/components/sections/CarrierSupportServices";
import { PaymentTermsBanner } from "@/components/sections/PaymentTermsBanner";
import { SERVICES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Full-service truck dispatch with multilingual support, 24/7 coverage, Quick Pay and factoring payment options, and load issue resolution.",
  path: "/services",
});

const iconMap = {
  truck: Truck,
  trending: TrendingUp,
  message: MessageSquare,
  file: FileText,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Dispatch Services"
        description="Full-service truck dispatch for owner-operators and small fleets — load sourcing, 24/7 support, multilingual dispatch, and everything you need to stay profitable on the road."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Core Dispatch Services
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The foundation of every successful carrier partnership — profitable
              loads, strong rates, and hands-off broker management.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
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
                  <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MultilingualSupport />
      <SupportCoverage />
      <LoadIssueResolution />
      <GetPaidSection />
      <CarrierSupportServices />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PaymentTermsBanner />
        </div>
      </section>

      <CTABand />
    </>
  );
}
