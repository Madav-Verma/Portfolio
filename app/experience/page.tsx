import type { Metadata } from "next";
import ExperienceHero from "@/components/experience/ExperienceHero";
import CareerIntro from "@/components/experience/CareerIntro";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import PrimaryExperience from "@/components/experience/PrimaryExperience";
import ERPSnapshot from "@/components/experience/ERPSnapshot";
import RAGArchitecture from "@/components/experience/RAGArchitecture";
import AgenticWorkflow from "@/components/experience/AgenticWorkflow";
import CareerProgression from "@/components/experience/CareerProgression";
import ExperienceMetrics from "@/components/experience/ExperienceMetrics";
import OwnershipSection from "@/components/experience/OwnershipSection";
import ExperienceClosing from "@/components/experience/ExperienceClosing";
import PageNavigation from "@/components/experience/PageNavigation";
import ExperienceClosingCTA from "@/components/experience/ExperienceClosingCTA";
import Footer from "@/components/Footer";
import { experienceMeta } from "@/data/experience";

export const metadata: Metadata = {
  title: experienceMeta.title,
  description: experienceMeta.description,
};

/**
 * /experience — an engineer’s career story in the same editorial voice.
 * Same tokens, type ramp, Navbar and Footer as the rest of the site; the
 * composition deliberately moves visual weight left, center and right down
 * the page instead of repeating one split.
 */
export default function Experience() {
  return (
    <main>
      <ExperienceHero />
      <CareerIntro />
      <ExperienceTimeline />
      <PrimaryExperience />
      <ERPSnapshot />
      <RAGArchitecture />
      <AgenticWorkflow />
      <CareerProgression />
      <ExperienceMetrics />
      <OwnershipSection />
      <ExperienceClosing />
      <PageNavigation />
      <ExperienceClosingCTA />
      <Footer />
    </main>
  );
}
