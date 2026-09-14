import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Loader from "@/components/ui/Loader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://oriontech.sn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ORION TECH — Digital Solutions Built in Dakar",
    template: "%s | Orion Tech",
  },
  description:
    "Orion Tech conçoit et développe des solutions digitales sur mesure : applications web, mobile, logiciels, plateformes et systèmes intelligents depuis Dakar, Sénégal.",
  keywords: [
    "Agence digitale Sénégal",
    "Agence web Dakar",
    "Développement web Sénégal",
    "Création application mobile Sénégal",
    "Logiciel sur mesure Sénégal",
    "Agence informatique Dakar",
    "Solution digitale Sénégal",
    "Développement logiciel Dakar",
  ],
  authors: [{ name: "Orion Tech" }],
  creator: "Orion Tech",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: siteUrl,
    siteName: "Orion Tech",
    title: "ORION TECH — Digital Solutions Built in Dakar",
    description:
      "Orion Tech conçoit et développe des solutions digitales sur mesure : applications web, mobile, logiciels, plateformes et systèmes intelligents depuis Dakar, Sénégal.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orion Tech — Digital Engineering Studio, Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORION TECH — Digital Solutions Built in Dakar",
    description:
      "Orion Tech conçoit et développe des solutions digitales sur mesure depuis Dakar, Sénégal.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orion Tech",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Orion Tech conçoit et développe des sites web, applications mobiles, logiciels et plateformes digitales sur mesure depuis Dakar, Sénégal.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dakar",
    addressCountry: "SN",
  },
  email: "contact@oriontech.sn",
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight text-offwhite selection:bg-orion-blue">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Loader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
