import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS, PROFILE } from "../data.js";
import { useScrollLock } from "../hooks/useReveal.js";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  const close = () => setOpen(false);

  return (
    <header className="nav">
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
