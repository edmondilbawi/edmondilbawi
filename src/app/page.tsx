import type { Metadata } from "next";
import { ConceptV2Page } from "@/components/concept-v2/ConceptV2Page";
import {
  SITE_DESCRIPTION,
  SITE_OG_IMAGE_URL,
  SITE_TITLE,
  SITE_AUTHOR,
  siteOpenGraphImage,
  siteRouteUrl
} from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE_URL]
  }
};

export default function Home() {
  return <ConceptV2Page />;
}
