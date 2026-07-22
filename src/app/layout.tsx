import type { Metadata } from "next";
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE_URL,
  SITE_ORIGIN,
  SITE_TITLE,
  siteOpenGraphImage,
  siteRouteUrl
} from "@/data/siteMetadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_AUTHOR, url: siteRouteUrl() }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  alternates: {
    canonical: siteRouteUrl()
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_AUTHOR,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: siteRouteUrl(),
    images: [siteOpenGraphImage()]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE_URL]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
