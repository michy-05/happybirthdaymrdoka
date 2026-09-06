import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import songAsset from "@/assets/every-kind-of-way.m4a.asset.json";

const FULL_VOLUME = 0.7;

/**
 * Target volume per page — the song gently fades out as he nears the end,
 * going silent on the final announcement page.
 */
const VOLUME_BY_PATH: Record<string, number> = {
  "/": FULL_VOLUME,
  "/letter": FULL_VOLUME,
  "/invitation": FULL_VOLUME,
  "/plan": FULL_VOLUME,
  "/dress-code": 0.3,
  "/announcement": 0,
};

/**
 * Plays the birthday song across the whole site.
 * Browsers block autoplay with sound, so the song starts on the very first
 * tap/click/keypress anywhere on the page, then keeps playing while he
 * moves through the pages, fading out as the journey ends.
 */
export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
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
      audio.pause();
    };
  }, []);

  // Smoothly ease the volume toward the target for the current page.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const target = VOLUME_BY_PATH[pathname] ?? FULL_VOLUME;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);

    const durationMs = 4000;
    const startVolume = audio.volume;
    const startTime = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - startTime) / durationMs, 1);
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

    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      fadeRef.current = null;
    };
  }, [pathname]);

  return null;
}
