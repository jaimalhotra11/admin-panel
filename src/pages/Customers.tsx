import React from 'react';
import { Users, Download, Filter } from 'lucide-react';

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: 'Alex Chen',
      email: 'alex@example.com',
      orders: 15,
      spent: '$2,850.00',
      lastOrder: '2024-03-21',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Sarah Miller',
      email: 'sarah@example.com',
      orders: 8,
      spent: '$1,240.00',
      lastOrder: '2024-03-18',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      orders: 3,
      spent: '$450.00',
      lastOrder: '2024-03-15',
      status: 'Inactive',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Customers</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your customer base</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <option>Sort by</option>
                <option>Name</option>
                <option>Orders</option>
                <option>Spent</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Customer</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Orders</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Total Spent</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Last Order</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900 dark:text-white">{customer.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{customer.orders}</td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">{customer.spent}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{customer.lastOrder}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        customer.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">View</button>
                      <button className="text-gray-600 hover:text-gray-700">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">
              Showing 1 to 3 of 3 entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-gray-600 dark:text-gray-400">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-gray-600 dark:text-gray-400">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;