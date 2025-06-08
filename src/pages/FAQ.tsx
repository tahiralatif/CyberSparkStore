import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is CyberStore?',
          answer: 'CyberStore is the premier marketplace for cybernetic enhancements, neural interfaces, and futuristic technology. We specialize in cutting-edge bio-augmentation devices and quantum computing systems designed to enhance human capabilities.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is simple! Click the "Register" button in the top navigation, provide your email and basic information, and complete the neural compatibility scan. Your account will be activated immediately after verification.'
        },
        {
          question: 'Is my personal data secure?',
          answer: 'Absolutely. We use quantum-encrypted security protocols and military-grade firewalls to protect your data. All neural patterns and biometric information are stored in our secure quantum vaults with zero-knowledge encryption.'
        }
      ]
    },
    {
      category: 'Products',
      questions: [
        {
          question: 'Are your cybernetic enhancements safe?',
          answer: 'All our products undergo rigorous testing in our quantum labs and are certified by the Cybernetic Safety Council. Each device comes with comprehensive safety documentation and installation guidelines.'
        },
        {
          question: 'Do you offer installation services?',
          answer: 'Yes! We provide professional installation services through our network of certified cybernetic technicians. Installation includes pre-procedure health scans, surgical-grade precision installation, and post-integration monitoring.'
        },
        {
          question: 'What if a product is incompatible with my biology?',
          answer: 'We offer a comprehensive compatibility assessment before purchase. If incompatibility is discovered post-purchase, we provide full refunds and can recommend alternative solutions that match your biological profile.'
        },
        {
          question: 'How long do cybernetic enhancements last?',
          answer: 'Most of our neural interfaces and bio-augmentations are designed to last 15-20 years with proper maintenance. We offer upgrade paths and trade-in programs for older models.'
        }
      ]
    },
    {
      category: 'Orders & Shipping',
      questions: [
        {
          question: 'How fast is shipping?',
          answer: 'We offer quantum-powered delivery with our autonomous drone fleet. Standard delivery is 24-48 hours, while premium neural interfaces qualify for same-day installation in major cyber-districts.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order ships, you\'ll receive real-time tracking through our neural interface app or traditional email notifications. You can monitor your package\'s location down to the meter.'
        },
        {
          question: 'What if my order is damaged?',
          answer: 'All shipments are protected by quantum-stabilized packaging. If damage occurs, contact our support team immediately. We\'ll arrange immediate replacement and investigate the cause.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'We ship to all major cyber-cities and space colonies. Shipping times vary by location, with Earth deliveries taking 1-3 days and off-world deliveries taking 5-14 days depending on orbital mechanics.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'My neural interface isn\'t responding. What should I do?',
          answer: 'First, try a soft reset by thinking the command "SYSTEM RESTART" three times. If that doesn\'t work, check your bio-compatibility levels and ensure your neural pathways are properly calibrated. Contact our 24/7 tech support if issues persist.'
        },
        {
          question: 'How do I update my cybernetic firmware?',
          answer: 'Firmware updates are pushed automatically through our quantum network. You can also manually check for updates through your neural interface settings or our mobile app. Always ensure you\'re in a safe environment during updates.'
        },
        {
          question: 'Can I get technical support for older models?',
          answer: 'We provide lifetime technical support for all products. While older models may not receive new features, we maintain compatibility and security updates indefinitely.'
        }
      ]
    },
    {
      category: 'Returns & Warranty',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return window for most products. Neural interfaces and bio-augmentations have a 14-day return period due to biological integration factors. All returns must be in original condition with proper decontamination.'
        },
        {
          question: 'How long is the warranty?',
          answer: 'Standard warranty is 2 years for electronics and 5 years for neural interfaces. Premium products include lifetime warranty with annual maintenance checks. Extended warranties are available for all product categories.'
        },
        {
          question: 'What does the warranty cover?',
          answer: 'Our warranty covers manufacturing defects, software bugs, and bio-compatibility issues. It includes free repairs, replacements, and software updates. Physical damage from misuse is not covered but can be repaired for a fee.'
        }
      ]
    }
  ];

  const allQuestions = faqData.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      id: categoryIndex * 100 + questionIndex,
      category: category.category
    }))
  );

  const filteredQuestions = allQuestions.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
            <HelpCircle className="h-16 w-16 text-cyber-blue mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold neon-text font-cyber mb-6">
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Find answers to common questions about cybernetic enhancements and our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-black/50 border border-cyber-blue/30 rounded-lg text-white text-lg placeholder-gray-400 focus:outline-none focus:border-cyber-blue"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-cyber-blue mb-8"
              >
                Search Results ({filteredQuestions.length})
              </motion.h2>
              
              {filteredQuestions.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-500">
                    Try different keywords or browse categories below
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="cyber-card"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between text-left p-6 hover:bg-cyber-blue/5 transition-colors"
                      >
                        <div>
                          <span className="inline-block bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded text-xs font-semibold mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold text-white">
                            {item.question}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`h-6 w-6 text-cyber-blue transition-transform ${
                            openItems.includes(item.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openItems.includes(item.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <p className="text-gray-400 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Category View
            <div className="space-y-12">
              {faqData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-bold neon-text font-cyber mb-8">
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const itemId = categoryIndex * 100 + questionIndex;
                      return (
                        <motion.div
                          key={itemId}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: questionIndex * 0.1 }}
                          className="cyber-card"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between text-left p-6 hover:bg-cyber-blue/5 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-white pr-4">
                              {item.question}
                            </h3>
                            <ChevronDown
                              className={`h-6 w-6 text-cyber-blue transition-transform flex-shrink-0 ${
                                openItems.includes(itemId) ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {openItems.includes(itemId) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <p className="text-gray-400 leading-relaxed">
                                    {item.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold neon-text font-cyber">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-xl text-gray-300">
              Our cybernetic support specialists are available 24/7 to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-semibold">
                Live Chat
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;