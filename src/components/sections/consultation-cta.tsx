"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ConsultationCTA() {
  return (
    <section className="section-padding content-max-width" id="consultation" aria-labelledby="consultation-heading">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* CTA */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow text-finance-green mb-3 block">
              Get in touch
            </span>
            <h2 id="consultation-heading" className="font-display heading-2 text-charcoal mb-4">
              A conversation about your finance function
            </h2>
            <p className="text-sm text-warm-gray-600 leading-relaxed mb-6 max-w-xl">
              If you&apos;re dealing with any of the situations we described — late
              reporting, cash uncertainty, no forward planning, too much founder
              time on finance — the first step is a conversation. No sales pitch.
              We&apos;ll talk through your situation and tell you honestly whether
              we&apos;re the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:bg-charcoal transition-colors duration-200 rounded-sm focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-warm-border-strong text-charcoal px-6 py-3 text-sm font-medium hover:bg-warm-gray-100 transition-colors duration-200 rounded-sm focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact details */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border border-warm-border p-6 md:p-8"
          >
            <h3 className="font-display text-lg text-charcoal tracking-tight mb-6">
              {siteConfig.companyName}
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-warm-gray-400 mt-0.5 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm text-warm-gray-600">
                  {siteConfig.contact.address}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 text-warm-gray-400 mt-0.5 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-warm-gray-600 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 text-warm-gray-400 mt-0.5 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-warm-gray-600 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </address>
            <div className="mt-6 pt-6 border-t border-warm-border">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
              >
                Connect on LinkedIn
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
