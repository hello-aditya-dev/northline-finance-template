"use client";

import { serviceFamilies } from "@/content/services";
import { Compass, Settings, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  compass: Compass,
  settings: Settings,
  "book-open": BookOpen,
};

export function ServiceMatrix() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0 border border-warm-border">
      {serviceFamilies.map((family, i) => {
        const Icon = iconMap[family.icon];
        return (
          <motion.div
            key={family.family}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`p-6 md:p-8 ${
              i < 2 ? "lg:border-r" : ""
            } ${i > 0 ? "border-t lg:border-t-0" : ""} border-warm-border`}
          >
            <div className="flex items-center gap-3 mb-4">
              {Icon && (
                <div className="w-9 h-9 rounded-sm bg-navy/5 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-navy" strokeWidth={1.5} />
                </div>
              )}
              <h3 className="font-display text-lg text-charcoal tracking-tight">
                {family.family}
              </h3>
            </div>
            <p className="text-sm text-warm-gray-500 mb-5 leading-relaxed">
              {family.tagline}
            </p>
            <div className="space-y-3">
              {family.services.map((service) => (
                <div key={service.name} className="group">
                  <div className="text-sm font-medium text-charcoal group-hover:text-finance-green transition-colors duration-200">
                    {service.name}
                  </div>
                  <div className="text-xs text-warm-gray-500 mt-0.5 leading-relaxed">
                    {service.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
