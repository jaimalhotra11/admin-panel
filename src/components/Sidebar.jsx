import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart,
  MessageSquare,
  ShoppingBag,
  Users,
  ClipboardList,
  Settings,
  FileText,
} from 'lucide-react';

function Sidebar({ isOpen }) {
  const menuItems = {
    Overview: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
      { icon: BarChart, label: 'Analytics', path: '/analytics' },
      { icon: MessageSquare, label: 'Chat', path: '/chat' },
    ],
    'Store Management': [
      { icon: ShoppingBag, label: 'Product Requests', path: '/product-requests' },
    ],
    'User Management': [
      { icon: Users, label: 'Seller Requests', path: '/seller-requests' },
      { icon: Users, label: 'Customers', path: '/customers' },
    ],
    Workers: [
      { icon: ClipboardList, label: 'Assign Task', path: '/assign-task' },
    ],
    Administration: [
      { icon: FileText, label: 'Reports', path: '/reports' },
      { icon: Settings, label: 'Settings', path: '/settings' },
    ],
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-screen w-64 transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } overflow-hidden`}
    >
      <div className="h-16"></div>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="py-5 px-3">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h3 className="mb-2 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                {category}
              </h3>
              <ul>
                {items.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          isActive ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;