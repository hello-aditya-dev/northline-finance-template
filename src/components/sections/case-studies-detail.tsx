"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies, CaseStudy } from "@/content/case-studies";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function CaseStudyCard({
  cs,
  index,
  onOpen,
}: {
  cs: CaseStudy;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-warm-border group"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-warm-border bg-warm-gray-100/50">
        <div className="flex items-center gap-2 mb-2">
          <span className="eyebrow text-finance-green">{cs.industry}</span>
          <span className="text-warm-gray-300" aria-hidden="true">·</span>
          <span className="text-xs text-warm-gray-500">{cs.type}</span>
        </div>
        <h3 className="font-display heading-3 text-charcoal">
          {cs.company}
        </h3>
        {cs.isDemo && (
          <span className="inline-block mt-2 text-xs text-warm-gray-400 italic">
            Demonstration case study
          </span>
        )}
      </div>

      {/* Problem */}
      <div className="p-6 md:p-8 border-b border-warm-border">
        <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-2">
          The problem
        </div>
        <p className="text-sm text-warm-gray-600 leading-relaxed line-clamp-3">
          {cs.problem}
        </p>
      </div>

      {/* Outcomes summary */}
      <div className="p-6 md:p-8">
        <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-4">
          Key outcomes
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {cs.outcomes.slice(0, 2).map((outcome) => (
            <div key={outcome.label}>
              <div className="font-display text-2xl text-finance-green tracking-tight tabular-nums">
                {outcome.value}
              </div>
              <div className="text-xs font-medium text-charcoal mt-0.5">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-finance-green transition-colors duration-200 group/btn focus-visible:underline focus-visible:underline-offset-2 rounded-sm"
          aria-label={`Read full case study for ${cs.company}`}
        >
          Read full case study
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

function CaseStudyFull({ cs, open, onClose }: { cs: CaseStudy | null; open: boolean; onClose: () => void }) {
  if (!cs) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0" showCloseButton={true}>
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="eyebrow text-finance-green">{cs.industry}</span>
              <span className="text-warm-gray-300" aria-hidden="true">·</span>
              <span className="text-xs text-warm-gray-500">{cs.type}</span>
            </div>
            <DialogTitle className="font-display text-2xl text-charcoal tracking-tight text-left">
              {cs.company}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Full case study for {cs.company}
            </DialogDescription>
            {cs.isDemo && (
              <span className="inline-block mt-1 text-xs text-warm-gray-400 italic">
                Demonstration case study — fictional company with plausible outcomes
              </span>
            )}
          </DialogHeader>

          {/* Situation */}
          <div className="mb-8">
            <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-2">
              Situation
            </div>
            <p className="text-sm text-warm-gray-600 leading-relaxed">
              {cs.situation}
            </p>
          </div>

          {/* Problem */}
          <div className="mb-8 pb-8 border-b border-warm-border">
            <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-2">
              The problem
            </div>
            <p className="text-sm text-warm-gray-600 leading-relaxed">
              {cs.problem}
            </p>
          </div>

          {/* Work performed */}
          <div className="mb-8 pb-8 border-b border-warm-border">
            <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-3">
              Work performed
            </div>
            <ol className="space-y-2.5">
              {cs.work.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-xs font-mono text-warm-gray-400 shrink-0 mt-0.5 tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-warm-gray-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Outcomes */}
          <div className="mb-8 pb-8 border-b border-warm-border">
            <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-4">
              Outcomes
            </div>
            <div className="grid grid-cols-2 gap-5">
              {cs.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <div className="font-display text-2xl text-finance-green tracking-tight tabular-nums">
                    {outcome.value}
                  </div>
                  <div className="text-xs font-medium text-charcoal mt-0.5">
                    {outcome.label}
                  </div>
                  {outcome.description && (
                    <div className="text-xs text-warm-gray-500 mt-1 leading-relaxed">
                      {outcome.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services used */}
          <div className="mb-8 pb-8 border-b border-warm-border">
            <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-3">
              Services engaged
            </div>
            <div className="flex flex-wrap gap-2">
              {cs.servicesUsed.map((service) => (
                <span
                  key={service}
                  className="text-xs text-charcoal bg-warm-gray-100 border border-warm-border px-3 py-1.5 rounded-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-2">
              Conclusion
            </div>
            <p className="text-sm text-warm-gray-600 leading-relaxed">
              {cs.conclusion}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CaseStudiesDetail() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openStudy = (cs: CaseStudy) => {
    setSelectedStudy(cs);
    setDialogOpen(true);
  };

  const closeStudy = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedStudy(null), 200);
  };

  return (
    <section className="section-padding content-max-width" id="case-studies-detail" aria-labelledby="case-studies-detail-heading">
      <div className="max-w-2xl mb-12">
        <span className="eyebrow text-finance-green mb-3 block">
          Case Studies
        </span>
        <h2 id="case-studies-detail-heading" className="font-display heading-2 text-charcoal mb-4">
          How the work translates into measurable outcomes
        </h2>
        <p className="text-sm text-warm-gray-600 leading-relaxed">
          Four demonstration case studies showing different starting points,
          different scopes of work, and different outcomes. Each illustrates
          how the relationship between accurate accounting, useful reporting,
          and strategic guidance produces results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard
            key={cs.slug}
            cs={cs}
            index={i}
            onOpen={() => openStudy(cs)}
          />
        ))}
      </div>

      <div className="mt-6 text-xs text-warm-gray-400 italic">
        All case studies are demonstrations with fictional companies and
        plausible outcomes. They illustrate the types of engagements we
        typically undertake.
      </div>

      <CaseStudyFull
        cs={selectedStudy}
        open={dialogOpen}
        onClose={closeStudy}
      />
    </section>
  );
}
