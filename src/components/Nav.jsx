import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS, PROFILE } from "../data.js";
import { useScrollLock } from "../hooks/useReveal.js";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);
  const [showBar, setShowBar] = useState(false);
  useScrollLock(open);

  const close = () => setOpen(false);

  // Mount gate: the ruler only exists with JS and under no-preference motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      setShowBar(true);
    }
  }, []);

  /* Nav ruler (W6a): 2px accent bar pinned under the nav, scaleX 0→1
     with scroll progress. Own rAF loop — passive scroll listener, one
     transform write per frame, cleanup on unmount. No React state in
     the loop. */
  useEffect(() => {
    if (!showBar) return;
    const bar = barRef.current;
    if (!bar) return;
    let raf = 0;
    let queued = false;
    const update = () => {
      queued = false;
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pos = window.scrollY || el.scrollTop || 0;
      const p = max > 0 ? Math.min(1, Math.max(0, pos / max)) : 0;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      queued = false;
    };
  }, [showBar]);

  // Escape closes the mobile overlay and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.querySelector(".nav__toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      {showBar && (
        <div className="nav__progress" ref={barRef} aria-hidden="true" />
      )}
      <div className="sheet nav__inner">
        <a className="nav__brand" href="#top" onClick={close} aria-label={`${PROFILE.name} — back to top`}>
          <span className="nav__mark" aria-hidden="true">{PROFILE.initials}</span>
          <span className="nav__name">{PROFILE.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="nav__link link-draw" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn nav__cta" href="#contact">
          Get in touch
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__overlay ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="nav__overlay-links">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              style={{ "--d": i }}
              onClick={close}
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__overlay-foot">
          <a className="btn" href="#contact" onClick={close} tabIndex={open ? 0 : -1}>
            Get in touch
          </a>
          <p className="caption">{PROFILE.email}</p>
        </div>
      </div>
    </header>
  );
}
