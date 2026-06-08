import Link from "next/link";
import {
  FileText,
  MessageSquare,
  TrendingUp,
  Truck,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  truck: Truck,
  trending: TrendingUp,
  message: MessageSquare,
  file: FileText,
};

export function ServicesGrid({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Everything You Need to Stay Loaded
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From finding freight to handling paperwork — we cover the full dispatch
            workflow so you can run your business with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {showLink && (
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent hover:text-accent-dark"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
