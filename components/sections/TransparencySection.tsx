import { FileCheck, Mail, Shield } from "lucide-react";
import { TRANSPARENCY_HIGHLIGHTS } from "@/lib/constants";

const iconMap = {
  mail: Mail,
  file: FileCheck,
  shield: Shield,
};

export function TransparencySection() {
  return (
    <section className="border-y border-accent/20 bg-gradient-to-br from-navy to-navy-light py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Transparency at Every Step
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            We believe you should see every document and every rate con. That&apos;s
            why broker setup packets and rate confirmations go to your email — not
            ours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRANSPARENCY_HIGHLIGHTS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
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
