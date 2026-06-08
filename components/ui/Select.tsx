import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: readonly string[] | { value: string; label: string }[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, error, options, placeholder = "Select an option", className, id, ...props },
    ref,
  ) {
    const inputId = id ?? props.name;

    return (
      <div className="w-full">
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-700">
          {label}
          {props.required && <span className="text-accent"> *</span>}
        </label>
        <select
          ref={ref}
          id={inputId}
          className={cn(
            "w-full min-h-11 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => {
            const value = typeof option === "string" ? option : option.value;
            const labelText = typeof option === "string" ? option : option.label;
            return (
              <option key={value} value={value}>
                {labelText}
              </option>
            );
          })}
        </select>
        {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);
