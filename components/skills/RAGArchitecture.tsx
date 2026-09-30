import Diagram from "./Diagram";
import { ragFlow } from "@/data/skills";

/**
 * RAGArchitecture — the retrieval-grounded pipeline as an engineering
 * document on the dark AI chapter. Horizontal on desktop, vertical on
 * mobile; thin connectors, restrained ink/blue treatment, never
 * futuristic decoration.
 */
export default function RAGArchitecture() {
  return (
    <figure className="rounded-panel border border-white/15 bg-white/[0.03] p-5 sm:p-6">
      <Diagram
        steps={ragFlow.steps}
        ariaLabel="Retrieval-grounded assistant architecture"
        tone="dark"
        accentIndexes={[3, 5, 7]}
      />
      <figcaption className="mt-4 border-t border-white/15 pt-4 text-[13px] leading-relaxed text-white/60">
        {ragFlow.caption}
      </figcaption>
    </figure>
  );
}
