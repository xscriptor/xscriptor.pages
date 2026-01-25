"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./Inicio.json";

export default function LoadingAnimation({ onDone }: { onDone?: () => void }) {
  const ref = useRef<LottieRefCurrentProps | null>(null);
  const [closing, setClosing] = useState(false);

  // Memoriza la función para que sea estable entre renders
  const handleComplete = useCallback(() => {
    setClosing(true);
    // espera la transición CSS y luego avisa al padre
    setTimeout(() => onDone?.(), 250);
  }, [onDone]);

  // Fallback por si onComplete no dispara
  useEffect(() => {
    const t = setTimeout(() => {
      if (!closing) handleComplete();
    }, 4000);
    return () => clearTimeout(t);
  }, [closing, handleComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
                  bg-(--bg) transition-opacity duration-200
                  ${closing ? "opacity-0" : "opacity-100"}`}
      aria-busy="true"
      aria-live="polite"
    >
      <Lottie
        lottieRef={ref}
        animationData={animationData}
        loop={false}
        autoplay
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        onComplete={handleComplete}
      />
    </div>
  );
}
