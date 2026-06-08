import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Global Dispatch Services website and contact forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
      />

      <section className="py-16 sm:py-20">
        <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy">Information We Collect</h2>
          <p className="mt-4 text-base text-slate-600">
            When you contact {SITE.name} through our website, we collect information
            you provide voluntarily, including your name, company name, email address,
            phone number, fleet details, and any message you submit through our contact
            form.
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">How We Use Your Information</h2>
          <p className="mt-4 text-base text-slate-600">
            We use your information to respond to quote requests, provide dispatch
            services, communicate about your account, and improve our services. We do
            not sell your personal information to third parties.
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">Analytics</h2>
          <p className="mt-4 text-base text-slate-600">
            We may use analytics tools (such as Google Analytics) to understand how
            visitors use our website. These tools may collect anonymized usage data
            including pages visited and device type.
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">Contact</h2>
          <p className="mt-4 text-base text-slate-600">
            For privacy-related questions, contact us at{" "}
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
