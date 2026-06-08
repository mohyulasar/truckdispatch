import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { LogoMark } from "./LogoMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <LogoMark variant="accent" />
              <span className="text-lg font-bold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm leading-relaxed">{SITE.tagline}</p>
            <p className="mt-3 text-sm">{SITE.serviceArea}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex min-h-11 items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex min-h-11 items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.serviceArea}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hours
            </h3>
            <p className="text-sm">{SITE.hours}</p>
            <div className="mt-6 space-y-2">
              <Link href="/privacy" className="block text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Global Dispatch Services is a dispatch service provider, not a freight broker.
            Carriers maintain their own MC authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
