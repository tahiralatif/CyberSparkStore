import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Shield
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@cyberstore.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: Phone,
      title: 'Neural Hotline',
      description: 'Direct neural interface support',
      contact: '+1 (555) CYBER-01',
      availability: '24/7 Available'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant messaging with our AI',
      contact: 'Chat Now',
      availability: 'Always Online'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Expert help for installations',
      contact: 'tech@cyberstore.com',
      availability: 'Mon-Fri 9AM-6PM'
    }
  ];

  const officeLocations = [
    {
      city: 'Neo Tokyo',
      address: '2089 Cyber District, Level 47',
      coordinates: 'Sector 7-G',
      timezone: 'JST (UTC+9)'
    },
    {
      city: 'New Angeles',
      address: '1337 Silicon Valley, Building X',
      coordinates: 'Grid 42-A',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'Europa Station',
      address: 'Orbital Platform Alpha-7',
      coordinates: 'Dock Bay 12',
      timezone: 'EST (UTC+1)'
    }
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
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Connect with our cybernetic specialists across multiple dimensions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your preferred method of communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cyber-card text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-6 group-hover:bg-cyber-blue/30"
                >
                  <method.icon className="h-8 w-8 text-cyber-blue" />
                </motion.div>
                <h3 className="text-xl font-semibold text-cyber-blue mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {method.description}
                </p>
                <p className="text-white font-semibold mb-2">
                  {method.contact}
                </p>
                <p className="text-sm text-gray-500">
                  {method.availability}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card"
            >
              <h2 className="text-3xl font-bold neon-text font-cyber mb-8">
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="installation">Installation Service</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue resize-none"
                    placeholder="Describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-button flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Locations */}
              <div className="cyber-card">
                <h3 className="text-2xl font-semibold text-cyber-blue mb-6">
                  Office Locations
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <motion.div
                      key={location.city}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-2 border-cyber-blue pl-4"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {location.city}
                      </h4>
                      <div className="space-y-1 text-gray-400 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-cyber-blue" />
                          <span>{location.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                          </span>
                          <span>{location.coordinates}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-cyber-blue" />
                          <span>{location.timezone}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="cyber-card bg-cyber-blue/10 border-cyber-blue/50"
              >
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-cyber-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-blue mb-2">
                      Secure Communication
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      All communications are encrypted using quantum-resistant algorithms. 
                      Your neural patterns and personal data are protected by military-grade security protocols.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Response Times */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="cyber-card"
              >
                <h3 className="text-xl font-semibold text-cyber-blue mb-4">
                  Response Times
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">General Inquiries:</span>
                    <span className="text-cyber-green">2-4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technical Support:</span>
                    <span className="text-cyber-green">30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Emergency Issues:</span>
                    <span className="text-cyber-green">Immediate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sales Questions:</span>
                    <span className="text-cyber-green">1 hour</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-red-400 font-cyber">
              EMERGENCY SUPPORT
            </h2>
            <p className="text-xl text-gray-300">
              Experiencing critical cybernetic malfunction? Contact our emergency response team immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors">
                Emergency Hotline: 911-CYBER
              </button>
              <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black transition-all duration-300 font-semibold py-4 px-8 rounded-lg">
                Neural Override Protocol
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;