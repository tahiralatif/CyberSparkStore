import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { useStore } from '../store/useStore';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative cyber-card hover:scale-105 transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="p-2 bg-cyber-blue text-black rounded-full hover:bg-cyber-blue/80 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </motion.button>
          
          <Link to={`/product/${product.id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <Eye className="h-5 w-5" />
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-cyber-pink text-white rounded-full hover:bg-cyber-pink/80 transition-colors"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Out of Stock
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-cyber-blue/80 text-black px-2 py-1 rounded text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-cyber-blue transition-colors truncate">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold neon-text">
            ${product.price}
          </span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded font-semibold text-sm transition-all duration-300 ${
              product.inStock
                ? 'cyber-button'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </motion.button>
        </div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scan"></div>
      </div>
    </motion.div>
  );
};

export default ProductCard;