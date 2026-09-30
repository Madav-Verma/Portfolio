"use client";

import { useMemo, useState } from "react";
import CertReveal from "./CertReveal";
import CertificationFilters from "./CertificationFilters";
import CertificationSearch from "./CertificationSearch";
import CertificationCard from "./CertificationCard";
import CertificateModal from "./CertificateModal";
import {
  certificationArchive,
  featuredCertification,
  filterCertifications,
  type Certification,
  type CertificationCategory,
} from "@/data/certifications";

/**
 * CertificationGrid — FULL-WIDTH archive. Owns the client state for the
 * whole block: active category, search query and the open modal. Filter +
 * search compose (AND). One featured card spans two columns for editorial
 * hierarchy; the rest hold one.
 */
export default function CertificationGrid() {
  const [category, setCategory] = useState<"All" | CertificationCategory>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Certification | null>(null);

  const results = useMemo(
    () => filterCertifications(category, query),
    [category, query]
  );

  return (
    <section
      aria-labelledby="certification-archive"
      className="bg-ivory"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <CertReveal>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {certificationArchive.label}
          </p>
          <h2
            id="certification-archive"
            className="mt-4 text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
          >
            {certificationArchive.headingA}
            <br />
            {certificationArchive.headingB}
          </h2>
        </CertReveal>

        <CertReveal delay={0.05} className="mt-8 space-y-5">
          <CertificationSearch value={query} onChange={setQuery} />
          <CertificationFilters active={category} onChange={setCategory} />
        </CertReveal>

        {results.length === 0 ? (
          <p className="mt-10 border-t border-line pt-8 text-[16px] text-muted">
            {certificationArchive.emptyText}
          </p>
        ) : (
          <div
            aria-live="polite"
            className="mt-8 grid items-start gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {results.map((cert) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                featured={cert.id === featuredCertification.id}
                onOpen={setOpen}
              />
            ))}
          </div>
        )}
      </div>
      {open ? (
        <CertificateModal cert={open} onClose={() => setOpen(null)} />
      ) : null}
    </section>
  );
}
