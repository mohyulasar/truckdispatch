"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      const focusable = panelRef.current.querySelector<HTMLElement>(
        'button, a, input, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
          <span className="text-lg font-bold text-navy">{SITE.shortName}</span>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-navy hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-y-3 border-t border-slate-200 p-4">
          <Button href={SITE.phoneHref} external variant="outline" className="w-full">
            Call {SITE.phone}
          </Button>
          <Button href="/contact" className="w-full" onClick={onClose}>
            Get a Free Quote
          </Button>
        </div>
      </nav>
    </div>
  );
}
