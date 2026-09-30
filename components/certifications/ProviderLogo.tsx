/**
 * ProviderLogo — providers are rendered as restrained typographic
 * wordmarks. No generated logos, no low-resolution images: the name in
 * small caps is the identity.
 */
export default function ProviderLogo({ name }: { name: string }) {
  return (
    <span
      aria-label={`Provider: ${name}`}
      className="inline-block max-w-full truncate text-[11px] font-bold uppercase tracking-[0.12em] text-muted"
    >
      {name}
    </span>
  );
}
