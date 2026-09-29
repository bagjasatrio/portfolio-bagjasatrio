"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let visible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    let hovering = false;

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, [tabindex]");
      if (isInteractive && !hovering) {
        hovering = true;
        ring.style.transform = "translate(-50%, -50%) scale(1.8)";
        ring.style.borderColor = "var(--color-accent)";
        dot.style.transform = "translate(-50%, -50%) scale(0.5)";
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, [tabindex]");
      if (isInteractive && hovering) {
        hovering = false;
        ring.style.transform = "translate(-50%, -50%) scale(1)";
        ring.style.borderColor = "var(--color-accent-light)";
        dot.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    let raf: number;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    raf = requestAnimationFrame(animate);

    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-accent opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease, opacity 0.2s ease",
          willChange: "left, top, transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed z-[9998] w-8 h-8 rounded-full border-2 border-accent-light opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s ease, border-color 0.2s ease, opacity 0.2s ease",
          willChange: "left, top, transform",
        }}
      />
    </>
  );
}
