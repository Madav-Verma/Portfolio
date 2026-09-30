import CertReveal from "./CertReveal";
import { knowledgeMap } from "@/data/certifications";

/**
 * KnowledgeMap — the relationship map between Daksh and the five knowledge
 * areas. Semantic lists, never a diagram image: a centered Daksh node with
 * hairline branches to Software / Data / AI / Business / Systems, each
 * carrying only topics backed by the certification records.
 */
export default function KnowledgeMap() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 md:pb-20 lg:px-12">
      <CertReveal className="flex flex-col items-center">
        <p className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-line bg-ivory text-[15px] font-extrabold tracking-tight text-ink">
          {knowledgeMap.center}
        </p>
        <span aria-hidden="true" className="h-8 w-px bg-line" />
      </CertReveal>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {knowledgeMap.branches.map((branch, index) => (
          <li key={branch.id}>
            <CertReveal delay={index * 0.05}>
              <div className="border-t-2 border-ink pt-4">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                  {branch.label}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {branch.items.map((item) => (
                    <li
                      key={item}
                      className="text-[14.5px] leading-[1.5] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CertReveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
