import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CERTIFICATIONS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./CertRail.css";

export default function CertRail() {
  const ref = useReveal();
  const sectionRef = useRef(null);
  const verifiable = CERTIFICATIONS.filter((c) => c.verify).length;

  /* Credential vault scrub (desktop only): the rail pins while vertical
     scroll drives the 14 plates sideways — one continuous plotter move.
     GSAP arrives via dynamic import so first paint never pays for it;
     native swipe/snap stays for touch, small screens, reduced motion and
     no-JS. Everything reverts on unmount via matchMedia cleanup. */
  useLayoutEffect(() => {
    if (window.matchMedia("(max-width: 860px)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let disposed = false;
    let mm = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        mm = gsap.matchMedia();
        mm.add(
          {
            isDesktop: "(min-width: 861px)",
            reduceMotion: "(prefers-reduced-motion: reduce)",
          },
          (context) => {
            if (!context.conditions.isDesktop || context.conditions.reduceMotion) return undefined;
            const section = sectionRef.current;
            const viewport = section?.querySelector(".certs");
            const track = section?.querySelector(".certs__track");
            if (!section || !viewport || !track) return undefined;

            const amount = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
            if (amount() <= 0) return undefined;
            section.classList.add("has-scrub");

            const tween = gsap.to(track, {
              x: () => -amount(),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top+=64",
                end: () => `+=${amount()}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
              },
            });

            const refresh = () => ScrollTrigger.refresh();
            window.addEventListener("load", refresh);
            if (document.fonts?.ready) document.fonts.ready.then(refresh);
            return () => {
              window.removeEventListener("load", refresh);
              section.classList.remove("has-scrub");
              tween.scrollTrigger?.kill();
              tween.kill();
            };
          },
        );
      },
    );

    return () => {
      disposed = true;
      mm?.revert();
    };
  }, []);

  return (
    <section
      className="section"
      id="credentials"
      ref={(el) => {
        ref.current = el;
        sectionRef.current = el;
      }}
      aria-label="Certifications"
    >
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Credentials.</h2>
          <p className="plate-meta">
            <span>{CERTIFICATIONS.length} certifications</span>
            <span>{verifiable} verifiable</span>
            <span>2023 — 2026</span>
          </p>
        </header>
      </div>

      <div
        className="certs sheet"
        data-reveal
        role="group"
        aria-label="Certificate gallery — scrolls horizontally"
        tabIndex={0}
      >
        <div className="certs__track">
        {CERTIFICATIONS.map((c) => {
          const media = (
            <>
              <img src={c.img} alt={`${c.title} certificate`} width="640" height="494" loading="lazy" />
              <figcaption className="certs__caption">
                <span className="certs__title">{c.title}</span>
                <span className="caption">
                  {c.org} · {c.year}
                </span>
              </figcaption>
            </>
          );

          return c.verify ? (
            <a
              key={c.title}
              className="certs__card"
              href={c.verify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {media}
              <span className="certs__verify caption">
                Verify credential
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
              </span>
            </a>
          ) : (
            <div key={c.title} className="certs__card">
              {media}
            </div>
          );
        })}
        </div>
      </div>

      <p className="sheet caption certs__hint">Drag or scroll sideways →</p>
    </section>
  );
}
