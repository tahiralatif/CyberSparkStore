import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/useStore';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 29.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20 pb-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-8"
          >
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto" />
            <h1 className="text-4xl font-bold neon-text font-cyber">
              YOUR CART IS EMPTY
            </h1>
            <p className="text-xl text-gray-400">
              Looks like you haven't enhanced your reality yet.
            </p>
            <Link to="/shop" className="cyber-button inline-flex items-center">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
            SHOPPING CART
          </h1>
          <p className="text-xl text-gray-400">
            Review your cybernetic selections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-cyber-blue">
                Items ({cart.length})
              </h2>
              <button
                onClick={clearCart}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Clear All
              </button>
            </div>

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
              >
                {/* Product Image */}
                <div className="w-full md:w-24 h-48 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {item.category}
                  </p>
                  <p className="text-cyber-blue font-semibold">
                    ${item.price}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="p-2 border border-cyber-blue/30 rounded hover:border-cyber-blue transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="p-2 border border-cyber-blue/30 rounded hover:border-cyber-blue transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Total Price */}
                <div className="text-xl font-bold neon-text min-w-[100px] text-center">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="cyber-card h-fit sticky top-24"
          >
            <h2 className="text-2xl font-semibold text-cyber-blue mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
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
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between text-xl font-bold neon-text">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {subtotal < 500 && (
              <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-cyber-blue">
                  Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                </p>
              </div>
            )}

            <Link
              to="/checkout"
              className="w-full cyber-button flex items-center justify-center mb-4"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/shop"
              className="w-full text-center py-3 px-6 border border-cyber-blue/30 text-cyber-blue hover:border-cyber-blue transition-colors rounded-lg font-semibold"
            >
              Continue Shopping
            </Link>

            {/* Security Badge */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                <span>Quantum-encrypted secure checkout</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;