"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconArrowDown, IconArrowRight } from "../icons";

gsap.registerPlugin(ScrollTrigger);

type DiagramProps = {
  /** ordered node content, rendered as list items */
  steps: React.ReactNode[];
  ariaLabel: string;
  /** "flow" = horizontal on desktop, vertical on mobile; "vertical" = always stacked */
  orientation?: "flow" | "vertical";
  tone?: "light" | "dark";
  /** slow accent dot travelling through the connectors (agentic loop only) */
  pulse?: boolean;
  /** node indexes that carry the subtle blue accent */
  accentIndexes?: number[];
  nodeClassName?: string;
  className?: string;
};

/**
 * Diagram — the single visual language for every architecture flow on
 * /skills. Ordered nodes joined by thin 1px connectors; on scroll enter the
 * nodes fade in sequence and the connectors draw (600–1000ms total, once).
 * Renders fully static when reduced motion is preferred.
 */
export default function Diagram({
  steps,
  ariaLabel,
  orientation = "flow",
  tone = "light",
  pulse = false,
  accentIndexes = [],
  nodeClassName,
  className = "",
}: DiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const vertical = orientation === "vertical";
  const dark = tone === "dark";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Same progressive-enhancement rule as the shared Reveal primitive: the
       nodes and connectors render visible, and the hidden start state is only
       applied once the diagram is confirmed to be below the fold. Landing
       directly on a /skills#domain-* anchor puts the diagram on screen, so it
       is never hidden in the first place. */
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
      tl.fromTo(
        el.querySelectorAll("[data-node]"),
        { y: 12, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.07,
        }
      );
      tl.fromTo(
        el.querySelectorAll("[data-connector]"),
        { autoAlpha: 0, scale: 0.6 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.07,
        },
        0.1
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const nodeTone =
    nodeClassName ??
    (dark
      ? "border-white/15 bg-white/[0.04] text-ivory"
      : "border-ink/15 bg-ivory text-ink");

  return (
    <div ref={ref} className={className}>
      <ol
        aria-label={ariaLabel}
        className={
          vertical
            ? "flex flex-col items-stretch"
            : "flex flex-col items-stretch lg:flex-row lg:items-center"
        }
      >
        {steps.map((step, index) => (
          <li key={index} className="contents">
            <div
              data-node
              className={`flex-1 rounded-lg border px-3 py-3 text-center text-[12.5px] font-bold leading-snug tracking-tight ${nodeTone} ${
                accentIndexes.includes(index)
                  ? dark
                    ? "border-accent/60"
                    : "border-accent/40 bg-card-blue"
                  : ""
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                data-connector
                className={
                  vertical
                    ? "relative flex justify-center py-1.5 text-muted"
                    : "relative flex justify-center py-1.5 text-muted lg:items-center lg:px-1 lg:py-0"
                }
              >
                <span
                  aria-hidden="true"
                  className={
                    vertical
                      ? "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/15"
                      : "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/15 lg:left-0 lg:top-1/2 lg:h-px lg:w-full lg:-translate-y-1/2 lg:translate-x-0"
                  }
                  style={dark ? { backgroundColor: "rgba(255,255,255,0.18)" } : undefined}
                />
                {pulse ? (
                  <span aria-hidden="true" className="skills-pulse-dot" />
                ) : null}
                <IconArrowDown
                  className={`relative h-4 w-4 ${vertical ? "" : "lg:hidden"}`}
                />
                {!vertical && (
                  <IconArrowRight className="relative hidden h-4 w-4 lg:block" />
                )}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
