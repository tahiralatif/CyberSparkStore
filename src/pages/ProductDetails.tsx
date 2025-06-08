import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Share, 
  Star, 
  Minus, 
  Plus,
  ArrowLeft,
  Check,
  X
} from 'lucide-react';
import { useStore } from '../store/useStore';
import ProductCard from '../components/ProductCard';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);

  // Mock additional product data
  const productImages = [
    product?.image,
    'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
  ].filter(Boolean);

  const productSpecs = [
    { label: 'Processor', value: 'Quantum Neural Core X1' },
    { label: 'Memory', value: '1TB Neural Storage' },
    { label: 'Connectivity', value: 'Bio-WiFi 7.0' },
    { label: 'Power', value: 'Biometric Fusion Cell' },
    { label: 'Compatibility', value: 'Universal Bio-Interface' },
  ];

  const productFeatures = [
    'Advanced quantum processing capabilities',
    'Seamless neural integration',
    'Real-time consciousness backup',
    'Encrypted thought transmission',
    'Lifetime warranty and upgrades',
  ];

  const reviews = [
    {
      id: '1',
      name: 'Alex Chen',
      rating: 5,
      comment: 'Absolutely mind-blowing technology! The neural integration was seamless.',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Maya Rodriguez',
      rating: 4,
      comment: 'Great product, though the installation process could be smoother.',
      date: '2024-01-10'
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 pb-12 text-center"
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-cyber-blue mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="cyber-button">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Shop
          </Link>
        </div>
      </motion.div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-cyber-blue">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-cyber-blue">Shop</Link>
            <span>/</span>
            <span className="text-cyber-blue">{product.name}</span>
          </nav>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-lg cyber-card">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex space-x-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-cyber-blue' : 'border-gray-600'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold neon-text font-cyber mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-gray-400 ml-2">(4.2 • 18 reviews)</span>
                </div>
              </div>
              <span className="inline-block bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>

            <div className="text-3xl font-bold neon-text">
              ${product.price}
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-cyber-blue/30 rounded hover:border-cyber-blue transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-cyber-blue/30 rounded hover:border-cyber-blue transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all ${
                    product.inStock
                      ? 'cyber-button'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                
                <button className="p-3 border border-cyber-pink text-cyber-pink rounded-lg hover:bg-cyber-pink hover:text-black transition-all">
                  <Heart className="h-5 w-5" />
                </button>
                
                <button className="p-3 border border-cyber-green text-cyber-green rounded-lg hover:bg-cyber-green hover:text-black transition-all">
                  <Share className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">In Stock</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-400" />
                  <span className="text-red-400">Out of Stock</span>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="border-b border-cyber-blue/30 mb-8">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-cyber-blue text-cyber-blue'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="cyber-card">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-cyber-blue">Product Description</h3>
                <p className="text-gray-400 leading-relaxed">
                  Experience the next evolution in cybernetic enhancement with our {product.name}. 
                  This cutting-edge device represents the pinnacle of neural interface technology, 
                  designed for seamless integration with the human consciousness.
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-cyber-blue mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {productFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-400">
                        <Check className="h-4 w-4 text-cyber-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-cyber-blue">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-black/30 rounded">
                      <span className="text-gray-400">{spec.label}:</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-cyber-blue">Customer Reviews</h3>
                  <button className="cyber-button text-sm px-4 py-2">
                    Write Review
                  </button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-700 pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-white">{review.name}</h4>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-400">{review.date}</span>
                      </div>
                      <p className="text-gray-400">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold neon-text font-cyber mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetails;