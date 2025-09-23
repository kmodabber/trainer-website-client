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
      pricing: [
        { name: 'Single Session', price: '$75', duration: '60 min' },
        { name: '5-Session Package', price: '$350', duration: '60 min each', savings: 'Save $25' },
        { name: '10-Session Package', price: '$650', duration: '60 min each', savings: 'Save $100' }
      ],
      popular: true
    },
    {
      id: 'nutrition-coaching',
      icon: <FaHeart />,
      title: 'Nutrition Coaching',
      description: 'Personalized meal plans and nutrition guidance to complement your fitness journey and achieve optimal results.',
      features: [
        'Personalized meal plans',
        'Macro & calorie guidance',
        'Food diary analysis',
        'Grocery shopping lists',
        'Recipe suggestions',
        'Weekly check-ins'
      ],
      pricing: [
        { name: 'Initial Consultation', price: '$50', duration: '45 min' },
        { name: 'Monthly Plan', price: '$150', duration: '4 weeks' },
        { name: '3-Month Plan', price: '$400', duration: '12 weeks', savings: 'Save $50' }
      ]
    },
    {
      id: 'group-classes',
      icon: <FaUsers />,
      title: 'Group Classes',
      description: 'High-energy group workouts that combine strength, cardio, and flexibility training in a motivating environment.',
      features: [
        'High-intensity interval training',
        'Strength & conditioning',
        'Cardio kickboxing',
        'Yoga & flexibility',
        'Boot camp style workouts',
        'Small group sizes (max 12)'
      ],
      pricing: [
        { name: 'Drop-in Class', price: '$25', duration: '45 min' },
        { name: '10-Class Pass', price: '$200', duration: '45 min each', savings: 'Save $50' },
        { name: 'Unlimited Monthly', price: '$150', duration: 'Unlimited classes' }
      ]
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
      ],
      pricing: [
        { name: 'Basic Plan', price: '$99', duration: 'per month' },
        { name: 'Premium Plan', price: '$149', duration: 'per month' },
        { name: 'Elite Plan', price: '$199', duration: 'per month' }
      ]
    },
    {
      id: 'corporate-wellness',
      icon: <FaBuilding />,
      title: 'Corporate Wellness',
      description: 'Bring fitness and wellness to your workplace with customized programs for teams and organizations.',
      features: [
        'On-site fitness classes',
        'Wellness workshops',
        'Health assessments',
        'Team challenges',
        'Ergonomic assessments',
        'Stress management sessions'
      ],
      pricing: [
        { name: 'Single Workshop', price: '$500', duration: '2 hours' },
        { name: 'Monthly Program', price: '$2,000', duration: '4 sessions' },
        { name: 'Annual Program', price: '$20,000', duration: '48 sessions', savings: 'Save $4,000' }
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
      ],
      pricing: [
        { name: '8-Week Program', price: '$600', duration: '8 weeks' },
        { name: '12-Week Program', price: '$800', duration: '12 weeks' },
        { name: 'Custom Program', price: 'Contact', duration: 'Tailored' }
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

                <div className="service-pricing">
                  <h3>Pricing Options:</h3>
                  <div className="pricing-options">
                    {service.pricing.map((option, optionIndex) => (
                      <div key={optionIndex} className="pricing-option">
                        <div className="pricing-header">
                          <h4>{option.name}</h4>
                          {option.savings && (
                            <span className="savings-badge">{option.savings}</span>
                          )}
                        </div>
                        <div className="pricing-details">
                          <span className="price">{option.price}</span>
                          <span className="duration">{option.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
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
