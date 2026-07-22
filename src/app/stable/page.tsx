import type { Metadata } from "next";
import { PortfolioPageClient } from "@/components/PortfolioPageClient";
import {
  SITE_AUTHOR,
  SITE_OG_IMAGE_URL,
  siteOpenGraphImage,
  siteRouteUrl
} from "@/data/siteMetadata";

const title = "Portfolio Archive | Edmond Ilbawi";
const description =
  "The stable portfolio view for Edmond Ilbawi, featuring education, skills, selected projects, and experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteRouteUrl("stable")
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_AUTHOR,
    title,
    description,
    url: siteRouteUrl("stable"),
    images: [siteOpenGraphImage()]
  },
  twitter: {
    title,
    description,
    images: [SITE_OG_IMAGE_URL]
  }
};

export default function StablePortfolioRoute() {
  return <PortfolioPageClient />;
}
