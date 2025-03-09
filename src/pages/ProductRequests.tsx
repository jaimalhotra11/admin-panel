import React from 'react';
import { ShoppingBag, Check, X, Clock } from 'lucide-react';

const ProductRequests = () => {
  const requests = [
    {
      id: 1,
      product: 'RTX 4090 Graphics Card',
      seller: 'TechStore Inc.',
      price: '$1999.99',
      quantity: 5,
      status: 'Pending',
      date: '2024-03-21',
    },
    {
      id: 2,
      product: 'Intel i9-14900K',
      seller: 'CPU World',
      price: '$599.99',
      quantity: 10,
      status: 'Approved',
      date: '2024-03-20',
    },
    {
      id: 3,
      product: 'Samsung 4TB NVMe SSD',
      seller: 'Storage Solutions',
      price: '$399.99',
      quantity: 15,
      status: 'Rejected',
      date: '2024-03-19',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'Rejected':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Product Requests</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage incoming product listing requests</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
          <ShoppingBag className="h-5 w-5 mr-2" />
          New Request
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Product</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Seller</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Price</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Quantity</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Date</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">{request.product}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{request.seller}</td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">{request.price}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{request.quantity}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusClass(request.status)}`}>
                      {getStatusIcon(request.status)}
                      <span className="ml-2">{request.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{request.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">View</button>
                      <button className="text-green-600 hover:text-green-700">Approve</button>
                      <button className="text-red-600 hover:text-red-700">Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductRequests;