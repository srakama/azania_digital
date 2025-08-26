import React, { useState } from 'react';
import { OptimizedImage } from './PerformanceOptimizer';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  technologies: string[];
  timeline: string;
  budget: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  images: {
    before: string;
    after: string;
    mobile: string;
  };
  liveUrl?: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "TechStart Solutions",
    industry: "Technology Retail",
    challenge: "Outdated e-commerce platform with poor mobile experience, slow loading times, and low conversion rates. The existing system couldn't handle peak traffic and had security vulnerabilities.",
    solution: "Complete platform rebuild using React, TypeScript, and modern e-commerce architecture. Implemented progressive web app features, advanced caching, and mobile-first design with seamless checkout experience.",
    results: [
      { metric: "Conversion Rate", value: "8.4%", improvement: "+340%" },
      { metric: "Page Load Time", value: "1.2s", improvement: "-75%" },
      { metric: "Mobile Sales", value: "65%", improvement: "+180%" },
      { metric: "Cart Abandonment", value: "22%", improvement: "-58%" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Stripe", "PWA"],
    timeline: "12 weeks",
    budget: "R85,000 - R120,000",
    testimonial: {
      quote: "AzaniaDigital transformed our business completely. The new platform not only looks amazing but has tripled our online sales. The team's expertise in modern web technologies is unmatched.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Solutions"
    },
    images: {
      before: "🛒",
      after: "🚀",
      mobile: "📱"
    },
    liveUrl: "https://techstartsolutions.co.za",
    featured: true
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    client: "GreenTech Innovations",
    industry: "Renewable Energy",
    challenge: "Corporate website lacked modern design, had poor SEO performance, and didn't effectively communicate their innovative solutions. Lead generation was minimal.",
    solution: "Modern, responsive website with focus on user experience, SEO optimization, and lead generation. Implemented advanced animations, interactive elements, and comprehensive content strategy.",
    results: [
      { metric: "Organic Traffic", value: "450%", improvement: "+350%" },
      { metric: "Lead Generation", value: "28/month", improvement: "+600%" },
      { metric: "Bounce Rate", value: "18%", improvement: "-65%" },
      { metric: "Page Speed Score", value: "98/100", improvement: "+120%" }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Framer Motion", "SEO"],
    timeline: "8 weeks",
    budget: "R45,000 - R65,000",
    testimonial: {
      quote: "The new website perfectly captures our innovative spirit. We've seen a massive increase in qualified leads and our brand presence has never been stronger.",
      author: "Michael Chen",
      role: "CTO, GreenTech Innovations"
    },
    images: {
      before: "🌱",
      after: "⚡",
      mobile: "💚"
    },
    liveUrl: "https://greentechinnovations.co.za",
    featured: true
  },
  {
    id: 3,
    title: "Creative Portfolio Platform",
    client: "Creative Studios SA",
    industry: "Design & Marketing",
    challenge: "Needed a stunning portfolio platform to showcase creative work, attract high-end clients, and establish thought leadership in the creative industry.",
    solution: "Custom-built portfolio platform with advanced image galleries, smooth animations, and integrated blog. Focus on visual storytelling and user engagement.",
    results: [
      { metric: "Client Inquiries", value: "85/month", improvement: "+420%" },
      { metric: "Project Value", value: "R45k avg", improvement: "+200%" },
      { metric: "Time on Site", value: "4.2 min", improvement: "+180%" },
      { metric: "Social Shares", value: "1,200/month", improvement: "+350%" }
    ],
    technologies: ["React", "TypeScript", "Three.js", "GSAP", "CMS"],
    timeline: "10 weeks",
    budget: "R55,000 - R75,000",
    testimonial: {
      quote: "Our new portfolio site is a work of art itself. It perfectly showcases our creativity and has attracted premium clients we never thought possible.",
      author: "Priya Patel",
      role: "Creative Director, Creative Studios SA"
    },
    images: {
      before: "🎨",
      after: "✨",
      mobile: "🎭"
    },
    liveUrl: "https://creativestudiossa.co.za",
    featured: false
  }
];

const CaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredStudies = filter === 'featured' 
    ? caseStudies.filter(study => study.featured)
    : caseStudies;

  const openModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedStudy(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
      padding: '6rem 2rem',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
        `,
        opacity: 0.6
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '50px',
            padding: '0.5rem 1.5rem',
            marginBottom: '2rem',
            color: '#38BDF8',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <span style={{ fontSize: '1rem' }}>📊</span>
            Success Stories
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '1.5rem',
            color: '#FFFFFF',
            lineHeight: '1.2'
          }}>
            Real Results for <span style={{
              background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Real Businesses</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: '#CBD5E1',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            See how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                background: filter === 'all' 
                  ? 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)' 
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                background: filter === 'featured' 
                  ? 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)' 
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => openModal(study)}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {study.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  Featured
                </div>
              )}

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                  borderRadius: '12px',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {study.images.after}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    marginBottom: '0.25rem'
                  }}>
                    {study.title}
                  </h3>
                  <p style={{
                    color: '#0EA5E9',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {study.client} • {study.industry}
                  </p>
                </div>
              </div>

              <p style={{
                color: '#CBD5E1',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {study.challenge.substring(0, 120)}...
              </p>

              {/* Key Results */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {study.results.slice(0, 2).map((result, index) => (
                  <div key={index} style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#10B981',
                      marginBottom: '0.25rem'
                    }}>
                      {result.improvement}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#94A3B8'
                    }}>
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                {study.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#A5B4FC',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {study.technologies.length > 3 && (
                  <span style={{
                    color: '#64748B',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem'
                  }}>
                    +{study.technologies.length - 3} more
                  </span>
                )}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#64748B',
                fontSize: '0.75rem'
              }}>
                <span>{study.timeline}</span>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  color: '#0EA5E9',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontWeight: '600'
                }}>
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Modal for detailed case study */}
      {selectedStudy && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
              borderRadius: '20px',
              padding: '3rem',
              maxWidth: '800px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}>
              {selectedStudy.title}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {selectedStudy.results.map((result, index) => (
                <div key={index} style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#10B981',
                    marginBottom: '0.5rem'
                  }}>
                    {result.improvement}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#94A3B8',
                    marginBottom: '0.25rem'
                  }}>
                    {result.metric}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#FFFFFF',
                    fontWeight: '600'
                  }}>
                    {result.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Challenge</h3>
              <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>{selectedStudy.challenge}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Solution</h3>
              <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>{selectedStudy.solution}</p>
            </div>

            <blockquote style={{
              background: 'rgba(14, 165, 233, 0.1)',
              borderLeft: '4px solid #0EA5E9',
              padding: '1.5rem',
              borderRadius: '8px',
              fontStyle: 'italic',
              color: '#E2E8F0',
              marginBottom: '2rem'
            }}>
              "{selectedStudy.testimonial.quote}"
              <footer style={{
                marginTop: '1rem',
                fontSize: '0.875rem',
                color: '#94A3B8'
              }}>
                — {selectedStudy.testimonial.author}, {selectedStudy.testimonial.role}
              </footer>
            </blockquote>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <strong style={{ color: '#FFFFFF' }}>Timeline:</strong>
                <span style={{ color: '#CBD5E1', marginLeft: '0.5rem' }}>{selectedStudy.timeline}</span>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF' }}>Budget:</strong>
                <span style={{ color: '#CBD5E1', marginLeft: '0.5rem' }}>{selectedStudy.budget}</span>
              </div>
              {selectedStudy.liveUrl && (
                <a
                  href={selectedStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  View Live Site →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
