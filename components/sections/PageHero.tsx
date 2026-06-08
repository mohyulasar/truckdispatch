import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  className?: string;
};

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-br from-navy to-navy-light py-12 text-white sm:py-16",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
