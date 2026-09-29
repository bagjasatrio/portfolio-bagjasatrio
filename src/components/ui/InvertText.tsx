"use client";

import { useId, type ReactNode } from "react";

interface InvertTextProps {
  children: ReactNode;
  className?: string;
  hoverColor?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
}

/**
 * Splits string content into individual interactive characters.
 * Each character tracked by cursor changes color on hover with smooth transition.
 * Words are preserved in non-breaking inline-blocks to prevent unnatural wrapping.
 * Full sentence preserved via aria-label for screen reader accessibility.
 */
export function InvertText({
  children,
  className = "",
  hoverColor = "hover:text-accent",
  as: Component = "span",
}: InvertTextProps) {
  if (typeof children === "string") {
    const words = children.split(" ");
    return (
      <Component className={className} aria-label={children}>
        {words.map((word, wordIdx) => (
          <span
            key={wordIdx}
            className="inline-block whitespace-nowrap"
            aria-hidden="true"
          >
            {word.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                className={`inline-block transition-colors duration-200 ease-out cursor-default select-none ${hoverColor}`}
              >
                {char}
              </span>
            ))}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Component>
    );
  }

  // Fallback for complex children
  return <Component className={className}>{children}</Component>;
}

/**
 * Helper to turn any raw text string into interactive characters.
 */
export function InteractiveChars({
  text,
  hoverColor = "hover:text-accent",
  className = "",
}: {
  text: string;
  hoverColor?: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className={`inline-block transition-colors duration-200 ease-out cursor-default select-none ${hoverColor}`}
            >
              {char}
            </span>
          ))}
          {wordIdx < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
