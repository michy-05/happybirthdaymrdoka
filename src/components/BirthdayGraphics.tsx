export function CakeGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* candle flames */}
      <path d="M80 34c0-7 6-9 6-15 3 3 6 7 6 12 0 5-4 9-6 9s-6-2-6-6Z" />
      <path d="M108 34c0-7 6-9 6-15 3 3 6 7 6 12 0 5-4 9-6 9s-6-2-6-6Z" />
      {/* candles */}
      <path d="M86 46v18M114 46v18" />
      <path d="M80 52h12M108 52h12" opacity="0.6" />
      {/* top tier */}
      <path d="M62 92c0-14 17-24 38-24s38 10 38 24v10H62V92Z" />
      <path d="M62 92c6 8 14 4 19 10 5-6 13-6 19 0 6-6 14-6 19 0 5-6 13-2 19-10" />
      {/* middle band */}
      <rect x="50" y="102" width="100" height="34" rx="6" />
      <path d="M50 118h100" opacity="0.45" />
      {/* bottom tier */}
      <rect x="38" y="136" width="124" height="38" rx="8" />
      <path d="M38 152h124" opacity="0.45" />
      {/* plate */}
      <path d="M26 178h148" />
      {/* dots */}
      <circle cx="70" cy="119" r="2" />
      <circle cx="90" cy="119" r="2" />
      <circle cx="110" cy="119" r="2" />
      <circle cx="130" cy="119" r="2" />
      <circle cx="60" cy="155" r="2" />
      <circle cx="85" cy="155" r="2" />
      <circle cx="110" cy="155" r="2" />
      <circle cx="135" cy="155" r="2" />
    </svg>
  );
}

export function DressCodeGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* hanger left */}
      <path d="M60 22c0-5 4-8 8-8s8 3 8 8c0 4-4 6-8 7v5" />
      <path d="M68 34 40 50h56L68 34Z" />
      {/* dress */}
      <path d="M56 50c4 10 4 16 0 24l-14 62c18 8 34 8 52 0l-14-62c-4-8-4-14 0-24" />
      <path d="M46 118c14 6 30 6 44 0" opacity="0.5" />
      {/* hanger right */}
      <path d="M152 22c0-5 4-8 8-8s8 3 8 8c0 4-4 6-8 7v5" />
      <path d="M160 34l-28 16h56l-28-16Z" />
      {/* suit */}
      <path d="M136 50v86h48V50" />
      <path d="M148 50l12 22 12-22" />
      <path d="M160 72v64" opacity="0.5" />
      <path d="M136 60l10 8M184 60l-10 8" opacity="0.5" />
      <circle cx="160" cy="92" r="2" />
      <circle cx="160" cy="108" r="2" />
    </svg>
  );
}

export function AnnouncementGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 160"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* megaphone / party horn */}
      <path d="M40 118 130 44v58L40 118Z" />
      <path d="M40 118c-8-6-10-18-4-26l14-12" opacity="0.7" />
      <path d="M130 52c14 6 22 18 22 30s-8 22-22 26" />
      {/* bursting rays */}
      <path d="M164 46l16-10M170 74h20M164 100l16 10" />
      <circle cx="196" cy="30" r="2.5" />
      <circle cx="206" cy="74" r="2.5" />
      <circle cx="196" cy="120" r="2.5" />
      {/* streamers */}
      <path d="M56 138c8-6 16-6 24 0s16 6 24 0" opacity="0.6" />
    </svg>
  );
}
