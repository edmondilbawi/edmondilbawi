import type { Metadata } from "next";
import { TwentyOneLoadedPage } from "@/components/loaded/TwentyOneLoadedPage";

export const metadata: Metadata = {
  title: "21% Loaded | Edmond Ilbawi",
  description:
    "A reflective digital journal about the mindset, lessons, and questions behind Edmond Ilbawi's work."
};

export default function LoadedPage() {
  return <TwentyOneLoadedPage />;
}
