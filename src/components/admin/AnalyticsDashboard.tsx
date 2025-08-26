import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  websiteTraffic: {
    totalVisitors: number;
    uniqueVisitors: number;
    pageViews: number;
    bounceRate: number;
    avgSessionDuration: number;
    topPages: { page: string; views: number }[];
  };
  businessMetrics: {
    totalRevenue: number;
    monthlyGrowth: number;
    conversionRate: number;
    avgProjectValue: number;
    customerRetention: number;
  };
  leadGeneration: {
    totalLeads: number;
    qualifiedLeads: number;
    conversionRate: number;
    leadSources: { source: string; count: number; percentage: number }[];
  };
  projectMetrics: {
    activeProjects: number;
    completedThisMonth: number;
    averageCompletionTime: number;
    clientSatisfaction: number;
  };
}

const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  useEffect(() => {
    const loadAnalyticsData = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockData: AnalyticsData = {
        websiteTraffic: {
          totalVisitors: 12847,
          uniqueVisitors: 9234,
          pageViews: 28456,
          bounceRate: 32.5,
          avgSessionDuration: 245, // seconds
          topPages: [
            { page: '/services', views: 5234 },
            { page: '/', views: 4567 },
            { page: '/pricing', views: 3456 },
            { page: '/about', views: 2345 },
            { page: '/contact', views: 1890 }
          ]
        },
        businessMetrics: {
          totalRevenue: 485000,
          monthlyGrowth: 18.5,
          conversionRate: 12.8,
          avgProjectValue: 32500,
          customerRetention: 87.5
        },
        leadGeneration: {
          totalLeads: 156,
          qualifiedLeads: 89,
          conversionRate: 57.1,
          leadSources: [
            { source: 'Organic Search', count: 67, percentage: 43.0 },
            { source: 'Social Media', count: 34, percentage: 21.8 },
            { source: 'Direct Traffic', count: 28, percentage: 17.9 },
            { source: 'Referrals', count: 18, percentage: 11.5 },
            { source: 'Paid Ads', count: 9, percentage: 5.8 }
          ]
        },
        projectMetrics: {
          activeProjects: 8,
          completedThisMonth: 12,
          averageCompletionTime: 45, // days
          clientSatisfaction: 94.2
        }
      };

      setAnalyticsData(mockData);
      setIsLoading(false);
    };

    loadAnalyticsData();
  }, [selectedTimeRange]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
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

  if (!analyticsData) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        color: 'white'
      }}>
        <div>
          <h2>Analytics Dashboard</h2>
          <p>Loading analytics data...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: 'white',
            marginBottom: '0.5rem'
          }}>
            Analytics Dashboard
          </h1>
          <p style={{
            color: '#94A3B8',
            fontSize: '1rem'
          }}>
            Comprehensive insights into your business performance
          </p>
        </div>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            color: 'white',
            fontSize: '0.875rem',
            outline: 'none'
          }}
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Key Metrics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {[
          {
            title: 'Total Revenue',
            value: formatCurrency(analyticsData.businessMetrics.totalRevenue),
            change: `+${analyticsData.businessMetrics.monthlyGrowth}%`,
            icon: '💰',
            color: '#10B981'
          },
          {
            title: 'Website Visitors',
            value: analyticsData.websiteTraffic.totalVisitors.toLocaleString(),
            change: '+24%',
            icon: '👥',
            color: '#0EA5E9'
          },
          {
            title: 'Conversion Rate',
            value: `${analyticsData.businessMetrics.conversionRate}%`,
            change: '+3.2%',
            icon: '📈',
            color: '#8B5CF6'
          },
          {
            title: 'Client Satisfaction',
            value: `${analyticsData.projectMetrics.clientSatisfaction}%`,
            change: '+2.1%',
            icon: '⭐',
            color: '#F59E0B'
          }
        ].map((metric, index) => (
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
                background: `${metric.color}20`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {metric.icon}
              </div>
              <div style={{
                background: `${metric.color}20`,
                color: metric.color,
                padding: '0.25rem 0.5rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {metric.change}
              </div>
            </div>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '0.25rem'
            }}>
              {metric.value}
            </div>
            <div style={{
              color: '#94A3B8',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {metric.title}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Website Traffic */}
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
            Website Traffic Overview
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {[
              { label: 'Total Visitors', value: analyticsData.websiteTraffic.totalVisitors.toLocaleString() },
              { label: 'Unique Visitors', value: analyticsData.websiteTraffic.uniqueVisitors.toLocaleString() },
              { label: 'Page Views', value: analyticsData.websiteTraffic.pageViews.toLocaleString() },
              { label: 'Bounce Rate', value: `${analyticsData.websiteTraffic.bounceRate}%` },
              { label: 'Avg. Session', value: formatDuration(analyticsData.websiteTraffic.avgSessionDuration) }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0EA5E9',
                  marginBottom: '0.25rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  color: '#94A3B8',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Top Pages */}
          <div>
            <h4 style={{
              color: '#CBD5E1',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Top Pages
            </h4>
            {analyticsData.websiteTraffic.topPages.map((page, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}
              >
                <span style={{ color: '#E2E8F0', fontWeight: '500' }}>
                  {page.page}
                </span>
                <span style={{ color: '#0EA5E9', fontWeight: '600' }}>
                  {page.views.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Sources */}
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
            Lead Sources
          </h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#10B981',
                  marginBottom: '0.25rem'
                }}>
                  {analyticsData.leadGeneration.totalLeads}
                </div>
                <div style={{
                  color: '#94A3B8',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  Total Leads
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#8B5CF6',
                  marginBottom: '0.25rem'
                }}>
                  {analyticsData.leadGeneration.qualifiedLeads}
                </div>
                <div style={{
                  color: '#94A3B8',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  Qualified
                </div>
              </div>
            </div>
          </div>

          {analyticsData.leadGeneration.leadSources.map((source, index) => (
            <div
              key={index}
              style={{
                marginBottom: '1rem'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <span style={{
                  color: '#E2E8F0',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {source.source}
                </span>
                <span style={{
                  color: '#94A3B8',
                  fontSize: '0.875rem'
                }}>
                  {source.count} ({source.percentage}%)
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${source.percentage}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, #0EA5E9, #3B82F6)`,
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Metrics */}
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
          Project Performance
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              label: 'Active Projects',
              value: analyticsData.projectMetrics.activeProjects.toString(),
              icon: '🚀',
              color: '#0EA5E9'
            },
            {
              label: 'Completed This Month',
              value: analyticsData.projectMetrics.completedThisMonth.toString(),
              icon: '✅',
              color: '#10B981'
            },
            {
              label: 'Avg. Completion Time',
              value: `${analyticsData.projectMetrics.averageCompletionTime} days`,
              icon: '⏱️',
              color: '#F59E0B'
            },
            {
              label: 'Client Satisfaction',
              value: `${analyticsData.projectMetrics.clientSatisfaction}%`,
              icon: '⭐',
              color: '#8B5CF6'
            }
          ].map((metric, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                {metric.icon}
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: metric.color,
                marginBottom: '0.25rem'
              }}>
                {metric.value}
              </div>
              <div style={{
                color: '#94A3B8',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {metric.label}
              </div>
            </div>
          ))}
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

export default AnalyticsDashboard;
