import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close when clicking/tapping outside (works on iOS)
  useEffect(() => {
    function handlePointerDown(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
    { to: '/booking', label: 'Book Session' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <FaDumbbell className="brand-icon" />
          <span>Khash</span>
          <span className="brand-subtitle">Trainer</span>
        </Link>

        <div ref={navRef} className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-cta">
          <Link to="/booking" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
