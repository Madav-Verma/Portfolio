import Reveal from "../Reveal";

type Tone = "ivory" | "white" | "ink";

const toneClass: Record<Tone, string> = {
  ivory: "bg-ivory",
  white: "border-y border-line bg-white",
  ink: "bg-ink text-ivory",
};

/**
 * SectionShell — the About page's editorial spine. One shared 2-track grid:
 * [640px body | 1fr aside] at xl, stacked below. Body and aside share
 * identical x-origins in every section, which is what makes the page read
 * composed. `intro` renders under the H2 in the body track; `children`
 * spans the full content width below the row.
 */
export default function SectionShell({
  id,
  tone,
  heading,
  intro,
  aside,
  children,
}: {
  id?: string;
  tone: Tone;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className={toneClass[tone]}>
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-8 md:gap-10 xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          <div>
            <Reveal>
              <h2
                id={id}
                className="max-w-[640px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
              >
                {heading}
              </h2>
            </Reveal>
            {intro}
          </div>
          {aside ? <Reveal delay={0.08}>{aside}</Reveal> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
