import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorksSection({ compact = false }: { compact?: boolean }) {
  const steps = compact ? HOW_IT_WORKS_STEPS.slice(0, 3) : HOW_IT_WORKS_STEPS;

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Getting started is simple. Most carriers are onboarded and receiving load
            options within 48 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center lg:text-left">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white lg:mx-0">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {step.description}
              </p>
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
