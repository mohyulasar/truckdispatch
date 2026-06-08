import { EQUIPMENT_PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function EquipmentPricingGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {EQUIPMENT_PRICING.map((tier) => (
        <div
          key={tier.equipment}
          className={cn(
            "relative rounded-xl border bg-white p-6 transition-shadow hover:shadow-md",
            tier.featured
              ? "border-accent shadow-sm ring-1 ring-accent/20"
              : "border-slate-200",
          )}
        >
          {tier.featured && (
            <span className="absolute -top-3 left-4 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
              Best Rate
            </span>
          )}
          <p className="text-3xl font-bold text-navy sm:text-4xl">{tier.rate}</p>
          <p className="mt-1 text-sm text-slate-500">of gross load revenue</p>
          <h3 className="mt-4 text-lg font-semibold text-navy">{tier.equipment}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {tier.description}
          </p>
        </div>
      ))}
    </div>
  );
}
