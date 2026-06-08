import { SITE } from "./constants";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      type: "website" as const,
    },
  };
}
