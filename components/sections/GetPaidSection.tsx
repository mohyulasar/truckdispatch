import { Building2, CheckCircle, Zap } from "lucide-react";
import { GET_PAID_INTRO, GET_PAID_OPTIONS } from "@/lib/constants";

const iconMap = {
  zap: Zap,
  bank: Building2,
};

export function GetPaidSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            How You Get Paid After Drop
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">{GET_PAID_INTRO}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {GET_PAID_OPTIONS.map((option) => {
            const Icon = iconMap[option.icon];
            return (
              <div
                key={option.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">
                    {option.timeline}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy">{option.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {option.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm sm:text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
