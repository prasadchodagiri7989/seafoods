import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

interface HeroSectionProps {
  animateHero: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ animateHero }) => {
  const [removeRadius, setRemoveRadius] = useState(false);

  useEffect(() => {
    if (animateHero) {
      const timer = setTimeout(() => {
        setRemoveRadius(true);
      }, 1000); // delay to match the slide-up duration
      return () => clearTimeout(timer);
    }
  }, [animateHero]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Hero"
          className={`w-full h-full object-cover hero-slide-up ${
            animateHero ? "translate-y-0" : ""
          } ${removeRadius ? "radius-none" : ""}`}
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Fade-in Content */}
<div
  className={`relative z-20 text-center text-white px-4 hero-fade-in ${
    animateHero ? "show" : ""
  }`}
>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Trusted Seafood Exporter<br />
          <span className="text-secondary">from India</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Over 48 years of excellence in seafood exports from Cochin, Kerala.
          Specializing in premium aquaculture products and marine delicacies.
        </p>
        <Link to="/products">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg"
          >
            Explore Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
