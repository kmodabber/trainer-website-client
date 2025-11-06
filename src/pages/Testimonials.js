import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaUser, FaCalendarAlt } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  // Testimonials data - static, no loading needed
  const testimonials = [
    {
      id: '1',
      name: 'Doreen Feiz',
      rating: 5,
      comment: 'Khash\'s personal training transformed my approach to fitness completely. His attention to form, personalized programs, and constant motivation helped me achieve goals I never thought possible. The one-on-one sessions are incredibly effective and I\'ve seen remarkable progress in both strength and confidence.',
      service: 'Personal Training',
      date: '2025-09-05',
      verified: true
    },
    {
      id: '2',
      name: 'Sorena Shekarnoosh',
      rating: 5,
      comment: 'Online coaching with Khash has been a game-changer for my fitness journey. Despite being virtual, his sessions feel incredibly personal and effective. He provides detailed feedback, tracks my progress meticulously, and keeps me accountable. The flexibility of online coaching fits perfectly with my busy schedule.',
      service: 'Online Coaching',
      date: '2025-09-05',
      verified: true
    },
    {
      id: '3',
      name: 'Sam Sayari',
      rating: 5,
      comment: 'Khash\'s specialized program for my rugby season was absolutely incredible. He designed a comprehensive training plan that enhanced my performance, speed, and endurance on the field. His understanding of sports-specific training and attention to detail helped me reach peak condition for the season. Highly recommend his specialized programs for any athlete.',
      service: 'Specialized Programs',
      date: '2025-09-05',
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        style={{ 
          color: index < rating ? '#f59e0b' : '#e5e7eb',
          fontSize: '1rem'
        }} 
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  return (
    <div className="testimonials-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="testimonials-hero" style={{ 
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Client Testimonials</h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: '#ffffff', opacity: 1 , textShadow: '0 1px 2px rgba(0,0,0,0.25)'  }}>
              Real stories from real people who have transformed their lives with personalized training and guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="testimonials-stats" style={{ background: '#1f2937', color: 'white', padding: '3rem 0' }}>
        <div className="container">
          <div className="testimonials-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#f59e0b', marginBottom: '0.5rem' }}>
                100+
              </div>
              <div style={{ fontSize: '1.125rem', color: '#e5e7eb', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Happy Clients
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#f59e0b', marginBottom: '0.5rem' }}>
                98%
              </div>
              <div style={{ fontSize: '1.125rem', color: '#e5e7eb', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Satisfaction Rate
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#f59e0b', marginBottom: '0.5rem' }}>
                5.0
              </div>
              <div style={{ fontSize: '1.125rem', color: '#e5e7eb', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Average Rating
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#f59e0b', marginBottom: '0.5rem' }}>
                5+
              </div>
              <div style={{ fontSize: '1.125rem', color: '#e5e7eb', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Years Experience
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-content" style={{ padding: '4rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2>What My Clients Say</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: '#6b7280' }}>
              These transformations speak for themselves. Real results from real people.
            </p>
          </motion.div>

          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#f8fafc',
                  borderRadius: '1rem',
                  padding: '2rem',
                  borderLeft: '4px solid #2563eb',
                  position: 'relative',
                  height: 'fit-content'
                }}
              >
                <FaQuoteLeft style={{ 
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '2rem',
                  color: '#2563eb',
                  opacity: 0.3
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.125rem'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: '#1f2937' }}>{testimonial.name}</h4>
                    <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                      {testimonial.service}
                    </p>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.25rem' }}>
                      {renderStars(testimonial.rating)}
                    </div>
                    {testimonial.verified && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: '#10b981',
                        fontWeight: '500'
                      }}>
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>

                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  color: '#374151',
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.comment}"
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  <FaCalendarAlt />
                  {formatDate(testimonial.date)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta" style={{ 
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '4rem 0'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
              Ready to Join Them?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              marginBottom: '2rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Start your transformation story today. Book your first session and see why hundreds of clients trust Khash with their fitness goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/booking" 
                className="btn btn-primary btn-lg"
                style={{ 
                  backgroundColor: 'white',
                  color: '#f59e0b',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Book Your First Session
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline btn-lg"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: '2px solid white',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
