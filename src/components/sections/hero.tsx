"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="section-padding-lg content-max-width" id="hero" aria-labelledby="hero-heading">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow text-finance-green mb-4 block">
            Fractional CFO &amp; Accounting
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display heading-1 text-charcoal text-balance mb-6"
        >
          Finance and accounting support for businesses that need better
          visibility and stronger operations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-warm-gray-600 leading-relaxed max-w-2xl mb-8"
        >
          Senior finance guidance for founder-led businesses — without building a
          full internal finance department. Forecasting, reporting, cash
          management, and CFO-level counsel, structured around what your business
          actually needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:bg-charcoal transition-colors duration-200 rounded-sm focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
          >
            Schedule a conversation
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-warm-border-strong text-charcoal px-6 py-3 text-sm font-medium hover:bg-warm-gray-100 transition-colors duration-200 rounded-sm focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
          >
            See how we work
          </a>
        </motion.div>
      </div>

      {/* Subtle editorial line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 md:mt-20 h-px bg-warm-border-strong origin-left"
        aria-hidden="true"
      />
    </section>
  );
}
