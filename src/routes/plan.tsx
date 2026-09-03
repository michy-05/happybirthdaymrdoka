import { createFileRoute, Link } from "@tanstack/react-router";
import { Editable } from "@/components/Editable";
import {
  ArrivalGraphic,
  SpeechGraphic,
  GiftGraphic,
  DinnerGraphic,
  ShowGraphic,
} from "@/components/BirthdayGraphics";

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

const rows = [
  { id: "r1", time: "First", text: "Arrival at the BnB — you, walking into the surprise", Graphic: ArrivalGraphic },
  { id: "r2", time: "Then", text: "A birthday speech from me to you", Graphic: SpeechGraphic },
  { id: "r3", time: "Next", text: "The gift reveal — something special, just for you", Graphic: GiftGraphic },
  { id: "r4", time: "After", text: "Birthday dinner, made to celebrate you", Graphic: DinnerGraphic },
  { id: "r5", time: "Finally", text: "A little show, put together just for him", Graphic: ShowGraphic },
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

            <div className="space-y-8">
              {rows.map((row) => (
                <div key={row.id} className="flex items-center gap-5">
                  <row.Graphic className="h-16 w-16 shrink-0 text-rose-gold sm:h-20 sm:w-20" />
                  <div className="flex-1">
                    <Editable
                      id={`${row.id}-time`}
                      as="span"
                      className="text-xs font-semibold uppercase tracking-widest text-rose-gold"
                    >
                      {row.time}
                    </Editable>
                    <Editable
                      id={`${row.id}-text`}
                      className="mt-1 font-serif text-lg leading-relaxed text-card-foreground"
                    >
                      {row.text}
                    </Editable>
                  </div>
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
            to="/dress-code"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-rose-gold/20 transition-transform hover:scale-105"
          >
            Continue to the dress code
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
