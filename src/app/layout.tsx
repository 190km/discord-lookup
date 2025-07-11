import type { Metadata, Viewport } from "next";
import { serif, inter, geistMono, geistSans } from "@/config/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#f4f5f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Discord Lookup",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.ogImage,
  },
  other: {
    lastModified: new Date().toISOString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://stats.jeong.fr/api/script.js"
          data-site-id="3"
          defer
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
