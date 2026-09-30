import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

/** Homepage only — About / Experience / Skills / Certifications / Contact
 *  pages arrive later and will reuse these components. */
export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsStrip />
      <CapabilitiesSection />
      <ProjectsSection />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
