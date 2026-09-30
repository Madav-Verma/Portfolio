import Image from "next/image";
import Navbar from "../Navbar";
import Reveal from "../Reveal";
import { IconPin } from "../icons";
import { aboutHero } from "@/data/about";
import { profile } from "@/data/site";

/**
 * AboutHero — compact editorial introduction (NOT a second full-screen hero).
 * Two columns: label + display heading + role + intro on the left,
 * a tall 4:5 editorial crop of the same photograph on the right with a
 * small handwritten annotation. ~520px tall on desktop.
 */
export default function AboutHero() {
  return (
    <section aria-label="About introduction" className="relative bg-ivory">
      <Navbar active="About" ctaHref="#contact" />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-14 pt-28 sm:px-8 md:pt-32 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14 lg:px-12 lg:pb-16">
        <Reveal>
          <h1 className="mt-4 max-w-[560px] text-[clamp(44px,5vw,72px)] font-extrabold leading-[1.0] tracking-tight text-balance">
            {aboutHero.headingA}
            <br />
            {aboutHero.headingB}
          </h1>
          <p className="mt-5 max-w-[540px] text-[18px] font-semibold leading-[1.5] md:text-[19px]">
            {aboutHero.role}
          </p>
          <p className="mt-4 max-w-[560px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
            {aboutHero.intro}
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] font-semibold text-muted">
            <span className="inline-flex items-center gap-1.5">
              <IconPin className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
            <span aria-hidden="true" className="h-3.5 w-px bg-ink/20" />
            <span>2+ products live</span>
            <span aria-hidden="true" className="h-3.5 w-px bg-ink/20" />
            <span>10+ team members on the ERP daily</span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/5] max-h-[400px] w-full overflow-hidden rounded-[14px] bg-ivory-deep">
              <Image
                src={aboutHero.image}
                alt={aboutHero.imageAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[74%_28%]"
              />
            </div>
            <figcaption
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 left-4 -rotate-[5deg] select-none"
            >
              <p className="font-hand text-[27px] font-semibold leading-[1.0] text-ink">
                {aboutHero.annotation[0]}
                <br />
                {aboutHero.annotation[1]} {aboutHero.annotation[2]}
              </p>
              <svg
                className="ml-2 mt-1 h-[34px] w-[64px]"
                viewBox="0 0 64 34"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M4 4 C 22 6, 40 12, 54 26" />
                <path d="M48 22 L 55 27 L 49 32" />
              </svg>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
