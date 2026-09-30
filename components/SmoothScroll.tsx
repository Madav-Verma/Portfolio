"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll — Lenis provider synced to GSAP's ticker so ScrollTrigger
 * stays in lock-step with the smoothed scroll. Skipped entirely when the
 * user prefers reduced motion.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    /* Deep links (#projects, #contact, /skills#domain-ai) have to survive
       Lenis taking over the scroller: Lenis writes scrollTop every frame from
       a target it captured at construction, while the browser applies the
       initial `#hash` scroll asynchronously — Lenis wins that race and pins a
       stale position, so compute the destination ourselves and hand Lenis a
       plain number.

       Mirror the browser's fragment scroll exactly:
       elementTop + scrollY - scrollPaddingTop(html) - scrollMarginTop(target).
       Both halves are read from the live cascade rather than hardcoded, so a
       per-target override (e.g. /skills targets clearing the sticky section
       nav via .skills-anchor-scope) lands in precisely the same place here as
       in the reduced-motion and no-JS paths — and globals.css stays the single
       source of truth for the offset.

       Note this must be a number, not `scrollTo(element, { offset })`: the
       element form double-counted the offset (measured 160px instead of 80px
       on a 64px header), because Lenis resolves the element against its own
       internal scroll state rather than the real one. */
    const jumpToHash = () => {
      // If the reader has already scrolled, they have taken over — never yank.
      if (userScrolled) return;
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const rootStyles = getComputedStyle(document.documentElement);
      const scrollPadding =
        parseFloat(rootStyles.scrollPaddingTop) || 0;
      const scrollMargin =
        parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const top = target.getBoundingClientRect().top + window.scrollY;
      lenis.scrollTo(Math.max(0, top - scrollPadding - scrollMargin), {
        immediate: true,
        force: true,
      });
    };

    let userScrolled = false;
    const SCROLL_KEYS = new Set([
      " ",
      "Spacebar",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      "ArrowUp",
      "ArrowDown",
    ]);
    const markUserScroll = (event: Event) => {
      if (event instanceof KeyboardEvent && !SCROLL_KEYS.has(event.key)) return;
      userScrolled = true;
    };
    const onHashChange = () => {
      // The fragment scroll is applied around the same time as the event.
      requestAnimationFrame(() => requestAnimationFrame(jumpToHash));
    };

    window.addEventListener("load", jumpToHash, { once: true });
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", markUserScroll, { passive: true, once: true });
    window.addEventListener("touchstart", markUserScroll, {
      passive: true,
      once: true,
    });
    window.addEventListener("keydown", markUserScroll);
    /* Webfonts and next/image assets settle after `load` and shift the target,
       so re-apply once the layout has had a chance to stabilise. */
    const late = window.setTimeout(jumpToHash, 300);

    return () => {
      window.clearTimeout(late);
      window.removeEventListener("load", jumpToHash);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", markUserScroll);
      window.removeEventListener("touchstart", markUserScroll);
      window.removeEventListener("keydown", markUserScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
