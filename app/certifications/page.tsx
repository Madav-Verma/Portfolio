import type { Metadata } from "next";
import CertificationsHero from "@/components/certifications/CertificationsHero";
import LearningAreas from "@/components/certifications/LearningAreas";
import FeaturedCertification from "@/components/certifications/FeaturedCertification";
import CertificationGrid from "@/components/certifications/CertificationGrid";
import CertificationStats from "@/components/certifications/CertificationStats";
import LearningEvolution from "@/components/certifications/LearningEvolution";
import LearningToWork from "@/components/certifications/LearningToWork";
import LearningStatement from "@/components/certifications/LearningStatement";
import CertificationPageNavigation from "@/components/certifications/CertificationPageNavigation";
import CertificationClosingCTA from "@/components/certifications/CertificationClosingCTA";
import Footer from "@/components/Footer";
import { certificationsMeta } from "@/data/certifications";

export const metadata: Metadata = {
  title: certificationsMeta.title,
  description: certificationsMeta.description,
};

/**
 * /certifications — proof of learning. An editorial learning archive in
 * the same voice as the rest of the portfolio: hero with a real-certificate
 * collage, learning areas and knowledge map, an alternating year timeline,
 * one featured record, a filterable/searchable archive with a full-screen
 * viewer, evolution and learning-to-work chapters, a centered statement and
 * the dark closing. Visual weight alternates down the page.
 */
export default function Certifications() {
  return (
    <main>
      <CertificationsHero />
      <LearningAreas />
      <FeaturedCertification />
      <CertificationGrid />
      <CertificationStats />
      <LearningEvolution />
      <LearningToWork />
      <LearningStatement />
      <CertificationPageNavigation />
      <CertificationClosingCTA />
      <Footer />
    </main>
  );
}
