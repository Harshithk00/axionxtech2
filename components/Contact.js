import React, { useState } from 'react';
import Section from './Section';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <h2 className="section-title">Have a project in mind?</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <textarea name="message" rows="5" placeholder="Tell us about your project..." required value={form.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="cta-button" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        {status === 'success' && <p style={{ color: 'var(--accent-color)', marginTop: 16 }}>Message sent successfully!</p>}
        {status === 'error' && <p style={{ color: 'red', marginTop: 16 }}>Failed to send message. Please try again.</p>}
      </form>
    </Section>
  );
};

export default Contact; 