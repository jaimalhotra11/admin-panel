import React, { useState } from 'react';
import { Menu, Bell, User, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
            >
              <Menu className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hidden lg:block"
            >
              <Menu className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
            <span className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white truncate">
              Technology Heaven
            </span>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500 dark:text-gray-400" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <User className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500 dark:text-gray-400" />
                <span className="hidden sm:block text-gray-700 dark:text-gray-300">test</span>
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="py-1">
                    {['Home', 'Dashboard', 'Profile', 'Logout'].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;