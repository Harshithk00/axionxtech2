import React, { forwardRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);  

const Section = forwardRef(({ id, children, className = '' }, ref) => {
  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;