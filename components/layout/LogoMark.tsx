import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "accent";
}) {
  return (
    <div
      className={cn(
        "flex h-10 min-w-10 items-center justify-center rounded-lg px-1.5 text-xs font-bold text-white",
        variant === "navy" ? "bg-navy" : "bg-accent",
        className,
      )}
    >
      GDS
    </div>
  );
}
