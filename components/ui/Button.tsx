import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
  secondary:
    "bg-navy text-white hover:bg-navy-light focus-visible:ring-navy",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
  ghost: "text-navy hover:bg-slate-100 focus-visible:ring-navy",
} as const;

const sizes = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "min-h-11 px-6 py-3 text-base",
  lg: "min-h-12 px-8 py-3 text-base",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
