import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  // Feature flag: set to `true` once email / backend mailer is configured
  const emailEnabled = false;
  const disabledMessage = "Contact form and email functionality are temporarily disabled while email setup is completed. Please call or message via Instagram for now.";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // If email functionality isn't set up yet, short-circuit and show a friendly message
    if (!emailEnabled) {
      setSubmitStatus({ type: 'info', message: disabledMessage });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (604) 618-8524',
      link: 'tel:+16046188524'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'kh.modabber@gmail.com',
      link: 'mailto:kh.modabber@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'West Vancouver',
      link: null
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 4:00 PM' }
  ];

  const services = [
    'Personal Training',
    'Online Coaching',
    'Specialized Programs'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content text-center"
          >
            <h1>Get In Touch</h1>
            <p className="hero-subtitle">
              Ready to start your fitness journey? Have questions about my services? 
              I'm here to help! Reach out and let's discuss how I can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-lg">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form-section"
            >
              <h2>Send Me a Message</h2>
              <p>Fill out the form below and I'll get back to you within 24 hours.</p>
              {!emailEnabled && (
                <div className="temp-disabled-banner" style={{
                  background: '#fff7ed',
                  border: '1px solid #ffe4b5',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  marginBottom: '1rem'
                }}>
                  <strong>Note:</strong> {disabledMessage}
                </div>
              )}
              
              {submitStatus && (
                <div className={`message message-${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      disabled={!emailEnabled}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      disabled={!emailEnabled}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={!emailEnabled}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                      disabled={!emailEnabled}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell me about your fitness goals, questions, or how I can help you..."
                    required
                    disabled={!emailEnabled}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={!emailEnabled || isSubmitting}
                >
                  { !emailEnabled ? (
                    'Contact Temporarily Disabled'
                  ) : isSubmitting ? (
                    <>
                      <span className="loading"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="contact-info-section"
            >
              <h2>Contact Information</h2>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="contact-info-link">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/khashfit/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-lg bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="map-section text-center"
          >
            <h2>Visit My Studio</h2>
            <p>Located in West Vancouver, this fitness studio is easily accessible and equipped with everything you need for an effective workout.</p>
            
            <div className="map-placeholder">
              <FaMapMarkerAlt />
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">Fitness Studio, West Vancouver</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
