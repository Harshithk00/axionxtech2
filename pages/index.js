import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CustomCursor from '../components/CustomCursor';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      gsap.utils.toArray('.section').forEach(section => {
        const title = section.querySelector('.section-title');
        const text = section.querySelector('.section-text');

        if (title) {
          gsap.fromTo(title, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }
          });
        }
        if (text) {
          gsap.fromTo(text, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out',
            scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none none' }
          });
        }
      });

      gsap.fromTo(".team-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: "#team", start: "top 70%", toggleActions: 'play none none none' } });
      gsap.fromTo(".tech-marquee-container", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: "#tech-stack", start: "top 70%", toggleActions: 'play none none none' } });
      gsap.fromTo(".pricing-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: "#pricing", start: "top 70%", toggleActions: 'play none none none' } });
      gsap.fromTo(".contact-form .form-group, .contact-form .cta-button", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: "#contact", start: "top 70%", toggleActions: 'play none none none' } });
    }
  }, [isLoaded]);

  return (
    <>
      <CustomCursor />
      <Preloader onLoaded={() => setIsLoaded(true)} />
      <Header />
      <main>
        <Hero isLoaded={isLoaded} />
        <AboutUs />
        <Team />
        <Projects />
        <TechStack />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}