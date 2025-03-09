import React, { useState } from 'react';
import { DollarSign, Users, Package, UserPlus, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('Monthly');
  
  const stats = [
    {
      title: 'Total sales',
      value: '$960181.01',
      change: '-70.5%',
      changeValue: '$-2298354.39',
      changeText: 'this week',
      icon: DollarSign,
    },
    {
      title: 'Total Customers',
      value: '11',
      change: '0.0%',
      changeText: '0 this week',
      icon: Users,
    },
    {
      title: 'Total Orders',
      value: '75',
      change: '-53.1%',
      changeText: '-26 this week',
      icon: Package,
    },
    {
      title: 'Total Sellers',
      value: '9',
      change: '0.0%',
      changeText: '0 this week',
      icon: UserPlus,
    },
    {
      title: 'Total Resellers',
      value: '3',
      change: '+100.0%',
      changeText: '1 this week',
      icon: Users,
    },
  ];

  const recentOrders = [
    {
      product: 'Motherboard Z790',
      category: 'Motherboards',
      amount: '459 USD',
      date: '15/03/2024',
      customer: 'Alex Chen',
      status: 'Processing',
    },
    {
      product: 'RTX 4080 GPU',
      category: 'Graphics Cards',
      amount: '1,199 USD',
      date: '21/03/2024',
      customer: 'Sarah Miller',
      status: 'Shipped',
    },
    {
      product: 'Liquid Cooler',
      category: 'Cooling',
      amount: '189 USD',
      date: '05/03/2024',
      customer: 'Mike Johnson',
      status: 'Done',
    },
  ];

  const chartData = {
    Daily: [
      { name: '12AM', revenue: 4000, orders: 2400 },
      { name: '4AM', revenue: 3000, orders: 1398 },
      { name: '8AM', revenue: 2000, orders: 9800 },
      { name: '12PM', revenue: 2780, orders: 3908 },
      { name: '4PM', revenue: 1890, orders: 4800 },
      { name: '8PM', revenue: 2390, orders: 3800 },
      { name: '11PM', revenue: 3490, orders: 4300 },
    ],
    Weekly: [
      { name: 'Mon', revenue: 24000, orders: 12400 },
      { name: 'Tue', revenue: 13000, orders: 11398 },
      { name: 'Wed', revenue: 22000, orders: 19800 },
      { name: 'Thu', revenue: 27800, orders: 13908 },
      { name: 'Fri', revenue: 18900, orders: 14800 },
      { name: 'Sat', revenue: 23900, orders: 13800 },
      { name: 'Sun', revenue: 34900, orders: 14300 },
    ],
    Monthly: [
      { name: 'Jan', revenue: 240000, orders: 124000 },
      { name: 'Feb', revenue: 130000, orders: 113980 },
      { name: 'Mar', revenue: 220000, orders: 198000 },
      { name: 'Apr', revenue: 278000, orders: 139080 },
      { name: 'May', revenue: 189000, orders: 148000 },
      { name: 'Jun', revenue: 239000, orders: 138000 },
      { name: 'Jul', revenue: 349000, orders: 143000 },
      { name: 'Aug', revenue: 289000, orders: 168000 },
      { name: 'Sep', revenue: 329000, orders: 173000 },
      { name: 'Oct', revenue: 259000, orders: 153000 },
      { name: 'Nov', revenue: 299000, orders: 163000 },
      { name: 'Dec', revenue: 339000, orders: 183000 },
    ],
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Welcome, test</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your store today</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <stat.icon className="h-8 w-8 text-blue-600" />
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.title}</h3>
            <p className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</p>
            <div className="flex items-center text-sm">
              <span className={`${stat.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                {stat.change}
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-1">{stat.changeText}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 sm:mb-0">Revenue vs Orders</h2>
            <div className="flex space-x-2">
              {['Daily', 'Weekly', 'Monthly'].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimeframe(period)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    timeframe === period
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData[timeframe as keyof typeof chartData]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Sales by category</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm">More</button>
          </div>
          <div className="space-y-4">
            {['Electronics', 'Laptops', 'iPhones'].map((category, index) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{category}</span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {[45, 30, 25][index]}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${[45, 30, 25][index]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Category</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.product} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="py-4">{order.product}</td>
                    <td className="py-4 text-gray-600 dark:text-gray-400">{order.category}</td>
                    <td className="py-4">{order.amount}</td>
                    <td className="py-4 text-gray-600 dark:text-gray-400">{order.date}</td>
                    <td className="py-4">{order.customer}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Processing'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'Shipped'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;