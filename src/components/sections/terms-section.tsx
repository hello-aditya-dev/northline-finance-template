"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertTriangle } from "lucide-react";

export function TermsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-warm-border" id="terms">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-charcoal tracking-tight group-hover:text-finance-green transition-colors duration-200">
          Terms of Service
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
                  This is demo template content. It must be reviewed and replaced with proper terms of service drafted by a legal professional before this site is used in production.
                </span>
              </div>

              <div className="max-w-3xl space-y-6 text-sm text-warm-gray-600 leading-relaxed">
                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Services
                  </h4>
                  <p>
                    Northline Finance provides fractional CFO, accounting, and financial operations services to businesses. The specific scope of services, deliverables, and fees for any engagement are defined in a separate engagement letter or statement of work and are not governed by these website terms.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Website Content
                  </h4>
                  <p>
                    The content on this website is provided for informational purposes only. It does not constitute professional financial, accounting, tax, or legal advice. No client relationship is formed by your use of this website or submission of a contact form inquiry. Professional services are only provided pursuant to a signed engagement letter.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Case Studies and Examples
                  </h4>
                  <p>
                    Case studies and examples on this website are for illustrative purposes only. They involve fictional companies with plausible scenarios and outcomes. They are not representations of specific client engagements or guaranteed results.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Limitation of Liability
                  </h4>
                  <p>
                    To the fullest extent permitted by law, Northline Finance disclaims all warranties related to the information on this website and shall not be liable for any damages arising from your use of or reliance on this information.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-base text-charcoal tracking-tight mb-2">
                    Intellectual Property
                  </h4>
                  <p>
                    All content on this website, including text, design, and compilation of information, is the property of Northline Finance and is protected by applicable intellectual property laws.
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
