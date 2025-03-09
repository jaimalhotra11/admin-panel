import React from 'react';
import { LineChart, BarChart3, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      title: 'Revenue Growth',
      value: '+28.5%',
      description: 'Compared to last month',
      icon: TrendingUp,
    },
    {
      title: 'Average Order Value',
      value: '$854.32',
      description: '15% increase from last week',
      icon: LineChart,
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      description: 'Up from 2.8% last quarter',
      icon: BarChart3,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Analytics Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <metric.icon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{metric.title}</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sales Trends</h2>
          <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Sales Chart</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Traffic Sources</h2>
          <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Traffic Chart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;