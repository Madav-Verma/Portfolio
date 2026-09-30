import { profile } from "@/data/site";
import { IconGitHub, IconLinkedIn } from "./icons";

/** Minimal footer — identity, two links, copyright. Nothing unnecessary. */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-7 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="font-medium text-ink-soft">
          {profile.name} · {profile.role} · {profile.location}
        </p>
        <p className="flex items-center gap-4">
          <a href={profile.linkedin} aria-label="LinkedIn" className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-ink">
            <IconLinkedIn className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={profile.github} aria-label="GitHub" className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-ink">
            <IconGitHub className="h-4 w-4" />
            GitHub
          </a>
          <span aria-hidden="true" className="h-3.5 w-px bg-ink/20" />
          <span>© {year} {profile.name}</span>
        </p>
      </div>
    </footer>
  );
}
