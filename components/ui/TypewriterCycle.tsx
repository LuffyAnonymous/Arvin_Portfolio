"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const TYPE_MS = 45;
const DELETE_MS = 30;
const HOLD_MS = 1500;

type Phase = "typing" | "holding" | "deleting";

export function TypewriterCycle({ words }: { words: string[] }) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (reducedMotion) return;
    const word = words[index];

    if (phase === "typing") {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), TYPE_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(word.slice(0, text.length - 1)), DELETE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }, 0);
    return () => clearTimeout(t);
  }, [phase, text, index, words, reducedMotion]);

  if (reducedMotion) {
    return <span>{words[0]}</span>;
  }

  return (
    <span className="inline-flex items-center">
      <span aria-hidden="true">
        {text}
        <span
          className="cursor-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent-400 align-middle"
        />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
