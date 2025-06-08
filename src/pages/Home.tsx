import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Truck, 
  Star,
  ChevronDown
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useStore } from '../store/useStore';

const Home: React.FC = () => {
  const { products, setProducts } = useStore();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });

  // Mock products data
  useEffect(() => {
    const mockProducts = [
      {
        id: '1',
        name: 'Cyber Neural Interface',
        price: 299.99,
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Electronics',
        description: 'Advanced neural interface for seamless digital integration',
        inStock: true,
      },
      {
        id: '2',
        name: 'Holographic Display Unit',
        price: 599.99,
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Display',
        description: 'Ultra-high resolution holographic projection system',
        inStock: true,
      },
      {
        id: '3',
        name: 'Quantum Processor',
        price: 899.99,
        image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Hardware',
        description: 'Next-generation quantum computing processor',
        inStock: false,
      },
      {
        id: '4',
        name: 'Bio-Enhancement Kit',
        price: 1299.99,
        image: 'https://images.pexels.com/photos/2599242/pexels-photo-2599242.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Augmentation',
        description: 'Complete biological enhancement and modification kit',
        inStock: true,
      },
    ];
    setProducts(mockProducts);
  }, [setProducts]);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Quantum-powered delivery system ensures instant gratification',
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Military-grade encryption protects your digital identity',
    },
    {
      icon: Truck,
      title: 'Drone Delivery',
      description: 'Autonomous delivery drones bring the future to your door',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest cybernetic enhancements and tech',
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
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={heroInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 neon-text font-cyber"
            animate={{ 
              textShadow: [
                '0 0 10px #00FFFF',
                '0 0 20px #00FFFF, 0 0 30px #00FFFF',
                '0 0 10px #00FFFF'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            WELCOME TO
            <br />
            THE FUTURE
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
            Experience cyberpunk shopping like never before. 
            Cutting-edge tech, neon aesthetics, and quantum-powered commerce.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/shop" className="cyber-button group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/about" className="px-8 py-3 border-2 border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black transition-all duration-300 font-semibold">
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-cyber-blue" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text font-cyber">
              Why Choose CyberStore?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're not just an e-commerce platform. We're your gateway to the cyberpunk future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="cyber-card text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-4 group-hover:bg-cyber-blue/30"
                >
                  <feature.icon className="h-8 w-8 text-cyber-blue" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-cyber-blue">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text font-cyber">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the latest in cybernetic enhancements and futuristic technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="cyber-button">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
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
              Ready to Upgrade Your Reality?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of cyber-enhanced individuals who've already made the leap into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="cyber-button">
                Join the Revolution
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-semibold">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;