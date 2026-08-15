"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import { MobileNav } from "./mobile-nav";

const navItems = siteConfig.navigation;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-warm-border"
            : "bg-transparent"
        }`}
      >
        <div className="content-max-width flex items-center justify-between h-16 md:h-18">
          {/* Logo / Company name */}
          <a
            href="#hero"
            className="font-display text-lg text-charcoal tracking-tight hover:text-navy transition-colors duration-200 focus-visible:underline focus-visible:underline-offset-4"
            aria-label="Northline Finance — scroll to top"
          >
            {siteConfig.shortName}
            <span className="text-finance-green"> Finance</span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-xs font-medium tracking-wide uppercase transition-colors duration-200 relative ${
                    isActive
                      ? "text-charcoal"
                      : "text-warm-gray-500 hover:text-charcoal"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-finance-green" aria-hidden="true" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 -mr-2 text-warm-gray-600 hover:text-charcoal transition-colors duration-200 rounded-sm focus-visible:ring-1 focus-visible:ring-finance-green"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
