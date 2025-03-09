import React, { useState } from 'react';
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
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Sidebar isOpen={sidebarOpen} />
          <main className={`pt-16 ${sidebarOpen ? 'ml-64' : ''} transition-margin duration-300 ease-in-out p-6`}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/product-requests" element={<ProductRequests />} />
              <Route path="/seller-requests" element={<SellerRequests />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/assign-task" element={<AssignTask />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;