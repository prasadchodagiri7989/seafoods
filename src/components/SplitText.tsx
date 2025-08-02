// src/components/SplitText.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: object;
  to?: object;
  splitType?: "chars" | "words";
  textAlign?: "left" | "center" | "right";
  threshold?: number;
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<Props> = ({
  text,
  className,
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  splitType = "chars",
  textAlign = "center",
  threshold = 0.1,
  rootMargin = "-100px",
  onLetterAnimationComplete,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

// Inside useEffect in SplitText.tsx
useEffect(() => {
  const targets = gsap.utils.toArray(
    textRef.current?.querySelectorAll("span") || []
  );

  const tl = gsap.timeline({
    onComplete: () => {
      if (onLetterAnimationComplete) onLetterAnimationComplete();
    },
  });

  tl.fromTo(
    targets,
    { ...from },
    {
      ...to,
      ease,
      duration,
      stagger: delay / 1000, // delay per letter
    }
  );
}, []);


  const splitContent = () => {
    if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: 6 }}>
          {word}
        </span>
      ));
    }

    return text.split("").map((char, index) => (
      <span key={index} style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={textRef} className={className} style={{ textAlign }}>
      {splitContent()}
    </div>
  );
};

export default SplitText;
