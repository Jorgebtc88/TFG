import React from 'react';
import './Hero.css';
import heroImg from './assets/Hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={heroImg} alt="Hero" className="hero-bg" />
      <a href="#hombres" className="hero-link hero-link-hombres">Hombres</a>
      <a href="#mujeres" className="hero-link hero-link-mujeres">Mujeres</a>
    </section>
  );
};

export default Hero; 