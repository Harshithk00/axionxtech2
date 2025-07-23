import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, button');

    const onMouseMove = e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onMouseOver = () => cursor.classList.add('grow');
    const onMouseLeave = () => cursor.classList.remove('grow');

    window.addEventListener('mousemove', onMouseMove);
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', onMouseOver);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', onMouseOver);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor; 