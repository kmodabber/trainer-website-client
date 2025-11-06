import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaDumbbell, 
  FaHeart, 
  FaUsers, 
  FaTrophy, 
  FaGraduationCap,
  FaStar,
  FaArrowRight,
  FaPlay
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const certifications = [
    {
      name: 'Certified Personal Trainer',
      organization: 'ISSA (International Sports Sciences Association)',
      year: '2019',
      icon: <FaDumbbell />
    }
  ];

  const achievements = [
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
    { number: '1000+', label: 'Training Sessions' }
  ];

  const values = [
    {
      title: 'Personalized Approach',
      description: 'Every client is unique, and I create customized programs that fit your lifestyle, goals, and preferences.',
      icon: <FaHeart />
    },
    {
      title: 'Science-Based Methods',
      description: 'My training methods are grounded in the latest fitness research and proven techniques for optimal results.',
      icon: <FaGraduationCap />
    },
    {
      title: 'Continuous Support',
      description: 'I\'m here for you every step of the way, providing motivation, guidance, and accountability throughout your journey.',
      icon: <FaUsers />
    },
    {
      title: 'Sustainable Results',
      description: 'I focus on building healthy habits that last a lifetime, not just quick fixes that fade away.',
      icon: <FaStar />
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="about-hero-text"
            >
              <h1>Meet Khash</h1>
              <p className="hero-subtitle">
                Your dedicated personal trainer committed to transforming lives through fitness, 
                nutrition, and unwavering support. Let me share my journey and how I can help you achieve your goals.
              </p>
              <div className="hero-buttons">
                <Link to="/booking" className="btn btn-secondary btn-lg">
                  Start Your Journey
                  <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-hero-image"
            >
              <div className="about-hero-profile-image">
                <img 
                  src="/TopOfAbout.JPG" 
                  alt="Khash - Bodybuilding stage photo"
                  className="about-hero-profile-photo"
                  loading="eager"
                  fetchpriority="high"
                  width="380"
                  height="420"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section-lg">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="story-content"
            >
              <h2>My Story</h2>
              <p>
                My journey in fitness began over 8 years ago when I discovered my passion for helping 
                others achieve their health and wellness goals. What started as a personal interest in 
                staying fit and healthy has evolved into a lifelong mission to empower people to transform 
                their lives through proper training and nutrition.
              </p>
              <p>
                I understand the challenges that come with starting a fitness journey because I've been there. 
                There was a time when I was completely lost in my own fitness journey, feeling out of shape 
                and unsure of where to begin. I experienced the frustration of not knowing where to start, 
                the struggle to stay motivated, and the confusion about what really works. But through dedication 
                and proper guidance, I transformed my own body and mindset.
              </p>
              <p>
                This personal transformation led me to compete in nationals men's physique, where I placed 3rd,  
                an achievement that taught me the power of discipline, proper training, and believing in yourself. 
                This personal experience drives me to provide the guidance and support I wish I had when I started.
              </p>
              <p>
                Today, I'm proud to have helped hundreds of clients achieve remarkable transformations, 
                not just in their physical appearance, but in their confidence, energy levels, and overall 
                quality of life. My approach goes beyond just workouts, I help you build sustainable, 
                healthy habits that last a lifetime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="story-image"
            >
              <div className="about-bottom-image">
                <img 
                  src="/BottomOfAbout.JPEG" 
                  alt="Khash bodybuilding competition photo"
                  className="about-bottom-photo"
                  loading="lazy"
                  width="520"
                  height="auto"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-lg bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>Certifications & Education</h2>
            <p>I'm committed to continuous learning and maintaining the highest standards in fitness training</p>
          </motion.div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="certification-card"
              >
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p className="cert-organization">{cert.organization}</p>
                <p className="cert-year">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-lg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>My Values & Approach</h2>
            <p>The principles that guide every training session and client interaction</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="stats">
        <div className="container">
          <div className="grid grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <div className="stat-number">{achievement.number}</div>
                <div className="stat-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="section-lg bg-light">
        <div className="container">
          <div className="philosophy-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="philosophy-content"
            >
              <h2>My Training Philosophy</h2>
              <p>
                I believe that fitness is not just about looking good – it's about feeling great, 
                having energy, and living a healthier, more fulfilling life. My philosophy centers 
                around three core principles:
              </p>
              
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <h4>1. Individualized Approach</h4>
                  <p>
                    Every person is unique, with different goals, starting points, and preferences. 
                    I create personalized programs that work for your specific situation and lifestyle.
                  </p>
                </div>
                
                <div className="philosophy-point">
                  <h4>2. Progressive Overload</h4>
                  <p>
                    Sustainable progress comes from gradually increasing the challenge while ensuring 
                    proper form and recovery. I guide you through this process safely and effectively.
                  </p>
                </div>
                
                <div className="philosophy-point">
                  <h4>3. Holistic Wellness</h4>
                  <p>
                    True fitness encompasses physical strength, mental resilience, and emotional well-being. 
                    I address all aspects to help you achieve comprehensive health improvements.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="philosophy-image"
            >
              <Link to="/testimonials" className="philosophy-placeholder" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <FaTrophy />
                <p>Success Stories</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content text-center"
          >
            <h2>Ready to Start Your Transformation?</h2>
            <p>
              Join the hundreds of clients who have already transformed their lives with my guidance. 
              Your journey to a healthier, stronger you starts today.
            </p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn btn-primary btn-lg">
                Book Your First Session
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
