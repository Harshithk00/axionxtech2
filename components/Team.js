import React from 'react';
import Section from './Section';

const Team = () => {
  return (
    <Section id="team">
      <h2 className="section-title">Meet the Team.</h2>
      <div className="team-grid">
        <div className="team-card">
          <img src="https://placehold.co/300x300/181818/f5c8bd?text=JD" alt="Team Member" />
          <h3>John Doe</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-card">
          <img src="https://placehold.co/300x300/181818/f5c8bd?text=JS" alt="Team Member" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-card">
          <img src="https://placehold.co/300x300/181818/f5c8bd?text=EM" alt="Team Member" />
          <h3>Emily Marx</h3>
          <p>Project Manager</p>
        </div>
      </div>
    </Section>
  );
};

export default Team;