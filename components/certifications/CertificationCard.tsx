import Image from "next/image";
import { IconArrowUpRight } from "../icons";
import ProviderLogo from "./ProviderLogo";
import type { Certification } from "@/data/certifications";

/**
 * CertificationCard — the certificate is the hero: a 4:3 document frame
 * with a neutral background shows the WHOLE certificate (object-contain,
 * never cropped or stretched) whatever its native ratio. Compact metadata
 * below; hover lifts 4px, nudges the image, reveals the credential arrow.
 */
export default function CertificationCard({
  cert,
  featured = false,
  onOpen,
}: {
  cert: Certification;
  featured?: boolean;
  onOpen: (cert: Certification) => void;
}) {
  return (
    <article
      className={`group flex cursor-pointer flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)] ${
        featured ? "lg:col-span-2" : ""
      }`}
      onClick={() => onOpen(cert)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(cert);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open ${cert.title} — ${cert.provider}`}
    >
      <div className="bg-card-gray p-4 sm:p-5">
        <div className="overflow-hidden rounded-[6px] border border-line/60 bg-white">
          <Image
            src={cert.image}
            alt={`${cert.title} — ${cert.provider}`}
            width={900}
            height={695}
            loading="lazy"
            className="aspect-[4/3] w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
        <ProviderLogo name={cert.provider} />
        <h3 className="mt-1.5 text-[19px] font-bold leading-[1.3] tracking-tight text-ink md:text-[21px]">
          {cert.title}
        </h3>
        <p className="mt-2 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
          <span>{cert.year}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink/25" />
          <span className="text-accent">{cert.category}</span>
        </p>
        {cert.credentialUrl ? (
          <p className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            View credential
            <IconArrowUpRight className="h-3.5 w-3.5" />
          </p>
        ) : null}
      </div>
    </article>
  );
}
