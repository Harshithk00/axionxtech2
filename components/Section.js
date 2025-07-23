import React, { forwardRef } from 'react';

const Section = forwardRef(({ id, children, className = '' }, ref) => {
  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;