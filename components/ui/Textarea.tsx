import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, className, id, ...props }, ref) {
    const inputId = id ?? props.name;

    return (
      <div className="w-full">
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-700">
          {label}
          {props.required && <span className="text-accent"> *</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full min-h-[120px] rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);
