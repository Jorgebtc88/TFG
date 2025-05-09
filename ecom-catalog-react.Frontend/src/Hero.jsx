import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImg from './assets/Hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={heroImg} alt="Hero" className="hero-bg" />
      <Link to="/hombres" className="hero-link hero-link-hombres">Hombres</Link>
      <Link to="/mujeres" className="hero-link hero-link-mujeres">Mujeres</Link>
    </section>
  );
};

export default Hero; 