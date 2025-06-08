import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Users, 
  Award, 
  Globe,
  Target,
  Eye,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: Award, value: '99.9%', label: 'Uptime' },
    { icon: Globe, value: '150+', label: 'Countries' },
    { icon: Zap, value: '1M+', label: 'Transactions' },
  ];

  const team = [
    {
      name: 'Alex Voss',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Visionary leader with 15+ years in cybernetic technologies.'
    },
    {
      name: 'Maya Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Neural interface expert and quantum computing pioneer.'
    },
    {
      name: 'Kai Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Cyberpunk aesthetic specialist and UX visionary.'
    },
    {
      name: 'Zara Kim',
      role: 'Security Chief',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Blockchain security expert and data protection advocate.'
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible in cybernetic commerce.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open-source ethics and clear communication in all our dealings.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a network of cyber-enhanced individuals and visionaries.'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold neon-text font-cyber mb-6">
              ABOUT CYBERSTORE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're not just an e-commerce platform. We're pioneers of the digital revolution, 
              bridging the gap between human potential and technological possibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold neon-text font-cyber">
                OUR MISSION
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                To democratize access to cutting-edge cybernetic technologies and create 
                a marketplace where the future is available today. We believe in empowering 
                individuals to transcend their biological limitations through technology.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Founded in 2089 by a collective of cyber-enhanced visionaries, CyberStore 
                has grown from a underground tech collective to the galaxy's premier 
                destination for neural enhancements, quantum devices, and bio-augmentations.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cyber-card p-8 text-center"
            >
              <Zap className="h-20 w-20 text-cyber-blue mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-semibold text-cyber-blue mb-4">
                Powering the Future
              </h3>
              <p className="text-gray-400">
                Every product we offer is tested in our quantum labs and 
                certified for seamless human-machine integration.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              BY THE NUMBERS
            </h2>
            <p className="text-xl text-gray-400">
              Our impact on the cybernetic community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              CORE VALUES
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="cyber-card text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-6 group-hover:bg-cyber-blue/30"
                >
                  <value.icon className="h-8 w-8 text-cyber-blue" />
                </motion.div>
                <h3 className="text-xl font-semibold text-cyber-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text font-cyber mb-4">
              MEET THE TEAM
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The cyber-enhanced minds behind CyberStore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cyber-card text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-cyber-blue/30 group-hover:border-cyber-blue transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold text-cyber-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-cyber-pink text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.bio}
                </p>
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
              JOIN THE EVOLUTION
            </h2>
            <p className="text-xl text-gray-300">
              Ready to enhance your reality? Start your cybernetic journey today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-lg px-8 py-4"
            >
              Explore Products
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;