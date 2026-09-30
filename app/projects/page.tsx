import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import {
  ApproachSection,
  EngineeringSnapshot,
  MoreDocumented,
} from "@/components/projects/ProjectsOutro";
import ProjectsClosingCTA from "@/components/projects/ProjectsClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Daksh Verma",
  description:
    "Selected work by Daksh Verma: production web platforms, ERP/CRM systems and offline-first applications built around real workflows and real users.",
};

/**
 * /projects — selected work as product case-study previews in an
 * editorial magazine voice. Same tokens, type ramp and primitives as the
 * rest of the site; the composition alternates text/image sides down the
 * page so the visual weight keeps moving.
 */
export default function Projects() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsShowcase />
      <MoreDocumented />
      <EngineeringSnapshot />
      <ApproachSection />
      <ProjectsClosingCTA />
      <Footer />
    </main>
  );
}
