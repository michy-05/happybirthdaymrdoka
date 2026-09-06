import { useEffect, useRef, useState } from "react";

/**
 * Plays the birthday song across the whole site.
 * Browsers block autoplay with sound, so the song starts on the very first
 * tap/click/keypress anywhere on the page, then keeps playing while he
 * moves through the pages.
 */
export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const audio = new Audio("/every-kind-of-way.mp3");
    audio.loop = true;
    audio.volume = 0.7;
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
      audio.pause();
    };
  }, []);

  return null;
}
