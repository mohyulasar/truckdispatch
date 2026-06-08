"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-h-11 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
              GD
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold text-navy sm:text-base">
                <span className="sm:hidden">{SITE.shortName}</span>
                <span className="hidden sm:inline">{SITE.name}</span>
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-navy hover:bg-slate-50 sm:flex"
            >
              <Phone className="h-4 w-4 text-accent" />
              {SITE.phone}
            </a>
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Get Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-navy hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
