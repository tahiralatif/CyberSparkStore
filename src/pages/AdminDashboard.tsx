import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const stats = [
    { icon: Users, label: 'Total Users', value: '12,847', change: '+12%', color: 'text-cyber-blue' },
    { icon: Package, label: 'Products', value: '1,234', change: '+5%', color: 'text-cyber-green' },
    { icon: ShoppingCart, label: 'Orders', value: '8,921', change: '+18%', color: 'text-cyber-pink' },
    { icon: DollarSign, label: 'Revenue', value: '$2.4M', change: '+25%', color: 'text-cyber-yellow' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Alex Chen', product: 'Neural Interface X1', amount: '$1,299', status: 'Completed' },
    { id: 'ORD-002', customer: 'Maya Rodriguez', product: 'Quantum Processor', amount: '$899', status: 'Processing' },
    { id: 'ORD-003', customer: 'Kai Nakamura', product: 'Bio-Enhancement Kit', amount: '$1,299', status: 'Shipped' },
    { id: 'ORD-004', customer: 'Zara Kim', product: 'Holographic Display', amount: '$599', status: 'Pending' },
  ];

  const products = [
    { id: '1', name: 'Neural Interface X1', category: 'Electronics', price: '$1,299', stock: 45, status: 'Active' },
    { id: '2', name: 'Quantum Processor', category: 'Hardware', price: '$899', stock: 23, status: 'Active' },
    { id: '3', name: 'Bio-Enhancement Kit', category: 'Augmentation', price: '$1,299', stock: 12, status: 'Low Stock' },
    { id: '4', name: 'Holographic Display', category: 'Display', price: '$599', stock: 67, status: 'Active' },
  ];

  const users = [
    { id: '1', name: 'Alex Chen', email: 'alex@example.com', role: 'Customer', status: 'Active', joined: '2024-01-15' },
    { id: '2', name: 'Maya Rodriguez', email: 'maya@example.com', role: 'Customer', status: 'Active', joined: '2024-01-12' },
    { id: '3', name: 'Kai Nakamura', email: 'kai@example.com', role: 'Admin', status: 'Active', joined: '2024-01-10' },
    { id: '4', name: 'Zara Kim', email: 'zara@example.com', role: 'Customer', status: 'Inactive', joined: '2024-01-08' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'users', label: 'Users', icon: Users },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'completed':
      case 'shipped':
        return 'text-cyber-green bg-cyber-green/20';
      case 'processing':
      case 'pending':
        return 'text-cyber-yellow bg-cyber-yellow/20';
      case 'low stock':
      case 'inactive':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold neon-text font-cyber mb-4">
              ADMIN DASHBOARD
            </h1>
            <p className="text-xl text-gray-400">
              Control center for CyberStore operations
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="border-b border-cyber-blue/30">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-cyber-blue text-cyber-blue'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-card"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="cyber-card">
              <h2 className="text-xl font-semibold text-cyber-blue mb-6">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Order ID</th>
                      <th className="text-left py-3 text-gray-400">Customer</th>
                      <th className="text-left py-3 text-gray-400">Product</th>
                      <th className="text-left py-3 text-gray-400">Amount</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-800">
                        <td className="py-3 text-cyber-blue">{order.id}</td>
                        <td className="py-3 text-white">{order.customer}</td>
                        <td className="py-3 text-gray-400">{order.product}</td>
                        <td className="py-3 text-white font-semibold">{order.amount}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-black/50 border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
                  />
                </div>
                <button className="p-2 border border-cyber-blue/30 rounded-lg text-gray-400 hover:text-cyber-blue hover:border-cyber-blue transition-colors">
                  <Filter className="h-5 w-5" />
                </button>
              </div>
              <button className="cyber-button flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add Product</span>
              </button>
            </div>

            {/* Products Table */}
            <div className="cyber-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Product</th>
                      <th className="text-left py-3 text-gray-400">Category</th>
                      <th className="text-left py-3 text-gray-400">Price</th>
                      <th className="text-left py-3 text-gray-400">Stock</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                      <th className="text-left py-3 text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-gray-800">
                        <td className="py-3 text-white font-semibold">{product.name}</td>
                        <td className="py-3 text-gray-400">{product.category}</td>
                        <td className="py-3 text-cyber-blue font-semibold">{product.price}</td>
                        <td className="py-3 text-white">{product.stock}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-400 hover:text-cyber-blue transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-cyber-green transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="cyber-card">
              <h2 className="text-xl font-semibold text-cyber-blue mb-6">All Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Order ID</th>
                      <th className="text-left py-3 text-gray-400">Customer</th>
                      <th className="text-left py-3 text-gray-400">Product</th>
                      <th className="text-left py-3 text-gray-400">Amount</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                      <th className="text-left py-3 text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-800">
                        <td className="py-3 text-cyber-blue">{order.id}</td>
                        <td className="py-3 text-white">{order.customer}</td>
                        <td className="py-3 text-gray-400">{order.product}</td>
                        <td className="py-3 text-white font-semibold">{order.amount}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-400 hover:text-cyber-blue transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-cyber-green transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="cyber-card">
              <h2 className="text-xl font-semibold text-cyber-blue mb-6">User Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400">Name</th>
                      <th className="text-left py-3 text-gray-400">Email</th>
                      <th className="text-left py-3 text-gray-400">Role</th>
                      <th className="text-left py-3 text-gray-400">Status</th>
                      <th className="text-left py-3 text-gray-400">Joined</th>
                      <th className="text-left py-3 text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-gray-800">
                        <td className="py-3 text-white font-semibold">{user.name}</td>
                        <td className="py-3 text-gray-400">{user.email}</td>
                        <td className="py-3 text-cyber-blue">{user.role}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 text-gray-400">{user.joined}</td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-400 hover:text-cyber-blue transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-cyber-green transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminDashboard;