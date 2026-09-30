import CertReveal from "./CertReveal";
import { learningStatement } from "@/data/certifications";

/**
 * LearningStatement — CENTERED. The page's philosophy line in editorial
 * serif, with its supporting sentence below. Unattributed by design.
 */
export default function LearningStatement() {
  return (
    <section aria-label="Learning philosophy" className="bg-ivory">
      <CertReveal className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 md:py-24 lg:px-12">
        <p className="mx-auto max-w-[760px] font-editorial text-[clamp(28px,3.6vw,46px)] italic leading-[1.15] tracking-tight text-ink text-balance">
          &ldquo;{learningStatement.line}&rdquo;
        </p>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
          {learningStatement.text}
        </p>
      </CertReveal>
    </section>
  );
}
