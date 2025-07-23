import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 960) {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          x: () => -(containerRef.current.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: () => "+=" + (containerRef.current.scrollWidth - window.innerWidth),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      }, mainRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <Section id="projects" className="horizontal-scroll-section" ref={mainRef}>
      <div className="horizontal-container" ref={containerRef}>
        <div className="panel"><img src="/assets/1.png" alt="Project 1 Screenshot" /></div>
        <div className="panel"><img src="/assets/2.png" alt="Project 2 Screenshot" /></div>
        <div className="panel"><img src="/assets/3.png" alt="Project 3 Screenshot" /></div>
      </div>
    </Section>
  );
};

export default Projects;