import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Lock, 
  MapPin, 
  User, 
  Mail, 
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useStore } from '../store/useStore';

const Checkout: React.FC = () => {
  const { cart, clearCart } = useStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 29.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { id: 1, title: 'Contact Info', icon: User },
    { id: 2, title: 'Shipping', icon: MapPin },
    { id: 3, title: 'Payment', icon: CreditCard },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing
    setTimeout(() => {
      clearCart();
      setCurrentStep(4); // Success step
    }, 2000);
  };

  if (cart.length === 0 && currentStep !== 4) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 pb-12 text-center"
      >
        <div className="max-w-md mx-auto">
          <AlertCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-cyber-blue mb-4">No Items in Cart</h1>
          <p className="text-gray-400 mb-8">Add some items to your cart before checking out.</p>
        </div>
      </motion.div>
    );
  }

  if (currentStep === 4) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-20 pb-12"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="cyber-card space-y-8"
          >
            <CheckCircle className="h-20 w-20 text-cyber-green mx-auto" />
            <h1 className="text-4xl font-bold neon-text font-cyber">
              ORDER CONFIRMED!
            </h1>
            <p className="text-xl text-gray-400">
              Your cybernetic enhancements are on their way!
            </p>
            <div className="space-y-4">
              <p className="text-gray-400">
                Order #CYB-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-gray-400">
                You'll receive a confirmation email shortly with tracking information.
              </p>
            </div>
            <button className="cyber-button">
              Track Your Order
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold neon-text font-cyber mb-4">
            CHECKOUT
          </h1>
          <p className="text-xl text-gray-400">
            Complete your cybernetic transformation
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                    currentStep >= step.id
                      ? 'bg-cyber-blue border-cyber-blue text-black'
                      : 'border-gray-600 text-gray-400'
                  }`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <span
                  className={`ml-2 font-semibold ${
                    currentStep >= step.id ? 'text-cyber-blue' : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`ml-8 w-16 h-0.5 ${
                      currentStep > step.id ? 'bg-cyber-blue' : 'bg-gray-600'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="cyber-card space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-cyber-blue mb-6">
                    Contact Information
                  </h2>
                  
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
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Shipping */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="cyber-card space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-cyber-blue mb-6">
                    Shipping Address
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                      placeholder="123 Cyber Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="Neo Tokyo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="CA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="90210"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="cyber-card space-y-6"
                >
                  <div className="flex items-center space-x-2 mb-6">
                    <Lock className="h-6 w-6 text-cyber-green" />
                    <h2 className="text-2xl font-semibold text-cyber-blue">
                      Payment Information
                    </h2>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 border border-cyber-blue/30 text-cyber-blue hover:border-cyber-blue transition-colors rounded-lg font-semibold"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="cyber-button ml-auto"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="cyber-button ml-auto"
                  >
                    Complete Order
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="cyber-card h-fit sticky top-24"
          >
            <h2 className="text-2xl font-semibold text-cyber-blue mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-white text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-cyber-blue font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 border-t border-gray-700 pt-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping:</span>
                <span className={shipping === 0 ? 'text-cyber-green' : ''}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 pt-3">
                <div className="flex justify-between text-xl font-bold neon-text">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-sm text-cyber-green">
                <Lock className="h-4 w-4" />
                <span>Quantum-encrypted secure payment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;