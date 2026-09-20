import { useEffect } from "react";

/* Deep links and refreshes land at the top of the page.
 *
 * The browser resolves the URL hash during initial HTML parse, but this is a
 * client-rendered SPA — the target element does not exist yet at that point,
 * so the scroll silently fails. Nav clicks work because the DOM is already
 * there, which is why the bug only shows up on a cold load or an F5.
 *
 * Re-run the scroll once the tree has mounted and layout has settled. The
 * existing `scroll-margin-top` on section[id] handles clearing the fixed nav,
 * and `html { scroll-behavior: smooth }` is honoured when motion is allowed.
 */
export function useHashScroll() {
  useEffect(() => {
    const jump = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ block: "start" });
    };

    // Two frames: one for React's commit, one for fonts/first paint to settle.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(jump);
    });

    window.addEventListener("hashchange", jump);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener("hashchange", jump);
    };
  }, []);
}
