// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import CustomCursor from '../components/CustomCursor';
// import Preloader from '../components/Preloader';
// import Header from '../components/Header';
// import Hero from '../components/Hero';
// import AboutUs from '../components/AboutUs';
// import Team from '../components/Team';
// import Projects from '../components/Projects';
// import TechStack from '../components/TechStack';
// import Pricing from '../components/Pricing';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   const aboutUsRef = useRef(null);
//   const teamRef = useRef(null);
//   const techStackRef = useRef(null);
//   const pricingRef = useRef(null);
//   const contactRef = useRef(null);

//   // useEffect(() => {
//   //   if (isLoaded) {
//   //     const sections = [aboutUsRef, teamRef, techStackRef, pricingRef, contactRef];
//   //     gsap.utils.toArray('.section').forEach(section => {
//   //       const title = section.querySelector('.section-title');
//   //       const text = section.querySelector('.section-text');

//   //       if (title) {
//   //         gsap.fromTo(title, { opacity: 0, y: 50 }, {
//   //           opacity: 1, y: 0, duration: 1, ease: 'power3.out',
//   //           scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }
//   //         });
//   //       }
//   //       if (text) {
//   //         gsap.fromTo(text, { opacity: 0, y: 50 }, {
//   //           opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out',
//   //           scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none none' }
//   //         });
//   //       }
//   //     });

//   //     gsap.fromTo(".team-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: "#team", start: "top 70%", toggleActions: 'play none none none' } });
//   //     gsap.fromTo(".tech-marquee-container", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: "#tech-stack", start: "top 70%", toggleActions: 'play none none none' } });
//   //     gsap.fromTo(".pricing-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: "#pricing", start: "top 70%", toggleActions: 'play none none none' } });
//   //     gsap.fromTo(".contact-form .form-group, .contact-form .cta-button", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: "#contact", start: "top 70%", toggleActions: 'play none none none' } });
//   //   }
//   // }, [isLoaded]);

//   useEffect(() => {
//     if (isLoaded) {
//       // --- Animate common section titles and text using refs ---
//       const sectionsToAnimate = [
//         { ref: aboutUsRef },
//         { ref: teamRef },
//         { ref: techStackRef },
//         { ref: pricingRef },
//         { ref: contactRef },
//       ];

//       sectionsToAnimate.forEach(({ ref }) => {
//         if (ref.current) {
//           const title = ref.current.querySelector('.section-title');
//           const text = ref.current.querySelector('.section-text');

//           if (title) {
//             gsap.fromTo(title, { opacity: 0, y: 50 }, {
//               opacity: 1, y: 0, duration: 1, ease: 'power3.out',
//               scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }
//             });
//           }
//           if (text) {
//             gsap.fromTo(text, { opacity: 0, y: 50 }, {
//               opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out',
//               scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none none' }
//             });
//           }
//         }
//       });

//       // --- Animate component-specific elements using refs and querySelectorAll ---
//       if (teamRef.current) {
//         gsap.fromTo(teamRef.current.querySelectorAll(".team-card"), 
//           { y: 50, opacity: 0 }, 
//           { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: teamRef.current, start: "top 70%", toggleActions: 'play none none none' } }
//         );
//       }
      
//       if (techStackRef.current) {
//         gsap.fromTo(techStackRef.current.querySelector(".tech-marquee-container"), 
//           { y: 50, opacity: 0 }, 
//           { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: techStackRef.current, start: "top 70%", toggleActions: 'play none none none' } }
//         );
//       }
      
//       if (pricingRef.current) {
//         gsap.fromTo(pricingRef.current.querySelectorAll(".pricing-card"), 
//           { y: 50, opacity: 0 }, 
//           { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: pricingRef.current, start: "top 70%", toggleActions: 'play none none none' } }
//         );
//       }

//       if (contactRef.current) {
//         gsap.fromTo(contactRef.current.querySelectorAll(".form-group, .cta-button"), 
//           { y: 50, opacity: 0 }, 
//           { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: contactRef.current, start: "top 70%", toggleActions: 'play none none none' } }
//         );
//       }
//     }
//   }, [isLoaded]);

//   return (
//     // <>
//     //   <CustomCursor />
//     //   <Preloader onLoaded={() => setIsLoaded(true)} />
//     //   <Header />
//     //   <main>
//     //     <Hero isLoaded={isLoaded} />
//     //     <AboutUs />
//     //     <Team />
//     //     <Projects />
//     //     <TechStack />
//     //     <Pricing />
//     //     <Contact />
//     //   </main>
//     //   <Footer />
//     // </>
//     <>
//       <CustomCursor />
//       <Preloader onLoaded={() => setIsLoaded(true)} />
//       <Header />
//       <main>
//         <Hero isLoaded={isLoaded} />
//         {/* Pass the refs to the components */}
//         <div ref={aboutUsRef}><AboutUs /></div>
//         <div ref={teamRef}><Team /></div>
//         <Projects />
//         <div ref={techStackRef}><TechStack /></div>
//         <div ref={pricingRef}><Pricing /></div>
//         <div ref={contactRef}><Contact /></div>
//       </main>
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
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

  // Create refs for the sections that contain animations
  const aboutUsRef = useRef(null);
  const teamRef = useRef(null);
  const techStackRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      // --- Animate common section titles and text using refs ---
      const sectionsToAnimate = [
        { ref: aboutUsRef },
        { ref: teamRef },
        { ref: techStackRef },
        { ref: pricingRef },
        { ref: contactRef },
      ];

      sectionsToAnimate.forEach(({ ref }) => {
        if (ref.current) {
          const title = ref.current.querySelector('.section-title');
          const text = ref.current.querySelector('.section-text');

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
        }
      });

      // --- Animate component-specific elements using refs and querySelectorAll ---
      if (teamRef.current) {
        gsap.fromTo(teamRef.current.querySelectorAll(".team-card"), 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: teamRef.current, start: "top 70%", toggleActions: 'play none none none' } }
        );
      }
      
      if (techStackRef.current) {
        gsap.fromTo(techStackRef.current.querySelector(".tech-marquee-container"), 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: techStackRef.current, start: "top 70%", toggleActions: 'play none none none' } }
        );
      }
      
      if (pricingRef.current) {
        gsap.fromTo(pricingRef.current.querySelectorAll(".pricing-card"), 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: pricingRef.current, start: "top 70%", toggleActions: 'play none none none' } }
        );
      }

      if (contactRef.current) {
        gsap.fromTo(contactRef.current.querySelectorAll(".form-group, .cta-button"), 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: contactRef.current, start: "top 70%", toggleActions: 'play none none none' } }
        );
      }
    }
  }, [isLoaded]);

  return (
    <>
      <CustomCursor />
      <Preloader onLoaded={() => setIsLoaded(true)} />
      <Header />
      <main>
        <Hero isLoaded={isLoaded} />
        {/* Wrap components in a div and attach the ref */}
        <div ref={aboutUsRef}><AboutUs /></div>
        <div ref={teamRef}><Team /></div>
        <Projects />
        <div ref={techStackRef}><TechStack /></div>
        <div ref={pricingRef}><Pricing /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </>
  );
}