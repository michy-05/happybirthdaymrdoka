import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Confetti } from "@/components/Confetti";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Love — 25" },
      { name: "description", content: "A birthday count-up for the love of my life." },
      { property: "og:title", content: "Happy Birthday, My Love — 25" },
      { property: "og:description", content: "A birthday count-up for the love of my life." },
    ],
  }),
  component: WelcomePage,
});

const COUNT_TARGET = 25;

// Delay per step: starts moderate, speeds up through the middle, then slows down as we reach 25.
function stepDelay(index: number, totalSteps: number) {
  const progress = index / totalSteps;
  return 190 - 140 * Math.sin(progress * Math.PI);
}

function WelcomePage() {
  const [phase, setPhase] = useState<"countdown" | "age" | "message">("countdown");
  const [count, setCount] = useState(1);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (phase !== "countdown") return;

    if (count < COUNT_TARGET) {
      const timer = setTimeout(() => setCount((c) => c + 1), stepDelay(count - 1, COUNT_TARGET - 1));
      return () => clearTimeout(timer);
    }

    // Confetti blows out of the number 25 the moment it lands.
    setConfetti(true);
    const hold = setTimeout(() => setPhase("age"), 900);
    return () => clearTimeout(hold);
  }, [phase, count]);

  useEffect(() => {
    if (phase !== "age") return;
    const timer = setTimeout(() => setPhase("message"), 1800);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="page-bg flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="relative z-10 w-full max-w-2xl">
        {phase === "countdown" && (
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-champagne">
              Counting up to you
            </p>
            <div
              key={count}
              className="animate-count-bounce font-serif text-9xl font-bold text-rose-gold sm:text-[12rem]"
              aria-live="polite"
            >
              {count}
            </div>
          </div>
        )}

        {phase === "age" && (
          <div className="animate-fade-in-scale animate-fade-out font-serif text-9xl font-bold text-rose-gold sm:text-[12rem]">
            25
          </div>
        )}

        {phase === "message" && (
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl font-bold leading-tight text-gradient-gold sm:text-7xl">
              Happy Birthday
              <br />
              My Love
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
              25 looks beautiful on you. I made this little surprise for the most amazing man I know.
            </p>
            <div className="mt-10">
              <Link
                to="/letter"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-rose-gold/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Let's go
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Decorative sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="sparkle" style={{ top: "15%", left: "12%", animationDelay: "0s" }} />
        <span className="sparkle" style={{ top: "25%", right: "18%", animationDelay: "1s" }} />
        <span className="sparkle" style={{ top: "65%", left: "20%", animationDelay: "2s" }} />
        <span className="sparkle" style={{ bottom: "20%", right: "25%", animationDelay: "3s" }} />
        <span className="sparkle" style={{ top: "45%", left: "8%", animationDelay: "4s" }} />
        <span className="sparkle" style={{ bottom: "30%", left: "55%", animationDelay: "5s" }} />
      </div>

      <Confetti active={confetti} originX={0.5} originY={0.35} particleCount={220} />
    </div>
  );
}
