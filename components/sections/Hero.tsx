import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-28">
        <div className="lg:flex-1">
          <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-light">
            Trusted by 150+ carriers nationwide
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Focus on Driving.
            <span className="mt-1 block text-accent-light">We Handle the Dispatch.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {SITE.name} finds profitable loads, negotiates rates, and manages broker
            communication for owner-operators and small fleets — so you spend less time
            on load boards and more time on the road.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href={SITE.phoneHref}
              external
              variant="outline"
              size="lg"
              className="w-full border-white/30 text-white hover:bg-white hover:text-navy sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {SITE.phone}
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:flex-1">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-lg font-semibold text-white">Why carriers choose us</h2>
            <ul className="mt-4 space-y-4">
              {[
                "Higher-paying loads with better lane consistency",
                "Dedicated dispatcher assigned to your account",
                "Transparent pricing — no hidden fees",
                "You approve every load before we book",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
