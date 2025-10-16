'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isToggled, setIsToggled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="wrapper" className={isToggled ? 'toggled' : ''}>
      {/* Side Navigation */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link href="#">
              <Image 
                src="/images/emilyc.jpg" 
                alt="Emily Castillo" 
                width={150} 
                height={150}
                className="rounded-full"
              />
            </Link>
          </li>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a 
              className="menu-item page-scroll" 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a 
              className="menu-item page-scroll" 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <a 
              className="menu-item page-scroll" 
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
            >
              Portfolio
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a 
              className="menu-item page-scroll" 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
          <li className="menu-footer">
            <a href="/docs/Castillo, Emily Resume 22.pdf" target="_blank" rel="noopener noreferrer">
              <h6>
                <i className="lnr lnr-download"></i>
                Download Resume
              </h6>
            </a>
          </li>
        </ul>
      </div>
      {/* / Side Navigation */}

      {/* Content */}
      <div id="page-content-wrapper" className="header">
        <div className="container-fluid">
          {/* Header */}
          <div id="top" data-toggle="top"></div>
          <a 
            href="#menu-toggle" 
            id="menu-toggle"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            <i className="lnr lnr-menu"></i>
          </a>
          
          {children}
          
          {/* Scroll to top */}
          <a 
            href="#top" 
            className={`scroll-to-top page-scroll ${showScrollTop ? 'is-visible' : 'is-hidden'}`}
            data-nav-status="toggle"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <i className="fa fa-angle-up"></i>
          </a>
          {/* / Scroll to top */}
        </div>
        {/* / container-fluid */}
      </div>
      {/* / page-content-wrapper */}
    </div>
  );
}
