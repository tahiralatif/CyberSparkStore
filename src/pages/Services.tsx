import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Shield, 
  Wrench, 
  Zap, 
  Users,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Neural Integration',
      price: '$1,299',
      description: 'Professional installation and calibration of neural interfaces',
      features: [
        'Pre-installation health scan',
        'Surgical-grade precision installation',
        'Neural pathway optimization',
        'Post-integration monitoring',
        '30-day adaptation support'
      ],
      popular: true
    },
    {
      icon: Cpu,
      title: 'Hardware Optimization',
      price: '$599',
      description: 'Performance tuning for all cybernetic components',
      features: [
        'System diagnostics',
        'Performance benchmarking',
        'Software updates',
        'Hardware calibration',
        'Efficiency optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      price: '$899',
      description: 'Advanced cybersecurity for neural and bio-tech systems',
      features: [
        'Quantum encryption setup',
        'Firewall configuration',
        'Intrusion detection',
        'Identity verification',
        'Ongoing security monitoring'
      ]
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      price: '$299',
      description: 'Expert maintenance and repair services',
      features: [
        'Diagnostic scanning',
        'Component replacement',
        'System cleaning',
        'Performance restoration',
        'Warranty coverage'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free initial assessment of your cybernetic needs'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Custom service plan tailored to your requirements'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional execution by certified technicians'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support and optimization services'
    }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Clients Served' },
    { icon: Clock, value: '99.9%', label: 'Success Rate' },
    { icon: Award, value: '24/7', label: 'Support Available' },
    { icon: Zap, value: '< 1hr', label: 'Response Time' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold neon-text font-cyber mb-6">
              CYBER SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Professional cybernetic services by certified technicians. 
              From neural integration to quantum security hardening.
            </p>
            <button className="cyber-button text-lg px-8 py-4">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive cybernetic services for all your enhancement needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`cyber-card relative ${
                  service.popular ? 'border-cyber-pink shadow-neon' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyber-pink text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full">
                    <service.icon className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-cyber-blue">
                      {service.title}
                    </h3>
                    <p className="text-3xl font-bold neon-text">{service.price}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  service.popular 
                    ? 'bg-cyber-pink text-black hover:bg-cyber-pink/80' 
                    : 'cyber-button'
                }`}>
                  Book Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              OUR PROCESS
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How we deliver exceptional cybernetic services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="cyber-card">
                  <div className="text-4xl font-bold neon-text mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-cyber-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-cyber-blue"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              TRUSTED BY THOUSANDS
            </h2>
            <p className="text-xl text-gray-400">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center cyber-card"
              >
                <stat.icon className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold neon-text font-cyber">
              READY TO UPGRADE?
            </h2>
            <p className="text-xl text-gray-300">
              Schedule your consultation today and take the first step towards 
              your cybernetic enhancement journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Book Consultation
              </button>
              <button className="px-8 py-4 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-semibold">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;