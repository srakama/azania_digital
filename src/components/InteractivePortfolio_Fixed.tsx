import React, { useState, useEffect } from 'react';

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  clientName: string;
  projectUrl?: string;
  completionDate: string;
  duration: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-Commerce Platform for Local Retailer',
    category: 'E-Commerce',
    description: 'Modern online store with inventory management and payment integration',
    longDescription: 'Complete e-commerce solution built for a growing Cape Town retailer. Features include real-time inventory tracking, multiple payment gateways, customer accounts, and comprehensive admin dashboard.',
    image: '/api/placeholder/600/400',
    beforeImage: '/api/placeholder/300/200',
    afterImage: '/api/placeholder/300/200',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'PayFast'],
    features: ['Real-time Inventory', 'Payment Gateway', 'Customer Accounts', 'Admin Dashboard', 'Mobile Responsive'],
    results: [
      { metric: 'Sales Increase', value: '340%', description: 'Online sales growth in first 6 months' },
      { metric: 'Page Load Speed', value: '2.1s', description: 'Average page load time' },
      { metric: 'Mobile Traffic', value: '68%', description: 'Percentage of mobile users' }
    ],
    clientName: 'Cape Town Boutique',
    projectUrl: 'https://example-store.co.za',
    completionDate: 'March 2024',
    duration: '8 weeks'
  },
  {
    id: '2',
    title: 'Professional Services Website',
    category: 'Business Website',
    description: 'Corporate website with appointment booking and client portal',
    longDescription: 'Professional website for a consulting firm featuring online appointment booking, client portal, and content management system. Optimized for lead generation and client engagement.',
    image: '/api/placeholder/600/400',
    beforeImage: '/api/placeholder/300/200',
    afterImage: '/api/placeholder/300/200',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    features: ['Appointment Booking', 'Client Portal', 'Blog System', 'Contact Forms', 'SEO Optimized'],
    results: [
      { metric: 'Lead Generation', value: '250%', description: 'Increase in qualified leads' },
      { metric: 'Bounce Rate', value: '23%', description: 'Reduced from 67%' },
      { metric: 'Search Ranking', value: 'Top 3', description: 'For target keywords' }
    ],
    clientName: 'Professional Consulting Group',
    completionDate: 'February 2024',
    duration: '6 weeks'
  },
  {
    id: '3',
    title: 'Restaurant Online Ordering System',
    category: 'E-Commerce',
    description: 'Custom ordering platform with delivery tracking and loyalty program',
    longDescription: 'Comprehensive online ordering system for a popular restaurant chain. Includes menu management, order tracking, delivery integration, and customer loyalty program.',
    image: '/api/placeholder/600/400',
    beforeImage: '/api/placeholder/300/200',
    afterImage: '/api/placeholder/300/200',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
    features: ['Online Ordering', 'Delivery Tracking', 'Loyalty Program', 'Menu Management', 'Push Notifications'],
    results: [
      { metric: 'Order Volume', value: '180%', description: 'Increase in online orders' },
      { metric: 'Customer Retention', value: '45%', description: 'Repeat customer rate' },
      { metric: 'Average Order', value: 'R285', description: 'Average order value' }
    ],
    clientName: 'Gourmet Kitchen',
    completionDate: 'January 2024',
    duration: '10 weeks'
  },
  {
    id: '4',
    title: 'Non-Profit Organization Website',
    category: 'Non-Profit',
    description: 'Donation platform with volunteer management and event calendar',
    longDescription: 'Complete digital solution for a local non-profit organization. Features donation processing, volunteer registration, event management, and impact reporting dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Laravel', 'PayPal', 'Mailchimp'],
    features: ['Donation Processing', 'Volunteer Portal', 'Event Calendar', 'Newsletter Integration', 'Impact Dashboard'],
    results: [
      { metric: 'Donations', value: '420%', description: 'Increase in online donations' },
      { metric: 'Volunteers', value: '156', description: 'New volunteer registrations' },
      { metric: 'Events', value: '89%', description: 'Increase in event attendance' }
    ],
    clientName: 'Community Care Foundation',
    completionDate: 'December 2023',
    duration: '12 weeks'
  }
];

interface InteractivePortfolioProps {
  showTitle?: boolean;
}

const InteractivePortfolio: React.FC<InteractivePortfolioProps> = ({ showTitle = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['All', 'E-Commerce', 'Business Website', 'Non-Profit'];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (selectedCategory === 'All') {
        setFilteredProjects(portfolioProjects);
      } else {
        setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory));
      }
      setIsLoading(false);
    }, 300);
  }, [selectedCategory]);

  const openLightbox = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div style={{ padding: '4rem 0' }}>
        {showTitle && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '900',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Portfolio
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Discover our latest projects and see how we've helped businesses transform their digital presence
            </p>
          </div>
        )}

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: selectedCategory === category ? 'white' : '#64748B',
                border: selectedCategory === category ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#64748B';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {isLoading ? (
            // Loading skeleton
            [...Array(4)].map((_, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
                  borderRadius: '24px',
                  height: '500px',
                  animation: 'pulse 2s infinite'
                }}
              />
            ))
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.9) 100%)',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.12}s both`,
                  border: '3px solid transparent',
                  backgroundClip: 'padding-box',
                  backdropFilter: 'blur(25px)',
                  position: 'relative',
                  boxShadow: `
                    0 25px 70px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  transformStyle: 'preserve-3d',
                  isolation: 'isolate'
                }}
                onClick={() => openLightbox(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-25px) scale(1.08) rotateX(8deg) rotateY(2deg)';
                  e.currentTarget.style.boxShadow = `
                    0 50px 100px rgba(14, 165, 233, 0.5),
                    0 0 0 3px rgba(14, 165, 233, 0.8),
                    0 0 50px rgba(14, 165, 233, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `;
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(14, 165, 233, 0.25) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(16, 185, 129, 0.15) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = `
                    0 25px 70px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.9) 100%)';
                }}
              >
                {/* Project Image */}
                <div style={{
                  height: '320px',
                  background: `
                    linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 30%, transparent 70%, rgba(99, 102, 241, 0.1) 100%),
                    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
                    url(${project.image}) center/cover
                  `,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {project.category}
                  </div>

                  {/* Play Button */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.95) 0%, rgba(99, 102, 241, 0.95) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transform: 'translate(-50%, -50%) scale(0.5)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(20px)',
                    border: '3px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 15px 40px rgba(14, 165, 233, 0.6)',
                    cursor: 'pointer'
                  }} className="play-button">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Project Info */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'white',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#94A3B8',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: 'rgba(14, 165, 233, 0.2)',
                          color: '#0EA5E9',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '15px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span style={{
                        color: '#64748B',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem'
                      }}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
