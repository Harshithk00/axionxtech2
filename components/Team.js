import React from 'react';
import Section from './Section';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);  

const Team = () => {
  return (
    <Section id="team">
      <h2 className="section-title">Meet the Team.</h2>
      <div className="team-grid">
        <div className="team-card">
          <img src="https://placehold.co/300x300/181818/f5c8bd?text=HK" alt="Team Member" />
          <h3>HARSHIT KUMAR</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-card">
          <img src="https://placehold.co/300x300/181818/f5c8bd?text=SR" alt="Team Member" />
          <h3>SAGAR RAJ</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-card">
          <img src="https://placehold.co/300x300/181818/f5c8bd?text=HM" alt="Team Member" />
          <h3>HARSH MIRGANK</h3>
          <p>Project Manager</p>
        </div>
      </div>
    </Section>
  );
};

export default Team;