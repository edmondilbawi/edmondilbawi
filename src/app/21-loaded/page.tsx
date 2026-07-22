import type { Metadata } from "next";
import { TwentyOneLoadedPage } from "@/components/loaded/TwentyOneLoadedPage";
import {
  SITE_AUTHOR,
  SITE_OG_IMAGE_URL,
  siteOpenGraphImage,
  siteRouteUrl
} from "@/data/siteMetadata";

const title = "21% Loaded | Edmond Ilbawi";
const description =
  "A reflective digital journal about the mindset, lessons, and questions behind Edmond Ilbawi's work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteRouteUrl("21-loaded")
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_AUTHOR,
    title,
    description,
    url: siteRouteUrl("21-loaded"),
    images: [siteOpenGraphImage()]
  },
  twitter: {
    title,
    description,
    images: [SITE_OG_IMAGE_URL]
  }
};

export default function LoadedPage() {
  return <TwentyOneLoadedPage />;
}
