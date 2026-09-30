"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The hidden state has to be applied before the browser paints, otherwise
 * below-the-fold content flashes visible and then jumps. But useLayoutEffect
 * during SSR logs a warning, so fall back to useEffect on the server.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** seconds, stagger unit across a block */
  delay?: number;
  /** px of vertical travel; 20-30 max per brief */
  y?: number;
  /** seconds */
  duration?: number;
  ease?: string;
  /** image variant adds the 0.98 → 1 scale settle */
  image?: boolean;
  /** fraction of the viewport the element must sit below before it may be hidden */
  threshold?: number;
  /** ms after which an on-screen element is force-revealed if it never fired */
  failsafe?: number;
};

/* One-time, module-level: trigger positions go stale once webfonts and
   next/image assets land, which would otherwise leave reveals stuck hidden. */
let bootstrapped = false;
function bootstrapScrollTriggers() {
  if (bootstrapped) return;
  bootstrapped = true;
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", refresh, { once: true });
  document.fonts?.ready?.then(refresh).catch(() => {});
}

/**
 * Reveal — the single scroll-reveal primitive for the whole page.
 * One entrance idiom everywhere: small rise, short fade, power3.out, once.
 *
 * Progressive enhancement is the whole point of this component. The markup
 * renders fully visible, and the hidden start state is only ever applied
 * AFTER all of the following hold:
 *   1. motion is allowed (prefers-reduced-motion is not set),
 *   2. GSAP and ScrollTrigger are actually present,
 *   3. the element is genuinely below the fold.
 * A reader who lands on an anchor, reloads, or arrives while JS is still
 * parsing therefore never sees a blank section — condition 3 is false for
 * anything already on screen, and the failsafe covers the case where the
 * browser jumps to a hash after hydration.
 *
 * The failsafe only ever reveals. It never hides, and it leaves a below-the-fold
 * trigger armed so normal scroll reveals still animate.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  ease = "power3.out",
  image = false,
  threshold = 0.88,
  failsafe = 2500,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* 1. Motion is a preference, not a decoration — honour it absolutely. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* 2. If the animation stack never arrived, stay visible. */
    if (!gsap || !ScrollTrigger) return;
    /* 3. Above the fold, or a deep link already scrolled it into view:
          never hide. Landing on an anchor must show the target. */
    if (el.getBoundingClientRect().top < window.innerHeight * threshold) return;

    bootstrapScrollTriggers();

    let revealed = false;
    let revert: (() => void) | null = null;

    /* Safety net: this element is on screen but still hidden — the hash jump
       landed after hydration, a trigger position went stale, or the tween
       threw. Show it. */
    const ensureVisible = () => {
      if (revealed || !revert) return;
      if (el.getBoundingClientRect().top >= window.innerHeight) return;
      revert();
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, autoAlpha: 0, scale: image ? 0.98 : 1 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start: `top ${threshold * 100}%`,
            once: true,
            onEnter: () => {
              revealed = true;
            },
          },
        }
      );
    }, el);
    revert = () => ctx.revert();

    const timer = window.setTimeout(ensureVisible, failsafe);
    window.addEventListener("load", ensureVisible, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", ensureVisible);
      ctx.revert();
    };
  }, [delay, y, duration, ease, image, threshold, failsafe]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
