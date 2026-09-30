type IconProps = { className?: string };

function Stroke({
  className = "h-5 w-5",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const IconArrowRight = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Stroke>
);

export const IconArrowDown = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M12 5v14" />
    <path d="M6 13l6 6 6-6" />
  </Stroke>
);

export const IconArrowUpRight = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </Stroke>
);

export const IconPin = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </Stroke>
);

export const IconPhone = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </Stroke>
);

export const IconMail = ({ className }: IconProps) => (
  <Stroke className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </Stroke>
);

export const IconGlobe = ({ className }: IconProps) => (
  <Stroke className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
  </Stroke>
);

export const IconSpark = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M12 3l1.9 5.4L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.6L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </Stroke>
);

export const IconCode = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M8 7L3 12l5 5" />
    <path d="M16 7l5 5-5 5" />
  </Stroke>
);

export const IconChart = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M4 20h16" />
    <path d="M7 20v-6" />
    <path d="M12 20V6" />
    <path d="M17 20v-9" />
  </Stroke>
);

export const IconBolt = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
  </Stroke>
);

export const IconLayers = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3.5 13.5L12 18l8.5-4.5" />
  </Stroke>
);

export const IconUsers = ({ className }: IconProps) => (
  <Stroke className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M16 4.7a3.5 3.5 0 010 6.6" />
    <path d="M17.5 14.3c2.2.7 4 2.6 4 5.7" />
  </Stroke>
);

export const IconBox = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
    <path d="M3.5 8.5L12 13l8.5-4.5" />
    <path d="M12 13v8" />
  </Stroke>
);

export const IconGrid = ({ className }: IconProps) => (
  <Stroke className={className}>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" />
  </Stroke>
);

export const IconFolder = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </Stroke>
);

export const IconDatabase = ({ className }: IconProps) => (
  <Stroke className={className}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </Stroke>
);

export const IconMenu = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Stroke>
);

export const IconClose = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </Stroke>
);

export const IconLinkedIn = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const IconGitHub = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
