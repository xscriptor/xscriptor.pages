"use client";

import { useEffect, useState } from "react";

type Bubble = {
  id: number;
  top: string;
  left: string;
  size: string;
  color: string;
  blur: string;
  opacity: string;
  animationDuration: string;
  delay: string;
};

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateBubble = (id: number): Bubble => ({
  id,
  top: `${getRandom(10, 80)}%`,
  left: `${getRandom(10, 90)}%`,
  size: `${getRandom(40, 100)}px`,
  color: ["bg-yellow-300", "bg-purple-400", "bg-green-300", "bg-pink-400", "bg-blue-400"][getRandom(0, 4)],
  blur: ["blur-md", "blur-lg", "blur-xl"][getRandom(0, 2)],
  opacity: ["opacity-10", "opacity-20", "opacity-30"][getRandom(0, 2)],
  animationDuration: `${getRandom(6, 12)}s`,
  delay: `${getRandom(0, 6)}s`,
});

export default function Burbujas({ count = 12 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(Array.from({ length: count }, (_, i) => generateBubble(i)));
  }, [count]);

  return (
    <div>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} ${bubble.blur} ${bubble.opacity} animate-float pointer-events-none z-0`}
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}
