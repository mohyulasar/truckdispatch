import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms of Service for Global Dispatch Services website and dispatch services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
      />

      <section className="py-16 sm:py-20">
        <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy">Website Use</h2>
          <p className="mt-4 text-base text-slate-600">
            By using the {SITE.name} website, you agree to these terms. The information
            on this site is for general purposes and does not constitute a binding
            dispatch agreement.
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">Dispatch Services</h2>
          <p className="mt-4 text-base text-slate-600">
            {SITE.name} provides dispatch services to carriers who maintain their own MC
            authority. Dispatch services require a separate written agreement outlining
            fees, scope, and terms. {SITE.name} is a dispatch service provider, not a
            freight broker.
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">No Guarantees</h2>
          <p className="mt-4 text-base text-slate-600">
            Load availability, rates, and revenue vary based on market conditions,
            equipment, lanes, and other factors. We do not guarantee specific income,
            load volume, or rates.
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">Contact</h2>
          <p className="mt-4 text-base text-slate-600">
            Questions about these terms? Contact us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
