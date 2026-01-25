"use client";

import { useEffect, useRef } from "react";

export default function CustomRippleCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const ripple = document.createElement("div");

      ripple.className = "ripple";
      ripple.style.left = `${e.clientX - 5}px`;
      ripple.style.top = `${e.clientY - 5}px`;

      containerRef.current?.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    document.body.style.cursor = "none";
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    ></div>
  );
}
