import React, { useState, useEffect, useRef, useCallback } from "react";

interface TypeWriterProps {
  data: string[];
}

const TypeWriter: React.FC<TypeWriterProps> = ({ data: toRotate }) => {
  const [text, setText] = useState<string>("");
  const unmountedRef = useRef<boolean>(false);
  const loopNumRef = useRef<number>(0);
  const isDeletingRef = useRef<boolean>(false);
  const textRef = useRef<string>("");
  const period = 2000;

  const tick = useCallback(() => {
    if (unmountedRef.current) {
      return;
    }

    const i = loopNumRef.current % toRotate.length;
    const fullTxt = toRotate[i];
    const currentText = textRef.current;

    let newText = "";
    if (isDeletingRef.current) {
      newText = fullTxt.substring(0, currentText.length - 1);
    } else {
      newText = fullTxt.substring(0, currentText.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (isDeletingRef.current) {
      delta /= 2;
    }

    if (!isDeletingRef.current && newText === fullTxt) {
      delta = period;
      isDeletingRef.current = true;
    } else if (isDeletingRef.current && newText === "") {
      isDeletingRef.current = false;
      loopNumRef.current++;
      delta = 500;
    }

    textRef.current = newText;
    setText(newText);

    setTimeout(() => {
      tick();
    }, delta);
  }, [toRotate, period]);

  useEffect(() => {
    unmountedRef.current = false;
    loopNumRef.current = 0;
    isDeletingRef.current = false;
    textRef.current = "";
    tick();

    return () => {
      unmountedRef.current = true;
    };
  }, [tick]);

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-cursor text-[var(--primary)]">|</span>
    </span>
  );
};

export default TypeWriter;
