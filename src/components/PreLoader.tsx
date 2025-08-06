import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch the JSON from public folder
    fetch("/assets/animations/Dolphin Jumping.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));

    const timer = setTimeout(() => {
      onComplete();
    }, 1500); // adjust duration as needed

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!animationData) return null; // Show nothing while loading

  return (
    <div className="preloader">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
};

export default Preloader;
