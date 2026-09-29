"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const QUOTES = [
  "🚀 Achievement unlocked: You found the secret!",
  "💡 \"First, solve the problem. Then, write the code.\" — John Johnson",
  "🎮 ↑↑↓↓←→←→BA — You know the classics!",
  "🤖 AI won't replace you, but someone using AI will.",
  "☕ console.log('Hello from Bagja!');",
];

export function EasterEgg() {
  const [show, setShow] = useState(false);
  const [quote, setQuote] = useState("");

  const trigger = useCallback(() => {
    const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(q);
    setShow(true);
    setTimeout(() => setShow(false), 4000);
  }, []);

  useEffect(() => {
    let pos = 0;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[pos]) {
        pos++;
        if (pos === KONAMI.length) {
          trigger();
          pos = 0;
        }
      } else {
        pos = e.key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trigger]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-2xl bg-accent text-white text-sm font-medium shadow-xl animate-bounce-in"
      style={{
        animation: "bounceIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {quote}
    </div>
  );
}
