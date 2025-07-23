import React from 'react';
import Section from './Section';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);   

const Pricing = () => {
  return (
    <Section id="pricing">
      <h2 className="section-title">Flexible Pricing Plans.</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Starter Website</h3>
          {/* Pricing: 40% OFF from $100 to $60, removed "/ project" */}
          <p className="price">
            <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>$100</span>
            $60
            <span style={{ fontSize: '0.8em', color: '#ff4d4d', marginLeft: '0.5rem', fontWeight: 'bold' }}>40% OFF!</span>
          </p>
          <p className="section-text" style={{ opacity: 1, maxWidth: '100%', marginBottom: '1.5rem' }}>A professional, responsive website based on a simple, elegant template.</p>
          <ul>
            <li>Up to 3 Pages</li>
            <li>Simple Template Design</li>
            <li>Responsive Layout</li>
            <li>Contact Form</li>
            <li>1 Revision</li>
          </ul>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
        <div className="pricing-card featured">
          <h3>E-Commerce</h3>
          {/* Pricing: 67% OFF from $303 to $100, removed "/ project" */}
          <p className="price">
            <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>$303</span> {/* Calculated: floor($100 / (1 - 0.67)) */}
            $100
            <span style={{ fontSize: '0.8em', color: '#ff4d4d', marginLeft: '0.5rem', fontWeight: 'bold' }}>67% OFF!</span>
          </p>
          <p className="section-text" style={{ opacity: 1, maxWidth: '100%', marginBottom: '1.5rem' }}>A complete online store with premium design and full product management.</p>
          <ul>
            <li>Up to 10 Pages</li>
            <li>Premium UI/UX</li>
            <li>Full Product CMS</li>
            <li>Payment Gateway</li>
            <li>Chat Support</li>
          </ul>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
        <div className="pricing-card">
          <h3>Custom Premium</h3>
          {/* Pricing: 50% OFF from $600 to $300, maintained "Starts at" */}
          <p className="price">
            <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}> $600</span> {/* Calculated: $300 / (1 - 0.50) */}
             $300
            <span style={{ fontSize: '0.8em', color: '#ff4d4d', marginLeft: '0.5rem', fontWeight: 'bold' }}>50% OFF!</span>
          </p>
          <p className="section-text" style={{ opacity: 1, maxWidth: '100%', marginBottom: '1.5rem' }}>A fully tailored, high-end solution for unique and complex requirements.</p>
          <ul>
            <li>Unlimited Pages</li>
            <li>Fully Tailored Design</li>
            <li>Custom CMS Integration</li>
            <li>Unlimited Revisions</li>
            <li>Priority Support</li>
          </ul>
          <a href="#contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
