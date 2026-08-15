"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { team, TeamMember } from "@/content/team";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const extendedBios: Record<string, string> = {
  "Catherine Hale":
    "Catherine spent 15 years in CFO and VP Finance roles across technology and professional services companies before founding Northline. She's led finance through Series A and B raises, guided companies through acquisitions, built reporting systems from scratch, and served as the financial partner that founders needed but couldn't find at traditional firms. She works directly with 3-5 clients at a time, providing the strategic financial counsel that keeps growing companies from out-running their financial infrastructure.",
  "Daniel Reeves":
    "Daniel brings deep experience in management reporting and financial operations from both corporate and consulting environments. He spent 8 years at a national advisory firm building reporting and KPI systems for mid-market companies before joining Northline. He focuses on building reporting systems that make financial information genuinely useful — not just accurate, but timely, contextual, and designed for the people who need to act on it.",
  "Sarah Chen":
    "Sarah has managed accounting operations for companies ranging from $2M to $50M in revenue, across technology, professional services, and ecommerce. She specializes in the work that growing companies struggle with most — cleaning up accounting functions, accelerating the close process, building the controls and procedures that create reliability, and making sure the numbers can be trusted before anyone builds analysis on top of them.",
  "Marcus Webb":
    "Marcus handles the detail work that keeps financial records accurate and close processes on schedule. He's methodical about reconciliations, precise about categorization, and takes pride in clean, audit-ready financials delivered on time. Before Northline, he managed accounting operations for a $15M services company where he reduced the close cycle from 18 days to 7. He's the kind of accountant who catches things other people miss.",
  "Ainsley Porter":
    "Ainsley manages client onboarding, engagement logistics, and the operational systems that keep Northline running smoothly. She's the primary point of contact for day-to-day coordination and ensures nothing falls through the cracks. Her background in operations management at a professional services firm means she understands the client experience from the inside — and she's designed Northline's operational systems to deliver the responsiveness and reliability that clients expect.",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function TeamMemberCard({
  member,
  index,
  onOpen,
}: {
  member: TeamMember;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={onOpen}
        className="w-full text-left border border-warm-border hover:border-finance-green/30 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-0 rounded-sm"
        aria-label={`View profile for ${member.name}`}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="w-12 h-12 rounded-sm shrink-0">
              <AvatarFallback className="rounded-sm bg-navy/10 text-navy font-display text-sm">
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-display heading-4 text-charcoal group-hover:text-finance-green transition-colors duration-200">
                {member.name}
              </h3>
              <div className="text-sm font-medium text-finance-green mt-0.5">
                {member.role}
              </div>
            </div>
          </div>
          <p className="text-sm text-warm-gray-600 leading-relaxed mb-4 line-clamp-3">
            {member.shortBio}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {member.expertise.map((item) => (
              <span
                key={item}
                className="text-xs text-warm-gray-500 bg-warm-gray-100 px-2 py-0.5 rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function TeamMemberFull({
  member,
  open,
  onClose,
}: {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!member) return null;
  const extendedBio = extendedBios[member.name];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg" showCloseButton={true}>
        <DialogHeader className="mb-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-14 h-14 rounded-sm shrink-0">
              <AvatarFallback className="rounded-sm bg-navy/10 text-navy font-display text-base">
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <DialogTitle className="font-display text-xl text-charcoal tracking-tight">
                {member.name}
              </DialogTitle>
              <DialogDescription className="text-sm font-medium text-finance-green mt-0.5">
                {member.role}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {extendedBio && (
          <p className="text-sm text-warm-gray-600 leading-relaxed mb-4">
            {extendedBio}
          </p>
        )}

        <div className="pt-4 border-t border-warm-border">
          <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-3">
            Expertise
          </div>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((item) => (
              <span
                key={item}
                className="text-xs text-charcoal bg-warm-gray-100 border border-warm-border px-3 py-1.5 rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function TeamDetail() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openMember = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const closeMember = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedMember(null), 200);
  };

  return (
    <section className="section-padding content-max-width" id="team-detail" aria-labelledby="team-detail-heading">
      <div className="max-w-2xl mb-12">
        <span className="eyebrow text-finance-green mb-3 block">Team</span>
        <h2 id="team-detail-heading" className="font-display heading-2 text-charcoal mb-4">
          People who&apos;ve operated in the roles you&apos;re looking to fill
        </h2>
        <p className="text-sm text-warm-gray-600 leading-relaxed">
          Our team has held CFO, controller, and finance leadership positions at
          companies in the size range we serve. We bring practical experience
          and professional judgment — not just technical capability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            index={i}
            onOpen={() => openMember(member)}
          />
        ))}
      </div>

      <TeamMemberFull
        member={selectedMember}
        open={dialogOpen}
        onClose={closeMember}
      />
    </section>
  );
}
