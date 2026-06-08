import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_INTRO, HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HowItWorksSection({ compact = false }: { compact?: boolean }) {
  const steps = compact ? HOW_IT_WORKS_STEPS.slice(0, 3) : HOW_IT_WORKS_STEPS;

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {HOW_IT_WORKS_INTRO}
          </p>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className={cn("mt-12 lg:hidden", !compact && "max-w-2xl mx-auto")}>
          <ol className="relative space-y-0">
            {steps.map((step, index) => (
              <li key={step.step} className="relative flex gap-4 pb-10 last:pb-0">
                {index < steps.length - 1 && (
                  <span
                    className="absolute left-6 top-12 h-[calc(100%-3rem)] w-0.5 bg-accent/30"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {step.step}
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop: connected step row */}
        <div
          className={cn(
            "mt-12 hidden lg:grid",
            compact ? "grid-cols-3 gap-8" : "grid-cols-5 gap-4",
          )}
        >
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <span
                  className="absolute left-[calc(50%+1.5rem)] top-6 h-0.5 w-[calc(100%-3rem)] bg-accent/30"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {step.step}
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-navy xl:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {compact && (
          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent hover:text-accent-dark"
            >
              See full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
