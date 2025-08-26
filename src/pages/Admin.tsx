import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard';
import CustomerManagement from '../components/admin/CustomerManagement';
import ProjectManagement from '../components/admin/ProjectManagement';
import AnalyticsDashboard from '../components/admin/AnalyticsDashboard';
import AdminLogin from '../components/admin/AdminLogin';
import AdminNavigation from '../components/admin/AdminNavigation';
import SEOHead from '../components/SEOHead';

interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  lastLogin: Date;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('admin_token');
        const userData = localStorage.getItem('admin_user');
        
        if (token && userData) {
          // In a real app, you'd validate the token with your backend
          const user = JSON.parse(userData);
          setCurrentUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Set active tab based on URL
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/customers')) {
      setActiveTab('customers');
    } else if (path.includes('/projects')) {
      setActiveTab('projects');
    } else if (path.includes('/analytics')) {
      setActiveTab('analytics');
    } else {
      setActiveTab('dashboard');
    }
  }, [location.pathname]);

  const handleLogin = async (credentials: { username: string; password: string }) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll use hardcoded credentials
      if (credentials.username === 'admin' && credentials.password === 'azania2024') {
        const user: AdminUser = {
          id: '1',
          username: 'admin',
          email: 'admin@azaniadigital.co.za',
          role: 'admin',
          lastLogin: new Date()
        };

        const token = 'demo_token_' + Date.now();
        
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin_user', JSON.stringify(user));
        
        setCurrentUser(user);
        setIsAuthenticated(true);
        
        return { success: true };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setCurrentUser(null);
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const basePath = '/admin';
    const newPath = tab === 'dashboard' ? basePath : `${basePath}/${tab}`;
    navigate(newPath);
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(14, 165, 233, 0.3)',
          borderTop: '3px solid #0EA5E9',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <SEOHead
          title="Admin Login - AzaniaDigital"
          description="Secure admin access for AzaniaDigital team members"
          url="https://azaniadigital.co.za/admin"
        />
        <AdminLogin onLogin={handleLogin} />
      </>
    );
  }

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'customers':
        return <CustomerManagement />;
      case 'projects':
        return <ProjectManagement />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
      color: 'white'
    }}>
      <SEOHead
        title="Admin Dashboard - AzaniaDigital"
        description="Administrative dashboard for managing AzaniaDigital operations"
        url="https://azaniadigital.co.za/admin"
      />

      <AdminNavigation
        currentUser={currentUser}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onLogout={handleLogout}
      />

      <main style={{
        marginLeft: '250px',
        padding: '2rem',
        minHeight: 'calc(100vh - 80px)'
      }}>
        {renderActiveComponent()}
      </main>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          main {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Admin;
