'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HomeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="hero-section">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="header-content">
        <div className="hero-text">
          <h2 className="hero-title">
            Hi<span className="text-primary">.</span> I&apos;m <span className="text-primary name-highlight">Emily Castillo</span>
          </h2>
          
          <h5 className="hero-subtitle">Full Stack Web Developer</h5>

          <p className="hero-description">
            Passionate about creating meaningful web experiences that bridge technology and diversity. 
            I specialize in full-stack development with a focus on inclusive design and user-centered solutions.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-buttons">
            <button 
              className="btn btn-primary-filled hero-btn"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-outline hero-btn"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a 
              href="https://github.com/emilycastillox" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/emilycastillox" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:emilycastillox@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
