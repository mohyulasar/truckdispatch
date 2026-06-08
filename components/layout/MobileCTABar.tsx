import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
      <div className="flex gap-2">
        <Button
          href={SITE.phoneHref}
          external
          variant="outline"
          size="sm"
          className="flex-1"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Button>
        <Button href="/contact" size="sm" className="flex-1">
          Get Quote
        </Button>
      </div>
    </div>
  );
}

export function MobileCTASpacer() {
  return <div className="h-20 sm:hidden" aria-hidden="true" />;
}
