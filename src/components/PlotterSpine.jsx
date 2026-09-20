import { useEffect, useRef, useState } from "react";
import "./PlotterSpine.css";

/* Page-wide plotter spine: one persistent scroll-driven hairline in the
   left sheet gutter with an accent diamond plotter head riding the fill
   tip. Dependency-free on purpose — SystemMap already owns the page's
   single gsap ScrollTrigger, so this uses one passive scroll listener +
   a rAF loop with GPU-only writes (scaleY on the fill, translateY on
   the head). Renders null until mounted so no-JS / SSR never shows a
   stuck bar; returns null on reduced-motion or narrow viewports. */

export default function PlotterSpine() {
  const [ready, setReady] = useState(false);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const headRef = useRef(null);

  /* Mount gate: JS reveals, and reduced-motion / <760px render nothing. */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 759px)").matches) return;
    setReady(true);
  }, []);

  /* Ink-surface detection: hide the spine when the viewport center is over
     a .statement or .footer (both ink-colored surfaces where the spine's
     accent-on-ink contrast is only 2.03:1). Uses IntersectionObserver with
     threshold array to track visibility; when any ink surface intersects the
     viewport center, apply .plotter-spine--on-ink to hide the spine. */
  useEffect(() => {
    if (!ready) return undefined;
    const spine = document.querySelector(".plotter-spine");
    if (!spine) return undefined;

    const inkSurfaces = document.querySelectorAll(".statement, .footer");
    if (inkSurfaces.length === 0) return undefined;

    let onInk = false;

    const updateClass = () => {
      spine.classList.toggle("plotter-spine--on-ink", onInk);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const vh = window.innerHeight;
        const center = vh / 2;
        // Check if any ink surface contains the viewport center
        onInk = Array.from(inkSurfaces).some((surface) => {
          const rect = surface.getBoundingClientRect();
          return rect.top <= center && rect.bottom >= center;
        });
        updateClass();
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    inkSurfaces.forEach((s) => observer.observe(s));

    // Also update on scroll (in case observer fires late)
    const onScroll = () => {
      const vh = window.innerHeight;
      const center = vh / 2;
      onInk = Array.from(inkSurfaces).some((surface) => {
        const rect = surface.getBoundingClientRect();
        return rect.top <= center && rect.bottom >= center;
      });
      updateClass();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ready]);

  /* Scroll loop: one passive listener (wake signal) + continuous rAF
     that recomputes from live values each frame, so resizes and dynamic
     content stay correct with zero extra listeners. At most one paired
     style write per frame, only when progress changed. */
  useEffect(() => {
    if (!ready) return undefined;
    const track = trackRef.current;
    const fill = fillRef.current;
    const head = headRef.current;
    if (!track || !fill || !head) return undefined;

    let dirty = true;
    let last = -1;
    let raf = 0;

    const onScroll = () => {
      dirty = true;
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!dirty) return;
      dirty = false;

      /* Scroll math: p = scrollY / (scrollHeight - innerHeight),
         clamped 0→1; 0 when the page does not scroll. Track height is
         measured live per write; head centre rides the fill tip:
         y = p * trackH - 5 (10px diamond, half offset). */
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (p === last) return;
      last = p;

      const trackH = track.clientHeight;
      const y = p * trackH - 5;
      fill.style.transform = `scaleY(${p})`;
      head.style.transform = `translate(-50%, ${y}px) rotate(45deg)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div className="plotter-spine" aria-hidden="true">
      <div className="plotter-spine__track" ref={trackRef}>
        <div className="plotter-spine__fill" ref={fillRef} />
        <div className="plotter-spine__head" ref={headRef} />
      </div>
    </div>
  );
}
