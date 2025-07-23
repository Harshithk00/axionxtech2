import React from 'react';
import Section from './Section';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const AboutUs = () => {
  return (
    <Section id="about-us" className="about-us-section">
      <h2 className="section-title">About Us.</h2>
      <p className="section-text">
        AXIONX is not just a team of developers; we are architects of digital experience. We specialize in creating high-end, interactive websites and applications that merge aesthetic design with flawless engineering. Our passion is to push the boundaries of technology to tell compelling stories and build unforgettable digital worlds.
      </p>
    </Section>
  );
};

export default AboutUs; 