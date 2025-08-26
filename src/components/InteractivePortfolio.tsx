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
    duration: '7 weeks'
  },
  {
    id: '5',
    title: 'Real Estate Portal',
    category: 'Business Website',
    description: 'Property listing platform with virtual tours and mortgage calculator',
    longDescription: 'Modern real estate platform featuring property listings, virtual tours, mortgage calculator, and agent management system. Integrated with MLS and social media.',
    image: '/api/placeholder/600/400',
    technologies: ['Angular', 'ASP.NET', 'SQL Server', 'Azure'],
    features: ['Property Listings', 'Virtual Tours', 'Mortgage Calculator', 'Agent Profiles', 'Search Filters'],
    results: [
      { metric: 'Property Views', value: '290%', description: 'Increase in property page views' },
      { metric: 'Lead Quality', value: '67%', description: 'Qualified leads from website' },
      { metric: 'Time on Site', value: '4.2min', description: 'Average session duration' }
    ],
    clientName: 'Premier Properties',
    completionDate: 'November 2023',
    duration: '12 weeks'
  },
  {
    id: '6',
    title: 'Educational Platform',
    category: 'Education',
    description: 'Online learning management system with video streaming and assessments',
    longDescription: 'Comprehensive learning management system for an educational institution. Features course management, video streaming, online assessments, and student progress tracking.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'WebRTC'],
    features: ['Course Management', 'Video Streaming', 'Online Assessments', 'Progress Tracking', 'Discussion Forums'],
    results: [
      { metric: 'Student Engagement', value: '85%', description: 'Course completion rate' },
      { metric: 'Video Quality', value: '1080p', description: 'HD streaming capability' },
      { metric: 'System Uptime', value: '99.9%', description: 'Platform availability' }
    ],
    clientName: 'Digital Learning Academy',
    completionDate: 'October 2023',
    duration: '14 weeks'
  }
];

const categories = ['All', 'E-Commerce', 'Business Website', 'Non-Profit', 'Education'];

interface InteractivePortfolioProps {
  showTitle?: boolean;
}

const InteractivePortfolio: React.FC<InteractivePortfolioProps> = ({ showTitle = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [isLoading, setIsLoading] = useState(false);

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

  const openLightbox = (project: PortfolioProject, imageIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      const images = [selectedProject.image];
      if (selectedProject.beforeImage) images.push(selectedProject.beforeImage);
      if (selectedProject.afterImage) images.push(selectedProject.afterImage);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const images = [selectedProject.image];
      if (selectedProject.beforeImage) images.push(selectedProject.beforeImage);
      if (selectedProject.afterImage) images.push(selectedProject.afterImage);
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
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
            Explore our recent projects and see how we've helped businesses grow online
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
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              border: 'none',
              background: selectedCategory === category 
                ? 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)'
                : 'rgba(255, 255, 255, 0.1)',
              color: selectedCategory === category ? 'white' : '#64748B',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                e.currentTarget.style.color = '#0EA5E9';
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

      {/* Ultra-Enhanced Portfolio Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative'
      }}
      className="portfolio-grid-container">
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              height: '400px',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          ))
        ) : (
          filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card ultra-interactive"
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
              {/* Animated Border Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '28px',
                padding: '3px',
                background: 'linear-gradient(45deg, #0EA5E9, #6366F1, #10B981, #F59E0B, #EF4444, #0EA5E9)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 6s ease infinite',
                opacity: 0,
                transition: 'opacity 0.6s ease',
                zIndex: -1
              }} className="animated-border" />

              {/* Floating Particles */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                borderRadius: '28px'
              }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: '4px',
                      height: '4px',
                      background: 'linear-gradient(45deg, #0EA5E9, #6366F1)',
                      borderRadius: '50%',
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: 0.6,
                      filter: 'blur(0.5px)'
                    }}
                  />
                ))}
              </div>
              {/* Hover Glow Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                borderRadius: '20px',
                pointerEvents: 'none'
              }} className="hover-glow" />

              {/* Shimmer Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transition: 'left 0.6s ease',
                pointerEvents: 'none'
              }} className="shimmer-effect" />
              {/* Ultra-Enhanced Interactive Project Image */}
              <div style={{
                height: '320px',
                background: `
                  linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 30%, transparent 70%, rgba(99, 102, 241, 0.1) 100%),
                  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
                  url(${project.image}) center/cover
                `,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.6s ease'
              }}
              className="project-image-container">
                {/* Advanced Click Ripple Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(circle at center, rgba(14, 165, 233, 0.4) 0%, rgba(99, 102, 241, 0.3) 30%, transparent 70%),
                    radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
                  `,
                  opacity: 0,
                  transform: 'scale(0)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'none'
                }} className="click-ripple" />

                {/* Multi-Layer Interactive Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(16, 185, 129, 0.15) 100%)',
                  opacity: 0,
                  transition: 'all 0.5s ease'
                }} className="image-overlay" />

                {/* Scanning Line Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.8s ease',
                  pointerEvents: 'none'
                }} className="scan-line" />

                {/* Hexagonal Pattern Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 2px, transparent 2px),
                    radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 2px, transparent 2px)
                  `,
                  backgroundSize: '40px 40px',
                  opacity: 0,
                  transition: 'opacity 0.5s ease'
                }} className="pattern-overlay" />

                {/* Enhanced Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                  color: 'white',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '30px',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 8px 25px rgba(14, 165, 233, 0.4)',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease'
                }} className="category-badge">
                  {project.category}
                </div>

                {/* Ultra-Enhanced Clickable Play Button */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100px',
                  height: '100px',
                  background: `
                    linear-gradient(135deg, rgba(14, 165, 233, 0.98) 0%, rgba(99, 102, 241, 0.95) 50%, rgba(16, 185, 129, 0.92) 100%),
                    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
                  `,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transform: 'translate(-50%, -50%) scale(0.3)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(25px)',
                  border: '4px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: `
                    0 20px 50px rgba(14, 165, 233, 0.7),
                    0 0 0 0 rgba(14, 165, 233, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                  cursor: 'pointer',
                  zIndex: 10
                }} className="play-button">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white" style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                    marginLeft: '4px'
                  }}>
                    <path d="M8 5v14l11-7z"/>
                  </svg>

                  {/* Multiple Pulse Rings */}
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '-15px',
                    right: '-15px',
                    bottom: '-15px',
                    border: '3px solid rgba(14, 165, 233, 0.6)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '-25px',
                    right: '-25px',
                    bottom: '-25px',
                    border: '2px solid rgba(99, 102, 241, 0.4)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite 0.5s'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '-35px',
                    left: '-35px',
                    right: '-35px',
                    bottom: '-35px',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite 1s'
                  }} />

                  {/* Rotating Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    background: 'conic-gradient(from 0deg, transparent, rgba(14, 165, 233, 0.3), transparent)',
                    borderRadius: '50%',
                    animation: 'rotate 4s linear infinite',
                    opacity: 0.7
                  }} />
                </div>

                {/* Click Here Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  opacity: 0,
                  transform: 'translateX(-50%) translateY(20px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} className="click-indicator">
                  🔍 Click to View Details
                </div>

                {/* Enhanced Title Section */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.95))',
                  padding: '4rem 2rem 2rem',
                  color: 'white'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    marginBottom: '0.75rem',
                    lineHeight: '1.2',
                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease'
                  }} className="project-title">
                    {project.title}
                  </h3>

                  {/* Enhanced View Project Indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    color: '#0EA5E9',
                    fontWeight: '700',
                    opacity: 0,
                    transform: 'translateY(15px)',
                    transition: 'all 0.4s ease'
                  }} className="view-indicator">
                    <span>👆 Click to Explore</span>
                    <div style={{
                      width: '30px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #0EA5E9, #6366F1)',
                      borderRadius: '1px'
                    }} />
                  </div>
                </div>
              </div>

              {/* Ultra-Enhanced Project Info */}
              <div style={{
                padding: '2.5rem',
                background: `
                  linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(51, 65, 85, 0.85) 100%),
                  radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)
                `,
                backdropFilter: 'blur(15px)',
                borderTop: '2px solid rgba(14, 165, 233, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Animated Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `
                    linear-gradient(45deg, rgba(14, 165, 233, 0.02) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(99, 102, 241, 0.02) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(14, 165, 233, 0.02) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(99, 102, 241, 0.02) 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  opacity: 0.5,
                  animation: 'patternMove 20s linear infinite'
                }} />
                <p style={{
                  color: '#CBD5E1',
                  marginBottom: '1.5rem',
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  fontWeight: '400'
                }}>
                  {project.description}
                </p>

                {/* Enhanced Technologies */}
                <div style={{
                  marginBottom: '1.5rem'
                }}>
                  <h4 style={{
                    color: '#F1F5F9',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Technology Stack
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        style={{
                          background: `
                            linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(16, 185, 129, 0.15) 100%),
                            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                          `,
                          color: '#0EA5E9',
                          padding: '0.75rem 1.25rem',
                          borderRadius: '25px',
                          fontSize: '0.8rem',
                          fontWeight: '800',
                          border: '2px solid rgba(14, 165, 233, 0.4)',
                          backdropFilter: 'blur(10px)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.8px',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)',
                          animation: `techFloat ${2 + techIndex * 0.5}s ease-in-out infinite`,
                          animationDelay: `${techIndex * 0.2}s`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `
                            linear-gradient(135deg, rgba(14, 165, 233, 0.5) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(16, 185, 129, 0.3) 100%),
                            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
                          `;
                          e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.4)';
                          e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.8)';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `
                            linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(16, 185, 129, 0.15) 100%),
                            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                          `;
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.2)';
                          e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
                          e.currentTarget.style.color = '#0EA5E9';
                        }}
                      >
                        {/* Shimmer Effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                          transition: 'left 0.6s ease'
                        }} className="tech-shimmer" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Section */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                    }} />
                    <span style={{
                      color: '#10B981',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Successfully Delivered
                    </span>
                  </div>

                  <button
                    style={{
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.875rem 2rem',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(project);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(14, 165, 233, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.3)';
                    }}
                  >
                    🚀 Explore Project
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {isLightboxOpen && selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.4s ease-out',
            overflowY: 'auto'
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
              borderRadius: '24px',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '95vh',
              overflow: 'auto',
              position: 'relative',
              border: '2px solid rgba(14, 165, 233, 0.3)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              animation: 'zoomIn 0.4s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                fontSize: '1.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 1) 0%, rgba(220, 38, 38, 1) 100%)';
                e.currentTarget.style.transform = 'scale(1.15) rotate(90deg)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(239, 68, 68, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.3)';
              }}
            >
              ×
            </button>

            {/* Enhanced Project Header */}
            <div style={{
              padding: '3rem 3rem 2rem',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)',
                  color: '#0EA5E9',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(14, 165, 233, 0.4)',
                  backdropFilter: 'blur(10px)'
                }}>
                  {selectedProject.category}
                </span>
                <span style={{
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {selectedProject.completionDate} • {selectedProject.duration}
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #ffffff 0%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                {selectedProject.title}
              </h2>

              <p style={{
                fontSize: '1.25rem',
                color: '#E2E8F0',
                lineHeight: '1.7',
                marginBottom: '2rem',
                fontWeight: '400'
              }}>
                {selectedProject.longDescription}
              </p>

              {/* Enhanced Client & URL Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem 1.5rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <span style={{
                    color: '#94A3B8',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '600'
                  }}>
                    Client:
                  </span>
                  <span style={{
                    color: 'white',
                    fontWeight: '700',
                    marginLeft: '0.75rem',
                    fontSize: '1rem'
                  }}>
                    {selectedProject.clientName}
                  </span>
                </div>
                {selectedProject.projectUrl && (
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '700',
                      padding: '1rem 2rem',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(14, 165, 233, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.3)';
                    }}
                  >
                    🌐 View Live Site
                  </a>
                )}
              </div>
            </div>

            {/* Enhanced Project Image Gallery */}
            <div style={{
              padding: '0 3rem 3rem',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(14, 165, 233, 0.02) 100%)'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: '3rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Image Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 50%, rgba(99, 102, 241, 0.1) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Before/After Images */}
                {(selectedProject.beforeImage || selectedProject.afterImage) && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginTop: '1rem'
                  }}>
                    {selectedProject.beforeImage && (
                      <div>
                        <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Before</h4>
                        <img
                          src={selectedProject.beforeImage}
                          alt="Before"
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                        />
                      </div>
                    )}
                    {selectedProject.afterImage && (
                      <div>
                        <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.875rem' }}>After</h4>
                        <img
                          src={selectedProject.afterImage}
                          alt="After"
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Project Details Grid */}
            <div style={{ padding: '0 3rem 3rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {/* Technologies */}
                <div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    Technologies Used
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: 'rgba(14, 165, 233, 0.2)',
                          color: '#38BDF8',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    Key Features
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          color: '#CBD5E1',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: '#10B981' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Project Results
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  {selectedProject.results.map((result, index) => (
                    <div
                      key={index}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        textAlign: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '900',
                        color: '#10B981',
                        marginBottom: '0.5rem'
                      }}>
                        {result.value}
                      </div>
                      <div style={{
                        color: 'white',
                        fontWeight: '600',
                        marginBottom: '0.25rem'
                      }}>
                        {result.metric}
                      </div>
                      <div style={{
                        color: '#94A3B8',
                        fontSize: '0.875rem'
                      }}>
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Ultra-Enhanced CSS Styles */}
      <style>{`
        .portfolio-grid-container {
          perspective: 2000px;
        }

        .portfolio-card {
          perspective: 1500px;
          transform-style: preserve-3d;
        }

        .ultra-interactive:hover .animated-border {
          opacity: 1 !important;
        }

        .portfolio-card:hover .hover-glow {
          opacity: 1 !important;
        }

        .portfolio-card:hover .shimmer-effect,
        .portfolio-card:hover .scan-line {
          left: 100% !important;
        }

        .portfolio-card:hover .image-overlay {
          opacity: 1 !important;
        }

        .portfolio-card:hover .pattern-overlay {
          opacity: 1 !important;
        }

        .portfolio-card:hover .view-indicator {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .portfolio-card:hover .play-button {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }

        .portfolio-card:hover .click-indicator {
          opacity: 1 !important;
          transform: translateX(-50%) translateY(0) !important;
        }

        .portfolio-card:hover .category-badge {
          transform: translateY(-8px) scale(1.05) !important;
        }

        .portfolio-card:hover .project-title {
          transform: translateY(-8px) !important;
        }

        .portfolio-card:hover .click-ripple {
          opacity: 1 !important;
          transform: scale(2) !important;
        }

        .portfolio-card:hover .tech-shimmer {
          left: 100% !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(20deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(-8px) translateX(-3px);
          }
          75% {
            transform: translateY(-12px) translateX(8px);
          }
        }

        @keyframes techFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes patternMove {
          0% {
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          }
          100% {
            background-position: 20px 20px, 20px 30px, 30px 10px, 10px 20px;
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotateY(20deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        /* Advanced Click Feedback */
        @keyframes clickFeedback {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(0.95) rotateZ(-1deg);
          }
          50% {
            transform: scale(0.98) rotateZ(1deg);
          }
          100% {
            transform: scale(1) rotateZ(0deg);
          }
        }

        .portfolio-card:active {
          animation: clickFeedback 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Glowing Border Animation */
        @keyframes glowBorder {
          0%, 100% {
            box-shadow: 0 0 5px rgba(14, 165, 233, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.6), 0 0 30px rgba(99, 102, 241, 0.4);
          }
        }

        .portfolio-card:focus-within {
          animation: glowBorder 2s ease-in-out infinite;
        }

        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
          .portfolio-grid-container {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .portfolio-grid-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 0 1rem !important;
          }

          .portfolio-card {
            max-width: 450px;
            margin: 0 auto;
          }

          .portfolio-card:hover {
            transform: translateY(-15px) scale(1.03) !important;
          }

          .project-image-container {
            height: 280px !important;
          }

          .play-button {
            width: 80px !important;
            height: 80px !important;
          }
        }

        @media (max-width: 480px) {
          .portfolio-card {
            max-width: 100%;
            margin: 0;
          }

          .portfolio-card:hover {
            transform: translateY(-10px) scale(1.02) !important;
          }

          .project-image-container {
            height: 250px !important;
          }

          .play-button {
            width: 70px !important;
            height: 70px !important;
          }

          .ultra-interactive {
            border-radius: 20px !important;
          }
        }

        /* Dark Mode Enhancements */
        @media (prefers-color-scheme: dark) {
          .portfolio-card {
            box-shadow:
              0 25px 70px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
          }
        }

        /* High Performance Mode */
        @media (prefers-reduced-motion: reduce) {
          .portfolio-card,
          .play-button,
          .tech-shimmer,
          .scan-line {
            animation: none !important;
            transition: none !important;
          }
        }

        /* Print Styles */
        @media print {
          .portfolio-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 2px solid #333 !important;
          }
        }
      `}</style>
    </>
  );
};

export default InteractivePortfolio;
