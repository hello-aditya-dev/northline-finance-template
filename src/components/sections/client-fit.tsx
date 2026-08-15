"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Store, Globe, Cpu } from "lucide-react";

const clientTypes = [
  {
    icon: Building2,
    label: "Founder-led businesses",
    detail: "Companies where the founder is still close to the financials — and wants better information to make decisions",
  },
  {
    icon: TrendingUp,
    label: "Growing SMBs",
    detail: "Businesses that have outgrown basic bookkeeping but aren't ready for a full internal finance department",
  },
  {
    icon: Users,
    label: "Professional services firms",
    detail: "Law firms, consultancies, engineering firms, and agencies where project economics matter",
  },
  {
    icon: Store,
    label: "Ecommerce & DTC brands",
    detail: "Businesses managing inventory, multiple channels, and margin complexity",
  },
  {
    icon: Globe,
    label: "Companies with boards or investors",
    detail: "Businesses that need consistent, professional financial communication with stakeholders",
  },
  {
    icon: Cpu,
    label: "Technology & SaaS companies",
    detail: "Companies tracking burn, runway, and unit economics while scaling",
  },
];

export function ClientFit() {
  return (
    <section className="section-padding content-max-width" id="client-fit" aria-labelledby="client-fit-heading">
      <div className="max-w-2xl mb-10">
        <span className="section-marker mb-2 block">§1</span>
        <span className="eyebrow text-finance-green mb-3 block">
          Who we work with
        </span>
        <h2 id="client-fit-heading" className="font-display heading-2 text-charcoal text-balance">
          Businesses that have outgrown basic bookkeeping but aren&apos;t ready for a
          full finance department
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-warm-border">
        {clientTypes.map((client, i) => {
          const Icon = client.icon;
          return (
            <motion.div
              key={client.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-5 md:p-6 ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "md:border-r md:last:border-r-0" : ""} ${
                i >= 3 ? "border-t" : i >= 2 ? "lg:border-t" : ""
              } ${
                i >= 2 && i < 3 ? "md:border-t" : ""
              } border-warm-border`}
            >
              <Icon
                className="w-5 h-5 text-finance-green mb-3"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="text-sm font-semibold text-charcoal mb-1.5">
                {client.label}
              </h3>
              <p className="text-xs text-warm-gray-500 leading-relaxed">
                {client.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
