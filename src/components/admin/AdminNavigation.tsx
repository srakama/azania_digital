import React, { useState } from 'react';

interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  lastLogin: Date;
}

interface AdminNavigationProps {
  currentUser: AdminUser | null;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const AdminNavigation: React.FC<AdminNavigationProps> = ({
  currentUser,
  activeTab,
  onTabChange,
  onLogout
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '📊',
      description: 'Overview & Analytics'
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: '👥',
      description: 'Client Management'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: '🚀',
      description: 'Project Tracking'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: '📈',
      description: 'Detailed Reports'
    }
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '250px',
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem'
          }}>
            ⚡
          </div>
          <div>
            <div style={{
              color: 'white',
              fontSize: '1.125rem',
              fontWeight: '700'
            }}>
              AzaniaDigital
            </div>
            <div style={{
              color: '#64748B',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              Admin Panel
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div style={{ flex: 1 }}>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1rem',
                marginBottom: '0.5rem',
                background: activeTab === item.id 
                  ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
                  : 'transparent',
                border: activeTab === item.id 
                  ? '1px solid rgba(14, 165, 233, 0.3)'
                  : '1px solid transparent',
                borderRadius: '12px',
                color: activeTab === item.id ? '#38BDF8' : '#CBD5E1',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#CBD5E1';
                }
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  opacity: 0.7
                }}>
                  {item.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* User Profile */}
        {currentUser && (
          <div style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                color: 'white',
                fontWeight: '600'
              }}>
                {currentUser.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {currentUser.username}
                </div>
                <div style={{
                  color: '#64748B',
                  fontSize: '0.75rem'
                }}>
                  {currentUser.role}
                </div>
              </div>
            </div>

            <button
              onClick={onLogout}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                color: '#FCA5A5',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.color = '#F87171';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                e.currentTarget.style.color = '#FCA5A5';
              }}
            >
              🚪 Sign Out
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        zIndex: 1001
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem'
          }}>
            ⚡
          </div>
          <span style={{
            color: 'white',
            fontSize: '1rem',
            fontWeight: '700'
          }}>
            AzaniaDigital Admin
          </span>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '1rem',
          zIndex: 1000,
          display: 'none'
        }}>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                marginBottom: '0.5rem',
                background: activeTab === item.id 
                  ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                borderRadius: '12px',
                color: activeTab === item.id ? '#38BDF8' : 'white',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  opacity: 0.7
                }}>
                  {item.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          
          div[style*="position: fixed"][style*="top: 0"][style*="height: 70px"] {
            display: flex !important;
          }
          
          div[style*="position: fixed"][style*="top: 70px"] {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default AdminNavigation;
