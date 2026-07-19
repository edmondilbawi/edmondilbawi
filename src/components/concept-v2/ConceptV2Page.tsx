"use client";

import { useCallback, useState } from "react";
import { AmbientExperience } from "@/components/AmbientExperience";
import { V2ContactCommand } from "@/components/concept-v2/V2ContactCommand";
import { V2CurrentBuild } from "@/components/concept-v2/V2CurrentBuild";
import { V2ExperienceLogs } from "@/components/concept-v2/V2ExperienceLogs";
import { V2FlowLine } from "@/components/concept-v2/V2FlowLine";
import { V2Gateway } from "@/components/concept-v2/V2Gateway";
import { V2HeroScene } from "@/components/concept-v2/V2HeroScene";
import { V2LaunchIntro } from "@/components/concept-v2/V2LaunchIntro";
import { V2LanguageProvider } from "@/components/concept-v2/V2LanguageProvider";
import { V2ProfessionalModules } from "@/components/concept-v2/V2ProfessionalModules";
import { V2ProjectCaseFiles } from "@/components/concept-v2/V2ProjectCaseFiles";
import { V2Snapshot } from "@/components/concept-v2/V2Snapshot";
import { V2SystemNav } from "@/components/concept-v2/V2SystemNav";

function ConceptV2Experience() {
  const [isHeroReady, setIsHeroReady] = useState(false);

  const revealHero = useCallback(() => {
    setIsHeroReady(true);
  }, []);

  return (
    <>
      <V2LaunchIntro onReveal={revealHero} />
      <AmbientExperience vibrant />
      <V2SystemNav />
      <main className="relative isolate overflow-x-clip bg-background text-ink">
        <V2FlowLine />
        <V2HeroScene isReady={isHeroReady} />
        <V2Gateway />
        <V2Snapshot />
        <V2CurrentBuild />
        <V2ProfessionalModules />
        <V2ProjectCaseFiles />
        <V2ExperienceLogs />
        <V2ContactCommand />
      </main>
    </>
  );
}

export function ConceptV2Page() {
  return (
    <V2LanguageProvider>
      <ConceptV2Experience />
    </V2LanguageProvider>
  );
}
