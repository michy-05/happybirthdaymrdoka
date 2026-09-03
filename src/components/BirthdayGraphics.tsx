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

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function BnbGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...iconProps}>
      {/* house / BnB */}
      <path d="M10 30 32 12l22 18" />
      <path d="M16 28v24h32V28" />
      {/* door */}
      <path d="M27 52V38h10v14" />
      {/* windows */}
      <rect x="19" y="34" width="6" height="6" rx="1" opacity="0.6" />
      <rect x="39" y="34" width="6" height="6" rx="1" opacity="0.6" />
      {/* heart above door */}
      <path d="M32 24c-2-2.5-5.5-1-5.5 1.5 0 2.5 3.5 4.5 5.5 6 2-1.5 5.5-3.5 5.5-6C37.5 23 34 21.5 32 24Z" />
      {/* key */}
      <circle cx="52" cy="48" r="3.5" />
      <path d="M52 51.5V58M52 55h3" opacity="0.7" />
    </svg>
  );
}

export function SpeechGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...iconProps}>
      {/* microphone */}
      <rect x="26" y="8" width="12" height="22" rx="6" />
      <path d="M18 28c0 8 6 14 14 14s14-6 14-14" />
      <path d="M32 42v10M24 52h16" />
      {/* sound waves */}
      <path d="M50 14c2 2 3 5 3 8s-1 6-3 8" opacity="0.6" />
      <path d="M11 14c-2 2-3 5-3 8s1 6 3 8" opacity="0.6" />
      {/* hearts floating */}
      <path d="M50 40c-1.2-1.5-3.3-.6-3.3.9 0 1.5 2.1 2.7 3.3 3.6 1.2-.9 3.3-2.1 3.3-3.6 0-1.5-2.1-2.4-3.3-.9Z" opacity="0.7" />
    </svg>
  );
}

export function GiftGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...iconProps}>
      {/* box */}
      <rect x="12" y="26" width="40" height="30" rx="3" />
      {/* lid */}
      <path d="M9 26h46" />
      <path d="M12 20h40v6H12z" />
      {/* ribbon */}
      <path d="M32 20v36" />
      <path d="M12 36h40" opacity="0.4" />
      {/* bow */}
      <path d="M32 20c-6 0-9-3.5-9-7 0-2.5 3-4 5.5-2.5C31 12 32 16 32 20Z" />
      <path d="M32 20c6 0 9-3.5 9-7 0-2.5-3-4-5.5-2.5C33 12 32 16 32 20Z" />
      {/* sparkles */}
      <path d="M54 8l1.5 3.5L59 13l-3.5 1.5L54 18l-1.5-3.5L49 13l3.5-1.5L54 8Z" opacity="0.7" />
    </svg>
  );
}

export function DinnerGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...iconProps}>
      {/* cloche */}
      <path d="M10 40c0-12 10-20 22-20s22 8 22 20" />
      <circle cx="32" cy="16" r="2.5" />
      {/* plate */}
      <path d="M6 40h52" />
      <path d="M14 46h36" opacity="0.5" />
      {/* steam */}
      <path d="M26 12c-1.5-2 1.5-3 0-5M32 12c-1.5-2 1.5-3 0-5M38 12c-1.5-2 1.5-3 0-5" opacity="0.6" />
      {/* candle */}
      <path d="M56 26v8" />
      <path d="M56 22c0-2 1.5-2.5 1.5-4 1 1 1.5 2 1.5 3 0 1.5-1.5 2-3 1Z" opacity="0.7" />
    </svg>
  );
}

export function ShowGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...iconProps}>
      {/* stage spotlight */}
      <path d="M32 8 16 52h32L32 8Z" opacity="0.5" />
      {/* star performer */}
      <path d="M32 34l3 6 6.5 1-4.7 4.5 1.1 6.5-5.9-3-5.9 3 1.1-6.5L22.5 41l6.5-1 3-6Z" />
      {/* music notes */}
      <circle cx="12" cy="22" r="2.5" />
      <path d="M14.5 22V12l8-2v9" />
      <circle cx="20" cy="19" r="2.5" />
      {/* sparkle */}
      <path d="M52 30l1.2 2.8 2.8 1.2-2.8 1.2L52 38l-1.2-2.8-2.8-1.2 2.8-1.2L52 30Z" opacity="0.7" />
    </svg>
  );
}
