import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { profileSection } from "@/data/about";

/**
 * ProfileSection — heading + statement in the body track,
 * the two supporting paragraphs in the aside, and the serif stance as a
 * centred full-width pull-quote below so the section spans the canvas.
 */
export default function ProfileSection() {
  return (
    <SectionShell
      id="profile"
      tone="white"
      heading={
        <>
          {profileSection.headingA}
          <br />
          {profileSection.headingB}
        </>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[600px] text-[clamp(19px,2vw,25px)] font-medium leading-[1.45] tracking-tight text-balance">
            {profileSection.statement}
          </p>
        </Reveal>
      }
      aside={
        <div className="xl:pt-1">
          <p className="max-w-[420px] text-[15.5px] leading-[1.65] text-ink-soft">
            {profileSection.splitBodyA}
          </p>
          <p className="mt-4 max-w-[420px] text-[15.5px] leading-[1.65] text-ink-soft">
            {profileSection.splitBodyB}
          </p>
        </div>
      }
    >
      <Reveal>
        <p className="mx-auto mt-12 max-w-[760px] text-center font-editorial text-[clamp(24px,2.6vw,34px)] leading-[1.25] md:mt-14">
          &ldquo;{profileSection.splitHeading}&rdquo;
        </p>
      </Reveal>
    </SectionShell>
  );
}
