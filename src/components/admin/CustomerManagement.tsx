import React, { useState, useEffect } from 'react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'prospect';
  totalProjects: number;
  totalSpent: number;
  lastContact: Date;
  joinDate: Date;
  notes: string;
}

const CustomerManagement: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock customer data
  useEffect(() => {
    const loadCustomers = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockCustomers: Customer[] = [
        {
          id: '1',
          name: 'John Smith',
          email: 'john@example.com',
          phone: '+27 82 123 4567',
          company: 'Tech Solutions Ltd',
          status: 'active',
          totalProjects: 3,
          totalSpent: 45000,
          lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
          joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
          notes: 'Great client, always pays on time'
        },
        {
          id: '2',
          name: 'Sarah Johnson',
          email: 'sarah@boutique.co.za',
          phone: '+27 83 987 6543',
          company: 'Fashion Boutique',
          status: 'active',
          totalProjects: 2,
          totalSpent: 28000,
          lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
          joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
          notes: 'Interested in e-commerce expansion'
        },
        {
          id: '3',
          name: 'Mike Wilson',
          email: 'mike@restaurant.co.za',
          phone: '+27 84 555 1234',
          company: 'Local Restaurant Chain',
          status: 'prospect',
          totalProjects: 0,
          totalSpent: 0,
          lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1),
          joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
          notes: 'Requested quote for online ordering system'
        },
        {
          id: '4',
          name: 'Lisa Chen',
          email: 'lisa@consulting.co.za',
          phone: '+27 85 777 8888',
          company: 'Business Consulting',
          status: 'inactive',
          totalProjects: 1,
          totalSpent: 12000,
          lastContact: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
          joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 180),
          notes: 'Project completed, no current needs'
        }
      ];

      setCustomers(mockCustomers);
      setFilteredCustomers(mockCustomers);
      setIsLoading(false);
    };

    loadCustomers();
  }, []);

  // Filter customers based on search and status
  useEffect(() => {
    let filtered = customers;

    if (searchTerm) {
      filtered = filtered.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(customer => customer.status === statusFilter);
    }

    setFilteredCustomers(filtered);
  }, [customers, searchTerm, statusFilter]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'inactive': return '#6B7280';
      case 'prospect': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'inactive': return 'Inactive';
      case 'prospect': return 'Prospect';
      default: return status;
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
            Customer Management
          </h1>
          <p style={{
            color: '#94A3B8',
            fontSize: '1rem'
          }}>
            Manage your clients and track their project history
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '0.75rem 1.5rem',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
          }}
        >
          👤 Add Customer
        </button>
      </div>

      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            minWidth: '300px',
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            color: 'white',
            fontSize: '0.875rem',
            outline: 'none'
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
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
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="prospect">Prospect</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Customer Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {[
          {
            label: 'Total Customers',
            value: customers.length.toString(),
            color: '#0EA5E9'
          },
          {
            label: 'Active Customers',
            value: customers.filter(c => c.status === 'active').length.toString(),
            color: '#10B981'
          },
          {
            label: 'Prospects',
            value: customers.filter(c => c.status === 'prospect').length.toString(),
            color: '#F59E0B'
          },
          {
            label: 'Total Revenue',
            value: formatCurrency(customers.reduce((sum, c) => sum + c.totalSpent, 0)),
            color: '#8B5CF6'
          }
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: stat.color,
              marginBottom: '0.25rem'
            }}>
              {stat.value}
            </div>
            <div style={{
              color: '#94A3B8',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Customer Table */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {['Name', 'Company', 'Status', 'Projects', 'Total Spent', 'Last Contact', 'Actions'].map((header) => (
                  <th key={header} style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#E2E8F0',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <td style={{ padding: '1rem' }}>
                    <div>
                      <div style={{
                        color: 'white',
                        fontWeight: '600',
                        marginBottom: '0.25rem'
                      }}>
                        {customer.name}
                      </div>
                      <div style={{
                        color: '#94A3B8',
                        fontSize: '0.875rem'
                      }}>
                        {customer.email}
                      </div>
                    </div>
                  </td>
                  <td style={{
                    padding: '1rem',
                    color: '#CBD5E1'
                  }}>
                    {customer.company}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      background: `${getStatusColor(customer.status)}20`,
                      color: getStatusColor(customer.status),
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {getStatusLabel(customer.status)}
                    </span>
                  </td>
                  <td style={{
                    padding: '1rem',
                    color: '#CBD5E1'
                  }}>
                    {customer.totalProjects}
                  </td>
                  <td style={{
                    padding: '1rem',
                    color: '#CBD5E1',
                    fontWeight: '600'
                  }}>
                    {formatCurrency(customer.totalSpent)}
                  </td>
                  <td style={{
                    padding: '1rem',
                    color: '#94A3B8',
                    fontSize: '0.875rem'
                  }}>
                    {formatDate(customer.lastContact)}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCustomer(customer);
                      }}
                      style={{
                        background: 'rgba(14, 165, 233, 0.2)',
                        border: '1px solid rgba(14, 165, 233, 0.3)',
                        borderRadius: '6px',
                        padding: '0.5rem 0.75rem',
                        color: '#38BDF8',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CustomerManagement;
