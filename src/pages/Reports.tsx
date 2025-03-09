import React from 'react';
import { FileText, Download, Filter, BarChart2 } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      name: 'Monthly Sales Report',
      type: 'Sales',
      generated: '2024-03-21',
      size: '2.5 MB',
    },
    {
      id: 2,
      name: 'Customer Analytics',
      type: 'Analytics',
      generated: '2024-03-20',
      size: '1.8 MB',
    },
    {
      id: 3,
      name: 'Inventory Status',
      type: 'Inventory',
      generated: '2024-03-19',
      size: '3.2 MB',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Reports</h1>
          <p className="text-gray-600 dark:text-gray-400">Generate and manage reports</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
          <BarChart2 className="h-5 w-5 mr-2" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sales Reports</h3>
            <span className="text-gray-600 dark:text-gray-400">12</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Track revenue and sales performance</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Reports
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Analytics Reports</h3>
            <span className="text-gray-600 dark:text-gray-400">8</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Analyze customer behavior and trends</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Reports
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Inventory Reports</h3>
            <span className="text-gray-600 dark:text-gray-400">5</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Monitor stock levels and movement</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Reports
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Reports</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Download All
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Report Name</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Type</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Generated</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Size</th>
                <th className="px-6 py-3 text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                      <div className="font-medium text-gray-900 dark:text-white">{report.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{report.type}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{report.generated}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{report.size}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">View</button>
                      <button className="text-green-600 hover:text-green-700">Download</button>
                      <button className="text-red-600 hover:text-red-700">Delete</button>
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

export default Reports;