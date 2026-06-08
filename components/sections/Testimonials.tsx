import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            What Carriers Say
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Real feedback from owner-operators and fleet owners we dispatch for.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6"
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-navy">{testimonial.author}</span>
                  <span className="mt-0.5 block text-sm text-slate-500">
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
