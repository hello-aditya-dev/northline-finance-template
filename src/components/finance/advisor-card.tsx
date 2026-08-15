"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/content/team";

interface AdvisorCardProps {
  member: TeamMember;
  index?: number;
}

export function AdvisorCard({ member, index = 0 }: AdvisorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-6 md:p-8 border border-warm-border"
    >
      <h3 className="font-display text-lg text-charcoal tracking-tight">
        {member.name}
      </h3>
      <div className="text-sm font-medium text-finance-green mt-0.5">
        {member.role}
      </div>
      <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
        {member.shortBio}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {member.expertise.map((item) => (
          <span
            key={item}
            className="text-xs text-warm-gray-500 bg-warm-gray-100 px-2 py-0.5 rounded-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
