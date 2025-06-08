import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Neural Interfaces: What to Expect in 2025',
      excerpt: 'Explore the cutting-edge developments in neural interface technology and how they will reshape human-computer interaction.',
      content: 'Full article content here...',
      author: 'Dr. Maya Chen',
      date: '2024-01-15',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Cybersecurity in the Age of Bio-Augmentation',
      excerpt: 'As we integrate more technology into our bodies, protecting our digital selves becomes more critical than ever.',
      content: 'Full article content here...',
      author: 'Alex Voss',
      date: '2024-01-12',
      category: 'Security',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Building Your First Cybernetic Enhancement Setup',
      excerpt: 'A beginner\'s guide to choosing and installing your first cybernetic enhancements safely and effectively.',
      content: 'Full article content here...',
      author: 'Kai Rodriguez',
      date: '2024-01-10',
      category: 'Guides',
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '10 min read'
    },
    {
      id: '4',
      title: 'The Ethics of Human Enhancement Technology',
      excerpt: 'Examining the moral implications of cybernetic augmentation and the future of human evolution.',
      content: 'Full article content here...',
      author: 'Dr. Zara Kim',
      date: '2024-01-08',
      category: 'Ethics',
      image: 'https://images.pexels.com/photos/2599242/pexels-photo-2599242.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min read'
    },
    {
      id: '5',
      title: 'Quantum Computing and Consciousness Transfer',
      excerpt: 'How quantum computing is bringing us closer to the possibility of consciousness transfer and digital immortality.',
      content: 'Full article content here...',
      author: 'Dr. Maya Chen',
      date: '2024-01-05',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '12 min read'
    },
    {
      id: '6',
      title: 'Maintenance Tips for Your Cybernetic Implants',
      excerpt: 'Essential maintenance practices to keep your cybernetic enhancements running at peak performance.',
      content: 'Full article content here...',
      author: 'Kai Rodriguez',
      date: '2024-01-03',
      category: 'Guides',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min read'
    }
  ];

  const categories = ['all', 'Technology', 'Security', 'Guides', 'Ethics'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

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
              CYBER BLOG
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Insights, guides, and news from the frontlines of cybernetic evolution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Tag className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-black/50 border border-cyber-blue/30 rounded text-white focus:outline-none focus:border-cyber-blue"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cyber-card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyber-pink text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <span className="inline-block bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="cyber-button inline-flex items-center w-fit"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold neon-text font-cyber mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-400">
              Stay updated with the latest in cybernetic technology and enhancement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cyber-card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyber-blue/80 text-black px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyber-blue transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyber-blue hover:text-cyber-blue/80 transition-colors text-sm font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue/10 to-cyber-pink/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold neon-text font-cyber">
              STAY CONNECTED
            </h2>
            <p className="text-xl text-gray-300">
              Get the latest cybernetic insights delivered directly to your neural interface
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue"
              />
              <button className="cyber-button px-6 py-3">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;