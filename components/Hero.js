import React, { useEffect } from 'react';
import { AxiLogoPart, NxLogoPart } from '../public/assets/svgs';
import Globe from './Globe';
import Section from './Section';
import { gsap } from 'gsap';

const Hero = ({ isLoaded }) => {
  useEffect(() => {
    if (isLoaded) {
      gsap.timeline()
        .from("#three-canvas", { scale: 0, duration: 1.5, ease: "power3.out" })
        .from(["#logo-part-1", "#logo-part-2"], { y: 100, opacity: 0, duration: 1.5, ease: "power3.out", stagger: 0.1 }, "-=1.2")
        .to(".hero-subtitle", { opacity: 1, y: -20, duration: 1, ease: "power2.out" }, "-=1");
    }
  }, [isLoaded]);

  return (
    <Section id="hero" className="hero">
      <div className="hero-title-container">
        <div id="logo-part-1" className="hero-title-part">
          <AxiLogoPart />
        </div>
        <div id="three-canvas-container">
          {isLoaded && <Globe />}
        </div>
        <div id="logo-part-2" className="hero-title-part">
          <NxLogoPart />
        </div>
      </div>
      <p className="hero-subtitle">Where Code Becomes Art</p>
    </Section>
  );
};

export default Hero;