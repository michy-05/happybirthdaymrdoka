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

export function ArrivalGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* door */}
      <rect x="34" y="22" width="52" height="76" rx="4" />
      <path d="M74 22v76" opacity="0.5" />
      <circle cx="66" cy="62" r="3" />
      {/* key */}
      <circle cx="24" cy="52" r="7" />
      <path d="M30 55l14 14M40 66l-4 4M44 62l-4 4" />
    </svg>
  );
}

export function SpeechGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* microphone */}
      <rect x="48" y="18" width="24" height="44" rx="12" />
      <path d="M36 52c0 14 10 22 24 22s24-8 24-22" />
      <path d="M60 74v18M48 96h24" />
      <path d="M54 32h12M54 42h12" opacity="0.5" />
      {/* speech dots */}
      <circle cx="24" cy="26" r="3" />
      <circle cx="96" cy="30" r="3" />
    </svg>
  );
}

export function GiftGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* box */}
      <rect x="26" y="52" width="68" height="46" rx="4" />
      <path d="M60 52v46" />
      {/* lid */}
      <rect x="20" y="40" width="80" height="12" rx="4" />
      {/* bow */}
      <path d="M60 40c-8 0-14-5-14-11 0-5 5-8 10-7 5 1 4 8 4 18Z" />
      <path d="M60 40c8 0 14-5 14-11 0-5-5-8-10-7-5 1-4 8-4 18Z" />
      {/* sparkle */}
      <path d="M96 22v8M92 26h8" />
    </svg>
  );
}

export function DinnerGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* cloche */}
      <path d="M22 76c0-22 17-36 38-36s38 14 38 36" />
      <circle cx="60" cy="32" r="4" />
      {/* plate */}
      <path d="M14 76h92" />
      <path d="M28 90h64" />
      {/* steam */}
      <path d="M44 24c-3-4 3-6 0-10M76 24c-3-4 3-6 0-10" opacity="0.6" />
      {/* candles */}
      <path d="M26 20c2-3 4-5 4-8M94 20c2-3 4-5 4-8" opacity="0.5" />
    </svg>
  );
}

export function ShowGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* stage spotlight */}
      <path d="M60 14v10" />
      <path d="M44 24h32l-6 16H50l-6-16Z" />
      <path d="M50 40 26 96M70 40l24 56" opacity="0.5" />
      {/* stage floor */}
      <path d="M18 96h84" />
      {/* star performer */}
      <path d="M60 62l5 10 11 1-8 8 2 11-10-6-10 6 2-11-8-8 11-1 5-10Z" />
      {/* side stars */}
      <circle cx="28" cy="30" r="2.5" />
      <circle cx="94" cy="34" r="2.5" />
    </svg>
  );
}

