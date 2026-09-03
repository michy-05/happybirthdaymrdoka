import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Editable } from "@/components/Editable";
import { AnnouncementGraphic } from "@/components/BirthdayGraphics";

export const Route = createFileRoute("/announcement")({
  head: () => ({
    meta: [
      { title: "One Last Announcement — Happy Birthday" },
      { name: "description", content: "An editable final announcement to close the birthday surprise." },
      { property: "og:title", content: "One Last Announcement — Happy Birthday" },
      { property: "og:description", content: "An editable final announcement to close the birthday surprise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AnnouncementPage,
});

function AnnouncementPage() {
  return (
    <div className="page-bg min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-6 text-center text-sm text-muted-foreground">Tap anything to e</p>

        <div className="letter-paper animate-fade-in-up rounded-2xl p-8 sm:p-12">
          <div className="border border-rose-gold/30 p-6 sm:p-10 text-center">
            <Editable id="an-kicker" className="text-xs font-medium uppercase tracking-[0.4em] text-champagne">
              An announcement
            </Editable>

            <AnnouncementGraphic className="mx-auto mt-6 h-36 w-52 text-rose-gold sm:h-44 sm:w-64" />

            <Editable
              id="an-title"
              as="h1"
              className="mt-4 font-serif text-4xl font-bold leading-tight text-gradient-gold sm:text-6xl"
            >
              And One More Thing
            </Editable>

            <div className="my-8 h-px bg-rose-gold/30" />

            <Editable
              id="an-body"
              className="mx-auto max-w-md whitespace-pre-wrap font-serif text-lg leading-relaxed text-card-foreground"
            >
              {`Write your surprise here — the news, the gift, the little secret you have been keeping all week.

Whatever it is, it comes wrapped in all the love I have for you.`}
            </Editable>

            <div className="my-8 h-px bg-rose-gold/30" />

            <Editable id="an-signoff" className="font-serif italic text-blush">
              Happy twenty-fifth, my love. — Michelle
            </Editable>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/dress-code"
            className="inline-flex items-center justify-center rounded-full border border-rose-gold/40 px-6 py-3 text-sm font-semibold text-rose-gold transition-colors hover:bg-rose-gold/10"
          >
            Back to the dress code
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

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="sparkle" style={{ top: "16%", left: "14%", animationDelay: "0.5s" }} />
        <span className="sparkle" style={{ top: "40%", right: "12%", animationDelay: "2.5s" }} />
        <span className="sparkle" style={{ bottom: "20%", right: "22%", animationDelay: "4.5s" }} />
      </div>
    </div>
  );
}
