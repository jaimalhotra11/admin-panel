import React from 'react';
import { Save, User, Lock, Bell, Globe, Palette } from 'lucide-react';

const Settings = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <nav className="space-y-1">
              <a
                href="#profile"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </a>
              <a
                href="#security"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Lock className="h-5 w-5 mr-3" />
                Security
              </a>
              <a
                href="#notifications"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </a>
              <a
                href="#appearance"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Palette className="h-5 w-5 mr-3" />
                Appearance
              </a>
              <a
                href="#language"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Globe className="h-5 w-5 mr-3" />
                Language
              </a>
            </nav>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div id="profile" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Profile Settings</h2>
              <p className="text-gray-600 dark:text-gray-400">Update your personal information</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="security" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Security Settings</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your security preferences</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div id="notifications" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Notification Preferences
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your notification settings</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Email Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Push Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-700 dark:text-gray-300">SMS Notifications</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;