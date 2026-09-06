import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import songAsset from "@/assets/every-kind-of-way.m4a.asset.json";

const FULL_VOLUME = 0.7;
const FADE_DURATION_MS = 4000;
const ANNOUNCEMENT_FADE_DELAY_MS = 10000;

/**
 * Plays the birthday song across the whole site.
 * Browsers block autoplay with sound, so the song starts on the very first
 * tap/click/keypress anywhere on the page, then keeps playing while he
 * moves through the pages. On the final announcement page the song stays at
 * full volume for 10 seconds before gently fading to silence.
 */
export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const delayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [blocked, setBlocked] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const audio = new Audio(songAsset.url);
    audio.loop = true;
    audio.volume = FULL_VOLUME;
    audioRef.current = audio;

    const tryPlay = () => {
      audio
        .play()
        .then(() => setBlocked(false))
        .catch(() => setBlocked(true));
    };

    // Try immediately in case autoplay is allowed.
    tryPlay();

    // Otherwise start on his first interaction with the page.
    const unlock = () => {
      tryPlay();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
      audio.pause();
    };
  }, []);

  // Smoothly ease the volume toward the target for the current page.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startFade = (target: number) => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);

      const startVolume = audio.volume;
      const startTime = performance.now();

      const step = (now: number) => {
        const t = Math.min((now - startTime) / FADE_DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        audio.volume = startVolume + (target - startVolume) * eased;
        if (t < 1) {
          fadeRef.current = requestAnimationFrame(step);
        } else {
          fadeRef.current = null;
          if (target === 0) audio.pause();
          else if (audio.paused) audio.play().catch(() => setBlocked(true));
        }
      };
      fadeRef.current = requestAnimationFrame(step);
    };

    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }

    if (pathname === "/announcement") {
      // Let him soak in the final page for 10 seconds before fading out.
      delayTimeoutRef.current = setTimeout(() => {
        startFade(0);
      }, ANNOUNCEMENT_FADE_DELAY_MS);
      // Make sure we're at full volume when the page first opens.
      if (audio.volume !== FULL_VOLUME) startFade(FULL_VOLUME);
      else if (audio.paused) audio.play().catch(() => setBlocked(true));
    } else {
      startFade(FULL_VOLUME);
    }

    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    };
  }, [pathname]);

  return null;
}
