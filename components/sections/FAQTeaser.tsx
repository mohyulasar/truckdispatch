import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQTeaser() {
  const topQuestions = FAQ_ITEMS.slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Common Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {topQuestions.map((item) => (
            <div key={item.question} className="p-6">
              <h3 className="font-semibold text-navy">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent hover:text-accent-dark"
          >
            View all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
