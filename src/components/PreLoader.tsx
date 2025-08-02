import React, { useState } from "react";
import SplitText from "./SplitText";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [exit, setExit] = useState(false);

  const handleTextAnimationComplete = () => {
    setExit(true);
    onComplete(); // Immediately triggers hero animation with no delay
  };

  return (
    <div className={`preloader ${exit ? "exit" : ""}`}>
      <SplitText
        text="Cificap Company"
        className="preloader-text"
        delay={80}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="center"
        onLetterAnimationComplete={handleTextAnimationComplete}
      />
    </div>
  );
};

export default Preloader;
