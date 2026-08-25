import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS, PROFILE } from "../data.js";
import { useScrollLock } from "../hooks/useReveal.js";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  useScrollLock(open);

  const close = () => setOpen(false);

  // Scroll-progress hairline at the nav edge (rAF-throttled, passive).
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

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
      <div
        className="nav__progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
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
