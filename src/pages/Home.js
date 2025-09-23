import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaDumbbell, 
  FaHeart, 
  FaUsers, 
  FaTrophy, 
  FaArrowRight,
  FaPlay,
  FaStar
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaDumbbell />,
      title: 'Personal Training',
      description: 'One-on-one customized workout plans designed specifically for your goals and fitness level.',
      price: 'From $75/session'
    },
    {
      icon: <FaHeart />,
      title: 'Nutrition Coaching',
      description: 'Personalized meal plans and nutrition guidance to complement your fitness journey.',
      price: 'From $50/session'
    },
    {
      icon: <FaUsers />,
      title: 'Group Classes',
      description: 'High-energy group workouts that combine strength, cardio, and flexibility training.',
      price: 'From $25/class'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Khash transformed my fitness journey! His personalized approach and motivation helped me achieve results I never thought possible.',
      service: 'Personal Training'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      comment: 'Amazing trainer! Khash knows exactly how to push you to your limits while keeping workouts fun and engaging.',
      service: 'Strength Training'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1>Transform Your Life with Khash</h1>
              <p className="hero-subtitle">
                Professional personal trainer dedicated to helping you achieve your fitness goals. 
                Whether you want to lose weight, build muscle, or improve your overall health, 
                I'm here to guide you every step of the way.
              </p>
              <div className="hero-buttons">
                <Link to="/booking" className="btn btn-secondary btn-lg">
                  Book Your First Session
                  <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg">
                  Learn More About Me
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image"
            >
              <div className="hero-profile-image">
                <img 
                  src="/profilephoto.jpg" 
                  alt="Khash - Professional Personal Trainer"
                  className="profile-photo"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-lg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>My Services</h2>
            <p>Comprehensive fitness solutions tailored to your unique needs and goals</p>
          </motion.div>

          <div className="grid grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
                <Link to="/services" className="btn btn-primary">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link to="/services" className="btn btn-outline btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-lg bg-light">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <h2>Meet Khash</h2>
              <p>
                I'm a certified personal trainer with over 5 years of experience helping 
                clients transform their lives through fitness. My approach combines science-based 
                training methods with personalized attention to ensure you achieve sustainable results.
              </p>
              <p>
                I believe that fitness is not just about looking good, but feeling great and 
                living a healthier, more fulfilling life. Every client is unique, and I create 
                customized programs that fit your lifestyle, goals, and preferences.
              </p>
              <div className="about-features">
                <div className="feature">
                  <FaTrophy className="feature-icon" />
                  <span>Certified Personal Trainer</span>
                </div>
                <div className="feature">
                  <FaHeart className="feature-icon" />
                  <span>Nutrition Specialist</span>
                </div>
                <div className="feature">
                  <FaUsers className="feature-icon" />
                  <span>Group Fitness Instructor</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Read My Full Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-image"
            >
              <div className="home-bottom-image">
                <img 
                  src="/BottomOFHome.JPEG" 
                  alt="Khash bodybuilding stage photo"
                  className="home-bottom-photo"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="grid grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-lg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>What My Clients Say</h2>
            <p>Real results from real people who transformed their lives with my guidance</p>
          </motion.div>

          <div className="grid grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card"
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className="text-gray">{testimonial.service}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p>{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link to="/testimonials" className="btn btn-outline btn-lg">
              Read More Testimonials
            </Link>
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
            className="cta-content"
          >
            <h2 className="cta-title">Ready to Start Your Transformation?</h2>
            <p className="cta-description">
              Join hundreds of satisfied clients who have already transformed their lives. 
              Your journey to a healthier, stronger you starts today.
            </p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn btn-primary btn-lg">
                Book Your First Session
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
