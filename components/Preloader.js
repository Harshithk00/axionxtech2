import React, { useEffect } from 'react';
import { HeaderLogo } from '../public/assets/svgs';
import { gsap } from 'gsap';

const Preloader = ({ onLoaded }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const preloaderTl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onLoaded();
      }
    });

    preloaderTl.to("#preloader svg path", {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to("#preloader svg path", { fill: 'var(--accent-color)', duration: 0.5 });
      }
    }).to("#preloader", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        if (document.getElementById('preloader')) {
          document.getElementById('preloader').style.display = 'none';
        }
      }
    });
  }, [onLoaded]);

  return (
    <div id="preloader">
      <div className="logo-container">
        <HeaderLogo />
      </div>
    </div>
  );
};

export default Preloader;