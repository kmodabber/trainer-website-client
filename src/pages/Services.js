import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaDumbbell, 
  FaHeart, 
  FaUsers, 
  FaLaptop, 
  FaBuilding, 
  FaStar,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'personal-training',
      icon: <FaDumbbell />,
      title: 'Personal Training',
      description: 'One-on-one customized workout plans designed specifically for your goals, fitness level, and schedule.',
      features: [
        'Customized workout programs',
        'Progress tracking & assessments',
        'Form correction & technique',
        'Flexible scheduling',
        'Nutrition guidance included',
        'Ongoing support & motivation'
      ],
      popular: true
    },
    {
      id: 'online-coaching',
      icon: <FaLaptop />,
      title: 'Online Coaching',
      description: 'Virtual training and coaching sessions for clients who prefer to work out from home or have busy schedules.',
      features: [
        'Live video sessions',
        'Pre-recorded workouts',
        'Mobile app access',
        'Progress tracking',
        'Weekly check-ins',
        '24/7 chat support'
      ]
    },
    {
      id: 'specialized-programs',
      icon: <FaStar />,
      title: 'Specialized Programs',
      description: 'Targeted programs for specific goals including weight loss, muscle building, sports performance, and rehabilitation.',
      features: [
        'Weight loss programs',
        'Muscle building plans',
        'Sports performance',
        'Post-injury rehab',
        'Senior fitness',
        'Prenatal/postnatal'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-content text-center"
          >
            <h1>My Services</h1>
            <p className="hero-subtitle">
              Comprehensive fitness solutions tailored to your unique needs and goals. 
              From one-on-one training to group classes, I offer a range of services to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`service-detail-card ${service.popular ? 'popular' : ''}`}
              >
                {service.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                </div>

                <div className="service-features">
                  <h3>What's Included:</h3>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <FaCheck className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="service-cta">
                  <Link to="/booking" className="btn btn-primary">
                    Book This Service
                    <FaArrowRight />
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Ask Questions
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <h2>Ready to Get Started?</h2>
            <p>
              Choose the service that best fits your goals and schedule. 
              I'm here to help you achieve the results you want.
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

export default Services;
