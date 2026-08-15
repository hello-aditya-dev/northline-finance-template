"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid work email"),
  company: z.string().min(2, "Company name is required"),
  website: z.string().url("Please enter a valid URL").or(z.literal("")).optional(),
  companyStage: z.string().min(1, "Please select a stage"),
  serviceInterest: z.string().min(1, "Please select a service area"),
  message: z.string().min(10, "Please tell us a bit about your situation"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const companyStages = [
  "Pre-revenue / Early stage",
  "$1M – $3M revenue",
  "$3M – $10M revenue",
  "$10M – $30M revenue",
  "$30M+ revenue",
];

const serviceInterests = [
  "Fractional CFO",
  "Accounting & Bookkeeping",
  "Management Reporting",
  "Cash Flow Forecasting",
  "Board & Investor Reporting",
  "KPI Development",
  "Process Improvement",
  "Not sure — would like to discuss",
];

export function ContactSection() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      companyStage: "",
      serviceInterest: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <section className="section-padding content-max-width" id="contact" aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Form side */}
        <div className="lg:col-span-3">
          <span className="eyebrow text-finance-green mb-3 block">
            Get in touch
          </span>
          <h2 id="contact-heading" className="font-display heading-2 text-charcoal mb-4">
            Schedule a conversation about your finance function
          </h2>
          <p className="text-sm text-warm-gray-600 leading-relaxed mb-8 max-w-xl">
            No sales pitch. We&apos;ll talk through your situation and tell you
            honestly whether we&apos;re the right fit. If we are, we&apos;ll outline
            what an engagement would look like. If we&apos;re not, we&apos;ll try to
            point you in the right direction.
          </p>

          {submitState === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-finance-green/30 bg-finance-green/5 p-6 md:p-8"
              role="alert"
            >
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 text-finance-green shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display heading-4 text-charcoal mb-1">
                    Thank you for reaching out
                  </h3>
                  <p className="text-sm text-warm-gray-600 leading-relaxed">
                    We received your inquiry and will be in touch within one
                    business day. In the meantime, if it&apos;s urgent, you can
                    reach us directly at{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-finance-green hover:underline focus-visible:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-charcoal">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-white"
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-charcoal">
                          Work email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="you@company.com"
                            type="email"
                            {...field}
                            className="bg-white"
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-charcoal">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Company name"
                            {...field}
                            className="bg-white"
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-charcoal">
                          Website{" "}
                          <span className="text-warm-gray-400 font-normal">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://company.com"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="companyStage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-charcoal">
                          Company stage / size
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white w-full">
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {companyStages.map((stage) => (
                              <SelectItem key={stage} value={stage}>
                                {stage}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-charcoal">
                          Area of interest
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white w-full">
                              <SelectValue placeholder="What are you looking for?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceInterests.map((interest) => (
                              <SelectItem key={interest} value={interest}>
                                {interest}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-charcoal">
                        Tell us about your situation
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What's prompting you to reach out? Any specific challenges or questions?"
                          rows={4}
                          {...field}
                          className="bg-white"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="bg-navy text-white hover:bg-charcoal rounded-sm px-6 py-3 h-auto focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
                  >
                    {submitState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send inquiry
                        <ArrowRight
                          className="w-4 h-4 ml-2"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Button>

                  {submitState === "error" && (
                    <span className="text-sm text-destructive" role="alert">
                      Something went wrong. Please try again or email us
                      directly.
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <Shield
                    className="w-3.5 h-3.5 text-warm-gray-400 shrink-0 mt-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-xs text-warm-gray-400 leading-relaxed">
                    Your information is used only to respond to your inquiry.
                    We do not share, sell, or use contact information for
                    marketing without explicit permission.
                  </span>
                </div>
              </form>
            </Form>
          )}
        </div>

        {/* Info side */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border border-warm-border p-6 md:p-8 bg-background"
          >
            <h3 className="font-display heading-4 text-charcoal mb-6">
              {siteConfig.companyName}
            </h3>
            <address className="not-italic space-y-4">
              <div>
                <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-warm-gray-600 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-1">
                  Phone
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-warm-gray-600 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-1">
                  Office
                </div>
                <span className="text-sm text-warm-gray-600 leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </div>
            </address>

            <div className="mt-8 pt-6 border-t border-warm-border">
              <h4 className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-3">
                What to expect
              </h4>
              <div className="space-y-3 text-sm text-warm-gray-600 leading-relaxed">
                <p>
                  We respond to all inquiries within one business day. The
                  initial conversation is a chance for us to understand your
                  situation and for you to ask questions about how we work.
                </p>
                <p>
                  There&apos;s no commitment and no pressure. If we&apos;re a good fit,
                  we&apos;ll outline what an engagement would look like. If we&apos;re
                  not, we&apos;ll say so.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-warm-border">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-warm-gray-500 hover:text-charcoal transition-colors duration-200 focus-visible:underline"
              >
                Connect on LinkedIn
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
