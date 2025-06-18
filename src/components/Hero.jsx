import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">SHASTRA 2025</h1>
          <p className="hero-subtitle">Innovate • Inspire • Ignite</p>
          <p className="hero-date">📍 Govt. Model Engineering College • July 12-13</p>
          <a href="#register" className="hero-btn">Register Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;