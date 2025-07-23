import React, { useState, useEffect, useRef } from 'react';
import { HeaderLogo } from '../public/assets/svgs';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsHeaderHidden(true);
        } else {
          setIsHeaderHidden(false);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <header className={isHeaderHidden && !isMenuOpen && !isMobile ? 'hidden-on-scroll' : ''}>
        <a href="#hero" className="header-logo" onClick={() => setIsMenuOpen(false)}>
          <HeaderLogo />
        </a>
        <nav className={isMobile ? 'hidden-on-mobile' : ''}>
          <a href="#about-us">About</a>
          <a href="#team">Team</a>
          <a href="#projects">Projects</a>
          <a href="#tech-stack">Tech</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about-us" onClick={toggleMenu}>About</a>
        <a href="#team" onClick={toggleMenu}>Team</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#tech-stack" onClick={toggleMenu}>Tech</a>
        <a href="#pricing" onClick={toggleMenu}>Pricing</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    </>
  );
};

export default Header;
