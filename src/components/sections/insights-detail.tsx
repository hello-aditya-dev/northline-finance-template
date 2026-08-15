"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { insights, Article } from "@/content/insights";
import { ArrowRight, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const categories = ["All", ...Array.from(new Set(insights.map((a) => a.category)))];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ArticleCard({
  article,
  index,
  onOpen,
}: {
  article: Article;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border border-warm-border group hover:border-finance-green/30 transition-colors duration-200"
    >
      <button
        onClick={onOpen}
        className="w-full text-left p-6 md:p-8 focus-visible:ring-1 focus-visible:ring-finance-green focus-visible:ring-offset-0 rounded-sm"
        aria-label={`Read article: ${article.title}`}
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
        <h3 className="font-display text-base sm:text-lg text-charcoal tracking-tight mb-2 group-hover:text-finance-green transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-xs sm:text-sm text-warm-gray-500 leading-relaxed mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-warm-gray-500">
          <span>{article.author}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
      </button>
    </motion.article>
  );
}

function ArticleFull({
  article,
  open,
  onClose,
}: {
  article: Article | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!article) return null;

  // Find related articles (same category, different article)
  const related = insights
    .filter(
      (a) => a.category === article.category && a.slug !== article.slug
    )
    .slice(0, 2);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0" showCloseButton={true}>
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-finance-green">
                {article.category}
              </span>
              <span className="text-warm-gray-300" aria-hidden="true">·</span>
              <span className="text-xs text-warm-gray-500">
                {article.readingTime}
              </span>
              <span className="text-warm-gray-300" aria-hidden="true">·</span>
              <time dateTime={article.date} className="text-xs text-warm-gray-500">
                {formatDate(article.date)}
              </time>
            </div>
            <DialogTitle className="font-display text-xl sm:text-2xl text-charcoal tracking-tight text-left leading-tight">
              {article.title}
            </DialogTitle>
            <DialogDescription asChild>
              <span className="text-sm text-warm-gray-500 text-left">
                By {article.author}
              </span>
            </DialogDescription>
          </DialogHeader>

          {/* Article body */}
          {article.body ? (
            <div className="prose-northline">
              {article.body.split("\n\n").map((paragraph, i) => {
                // Handle bold paragraphs as subheadings
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  const text = paragraph.slice(2, -2);
                  return (
                    <h4
                      key={i}
                      className="font-display text-base text-charcoal tracking-tight mt-6 mb-2"
                    >
                      {text}
                    </h4>
                  );
                }

                // Handle bullet lists
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-1.5 my-3 ml-4">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-warm-gray-600 leading-relaxed list-disc"
                        >
                          {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Handle numbered lists
                if (/^\d+\./.test(paragraph)) {
                  const items = paragraph
                    .split("\n")
                    .filter((l) => /^\d+\./.test(l));
                  return (
                    <ol key={i} className="space-y-2 my-3 ml-4">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-warm-gray-600 leading-relaxed list-decimal"
                        >
                          {item
                            .replace(/^\d+\.\s*/, "")
                            .replace(/\*\*(.*?)\*\*/g, "$1")}
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Regular paragraph with inline bold
                return (
                  <p
                    key={i}
                    className="text-sm text-warm-gray-600 leading-relaxed my-3"
                  >
                    {paragraph
                      .split(/\*\*(.*?)\*\*/g)
                      .map((segment, si) =>
                        si % 2 === 1 ? (
                          <strong
                            key={si}
                            className="font-medium text-charcoal"
                          >
                            {segment}
                          </strong>
                        ) : (
                          segment
                        )
                      )}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-sm text-warm-gray-500 leading-relaxed">
                {article.excerpt}
              </p>
              <p className="text-xs text-warm-gray-400 mt-4 italic">
                Full article coming soon.
              </p>
            </div>
          )}

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-8 pt-6 border-t border-warm-border">
              <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-3">
                Related reading
              </div>
              <ul className="space-y-2">
                {related.map((a) => (
                  <li key={a.slug}>
                    <span className="text-sm text-charcoal font-medium">
                      {a.title}
                    </span>
                    <span className="text-warm-gray-300 mx-2" aria-hidden="true">·</span>
                    <span className="text-xs text-warm-gray-500">
                      {a.readingTime}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function InsightsDetail() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredArticles = useMemo(
    () =>
      activeCategory === "All"
        ? insights
        : insights.filter((a) => a.category === activeCategory),
    [activeCategory]
  );

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setDialogOpen(true);
  };

  const closeArticle = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedArticle(null), 200);
  };

  return (
    <section className="section-padding content-max-width" id="insights-detail" aria-labelledby="insights-detail-heading">
      <div className="max-w-2xl mb-10">
        <span className="eyebrow text-finance-green mb-3 block">
          Insights
        </span>
        <h2 id="insights-detail-heading" className="font-display heading-2 text-charcoal mb-4">
          Practical thinking on financial operations and the decisions they
          support
        </h2>
        <p className="text-sm text-warm-gray-600 leading-relaxed">
          Writing on the specific financial challenges that growing businesses
          face — cash flow, reporting, close processes, forecasting, KPIs, and
          building a finance function that keeps up with growth.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-finance-green ${
              activeCategory === cat
                ? "bg-charcoal text-white border-charcoal"
                : "bg-transparent text-warm-gray-500 border-warm-border hover:border-warm-border-strong hover:text-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={i}
              onOpen={() => openArticle(article)}
            />
          ))}
        </AnimatePresence>
      </div>

      <ArticleFull
        article={selectedArticle}
        open={dialogOpen}
        onClose={closeArticle}
      />
    </section>
  );
}
