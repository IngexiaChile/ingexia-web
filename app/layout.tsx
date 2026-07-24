import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sora is reserved for the INGEXIA wordmark only, per the brand guideline —
// body copy and headings keep using Geist Sans.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  title: {
    default: "INGEXIA | Ingeniería, Inteligencia Artificial y Transformación Digital",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ingeniería de software",
    "inteligencia artificial",
    "arquitectura empresarial",
    "cloud",
    "integración de sistemas",
    "modernización de plataformas",
    "automatización",
    "ciberseguridad",
    "transformación digital",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "INGEXIA | Ingeniería, Inteligencia Artificial y Transformación Digital",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "INGEXIA | Ingeniería, Inteligencia Artificial y Transformación Digital",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  email: siteConfig.email,
  sameAs: [siteConfig.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-surface font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
