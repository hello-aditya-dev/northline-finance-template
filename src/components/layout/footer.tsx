import { siteConfig } from "@/config/site";
import { serviceFamilies } from "@/content/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-warm-border bg-warm-gray-100/30 mt-auto">
      <div className="content-max-width py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display text-lg text-charcoal tracking-tight mb-3">
              {siteConfig.shortName}
              <span className="text-finance-green"> Finance</span>
            </div>
            <p className="text-xs text-warm-gray-500 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-medium text-charcoal uppercase tracking-wider mb-4">
              Services
            </h2>
            <ul className="space-y-2" role="list">
              {serviceFamilies.map((family) => (
                <li key={family.family}>
                  <a
                    href="#services-detail"
                    className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                  >
                    {family.family}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h2 className="text-xs font-medium text-charcoal uppercase tracking-wider mb-4">
              Company
            </h2>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href="#about"
                  className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team-detail"
                  className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#case-studies-detail"
                  className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#insights-detail"
                  className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-medium text-charcoal uppercase tracking-wider mb-4">
              Contact
            </h2>
            <address className="not-italic space-y-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 block focus-visible:underline"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-xs text-warm-gray-500 hover:text-charcoal transition-colors duration-200 block focus-visible:underline"
              >
                {siteConfig.contact.phone}
              </a>
              <span className="text-xs text-warm-gray-500 leading-relaxed block">
                {siteConfig.contact.address}
              </span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-warm-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs text-warm-gray-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="text-xs text-warm-gray-400 hover:text-warm-gray-600 transition-colors duration-200 focus-visible:underline"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-xs text-warm-gray-400 hover:text-warm-gray-600 transition-colors duration-200 focus-visible:underline"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
