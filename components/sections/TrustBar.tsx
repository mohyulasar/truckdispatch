import { TRUST_STATS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-navy sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
