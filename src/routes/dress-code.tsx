import { createFileRoute, Link } from "@tanstack/react-router";
import { Editable } from "@/components/Editable";
import { DressCodeGraphic } from "@/components/BirthdayGraphics";

export const Route = createFileRoute("/dress-code")({
  head: () => ({
    meta: [
      { title: "Dress Code — Birthday Celebration" },
      { name: "description", content: "An editable dress code poster for the birthday celebration." },
      { property: "og:title", content: "Dress Code — Birthday Celebration" },
      { property: "og:description", content: "An editable dress code poster for the birthday celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DressCodePage,
});

const notes = [
  { id: "dc1", label: "Him", value: "Smart Casual" },
  { id: "dc2", label: "Her", value: "Its a surprise" },
  { id: "dc3", label: "PLEASE AVOID", value: "Street wear,\nAnything you cannot dance in" },
  { id: "dc4", label: "\n", value: "\n" },
];

function DressCodePage() {
  return (
    <div className="page-bg min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-6 text-center text-sm text-muted-foreground">{"\n"}</p>

        <div className="letter-paper animate-fade-in-up rounded-2xl p-8 sm:p-12">
          <div className="border border-rose-gold/30 p-6 sm:p-10">
            <div className="text-center">
              <Editable id="dc-kicker" className="text-xs font-medium uppercase tracking-[0.4em] text-champagne">
                What to wear
              </Editable>

              <DressCodeGraphic className="mx-auto mt-6 h-40 w-56 text-rose-gold sm:h-48 sm:w-72" />

              <Editable
                id="dc-title"
                as="h1"
                className="mt-4 font-serif text-4xl font-bold leading-tight text-gradient-gold sm:text-6xl"
              >
                Dress Code
              </Editable>
              <Editable id="dc-subtitle" className="mt-3 font-serif italic text-blush">
                Elegant, warm, and a little romantic
              </Editable>
            </div>

            <div className="my-8 h-px bg-rose-gold/30" />

            <div className="space-y-5">
              {notes.map((n) => (
                <div key={n.id} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <Editable
                    id={`${n.id}-label`}
                    as="span"
                    className="shrink-0 whitespace-pre-wrap text-xs font-semibold uppercase tracking-widest text-rose-gold sm:w-32 sm:pt-1"
                  >
                    {n.label}
                  </Editable>
                  <Editable
                    id={`${n.id}-value`}
                    className="flex-1 whitespace-pre-wrap font-serif text-lg leading-relaxed text-card-foreground"
                  >
                    {n.value}
                  </Editable>
                </div>
              ))}
            </div>

            <div className="my-8 h-px bg-rose-gold/30" />

            <Editable id="dc-footer" className="whitespace-pre-wrap text-center font-serif italic text-muted-foreground">
              {`Whatever you wear, you will still be the best looking one there. 
 Michelle`}
            </Editable>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/plan"
            className="inline-flex items-center justify-center rounded-full border border-rose-gold/40 px-6 py-3 text-sm font-semibold text-rose-gold transition-colors hover:bg-rose-gold/10"
          >
            Back to the plan
          </Link>
          <Link
            to="/announcement"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-rose-gold/20 transition-transform hover:scale-105"
          >
            One last thing
          </Link>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="sparkle" style={{ top: "14%", right: "10%", animationDelay: "1s" }} />
        <span className="sparkle" style={{ bottom: "18%", left: "12%", animationDelay: "3s" }} />
        <span className="sparkle" style={{ top: "52%", left: "6%", animationDelay: "5s" }} />
      </div>
    </div>
  );
}
