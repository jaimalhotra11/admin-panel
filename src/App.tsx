import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './pages/Analytics';
import Chat from './pages/Chat';
import ProductRequests from './pages/ProductRequests';
import SellerRequests from './pages/SellerRequests';
import Customers from './pages/Customers';
import AssignTask from './pages/AssignTask';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1024;
      setIsMobile(isNowMobile);
      if (!isNowMobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarOpen) {
        const sidebar = document.getElementById('sidebar');
        const navbarToggle = document.getElementById('navbar-toggle');
        if (
          sidebar &&
          !sidebar.contains(event.target as Node) &&
          navbarToggle &&
          !navbarToggle.contains(event.target as Node)
        ) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, sidebarOpen]);

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          {isAuthenticated && <Navbar toggleSidebar={toggleSidebar} />}
          {isAuthenticated && <Sidebar isOpen={sidebarOpen} />}
          <main 
            className={`${isAuthenticated ? 'pt-16' : ''} transition-all duration-300 ease-in-out ${
              isAuthenticated && sidebarOpen ? 'lg:ml-64' : ''
            } ${isAuthenticated ? 'p-4 lg:p-6' : ''}`}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <ProtectedRoute>
                    <Analytics />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product-requests"
                element={
                  <ProtectedRoute>
                    <ProductRequests />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/seller-requests"
                element={
                  <ProtectedRoute>
                    <SellerRequests />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/customers"
                element={
                  <ProtectedRoute>
                    <Customers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/assign-task"
                element={
                  <ProtectedRoute>
                    <AssignTask />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;