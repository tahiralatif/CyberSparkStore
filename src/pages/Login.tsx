import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication
    setTimeout(() => {
      const mockUser = {
        id: '1',
        email: formData.email,
        name: 'Cyber User',
        isAdmin: formData.email === 'admin@cyberstore.com'
      };
      setUser(mockUser);
      setIsLoading(false);
      // Redirect would happen here
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="cyber-card"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-cyber-blue/20 rounded-full mb-4"
            >
              <Zap className="h-8 w-8 text-cyber-blue" />
            </motion.div>
            <h1 className="text-3xl font-bold neon-text font-cyber mb-2">
              NEURAL LOGIN
            </h1>
            <p className="text-gray-400">
              Access your cybernetic account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 bg-black/50 border border-cyber-blue/30 rounded focus:ring-cyber-blue focus:ring-2"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-cyber-blue hover:text-cyber-blue/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                isLoading
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'cyber-button'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full py-3 px-6 border border-cyber-blue/30 text-cyber-blue hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 rounded-lg font-semibold">
              Neural Interface Login
            </button>
            <button className="w-full py-3 px-6 border border-cyber-green/30 text-cyber-green hover:border-cyber-green hover:bg-cyber-green/10 transition-all duration-300 rounded-lg font-semibold">
              Biometric Authentication
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-cyber-blue hover:text-cyber-blue/80 transition-colors font-semibold"
              >
                Create one now
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg">
            <h4 className="text-sm font-semibold text-cyber-blue mb-2">Demo Credentials:</h4>
            <div className="text-xs text-gray-400 space-y-1">
              <p>User: user@cyberstore.com / password123</p>
              <p>Admin: admin@cyberstore.com / admin123</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;