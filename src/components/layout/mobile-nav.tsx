"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { useEffect } from "react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const handleNav = (href: string) => {
    onClose();
    // Small delay to let sheet close before scroll
    setTimeout(() => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-0" id="mobile-nav">
        <SheetHeader className="p-6 pb-0">
          <SheetTitle className="font-display text-lg text-charcoal tracking-tight text-left">
            {siteConfig.shortName}
            <span className="text-finance-green"> Finance</span>
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="p-6 pt-4">
          <ul className="space-y-0" role="list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNav(item.href)}
                  className="w-full text-left py-3.5 text-sm font-medium text-warm-gray-600 hover:text-charcoal border-b border-warm-border transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-finance-green focus-visible:ring-offset-0 rounded-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 bg-navy text-white px-5 py-3 text-sm font-medium hover:bg-charcoal transition-colors duration-200 rounded-sm w-full justify-center focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
