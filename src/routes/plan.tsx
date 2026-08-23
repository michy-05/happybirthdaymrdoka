import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Our Birthday Plan — Happy Birthday" },
      { name: "description", content: "An editable birthday plan poster for the perfect person." },
      { property: "og:title", content: "Our Birthday Plan — Happy Birthday" },
      { property: "og:description", content: "An editable birthday plan poster for the perfect person." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanPage,
});

const STORAGE_PREFIX = "birthday-poster:";

function Editable({
  id,
  as: Tag = "p",
  className,
  children,
}: {
  id: string;
  as?: "p" | "h1" | "h2" | "span";
  className?: string;
  children: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_PREFIX + id);
    if (saved !== null && ref.current) ref.current.innerText = saved;
  }, [id]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      contentEditable
      suppressContentEditableWarning
      onInput={() => {
        if (ref.current) window.localStorage.setItem(STORAGE_PREFIX + id, ref.current.innerText);
      }}
      className={`rounded-sm outline-none transition-colors focus:bg-rose-gold/10 ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}

const rows = [
  { id: "r1", time: "Morning", text: "Breakfast in bed & a slow start together" },
  { id: "r2", time: "Late Morning", text: "Photo memory lane — our favourite moments" },
  { id: "r3", time: "Afternoon", text: "A surprise adventure, planned just for you" },
  { id: "r4", time: "Evening", text: "Dinner date at your favourite place" },
  { id: "r5", time: "Night", text: "Stargazing, slow songs, and us" },
  { id: "r6", time: "Midnight", text: "Cake, a wish, and all my love" },
];

function PlanPage() {
  return (
    <div className="page-bg min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Tap anything on the poster to edit it — your changes save automatically.
        </p>

        <div className="letter-paper animate-fade-in-up rounded-2xl p-8 sm:p-12">
          <div className="border border-rose-gold/30 p-6 sm:p-10">
            <div className="text-center">
              <Editable
                id="kicker"
                className="text-xs font-medium uppercase tracking-[0.4em] text-champagne"
              >
                Made just for you
              </Editable>
              <Editable
                id="title"
                as="h1"
                className="mt-4 font-serif text-4xl font-bold leading-tight text-gradient-gold sm:text-6xl"
              >
                Our Birthday Plan
              </Editable>
              <Editable id="subtitle" className="mt-3 font-serif italic text-blush">
                Twenty-five only happens once
              </Editable>
            </div>

            <div className="my-8 h-px bg-rose-gold/30" />

            <div className="space-y-5">
              {rows.map((row) => (
                <div key={row.id} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <Editable
                    id={`${row.id}-time`}
                    as="span"
                    className="shrink-0 text-xs font-semibold uppercase tracking-widest text-rose-gold sm:w-32 sm:pt-1"
                  >
                    {row.time}
                  </Editable>
                  <Editable
                    id={`${row.id}-text`}
                    className="flex-1 font-serif text-lg leading-relaxed text-card-foreground"
                  >
                    {row.text}
                  </Editable>
                </div>
              ))}
            </div>

            <div className="my-8 h-px bg-rose-gold/30" />

            <Editable
              id="footer"
              className="text-center font-serif italic text-muted-foreground"
            >
              I cannot wait to spend every moment of this day with you. — Michelle
            </Editable>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/letter"
            className="inline-flex items-center justify-center rounded-full border border-rose-gold/40 px-6 py-3 text-sm font-semibold text-rose-gold transition-colors hover:bg-rose-gold/10"
          >
            Read the letter again
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-rose-gold/20 transition-transform hover:scale-105"
          >
            <Heart size={18} aria-hidden="true" />
            Back to the start
          </Link>
        </div>
      </div>

      {/* Decorative sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="sparkle" style={{ top: "10%", left: "8%", animationDelay: "0s" }} />
        <span className="sparkle" style={{ top: "30%", right: "12%", animationDelay: "2s" }} />
        <span className="sparkle" style={{ bottom: "20%", right: "20%", animationDelay: "4s" }} />
        <span className="sparkle" style={{ bottom: "35%", left: "15%", animationDelay: "5s" }} />
      </div>
    </div>
  );
}
