import Diagram from "./Diagram";
import LogoList from "./LogoList";
import { deploymentPipeline } from "@/data/skills";

/**
 * DeploymentPipeline — code to production as a generic delivery pipeline.
 * No specific CI provider is implied; hosts and network facts sit beneath.
 */
export default function DeploymentPipeline() {
  return (
    <figure className="rounded-panel border border-white/15 bg-white/[0.03] p-5 sm:p-6">
      <Diagram
        steps={deploymentPipeline.steps}
        ariaLabel="Delivery pipeline from code to production"
        tone="dark"
        accentIndexes={[5]}
      />
      <figcaption className="mt-4 border-t border-white/15 pt-4">
        <LogoList
          logos={deploymentPipeline.hosts}
          wordmarks={deploymentPipeline.wordmarks}
          dark
          size={20}
        />
      </figcaption>
    </figure>
  );
}
