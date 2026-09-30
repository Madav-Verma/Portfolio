"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { IconArrowUpRight } from "../icons";
import ProviderLogo from "./ProviderLogo";
import type { Certification } from "@/data/certifications";

/**
 * CertificateModal — the full-screen certificate viewer. The image is the
 * dominant visual at full resolution, never cropped. ESC closes,
 * click-outside closes, focus is trapped while open, background scroll is
 * locked. Credential links render only for real URLs.
 */
export default function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
      previousFocus.current?.focus();
    };
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} — ${cert.provider}`}
      onKeyDown={onKeyDown}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(17,17,17,0.92)] p-4 sm:p-8"
    >
      <div
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-[1100px] overflow-hidden rounded-panel bg-white shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <ProviderLogo name={cert.provider} />
            <p className="mt-1 truncate text-[17px] font-bold tracking-tight text-ink sm:text-[20px]">
              {cert.title}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
              {cert.year} · {cert.category}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate viewer"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-btn border border-line text-[18px] font-medium text-ink transition-colors hover:border-ink/40 hover:bg-ivory"
          >
            ×
          </button>
        </div>
        <div className="bg-card-gray p-4 sm:p-8">
          <Image
            src={cert.image}
            alt={`${cert.title} — ${cert.provider} certificate, full resolution`}
            width={900}
            height={695}
            className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-[6px] border border-line/60 bg-white object-contain"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 sm:px-7">
          <p className="text-[13px] text-muted">
            {cert.provider} · {cert.year}
          </p>
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors hover:text-accent"
            >
              Verify credential
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
