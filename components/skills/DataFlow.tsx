import Diagram from "./Diagram";
import LogoList from "./LogoList";
import { dataFlow } from "@/data/skills";

/**
 * DataFlow — input to dashboard as a clean technical flow. No fake data,
 * no fake charts; the technology labels name the documented tools.
 */
export default function DataFlow() {
  return (
    <figure className="rounded-panel border border-line bg-white p-5 sm:p-6">
      <Diagram
        steps={dataFlow.steps}
        ariaLabel="Data flow from input to dashboard"
        accentIndexes={[1, 2]}
      />
      <figcaption className="mt-4 border-t border-line pt-4">
        <LogoList
          logos={dataFlow.tech}
          wordmarks={dataFlow.wordmarks}
          size={20}
        />
      </figcaption>
    </figure>
  );
}
