"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { IconArrowRight, IconClose, IconMenu } from "./icons";

/** Stable id so the menu button's `aria-controls` always resolves to a real
 *  element, including while the panel is closed. */
const MENU_ID = "mobile-navigation";

/** Focus-trap candidates — same selector the house pattern uses in
 *  CertificateModal. */
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Lenis reads this attribute on the scrolling element and stops handling
 *  wheel/touch input while it is present. */
const LENIS_PREVENT = "data-lenis-prevent";

/**
 * Navbar — Layer 4 of the hero. Transparent over the photograph,
 * turns to opaque warm ivory with a hairline border on scroll.
 * `active` selects the underlined item (defaults to "Home" so the
 * homepage renders exactly as before). `ctaHref` lets sub-pages
 * point the CTA at their own contact section.
 *
 * The inline CTA and the menu button share the `lg` breakpoint: below
 * 1024px only the hamburger shows (the mobile panel carries its own
 * "Let's Connect"), above it the CTA shows and the button is hidden.
 * Keeping both on the same breakpoint is what prevents the duplicate
 * CTA seen at tablet widths.
 *
 * Below lg the menu is a real modal layer rather than a disclosure: it
 * locks body scroll, moves focus to the first link on open, traps Tab,
 * closes on Escape, on backdrop click and on route change, and hands
 * focus back to the menu button on close. The panel stays mounted and
 * is switched with the `hidden` attribute, so `aria-controls` never
 * points at a missing node and the closed links leave the a11y tree.
 *
 * The brand link is route-aware: `#top` on the homepage (where the hero
 * section owns that id), `/` everywhere else — so it never leaves a reader
 * on an inner page holding a meaningless `#top` hash.
 */
export default function Navbar({
  active = "Home",
  ctaHref = "/#contact",
}: {
  active?: string;
  ctaHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const brandHref = pathname === "/" ? "#top" : "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Any navigation closes the menu — including browser back/forward, a hash
  // change, or a hop that never touched a menu link.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While open the menu behaves as a modal dialog: the page underneath is
  // frozen, focus starts on the first link, Tab cycles inside the panel and
  // Escape closes. Tearing it all down on close also restores the original
  // body overflow and returns focus to the menu button.
  useEffect(() => {
    if (!open) return;

    const panel = menuPanelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /* Two locks, because the page can be scrolled two ways here:
       1. Lenis drives documentElement.scrollTop itself, and `body { overflow-x:
          clip }` in globals.css means a body overflow never reaches the
          scrolling element — so locking the body is NOT a scroll lock.
       `data-lenis-prevent` is Lenis's own switch, and per lenis.mjs it is
       matched against the nodes in the wheel event's composed path *up to but
       excluding its rootElement*. So it must go on <body>: <html> is the root
       and is sliced out, and the backdrop is a sibling of the panel, not an
       ancestor of the pointer target. <body> is always in the path, so this
       stops Lenis regardless of what the pointer is over.
       2. `.menu-open` on <html> is CSS overflow:hidden on the real scrolling
          element, which blocks the native wheel/touch and keyboard
          (Space/PageDown) paths that Lenis does not own. It deliberately does
          not use `position: fixed` — that would desync Lenis's internal
          scroll target and make the page jump on release.
       Body overflow is still set and restored verbatim so a non-Lenis page is
       covered too, and so the original style is honoured on close. */
    const root = document.documentElement;
    const body = document.body;
    const hadLenisPrevent = body.hasAttribute(LENIS_PREVENT);
    if (!hadLenisPrevent) body.setAttribute(LENIS_PREVENT, "");
    const hadMenuOpen = root.classList.contains("menu-open");
    if (!hadMenuOpen) root.classList.add("menu-open");

    panel?.querySelector<HTMLElement>("a[href]")?.focus();

    /* `overflow: hidden` blocks native wheel/touch but NOT keyboard scrolling:
       Space/PageDown/Arrow/End still scroll a clipped viewport. Lenis does not
       own key scrolling, so the remaining scroll path is suppressed directly.
       Keys that move focus or are used inside the menu are left alone, and it
       is released on cleanup. */
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
    const blockScrollKeys = (event: KeyboardEvent) => {
      if (!SCROLL_KEYS.has(event.key)) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (panel?.contains(event.target as Node)) return;
      event.preventDefault();
    };
    document.addEventListener("keydown", blockScrollKeys, { passive: false });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.getClientRects().length > 0);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      /* If focus is parked outside the panel (a click on the backdrop, a
         browser shortcut, or the brand link behind the overlay) pull it back
         to the panel rather than letting Tab wander into the dimmed page. */
      if (!panel.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keydown", blockScrollKeys);
      document.body.style.overflow = previousOverflow;
      if (!hadLenisPrevent) body.removeAttribute(LENIS_PREVENT);
      if (!hadMenuOpen) root.classList.remove("menu-open");
      /* The hamburger is `lg:hidden`, so after a resize- or route-driven close
         it may be on-screen but unfocusable, or gone. Only hand focus back
         when the button is actually the right target. */
      const button = menuButtonRef.current;
      if (button && button.getClientRects().length > 0) button.focus();
    };
  }, [open]);

  // The hamburger is hidden at lg, so growing the window to desktop while the
  // menu is open would otherwise strand a scroll-locked page with focus in a
  // display:none panel.
  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    onChange();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-line bg-ivory/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[var(--header-h)] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a
            href={brandHref}
            className="flex items-baseline gap-2"
            aria-label="Daksh Verma — home"
          >
            <span className="text-[19px] font-extrabold tracking-tight">DV</span>
            <span className="text-sm font-semibold">Daksh Verma</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) =>
              link.label === active ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current="page"
                    className="text-[13.5px] font-semibold text-ink underline decoration-accent decoration-2 underline-offset-8"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              className="group hidden h-11 items-center gap-2 rounded-btn bg-ink px-4 text-[13.5px] font-semibold text-white transition-colors duration-300 hover:bg-accent-deep lg:inline-flex"
            >
              Let&rsquo;s Connect
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-ink lg:hidden"
              aria-haspopup="dialog"
              aria-controls={MENU_ID}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </nav>

        {/* No display utility here on purpose: Tailwind's preflight hides
            `[hidden]` at zero specificity, so `block`/`flex` on this element
            would override it and leak the closed menu into view. */}
        <div
          id={MENU_ID}
          ref={menuPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          hidden={!open}
          className={`max-h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain border-t border-line bg-ivory lg:hidden ${
            open ? "mobile-menu-panel" : ""
          }`}
        >
          <nav aria-label="Mobile">
            <ul className="mx-auto max-w-[1440px] space-y-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={link.label === active ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-md px-3 text-[15px] font-medium ${
                      link.label === active ? "text-ink" : "text-ink-soft"
                    } transition-colors hover:bg-ivory-deep hover:text-ink`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center justify-center gap-2 rounded-btn bg-ink text-[15px] font-semibold text-white"
                >
                  Let&rsquo;s Connect
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Dims the page behind the open menu without dimming the header itself.
          Sits above page content (z-40) and below the header (z-50). */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="mobile-menu-backdrop fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 bg-ink/40 lg:hidden"
        />
      )}
    </>
  );
}
