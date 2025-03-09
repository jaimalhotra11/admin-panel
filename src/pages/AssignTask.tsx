
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Package, Users, Calendar, CheckCircle2, X, ChevronLeft, ChevronRight, Search, FileText, Clock, User2, AlertCircle, Trash, CheckSquare, Info, Cpu as Gpu } from 'lucide-react';

// Mock data for NVIDIA graphics cards
const mockProducts = [
  {
    _id: '1',
    title: 'NVIDIA GeForce RTX 4090',
    brand: 'NVIDIA',
    price: 1599,
    stock: 15,
    memory: '24GB GDDR6X',
    power: '450W',
    images: [{ url: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272' }]
  },
  {
    _id: '2',
    title: 'NVIDIA GeForce RTX 4080',
    brand: 'NVIDIA',
    price: 1199,
    stock: 23,
    memory: '16GB GDDR6X',
    power: '320W',
    images: [{ url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7' }]
  },
  {
    _id: '3',
    title: 'NVIDIA GeForce RTX 4070 Ti',
    brand: 'NVIDIA',
    price: 799,
    stock: 45,
    memory: '12GB GDDR6X',
    power: '285W',
    images: [{ url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704' }]
  }
];

// Mock data for workers
const mockWorkers = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    expertise: 'GPU Repair Specialist',
    experience: '5 years',
    status: 'AVAILABLE',
    isVerified: true
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+0987654321',
    expertise: 'Hardware Engineer',
    experience: '7 years',
    status: 'BUSY',
    isVerified: true
  }
];

function AssignTask() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [products, setProducts] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [description, setDescription] = useState('');
  const [adminNotes, setAdminNotes] = useState('');
  const [deadline, setDeadline] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [searchWorker, setSearchWorker] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [stockFilter, setStockFilter] = useState('all');

  const steps = [
    { name: "Select Product" },
    { name: "Select worker" },
    { name: "Task Details" }
  ];

  const searchProducts = async (query) => {
    if (query.length < 2) {
      setProducts([]);
      return;
    }
    setIsLoading(true);
    try {
      let filteredProducts = [...mockProducts];
      
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.memory.toLowerCase().includes(query.toLowerCase())
      );

      if (stockFilter === 'inStock') {
        filteredProducts = filteredProducts.filter(p => p.stock > 0);
      } else if (stockFilter === 'lowStock') {
        filteredProducts = filteredProducts.filter(p => p.stock <= 5);
      }

      filteredProducts.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      });

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error searching products:", error);
      showToast('error', 'Failed to search products');
    } finally {
      setIsLoading(false);
    }
  };

  const searchWorkers = async (query) => {
    setIsLoading(true);
    try {
      let filteredWorkers = [...mockWorkers];
      
      if (query) {
        filteredWorkers = filteredWorkers.filter(worker =>
          worker.name.toLowerCase().includes(query.toLowerCase()) ||
          worker.expertise.toLowerCase().includes(query.toLowerCase())
        );
      }

      setWorkers(filteredWorkers);
    } catch (error) {
      console.error("Error searching workers:", error);
      showToast('error', 'Failed to search workers');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchProduct) {
        searchProducts(searchProduct);
      } else {
        searchProducts('');
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchProduct, sortBy, sortOrder, stockFilter]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchWorkers(searchWorker);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchWorker]);

  const showToast = (type, message) => {
    console.log(`${type}: ${message}`);
  };

  const resetForm = () => {
    setActiveStep(0);
    setSelectedProduct(null);
    setSelectedWorker(null);
    setDescription('');
    setAdminNotes('');
    setDeadline('');
    setSearchProduct('');
    setSearchWorker('');
  };

  const handleSubmit = async () => {
    if (!selectedProduct || !selectedWorker || !description || !deadline) {
      showToast('error', 'Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast('success', 'Repair task created successfully!');
      setShowNewTask(false);
      resetForm();
    } catch (error) {
      console.error('Error creating task:', error);
      showToast('error', 'Failed to create task');
    } finally {
      setIsLoading(false);
    }
  };

  const renderProductCard = (product) => (
    <motion.div
      key={product._id}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden rounded-xl p-4 cursor-pointer bg-white
        ${selectedProduct?._id === product._id 
          ? 'border-2 border-indigo-500 shadow-lg' 
          : 'border border-gray-200'
        }
      `}
      onClick={() => setSelectedProduct(product)}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
          <motion.img
            src={product.images?.[0]?.url}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Gpu size={20} className="text-green-600" />
            <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{product.title}</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-3">
            <div className="flex items-center space-x-1 text-gray-600">
              <span className="font-medium">Memory:</span>
              <span>{product.memory}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <span className="font-medium">Power:</span>
              <span>{product.power}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <span className="font-medium">Stock:</span>
              <span className={product.stock <= 5 ? 'text-red-500' : 'text-green-500'}>
                {product.stock} units
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg sm:text-xl font-bold text-indigo-600">
              ${product.price.toLocaleString()}
            </span>
            {selectedProduct?._id === product._id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-green-500"
              >
                <CheckCircle2 size={24} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderWorkerCard = (worker) => (
    <motion.div
      key={worker._id}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden rounded-xl p-4 cursor-pointer bg-white
        ${selectedWorker?._id === worker._id 
          ? 'border-2 border-indigo-500 shadow-lg' 
          : 'border border-gray-200'
        }
      `}
      onClick={() => setSelectedWorker(worker)}
    >
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <User2 size={32} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{worker.name}</h3>
          <p className="text-gray-600 text-sm mb-1">{worker.expertise}</p>
          <p className="text-gray-600 text-sm mb-2">{worker.experience}</p>
          
          <div className="flex items-center space-x-2">
            <span className={`
              px-2 py-1 rounded-full text-xs font-medium
              ${worker.status === 'AVAILABLE' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
              }
            `}>
              {worker.status}
            </span>
            
            {worker.isVerified && (
              <span className="flex items-center text-green-600 text-xs">
                <CheckCircle2 size={14} className="mr-1" />
                Verified
              </span>
            )}
          </div>
        </div>
        
        {selectedWorker?._id === worker._id && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-green-500"
          >
            <CheckCircle2 size={24} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  const renderProductControls = () => (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="price">Sort by Price</option>
        <option value="stock">Sort by Stock</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <select
        value={stockFilter}
        onChange={(e) => setStockFilter(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="all">All Stock</option>
        <option value="inStock">In Stock</option>
        <option value="lowStock">Low Stock</option>
      </select>
    </div>
  );

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-gray-200 w-full" />
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-indigo-500 transition-all duration-300"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center ${
              i <= activeStep ? 'text-indigo-600' : 'text-gray-400'
            }`}
          >
            <motion.div 
              className={`
                w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center
                ${i < activeStep 
                  ? 'bg-indigo-500 text-white' 
                  : i === activeStep
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 border-2 border-gray-200'
                }
                ${i <= activeStep ? 'border-indigo-500' : 'border-gray-200'}
              `}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {i < activeStep ? (
                <CheckCircle2 size={20} />
              ) : (
                <span className="text-sm font-medium">{i + 1}</span>
              )}
            </motion.div>
            <span className="absolute top-14 text-xs sm:text-sm font-medium whitespace-nowrap">
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-indigo-50 p-4 rounded-lg">
              <Info size={24} className="text-indigo-600" />
              <p className="text-indigo-700">Search and select a GPU to repair</p>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                placeholder="Search GPUs..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {renderProductControls()}

            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {products.map(product => renderProductCard(product))}
              </div>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-indigo-50 p-4 rounded-lg">
              <Info size={24} className="text-indigo-600" />
              <p className="text-indigo-700">Select a technician for the repair</p>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchWorker}
                onChange={(e) => setSearchWorker(e.target.value)}
                placeholder="Search technicians..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {workers.map(worker => renderWorkerCard(worker))}
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-indigo-50 p-4 rounded-lg">
              <Info size={24} className="text-indigo-600" />
              <p className="text-indigo-700">Provide repair task details</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-32 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter detailed repair description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Notes
              </label>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full h-24 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Add any additional notes for admin reference..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderSelectionSummary = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Selected Items</h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={resetForm}
          disabled={!selectedProduct && !selectedWorker}
          className={`
            p-2 rounded-full
            ${!selectedProduct && !selectedWorker 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-red-100 text-red-600 hover:bg-red-200'
            }
          `}
        >
          <Trash size={20} />
        </motion.button>
      </div>

      {!selectedProduct && !selectedWorker ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
          <AlertCircle size={32} className="mx-auto mb-2 text-gray-400" />
          <p className="text-gray-500">No items selected</p>
        </div>
      ) : (
        <div className="space-y-4">
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <img
                  src={selectedProduct.images?.[0]?.url}
                  alt={selectedProduct.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{selectedProduct.title}</h4>
                  <p className="text-sm text-gray-500">Memory: {selectedProduct.memory}</p>
                  <p className="text-sm font-medium text-indigo-600">${selectedProduct.price}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {selectedWorker && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <User2 size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{selectedWorker.name}</h4>
                  <p className="text-sm text-gray-500">{selectedWorker.expertise}</p>
                  <p className="text-sm text-gray-500">{selectedWorker.experience}</p>
                </div>
                <button
                  onClick={() => setSelectedWorker(null)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );

  const renderHeroSection = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer bg-white rounded-3xl shadow-xl p-6 sm:p-12 max-w-xl mx-auto"
        onClick={() => setShowNewTask(true)}
      >
        <div className="relative flex flex-col items-center space-y-8">
          <motion.div 
            className="w-24 sm:w-32 h-24 sm:h-32 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Gpu size={36} className="sm:w-12 sm:h-12" />
          </motion.div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Create GPU Repair Task
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed text-sm sm:text-base">
              Start by creating a new GPU repair task and assign it to our expert technicians. 
              Track progress, set deadlines, and manage repairs efficiently.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-xl font-medium flex items-center space-x-3 shadow-lg hover:bg-indigo-700 transition-all duration-300"
          >
            <Plus size={20} className="sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg">Create Repair Task</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {renderHeroSection()}
      
      <AnimatePresence>
        {showNewTask && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-start justify-center p-4 z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-6xl my-8 shadow-xl"
            >
              <div className="sticky top-0 z-50 bg-white border-b border-gray-200 rounded-t-2xl">
                <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Create New Repair Task</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowNewTask(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </motion.button>
                </div>
                
                <div className="px-4 sm:px-6 py-8">
                  {renderStepIndicator()}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="sticky top-[280px]">
                      {renderSelectionSummary()}
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    {renderStepContent()}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                  {activeStep > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-6 py-3 flex items-center justify-center space-x-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50"
                    >
                      <ChevronLeft size={20} />
                      <span>Previous</span>
                    </motion.button>
                  )}

                  {activeStep < steps.length - 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveStep(activeStep + 1)}
                      disabled={activeStep === 0 && !selectedProduct || activeStep === 1 && !selectedWorker}
                      className={`
                        px-6 py-3 flex items-center justify-center space-x-2 rounded-xl
                        ${(activeStep === 0 && !selectedProduct) || (activeStep === 1 && !selectedWorker)
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-indigo-500 text-white hover:bg-indigo-600'
                        }
                        ${activeStep === 0 ? 'sm:ml-auto' : ''}
                      `}
                    >
                      <span>Next</span>
                      <ChevronRight size={20} />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      disabled={!description || !deadline || isLoading}
                      className={`
                        px-6 py-3 flex items-center justify-center space-x-2 rounded-xl sm:ml-auto
                        ${!description || !deadline
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-indigo-500 text-white hover:bg-indigo-600'
                 }
                      `}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          <span>Creating...</span>
                        </div>
                      ) : (
                        <>
                          <span>Create Task</span>
                          <CheckSquare size={20} />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AssignTask;