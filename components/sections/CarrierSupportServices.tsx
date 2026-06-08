import { Building2, Wrench } from "lucide-react";
import { CARRIER_SERVICES } from "@/lib/constants";

const iconMap = {
  wrench: Wrench,
  bank: Building2,
};

export function CarrierSupportServices() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Roadside & Financial Support
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Beyond dispatch — we help keep your operation running and your cash
            flow healthy when it matters most.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CARRIER_SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 sm:flex-row sm:gap-6 sm:p-8"
              >
                <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent text-white sm:mb-0">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
