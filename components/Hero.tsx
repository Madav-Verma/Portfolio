"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Navbar from "./Navbar";
import HeroServices from "./HeroServices";
import { hero, profile } from "@/data/site";
import {
  IconArrowDown,
  IconArrowRight,
  IconGitHub,
  IconGlobe,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconPin,
} from "./icons";

/**
 * Hero — ONE full-width photographic composition (Layers 1-8).
 * The photograph is the background; copy and the service panel are
 * layered into it — never two separate columns.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* The hero is above the fold, so it deliberately keeps an entrance
       animation that the shared Reveal primitive skips (see Reveal.tsx). It is
       kept deliberately short — no delay, 0.45s, a subtle 0.06s stagger — so
       the H1 and CTAs are readable almost immediately rather than waiting on
       a timeline. If anything goes wrong the failsafe below clears the
       inline styles, so the copy can never be left hidden. */
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-intro]",
        { y: 26, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.06,
        }
      );
    }, el);

    const failsafe = window.setTimeout(() => {
      gsap.set(el.querySelectorAll("[data-hero-intro]"), { clearProps: "all" });
    }, 1600);

    return () => {
      window.clearTimeout(failsafe);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} id="top" className="relative overflow-hidden" aria-label="Introduction">
      {/* Layer 1 — hero photograph.
          Phone  : block above the copy (340/400px).
          Tablet : block above the copy (420px), no text over it.
          Desktop: full-bleed absolute, copy layered into it. */}
      <div className="relative h-[340px] sm:h-[400px] md:h-[420px] lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src="/hero/daksh-hero.jpg"
          alt="Daksh Verma at his desk in a warm home office, working on a laptop"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[62%_35%] md:object-[64%_38%] lg:object-[68%_40%]"
        />
        {/* Layer 2 — art-directed fade: bright calm left, photo lives on the right (desktop); scoped per breakpoint in globals.css */}
        <div className="hero-fade absolute inset-0" aria-hidden="true" />
        {/* Layer 3 — vertical light grade for nav/contact legibility (desktop composition only) */}
        <div className="hero-fade-vertical absolute inset-0 hidden lg:block" aria-hidden="true" />
      </div>

      {/* Layer 4 — navigation */}
      <Navbar />

      {/* Layer 5 — hero copy.
          Phone/tablet: normal flow on ivory, directly under the photograph.
          Desktop: layered into the photograph, vertically centred. */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 md:px-8 md:pb-12 md:pt-10 lg:flex lg:min-h-[660px] lg:flex-col lg:justify-center lg:px-12 lg:pb-10 lg:pt-[96px]">
        <div className="max-w-[640px]">
          <p
            data-hero-intro
            className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1
            data-hero-intro
            className="display-xl mt-3 text-[clamp(46px,4.4vw,58px)]"
          >
            {hero.titleA}
            <br />
            {hero.titleB}{" "}
            <span className="text-accent">{hero.titleAccent}</span>
          </h1>

          <p
            data-hero-intro
            className="mt-4 max-w-[540px] text-[17px] leading-[1.55] text-ink-soft md:text-[19px]"
          >
            {hero.description}
          </p>

          <div data-hero-intro className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={hero.primary.href}
              className="group inline-flex h-12 items-center gap-2 rounded-btn bg-ink px-6 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-accent-deep"
            >
              {hero.primary.label}
              <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondary.href}
              className="group inline-flex h-12 items-center gap-2 rounded-btn border border-ink/25 bg-ivory/70 px-6 text-[15px] font-semibold text-ink backdrop-blur-sm transition-colors duration-300 hover:border-ink/60"
              download
            >
              {hero.secondary.label}
              <IconArrowDown className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <address
            data-hero-intro
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] font-medium not-italic text-ink-soft"
          >
            <span className="inline-flex items-center gap-1.5">
              <IconPin className="h-4 w-4" />
              {profile.location}
            </span>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
              <IconPhone className="h-4 w-4" />
              {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex min-w-0 items-center gap-1.5 break-words transition-colors hover:text-ink">
              <IconMail className="h-4 w-4" />
              {profile.email}
            </a>
            <span className="hidden h-4 w-px bg-ink/20 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-4">
              <a href={profile.linkedin} aria-label="LinkedIn" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                <IconLinkedIn className="h-4 w-4" />
                LinkedIn
              </a>
              <a href={profile.github} aria-label="GitHub" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                <IconGitHub className="h-4 w-4" />
                GitHub
              </a>
              <a href={profile.portfolio} aria-label="Portfolio" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                <IconGlobe className="h-4 w-4" />
                Portfolio
              </a>
            </span>
          </address>
        </div>

        {/* Layers 7-8 — service panel. In normal flow below the copy on phone
            and tablet; over the top-right of the photograph on desktop. */}
        <div data-hero-intro className="mt-10 md:mt-12 lg:absolute lg:right-6 lg:top-[88px] lg:mt-0 lg:w-[232px]">
          <HeroServices />
        </div>
      </div>
    </section>
  );
}
