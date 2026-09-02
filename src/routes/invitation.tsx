import { createFileRoute, Link } from "@tanstack/react-router";
import { Editable } from "@/components/Editable";
import { CakeGraphic } from "@/components/BirthdayGraphics";

export const Route = createFileRoute("/invitation")({
  head: () => ({
    meta: [
      { title: "Birthday Invitation — You Are Invited" },
      { name: "description", content: "An editable birthday invitation poster with a hand-drawn cake." },
      { property: "og:title", content: "Birthday Invitation — You Are Invited" },
      { property: "og:description", content: "An editable birthday invitation poster with a hand-drawn cake." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvitationPage,
});

const details = [
  { id: "d1", label: "For", value: "My favourite person" },
  { id: "d2", label: "Occasion", value: "His twenty-fifth birthday" },
  { id: "d3", label: "Date", value: "Saturday, the whole day" },
  { id: "d4", label: "Place", value: "Wherever we are, together" },
];

function InvitationPage() {
  return (
    <div className="page-bg min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Tap anything on the invitation to edit it — your changes save automatically.
        </p>

        <div className="letter-paper animate-fade-in-up rounded-2xl p-8 sm:p-12">
          <div className="border border-rose-gold/30 p-6 sm:p-10">
            <div className="text-center">
              <Editable id="inv-kicker" className="text-xs font-medium uppercase tracking-[0.4em] text-champagne">
                You are invited
              </Editable>

              <CakeGraphic className="mx-auto mt-6 h-40 w-40 text-rose-gold sm:h-52 sm:w-52" />

              <Editable
                id="inv-title"
                as="h1"
                className="mt-4 font-serif text-4xl font-bold leading-tight text-gradient-gold sm:text-6xl"
              >
                A Birthday Celebration
              </Editable>
              <Editable id="inv-subtitle" className="mt-3 font-serif italic text-blush">
                In honour of the birthday boy turning twenty-five
              </Editable>
            </div>

            <div className="my-8 h-px bg-rose-gold/30" />

            <div className="space-y-5">
              {details.map((d) => (
                <div key={d.id} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <Editable
                    id={`${d.id}-label`}
                    as="span"
                    className="shrink-0 text-xs font-semibold uppercase tracking-widest text-rose-gold sm:w-32 sm:pt-1"
                  >
                    {d.label}
                  </Editable>
                  <Editable
                    id={`${d.id}-value`}
                    className="flex-1 font-serif text-lg leading-relaxed text-card-foreground"
                  >
                    {d.value}
                  </Editable>
                </div>
              ))}
            </div>

            <div className="my-8 h-px bg-rose-gold/30" />

            <Editable id="inv-footer" className="text-center font-serif italic text-muted-foreground">
              Come as you are — the cake and I will be waiting. — Michelle
            </Editable>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/letter"
            className="inline-flex items-center justify-center rounded-full border border-rose-gold/40 px-6 py-3 text-sm font-semibold text-rose-gold transition-colors hover:bg-rose-gold/10"
          >
            Back to the letter
          </Link>
          <Link
            to="/plan"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-rose-gold/20 transition-transform hover:scale-105"
          >
            Wanna see the plans i have for you?
          </Link>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="sparkle" style={{ top: "12%", left: "10%", animationDelay: "0s" }} />
        <span className="sparkle" style={{ top: "35%", right: "14%", animationDelay: "2s" }} />
        <span className="sparkle" style={{ bottom: "22%", left: "18%", animationDelay: "4s" }} />
      </div>
    </div>
  );
}
