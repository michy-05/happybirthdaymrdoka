import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Utensils, Camera, Music, Gift, Moon } from "lucide-react";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Our Birthday Plan — Happy Birthday" },
      { name: "description", content: "The perfect birthday plan for the perfect person." },
      { property: "og:title", content: "Our Birthday Plan — Happy Birthday" },
      { property: "og:description", content: "The perfect birthday plan for the perfect person." },
    ],
  }),
  component: PlanPage,
});

const planItems = [
  {
    time: "Morning",
    title: "Breakfast in Bed",
    description: "Start your 25th with your favorite breakfast, coffee, and a slow morning together.",
    icon: Utensils,
  },
  {
    time: "Late Morning",
    title: "Photo Memory Lane",
    description: "A little walk through our favorite memories—printed photos, laughter, and maybe a tear or two.",
    icon: Camera,
  },
  {
    time: "Afternoon",
    title: "Adventure Time",
    description: "A surprise activity I have been planning just for you. Dress comfy and bring your smile.",
    icon: Gift,
  },
  {
    time: "Evening",
    title: "Dinner Date",
    description: "Your favorite restaurant, your favorite dishes, and a toast to the year ahead.",
    icon: Utensils,
  },
  {
    time: "Night",
    title: "Stargazing & Slow Songs",
    description: "A blanket, the sky, a playlist, and us—ending the day exactly how it should be.",
    icon: Music,
  },
  {
    time: "Midnight",
    title: "Wishes & Kisses",
    description: "A quiet moment to make a wish, cut the cake, and remind you how loved you are.",
    icon: Moon,
  },
];

function PlanPage() {
  return (
    <div className="page-bg min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-champagne">
            Made just for you
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-gradient-gold sm:text-5xl">
            Our Birthday Plan
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            A whole day dedicated to celebrating you—because twenty-five only happens once.
          </p>
        </div>

        <div className="space-y-6">
          {planItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex gap-5 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card sm:gap-8 sm:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-gold/20 text-rose-gold ring-1 ring-rose-gold/30">
                  <item.icon size={22} aria-hidden="true" />
                </div>
                {index < planItems.length - 1 && (
                  <div className="hidden h-full w-px bg-border sm:block" />
                )}
              </div>

              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-gold">
                  {item.time}
                </span>
                <h2 className="mt-1 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-md text-lg font-serif italic text-blush">
            “I cannot wait to spend every moment of this day with you.”
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/letter"
              className="inline-flex items-center justify-center rounded-full border border-rose-gold/40 bg-transparent px-6 py-3 text-sm font-semibold text-rose-gold transition-colors hover:bg-rose-gold/10"
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
