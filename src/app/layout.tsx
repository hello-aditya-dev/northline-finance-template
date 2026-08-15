import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://northlinefinance.com";

export const metadata: Metadata = {
  title: {
    default: "Northline Finance | Fractional CFO & Accounting for Growing Businesses",
    template: "%s | Northline Finance",
  },
  description:
    "Fractional CFO and accounting support for founder-led businesses. Senior finance guidance, stronger financial operations, and better visibility — without building a full internal finance department.",
  keywords: [
    "fractional CFO",
    "accounting",
    "finance operations",
    "management reporting",
    "cash flow forecasting",
    "controller services",
    "founder-led business",
    "financial planning",
    "outsourced CFO",
    "virtual CFO",
    "part-time CFO",
    "financial reporting",
    "bookkeeping services",
    "Denver CFO",
  ],
  authors: [{ name: "Northline Finance", url: siteUrl }],
  creator: "Northline Finance",
  publisher: "Northline Finance",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Northline Finance | Fractional CFO & Accounting for Growing Businesses",
    description:
      "Senior finance guidance for founder-led businesses that need better visibility, stronger financial operations, and senior finance counsel without the full-time overhead.",
    url: siteUrl,
    siteName: "Northline Finance",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Northline Finance - Fractional CFO & Accounting for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline Finance | Fractional CFO & Accounting",
    description:
      "Senior finance guidance for founder-led businesses — without the full-time overhead.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* JSON-LD structured data for Organization + ProfessionalService */
function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.companyName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 400, 1200 Market Street",
      addressLocality: "Denver",
      addressRegion: "CO",
      postalCode: "80202",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Fractional CFO",
      "Accounting",
      "Management Reporting",
      "Cash Flow Forecasting",
      "Controller Services",
      "Bookkeeping",
      "Financial Planning",
    ],
    priceRange: "$$$$",
    sameAs: [siteConfig.social.linkedin],
    knowsAbout: [
      "Fractional CFO services",
      "Financial operations",
      "Management reporting",
      "Cash flow management",
      "Accounting operations",
      "Business financial planning",
    ],
  };

  const personSchemas = [
    {
      "@type": "Person",
      name: "Catherine Hale",
      jobTitle: "Managing Partner & Fractional CFO",
      worksFor: { "@type": "Organization", name: siteConfig.companyName },
      knowsAbout: [
        "Strategic financial planning",
        "Board and investor communication",
        "Growth-stage finance operations",
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Reeves",
      jobTitle: "Finance Director",
      worksFor: { "@type": "Organization", name: siteConfig.companyName },
      knowsAbout: [
        "Management reporting design",
        "KPI framework development",
        "Financial process improvement",
      ],
    },
    {
      "@type": "Person",
      name: "Sarah Chen",
      jobTitle: "Controller",
      worksFor: { "@type": "Organization", name: siteConfig.companyName },
      knowsAbout: [
        "Month-end close optimization",
        "Technical accounting",
        "Process and controls development",
      ],
    },
  ];

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-people"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": personSchemas,
          }),
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
