import Image from "next/image";
import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { IconPin } from "../icons";
import { personalDetail } from "@/data/about";

/**
 * PersonalDetail — the page's quiet personal ending. Location statement
 * in the body track, the small 4:3 crop in the aside so the section
 * reaches the right edge instead of ending mid-canvas.
 */
export default function PersonalDetail() {
  return (
    <SectionShell
      tone="ivory"
      heading={
        <span className="inline-flex items-center gap-2.5">
          <IconPin className="h-7 w-7 shrink-0 text-accent" />
          {personalDetail.textA}
        </span>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-[480px] text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
            {personalDetail.textB}
          </p>
        </Reveal>
      }
      aside={
        <div className="relative aspect-[4/3] w-full max-w-[340px] overflow-hidden rounded-[12px] bg-ivory-deep xl:ml-auto">
          <Image
            src={personalDetail.image}
            alt={personalDetail.imageAlt}
            fill
            sizes="340px"
            className="object-cover object-[30%_60%]"
          />
        </div>
      }
    />
  );
}
