import { Truck, Users } from "lucide-react";

const audiences = [
  {
    icon: Truck,
    title: "Owner-Operators",
    subtitle: "1 truck",
    benefits: [
      "Profitable loads without load board headaches",
      "Rate negotiation handled for you",
      "More drive time, less admin work",
      "Flexible — you approve every load",
    ],
  },
  {
    icon: Users,
    title: "Small Fleets",
    subtitle: "2–20 trucks",
    benefits: [
      "Scale without hiring in-house dispatch",
      "Consistent lane coverage across your fleet",
      "Dedicated account management",
      "Volume-based pricing for multiple trucks",
    ],
  },
];

export function WhoWeServe() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Built for Carriers Like You
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Whether you run one truck or a growing fleet, we tailor dispatch support
            to your operation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                <audience.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">{audience.title}</h3>
              <p className="text-sm font-medium text-accent">{audience.subtitle}</p>
              <ul className="mt-4 space-y-3">
                {audience.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-slate-600 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
