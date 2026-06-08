import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about truck dispatch services, pricing, MC authority, and equipment types.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="Frequently Asked Questions"
        description="Answers to common questions about our dispatch services, pricing, and how we work with carriers."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion items={FAQ_ITEMS} />
          <p className="mt-8 text-center text-base text-slate-600">
            Still have questions?{" "}
            <a href="/contact" className="font-semibold text-accent hover:text-accent-dark">
              Contact us
            </a>{" "}
            or call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-accent hover:text-accent-dark">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
