import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  Moon, 
  Sun,
  Zap
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useStore } from '../store/useStore';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { cart, user } = useStore();
  const location = useLocation();

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyber-blue/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-cyber-blue animate-pulse" />
              <span className="text-xl font-bold neon-text font-cyber">
                CYBERSTORE
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-cyber-blue border-b-2 border-cyber-blue'
                      : 'text-gray-300 hover:text-cyber-blue hover:shadow-neon'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-cyber-blue transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link
              to="/cart"
              className="relative p-2 text-gray-300 hover:text-cyber-blue transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyber-pink text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {user ? (
              <Link
                to="/admin"
                className="p-2 text-gray-300 hover:text-cyber-blue transition-colors"
              >
                <User className="h-5 w-5" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="cyber-button text-sm px-4 py-2"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/cart" className="relative p-2 text-gray-300">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyber-pink text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-cyber-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-cyber-blue bg-cyber-blue/10'
                  : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/5'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-2 flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-cyber-blue transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            {!user && (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="cyber-button text-sm px-4 py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;