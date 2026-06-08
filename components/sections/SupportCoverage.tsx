import { Calendar, Moon, Shield } from "lucide-react";
import { SUPPORT_COVERAGE } from "@/lib/constants";

const iconMap = {
  moon: Moon,
  calendar: Calendar,
  shield: Shield,
};

export function SupportCoverage() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Always-On Dispatch Support
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            We don&apos;t clock out when brokers do. Freight runs nights, weekends,
            and holidays — and so does our dispatch team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SUPPORT_COVERAGE.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
