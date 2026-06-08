import { Calendar, ShieldCheck } from "lucide-react";
import { PAYMENT_TERMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PaymentTermsBanner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-orange-50 p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-xl">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              {PAYMENT_TERMS.subheadline}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {PAYMENT_TERMS.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {PAYMENT_TERMS.description}
          </p>
        </div>

        <div className="grid flex-1 gap-4 sm:grid-cols-3">
          {PAYMENT_TERMS.highlights.map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {index === 2 ? (
                  <Calendar className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </div>
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
