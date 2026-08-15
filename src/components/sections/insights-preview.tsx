"use client";

import { insights } from "@/content/insights";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function InsightsPreview() {
  const latest = insights.slice(0, 3);

  return (
    <section className="section-padding bg-warm-gray-100/50" id="insights" aria-labelledby="insights-preview-heading">
      <div className="content-max-width">
        <div className="max-w-2xl mb-10">
          <span className="section-marker mb-2 block">§10</span>
          <span className="eyebrow text-finance-green mb-3 block">
            Insights
          </span>
          <h2 id="insights-preview-heading" className="font-display heading-2 text-charcoal text-balance">
            Thinking on the work we do
          </h2>
          <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
            Practical perspectives on financial operations, reporting, and the
            decisions that come out of them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border border-warm-border">
          {latest.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 md:p-8 ${
                i < 2 ? "md:border-r" : ""
              } ${i > 0 ? "border-t md:border-t-0" : ""} border-warm-border group`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-finance-green">
                  {article.category}
                </span>
                <span className="text-warm-gray-300" aria-hidden="true">·</span>
                <span className="text-xs text-warm-gray-500">
                  {article.readingTime}
                </span>
              </div>
              <h3 className="font-display text-base text-charcoal tracking-tight mb-2 group-hover:text-navy transition-colors duration-200">
                {article.title}
              </h3>
              <p className="text-xs text-warm-gray-500 leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-warm-gray-500">
                <span>{article.author}</span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
