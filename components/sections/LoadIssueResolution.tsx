import {
  AlertTriangle,
  Clock,
  DollarSign,
  Phone,
} from "lucide-react";
import { LOAD_ISSUE_SERVICES } from "@/lib/constants";

const iconMap = {
  clock: Clock,
  alert: AlertTriangle,
  dollar: DollarSign,
  phone: Phone,
};

export function LoadIssueResolution() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Load Issue Resolution
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Problems happen on the road. We handle broker-side communication and
            documentation so detention, TONU, lumper fees, and ETA updates
            don&apos;t cost you time or money.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOAD_ISSUE_SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy/10 text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
