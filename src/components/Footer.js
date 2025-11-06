import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDumbbell, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaDumbbell className="logo-icon" />
              <span>Khash</span>
              <span className="logo-subtitle">Trainer</span>
            </Link>
            <p>
              Transform your life with personalized fitness training. 
              Professional guidance for your health and wellness journey.
            </p>
            <div className="social-links">
            <a href="https://www.instagram.com/khashfit/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
            </a> 
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/booking">Book Session</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services#personal-training">Personal Training</Link></li>
              <li><Link to="/services#online-coaching">Online Coaching</Link></li>
              <li><Link to="/services#specialized-programs">Specialized Programs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+1 (604) 618-8524</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">kh.modabber@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">West Vancouver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Khash Trainer. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
