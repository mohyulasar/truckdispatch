"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  className,
}: {
  items: readonly AccordionItem[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full min-h-11 items-center justify-between gap-4 px-4 py-4 text-left sm:px-6"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-navy sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <p className="px-4 pb-4 text-base leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
