"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertTriangle } from "lucide-react";

export function PrivacySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-warm-border" id="privacy">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-charcoal tracking-tight group-hover:text-finance-green transition-colors duration-200">
          Privacy Policy
        </span>
        <ChevronDown
          className={`w-5 h-5 text-warm-gray-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <div className="flex items-start gap-2 mb-6 p-3 bg-amber-50 border border-amber-200 rounded-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-xs text-amber-700 leading-relaxed">
                  This is demo template content. It must be reviewed and replaced with a proper privacy policy drafted by a legal professional before this site is used in production.
                </span>
              </div>

              <div className="max-w-3xl space-y-6 text-sm text-warm-gray-600 leading-relaxed">
                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Information We Collect
                  </h4>
                  <p>
                    When you submit a contact form inquiry, we collect the information you provide: name, email address, company name, website (if provided), company stage, area of interest, and your message. We do not collect information passively through cookies or tracking technologies beyond basic analytics.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    How We Use Your Information
                  </h4>
                  <p>
                    We use the information you provide solely to respond to your inquiry and evaluate whether we can assist you. We do not use contact form submissions for marketing, advertising, or any purpose other than responding to your inquiry. We do not sell, rent, or share your personal information with third parties.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Data Retention
                  </h4>
                  <p>
                    We retain contact form submissions for a reasonable period to allow for follow-up communication, after which they are deleted. If you become a client, your information is retained according to our client data policies.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Your Rights
                  </h4>
                  <p>
                    You may request access to, correction of, or deletion of your personal information at any time by contacting us at the email address listed on this site.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Contact
                  </h4>
                  <p>
                    For questions about this privacy policy or our data practices, contact us at hello@northlinefinance.com.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
