import { Globe } from "lucide-react";
import { MULTILINGUAL_LANGUAGES } from "@/lib/constants";

export function MultilingualSupport() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-1.5 text-sm font-medium text-navy">
            <Globe className="h-4 w-4" />
            Multilingual Dispatch
          </div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Dispatch in Your Language
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Clear communication wins better loads. Our multilingual dispatch team
            handles broker calls, load coordination, and updates in the language
            you&apos;re most comfortable with.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {MULTILINGUAL_LANGUAGES.map((lang) => (
            <span
              key={lang.language}
              className="rounded-full border border-navy/20 bg-white px-4 py-2 text-sm font-semibold text-navy"
            >
              {lang.language}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MULTILINGUAL_LANGUAGES.map((lang) => (
            <div
              key={lang.language}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-navy">{lang.language}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {lang.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
