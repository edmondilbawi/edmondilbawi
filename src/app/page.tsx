import type { Metadata } from "next";
import { ConceptV2Page } from "@/components/concept-v2/ConceptV2Page";

export const metadata: Metadata = {
  title: "Edmond Ilbawi",
  description:
    "Personal portfolio of Edmond Ilbawi, a Computer Science student at the University of Balamand, featuring selected projects, experience, and the 21% Loaded digital journal."
};

export default function Home() {
  return <ConceptV2Page />;
}
