import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { realWorld } from "@/data/about";

/**
 * RealWorldSoftware — 05 / BUILT FOR REAL USERS. The page's dark chapter:
 * heading + giant "10+" in the body track, the giant "8" with its module
 * labels in the aside. Editorial, not a dashboard.
 */
export default function RealWorldSoftware() {
  return (
    <SectionShell
      id="real-users"
      tone="ink"
      heading={
        <>
          {realWorld.headingA}
          <br />
          {realWorld.headingB}
        </>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-8 text-[clamp(64px,7vw,112px)] font-extrabold leading-none tracking-tight tabular-nums">
            {realWorld.bigNumber}
          </p>
          <p className="mt-3 max-w-[280px] text-[16px] leading-snug text-white/70">
            {realWorld.bigLabel}
          </p>
        </Reveal>
      }
      aside={
        <div className="xl:pt-1">
          <div className="flex items-end gap-5 border-b border-white/15 pb-6">
            <p className="text-[clamp(48px,5vw,80px)] font-extrabold leading-none tracking-tight tabular-nums">
              {realWorld.modulesCount}
            </p>
            <p className="pb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-white/60">
              {realWorld.modulesLabel}
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
            {realWorld.modules.map((module) => (
              <li
                key={module}
                className="border-b border-white/10 pb-3 text-[14.5px] font-medium text-white/80"
              >
                {module}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
