import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CTABand() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Ready to Stop Searching Load Boards?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Get a free, no-obligation quote tailored to your equipment and lanes.
          Most carriers hear back within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Get a Free Quote
          </Button>
          <Button
            href={SITE.phoneHref}
            external
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-navy"
          >
            <Phone className="h-5 w-5" />
            Call {SITE.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
