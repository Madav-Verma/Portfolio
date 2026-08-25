import { useEffect, useRef } from "react";

/**
 * Observes [data-reveal] descendants and flips them to [data-revealed]
 * once they enter the viewport. Re-runs when `deps` change so filtered
 * / expanded content is picked up. No scroll listeners; one IO.
 */
export function useReveal(deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const rootEl = ref.current;
    if (!rootEl) return undefined;

    const targets = rootEl.querySelectorAll("[data-reveal]:not([data-revealed])");
    if (targets.length === 0) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/**
 * Locks body scroll while an overlay (mobile nav) is open.
 */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
