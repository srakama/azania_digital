import React, { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  startDate: Date;
  dueDate: Date;
  budget: number;
  spent: number;
  team: string[];
  description: string;
  technologies: string[];
}

const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mock project data
  useEffect(() => {
    const loadProjects = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockProjects: Project[] = [
        {
          id: '1',
          name: 'E-commerce Platform Redesign',
          client: 'Fashion Boutique',
          status: 'in-progress',
          priority: 'high',
          progress: 75,
          startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
          dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
          budget: 45000,
          spent: 33750,
          team: ['John Doe', 'Jane Smith', 'Mike Wilson'],
          description: 'Complete redesign of the e-commerce platform with modern UI/UX',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
          id: '2',
          name: 'Restaurant Ordering System',
          client: 'Local Restaurant Chain',
          status: 'planning',
          priority: 'medium',
          progress: 15,
          startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
          dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 45),
          budget: 35000,
          spent: 5250,
          team: ['Sarah Johnson', 'Tom Brown'],
          description: 'Online ordering system with payment integration and delivery tracking',
          technologies: ['Next.js', 'PostgreSQL', 'PayFast', 'React Native']
        },
        {
          id: '3',
          name: 'Corporate Website',
          client: 'Tech Solutions Ltd',
          status: 'review',
          priority: 'low',
          progress: 95,
          startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45),
          dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
          budget: 25000,
          spent: 23750,
          team: ['Lisa Chen', 'David Kim'],
          description: 'Professional corporate website with CMS integration',
          technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme']
        },
        {
          id: '4',
          name: 'Mobile App Development',
          client: 'Business Consulting',
          status: 'completed',
          priority: 'high',
          progress: 100,
          startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
          dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
          budget: 60000,
          spent: 58000,
          team: ['Alex Rodriguez', 'Emma Thompson', 'Chris Lee'],
          description: 'Cross-platform mobile app for business management',
          technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript']
        },
        {
          id: '5',
          name: 'SEO Optimization Project',
          client: 'Fashion Boutique',
          status: 'on-hold',
          priority: 'medium',
          progress: 40,
          startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
          budget: 15000,
          spent: 6000,
          team: ['Marketing Team'],
          description: 'Comprehensive SEO optimization and content strategy',
          technologies: ['SEO Tools', 'Analytics', 'Content Management']
        }
      ];

      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(project => project.status === statusFilter);
    }

    if (priorityFilter !== 'all') {
      filtered = filtered.filter(project => project.priority === priorityFilter);
    }

    setFilteredProjects(filtered);
  }, [projects, statusFilter, priorityFilter]);

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
      case 'planning': return '#F59E0B';
      case 'in-progress': return '#0EA5E9';
      case 'review': return '#8B5CF6';
      case 'completed': return '#10B981';
      case 'on-hold': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return '#10B981';
      case 'medium': return '#F59E0B';
      case 'high': return '#EF4444';
      case 'urgent': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'planning': return 'Planning';
      case 'in-progress': return 'In Progress';
      case 'review': return 'Review';
      case 'completed': return 'Completed';
      case 'on-hold': return 'On Hold';
      default: return status;
    }
  };

  const getDaysUntilDue = (dueDate: Date) => {
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
            Project Management
          </h1>
          <p style={{
            color: '#94A3B8',
            fontSize: '1rem'
          }}>
            Track and manage all your projects in one place
          </p>
        </div>
        <button
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '0.75rem 1.5rem',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
          }}
        >
          🚀 New Project
        </button>
      </div>

      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
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
          <option value="planning">Planning</option>
          <option value="in-progress">In Progress</option>
          <option value="review">Review</option>
          <option value="completed">Completed</option>
          <option value="on-hold">On Hold</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
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
          <option value="all">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      {/* Project Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {[
          {
            label: 'Total Projects',
            value: projects.length.toString(),
            color: '#0EA5E9'
          },
          {
            label: 'In Progress',
            value: projects.filter(p => p.status === 'in-progress').length.toString(),
            color: '#0EA5E9'
          },
          {
            label: 'Completed',
            value: projects.filter(p => p.status === 'completed').length.toString(),
            color: '#10B981'
          },
          {
            label: 'Total Budget',
            value: formatCurrency(projects.reduce((sum, p) => sum + p.budget, 0)),
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

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredProjects.map((project) => {
          const daysUntilDue = getDaysUntilDue(project.dueDate);
          const isOverdue = daysUntilDue < 0;
          const isDueSoon = daysUntilDue <= 7 && daysUntilDue >= 0;

          return (
            <div
              key={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
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
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    marginBottom: '0.25rem'
                  }}>
                    {project.name}
                  </h3>
                  <p style={{
                    color: '#94A3B8',
                    fontSize: '0.875rem'
                  }}>
                    {project.client}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    background: `${getStatusColor(project.status)}20`,
                    color: getStatusColor(project.status),
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {getStatusLabel(project.status)}
                  </span>
                  <span style={{
                    background: `${getPriorityColor(project.priority)}20`,
                    color: getPriorityColor(project.priority),
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {project.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    color: '#CBD5E1',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Progress
                  </span>
                  <span style={{
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {project.progress}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${project.progress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${getStatusColor(project.status)}, ${getStatusColor(project.status)}dd)`,
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* Project Details */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <div style={{
                    color: '#94A3B8',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>
                    Budget
                  </div>
                  <div style={{
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {formatCurrency(project.budget)}
                  </div>
                </div>
                <div>
                  <div style={{
                    color: '#94A3B8',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>
                    Due Date
                  </div>
                  <div style={{
                    color: isOverdue ? '#EF4444' : isDueSoon ? '#F59E0B' : 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {formatDate(project.dueDate)}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(14, 165, 233, 0.2)',
                      color: '#38BDF8',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span style={{
                    color: '#94A3B8',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem'
                  }}>
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectManagement;
