import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE, TESTIMONIALS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a free dispatch quote from Global Dispatch Services. We'll respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        description="Tell us about your operation and we'll put together a custom dispatch plan. No obligation."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                Contact Information
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Prefer to talk? Call us directly — we&apos;re happy to answer questions
                about our dispatch services.
              </p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex min-h-11 items-start gap-4 rounded-lg p-2 transition-colors hover:bg-slate-50"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-navy">Phone</p>
                      <p className="text-slate-600">{SITE.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex min-h-11 items-start gap-4 rounded-lg p-2 transition-colors hover:bg-slate-50"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-navy">Email</p>
                      <p className="text-slate-600">{SITE.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 p-2">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-navy">Hours</p>
                    <p className="text-slate-600">{SITE.hours}</p>
                  </div>
                </li>
              </ul>

              <blockquote className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm italic text-slate-600">
                  &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-navy">
                  — {TESTIMONIALS[0].author}, {TESTIMONIALS[0].role}
                </footer>
              </blockquote>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy">Request a Quote</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="relative mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
