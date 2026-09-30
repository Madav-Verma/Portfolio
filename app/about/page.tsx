import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ProfileSection from "@/components/about/ProfileSection";
import BuildProcess from "@/components/about/BuildProcess";
import EngineeringOwnership from "@/components/about/EngineeringOwnership";
import RealWorldSoftware from "@/components/about/RealWorldSoftware";
import AppliedAISection from "@/components/about/AppliedAISection";
import AgenticEngineering from "@/components/about/AgenticEngineering";
import DataBusinessSection from "@/components/about/DataBusinessSection";
import EngineeringPrinciples from "@/components/about/EngineeringPrinciples";
import TechnologyStack from "@/components/about/TechnologyStack";
import EducationSection from "@/components/about/EducationSection";
import PersonalDetail from "@/components/about/PersonalDetail";
import AboutClosingCTA from "@/components/about/AboutClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Daksh Verma",
  description:
    "How Daksh Verma thinks and builds: end-to-end ownership of web platforms and ERP/CRM systems, retrieval-grounded AI assistants, agentic workflows, and data-driven business tools.",
};

/**
 * /about — engineering profile in an editorial magazine voice.
 * Same tokens, type ramp and primitives as the homepage; own composition.
 */
export default function About() {
  return (
    <main>
      <AboutHero />
      <ProfileSection />
      <BuildProcess />
      <EngineeringOwnership />
      <RealWorldSoftware />
      <AppliedAISection />
      <AgenticEngineering />
      <DataBusinessSection />
      <EngineeringPrinciples />
      <TechnologyStack />
      <EducationSection />
      <PersonalDetail />
      <AboutClosingCTA />
      <Footer />
    </main>
  );
}
