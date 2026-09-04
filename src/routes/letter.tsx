import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Letter For You — Happy Birthday" },
      { name: "description", content: "A love letter for the birthday boy." },
      { property: "og:title", content: "A Letter For You — Happy Birthday" },
      { property: "og:description", content: "A love letter for the birthday boy." },
    ],
  }),
  component: LetterPage,
});

const DEFAULT_LETTER = `My Love,

Happy 25th Birthday Sthandwa Sam! 
Baby there's so much l want to say to but let me start off by saying thank you. Thank you for being the man that i need, thank you for always looking out for me, thank you for encouraging me to be a better person every single day, for being there for me, for being the reason i have strength to go through any day, for lighting up my days, for your patience, your kindness, your care... for loving me. Thank you for who you are to me Baby.


You are my best friend, my safe space, the love of my life and with you there's never a dull moment, every hug, every laugh, every kiss and moment l get to spent with you is a gift I'll never take for granted.  


As you step into this new chapter of your life I want you to know that I am so proud of the man you are and so excited for the man you are becoming. I promise to stand beside you through every dream, every ambition, every breakthrough and even on days when life gets hard i want to always remember that I'm rooting for you from the sidelines and that I'm always here whenever you need me. For better or for worse, l got you, l got  your back and you can count on me because l know you'll make it, and I'll be right by your side when you do.


l love you so much baby, always and forever.

Happy birthday, my love. Here is to a year as beautiful as you are to me.

Forever yours,
Michelle`;

const STORAGE_KEY = "birthday-letter";

function LetterPage() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved && ref.current) {
      ref.current.innerText = saved;
    }
  }, []);

  const handleInput = () => {
    if (!ref.current) return;
    const value = ref.current.innerText;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
  };

  return (
    <div className="page-bg min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-champagne">
            From my heart to yours
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-gradient-gold sm:text-5xl">
            A Letter For You
          </h1>
        </div>

        <div className={`letter-paper rounded-2xl p-8 sm:p-12 ${mounted ? "animate-fade-in-up" : ""}`}>
          <div
            ref={ref}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            className="min-h-[320px] whitespace-pre-wrap font-serif text-lg leading-relaxed text-card-foreground outline-none sm:text-xl"
            aria-label="Editable love letter"
          >
            {DEFAULT_LETTER}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-sm text-muted-foreground">
             <span>{"\n"}</span>
           <span className="font-serif italic text-rose-gold">{"With all my love\nMrs. M. Doka"}</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/invitation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-rose-gold/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
             Your invitation awaits
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

      {/* Decorative sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="sparkle" style={{ top: "12%", right: "15%", animationDelay: "0.5s" }} />
        <span className="sparkle" style={{ bottom: "25%", left: "10%", animationDelay: "2.5s" }} />
        <span className="sparkle" style={{ top: "55%", right: "8%", animationDelay: "4.5s" }} />
      </div>
    </div>
  );
}
