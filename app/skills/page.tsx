import type { Metadata } from "next";
import SkillsHero from "@/components/skills/SkillsHero";
import SkillsSectionNav from "@/components/skills/SkillsSectionNav";
import EngineeringDomains from "@/components/skills/EngineeringDomains";
import AIDomain from "@/components/skills/AIDomain";
import FullStackDomain from "@/components/skills/FullStackDomain";
import DataDomain from "@/components/skills/DataDomain";
import AnalyticsDomain from "@/components/skills/AnalyticsDomain";
import AutomationDomain from "@/components/skills/AutomationDomain";
import DeploymentDomain from "@/components/skills/DeploymentDomain";
import TechnologyIndex from "@/components/skills/TechnologyIndex";
import ProjectTechnologyMatrix from "@/components/skills/ProjectTechnologyMatrix";
import EngineeringApproach from "@/components/skills/EngineeringApproach";
import SkillsPageNavigation from "@/components/skills/SkillsPageNavigation";
import SkillsClosingCTA from "@/components/skills/SkillsClosingCTA";
import Footer from "@/components/Footer";
import { skillsMeta } from "@/data/skills";

export const metadata: Metadata = {
  title: skillsMeta.title,
  description: skillsMeta.description,
};

/**
 * /skills — the stack behind the systems, in the same editorial voice: AI,
 * full-stack, data, analytics, automation and deployment as connected layers,
 * never a rated list.
 *
 * The section nav is sticky on desktop and wraps the domain + reference
 * chapters so it stops scrolling before the closing CTA. Every technology is
 * surfaced exactly once at full breadth (the toolkit index) rather than
 * repeated across a constellation, a logo wall and a stack map; each domain
 * links to the project that evidences it.
 */
export default function Skills() {
  return (
    <main>
      <SkillsHero />

      {/* skills-anchor-scope: anchored targets inside this wrapper clear the
          sticky section nav as well as the fixed header (see globals.css).
          Deliberately excludes EngineeringApproach / the closing CTA. */}
      <div className="skills-anchor-scope">
        <SkillsSectionNav />

        <EngineeringDomains />
        <AIDomain />
        <FullStackDomain />
        <DataDomain />
        <AnalyticsDomain />
        <AutomationDomain />
        <DeploymentDomain />

        <TechnologyIndex />
        <ProjectTechnologyMatrix />
      </div>

      <EngineeringApproach />
      <SkillsPageNavigation />
      <SkillsClosingCTA />
      <Footer />
    </main>
  );
}
