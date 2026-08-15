import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ClientFit } from "@/components/sections/client-fit";
import { ProblemFraming } from "@/components/sections/problem-framing";
import { ServiceArchitecture } from "@/components/sections/service-architecture";
import { BusinessStageFit } from "@/components/sections/business-stage-fit";
import { EngagementProcess } from "@/components/sections/engagement-process";
import { IndustryExpertise } from "@/components/sections/industry-expertise";
import { CaseStudyPreview } from "@/components/sections/case-study-preview";
import { NumericalOutcomes } from "@/components/sections/numerical-outcomes";
import { TeamPreview } from "@/components/sections/team-preview";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { ConsultationCTA } from "@/components/sections/consultation-cta";
import { ServicesDetail } from "@/components/sections/services-detail";
import { FractionalCfoDeepDive } from "@/components/sections/fractional-cfo-deep-dive";
import { AccountingDeepDive } from "@/components/sections/accounting-deep-dive";
import { IndustriesDetail } from "@/components/sections/industries-detail";
import { CaseStudiesDetail } from "@/components/sections/case-studies-detail";
import { AboutSection } from "@/components/sections/about-section";
import { TeamDetail } from "@/components/sections/team-detail";
import { InsightsDetail } from "@/components/sections/insights-detail";
import { ContactSection } from "@/components/sections/contact-section";
import { PrivacySection } from "@/components/sections/privacy-section";
import { TermsSection } from "@/components/sections/terms-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-18" role="main">
        {/* §1 — Homepage overview sections */}

        {/* Hero: warm paper background (default) */}
        <Hero />

        <div className="section-divider" aria-hidden="true" />

        {/* §2 — Client Fit: default bg */}
        <ClientFit />

        <div className="section-divider" aria-hidden="true" />

        {/* §3 — Problem Framing: slightly off-white bg */}
        <ProblemFraming />

        <div className="section-divider" aria-hidden="true" />

        {/* §4 — Service Architecture: default bg */}
        <ServiceArchitecture />

        <div className="section-divider" aria-hidden="true" />

        {/* §5 — Business Stage Fit: slightly off-white bg */}
        <BusinessStageFit />

        <div className="section-divider" aria-hidden="true" />

        {/* §6 — Engagement Process: default bg */}
        <EngagementProcess />

        <div className="section-divider" aria-hidden="true" />

        {/* §7 — Industry Expertise: slightly off-white bg */}
        <IndustryExpertise />

        <div className="section-divider" aria-hidden="true" />

        {/* §8 — Case Study Preview: default bg */}
        <CaseStudyPreview />

        <div className="section-divider" aria-hidden="true" />

        {/* §9 — Numerical Outcomes: slightly off-white bg */}
        <NumericalOutcomes />

        <div className="section-divider" aria-hidden="true" />

        {/* §10 — Team Preview: default bg */}
        <TeamPreview />

        <div className="section-divider" aria-hidden="true" />

        {/* §11 — Insights Preview: slightly off-white bg */}
        <InsightsPreview />

        <div className="section-divider" aria-hidden="true" />

        {/* §12 — Consultation CTA: default bg */}
        <ConsultationCTA />

        {/* ── Transition to detailed sections ── */}
        <div className="h-px bg-warm-border-strong" aria-hidden="true" />

        {/* Detailed content sections */}

        {/* Services Detail: default bg */}
        <ServicesDetail />

        <div className="section-divider" aria-hidden="true" />

        {/* Fractional CFO Deep Dive: slightly off-white bg */}
        <FractionalCfoDeepDive />

        <div className="section-divider" aria-hidden="true" />

        {/* Accounting Deep Dive: default bg */}
        <AccountingDeepDive />

        <div className="section-divider" aria-hidden="true" />

        {/* Industries Detail: slightly off-white bg */}
        <IndustriesDetail />

        <div className="section-divider" aria-hidden="true" />

        {/* Case Studies Detail: default bg */}
        <CaseStudiesDetail />

        <div className="section-divider" aria-hidden="true" />

        {/* About: slightly off-white bg */}
        <AboutSection />

        <div className="section-divider" aria-hidden="true" />

        {/* Team Detail: default bg */}
        <TeamDetail />

        <div className="section-divider" aria-hidden="true" />

        {/* Insights Detail: slightly off-white bg */}
        <InsightsDetail />

        <div className="section-divider" aria-hidden="true" />

        {/* Contact: default bg */}
        <ContactSection />

        {/* Legal sections */}
        <div className="section-divider" aria-hidden="true" />
        <section className="content-max-width section-padding" id="legal" aria-label="Legal information">
          <div className="max-w-3xl">
            <span className="eyebrow text-warm-gray-400 mb-6 block">
              Legal
            </span>
            <PrivacySection />
            <TermsSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
