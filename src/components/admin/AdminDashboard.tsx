import React, { useState, useEffect } from 'react';

interface DashboardStats {
  totalCustomers: number;
  activeProjects: number;
  completedProjects: number;
  monthlyRevenue: number;
  pendingQuotes: number;
  websiteVisitors: number;
}

interface RecentActivity {
  id: string;
  type: 'customer' | 'project' | 'quote' | 'payment';
  message: string;
  timestamp: Date;
  status: 'success' | 'warning' | 'info';
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalCustomers: 0,
    activeProjects: 0,
    completedProjects: 0,
    monthlyRevenue: 0,
    pendingQuotes: 0,
    websiteVisitors: 0
  });

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading dashboard data
  useEffect(() => {
    const loadDashboardData = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStats({
        totalCustomers: 127,
        activeProjects: 8,
        completedProjects: 45,
        monthlyRevenue: 125000,
        pendingQuotes: 12,
        websiteVisitors: 2847
      });

      setRecentActivity([
        {
          id: '1',
          type: 'customer',
          message: 'New customer registration: John Smith',
          timestamp: new Date(Date.now() - 1000 * 60 * 15),
          status: 'success'
        },
        {
          id: '2',
          type: 'project',
          message: 'Project "E-commerce Store" completed',
          timestamp: new Date(Date.now() - 1000 * 60 * 45),
          status: 'success'
        },
        {
          id: '3',
          type: 'quote',
          message: 'Quote request for mobile app development',
          timestamp: new Date(Date.now() - 1000 * 60 * 120),
          status: 'info'
        },
        {
          id: '4',
          type: 'payment',
          message: 'Payment received: R15,000 from ABC Corp',
          timestamp: new Date(Date.now() - 1000 * 60 * 180),
          status: 'success'
        },
        {
          id: '5',
          type: 'project',
          message: 'Project deadline approaching: Website Redesign',
          timestamp: new Date(Date.now() - 1000 * 60 * 240),
          status: 'warning'
        }
      ]);

      setIsLoading(false);
    };

    loadDashboardData();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)} days ago`;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'customer': return '👤';
      case 'project': return '🚀';
      case 'quote': return '💰';
      case 'payment': return '💳';
      default: return '📋';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'info': return '#0EA5E9';
      default: return '#6B7280';
    }
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px'
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

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: 'white',
          marginBottom: '0.5rem'
        }}>
          Dashboard Overview
        </h1>
        <p style={{
          color: '#94A3B8',
          fontSize: '1rem'
        }}>
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {[
          {
            title: 'Total Customers',
            value: stats.totalCustomers.toLocaleString(),
            icon: '👥',
            color: '#0EA5E9',
            change: '+12%'
          },
          {
            title: 'Active Projects',
            value: stats.activeProjects.toString(),
            icon: '🚀',
            color: '#10B981',
            change: '+3'
          },
          {
            title: 'Monthly Revenue',
            value: formatCurrency(stats.monthlyRevenue),
            icon: '💰',
            color: '#8B5CF6',
            change: '+18%'
          },
          {
            title: 'Website Visitors',
            value: stats.websiteVisitors.toLocaleString(),
            icon: '📊',
            color: '#F59E0B',
            change: '+24%'
          }
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: `${stat.color}20`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {stat.icon}
              </div>
              <div style={{
                background: `${stat.color}20`,
                color: stat.color,
                padding: '0.25rem 0.5rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {stat.change}
              </div>
            </div>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '0.25rem'
            }}>
              {stat.value}
            </div>
            <div style={{
              color: '#94A3B8',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {stat.title}
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem'
      }}>
        {/* Recent Activity */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Recent Activity
          </h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: `${getStatusColor(activity.status)}20`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem'
                }}>
                  {getActivityIcon(activity.type)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>
                    {activity.message}
                  </div>
                  <div style={{
                    color: '#64748B',
                    fontSize: '0.75rem'
                  }}>
                    {formatTimeAgo(activity.timestamp)}
                  </div>
                </div>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: getStatusColor(activity.status),
                  borderRadius: '50%'
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Add New Customer', icon: '👤', color: '#0EA5E9' },
              { label: 'Create Project', icon: '🚀', color: '#10B981' },
              { label: 'Generate Quote', icon: '💰', color: '#8B5CF6' },
              { label: 'View Reports', icon: '📊', color: '#F59E0B' }
            ].map((action, index) => (
              <button
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${action.color}20`;
                  e.currentTarget.style.borderColor = `${action.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{action.icon}</span>
                <span style={{ fontWeight: '500' }}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '2fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
