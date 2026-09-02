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

function Icon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrivalGraphic({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {/* little house / BnB with a key */}
      <path d="M10 30 32 12l22 18" />
      <path d="M16 30v22h32V30" />
      <path d="M28 52V38h8v14" />
      <path d="M20 36h4M44 36h-4" opacity="0.6" />
      <circle cx="50" cy="20" r="4" />
      <path d="M53 23l6 6M56 26l-2 2" />
    </Icon>
  );
}

export function SpeechGraphic({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {/* microphone */}
      <rect x="26" y="10" width="12" height="24" rx="6" />
      <path d="M20 30a12 12 0 0 0 24 0" />
      <path d="M32 42v10M24 52h16" />
      <path d="M12 18c-2 4-2 10 0 14M52 18c2 4 2 10 0 14" opacity="0.5" />
    </Icon>
  );
}

export function GiftGraphic({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <rect x="10" y="24" width="44" height="30" rx="3" />
      <path d="M8 24h48v10H8z" />
      <path d="M32 24v30" />
      <path d="M32 24c-6 0-12-2-12-8s8-4 12 8c4-12 12-10 12-4s-6 4-12 4Z" />
    </Icon>
  );
}

export function DinnerGraphic({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {/* plate, cutlery, candle */}
      <circle cx="32" cy="36" r="14" />
      <circle cx="32" cy="36" r="8" opacity="0.5" />
      <path d="M8 20v14a4 4 0 0 0 4 4M12 20v18M12 38v14" />
      <path d="M54 20c3 4 3 10 0 14v18" />
      <path d="M32 10c0 4 3 5 3 8" opacity="0.7" />
    </Icon>
  );
}

export function ShowGraphic({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      {/* stage curtains with a star */}
      <path d="M8 10h48" />
      <path d="M12 10c0 14 6 18 6 30-4 4-8 4-10 2V10Z" />
      <path d="M52 10c0 14-6 18-6 30 4 4 8 4 10 2V10Z" />
      <path d="M32 20l3.5 7.5L43 29l-5.5 5.5L39 43l-7-4-7 4 1.5-8.5L21 29l7.5-1.5L32 20Z" />
      <path d="M22 52h20" opacity="0.6" />
    </Icon>
  );
}

