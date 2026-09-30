import CertReveal from "./CertReveal";
import KnowledgeMap from "./KnowledgeMap";
import {
  IconCode,
  IconChart,
  IconSpark,
  IconUsers,
  IconLayers,
} from "../icons";
import { learningAreas } from "@/data/certifications";

const bandIcons = [IconCode, IconChart, IconSpark, IconUsers, IconLayers];

/**
 * LearningAreas — VISUAL LEFT / TEXT RIGHT. Left: the large typographic
 * "LEARN" with its vertical subject sequence. Right: the five horizontal
 * knowledge bands as thin hairline rows, not cards.
 */
export default function LearningAreas() {
  return (
    <section
      aria-labelledby="learning-areas"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-12">
        <CertReveal>
          <div aria-hidden="true" className="select-none">
            <p className="text-[clamp(56px,7vw,110px)] font-extrabold uppercase leading-[0.9] tracking-tight text-ink">
              {learningAreas.visualWord}
            </p>
            <ul className="mt-5 space-y-2 border-l-2 border-line pl-5">
              {learningAreas.bands.map((band) => (
                <li
                  key={band.n}
                  className="text-[15px] font-semibold uppercase tracking-[0.14em] text-muted"
                >
                  {band.word}
                </li>
              ))}
            </ul>
          </div>
        </CertReveal>

        <div>
          <CertReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {learningAreas.label}
            </p>
            <h2
              id="learning-areas"
              className="mt-4 max-w-[560px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              {learningAreas.headingA}
              <br />
              {learningAreas.headingB}
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
              {learningAreas.text}
            </p>
          </CertReveal>
          <ul className="mt-8 border-t border-line">
            {learningAreas.bands.map((band, index) => {
              const Icon = bandIcons[index];
              return (
                <li key={band.n}>
                  <CertReveal delay={index * 0.04}>
                    <div className="flex items-center gap-4 border-b border-line py-4">
                      <span className="w-8 shrink-0 text-[12px] font-bold tabular-nums text-muted">
                        {band.n}
                      </span>
                      <Icon className="h-5 w-5 shrink-0 text-ink-soft" />
                      <span className="text-[16px] font-semibold tracking-tight text-ink md:text-[18px]">
                        {band.title}
                      </span>
                    </div>
                  </CertReveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <KnowledgeMap />
    </section>
  );
}
