import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  projectType: string;
  results: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    role: "CEO & Founder",
    content: "AzaniaDigital transformed our vision into a stunning, high-performance website. Their attention to detail and technical expertise exceeded our expectations. Our conversion rate increased by 340% within the first month!",
    rating: 5,
    image: "👩‍💼",
    projectType: "E-commerce Platform",
    results: "340% increase in conversions"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "GreenTech Innovations",
    role: "CTO",
    content: "The team's React and TypeScript expertise is outstanding. They delivered a complex web application on time and within budget. The code quality and performance optimizations are top-notch.",
    rating: 5,
    image: "👨‍💻",
    projectType: "Custom Web Application",
    results: "50% faster load times"
  },
  {
    id: 3,
    name: "Priya Patel",
    company: "Creative Studios SA",
    role: "Marketing Director",
    content: "Professional, responsive, and incredibly talented. Our new website not only looks amazing but also ranks #1 on Google for our target keywords. The SEO optimization was phenomenal.",
    rating: 5,
    image: "👩‍🎨",
    projectType: "Portfolio Website",
    results: "#1 Google ranking"
  },
  {
    id: 4,
    name: "David Williams",
    company: "Cape Town Consulting",
    role: "Managing Partner",
    content: "AzaniaDigital's expertise in modern web technologies is unmatched. They built us a scalable platform that handles thousands of users seamlessly. Highly recommended!",
    rating: 5,
    image: "👨‍💼",
    projectType: "Business Platform",
    results: "99.9% uptime achieved"
  }
];

const clientLogos = [
  { name: "TechStart Solutions", logo: "🚀" },
  { name: "GreenTech Innovations", logo: "🌱" },
  { name: "Creative Studios SA", logo: "🎨" },
  { name: "Cape Town Consulting", logo: "💼" },
  { name: "Digital Marketing Pro", logo: "📱" },
  { name: "E-commerce Plus", logo: "🛒" }
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? '#F59E0B' : '#374151',
          fontSize: '1.25rem'
        }}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)',
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
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
            <span style={{ fontSize: '1rem' }}>⭐</span>
            Client Success Stories
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '1.5rem',
            color: '#FFFFFF',
            lineHeight: '1.2'
          }}>
            Trusted by <span style={{
              background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Leading Businesses</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: '#CBD5E1',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            See how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          {[
            { number: '50+', label: 'Projects Completed', icon: '🚀' },
            { number: '98%', label: 'Client Satisfaction', icon: '😊' },
            { number: '24/7', label: 'Support Available', icon: '🛠️' },
            { number: '5★', label: 'Average Rating', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              padding: '2rem 1rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#0EA5E9',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Client Info */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                {testimonials[currentTestimonial].image}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#FFFFFF',
                marginBottom: '0.5rem'
              }}>
                {testimonials[currentTestimonial].name}
              </h3>
              
              <p style={{
                color: '#0EA5E9',
                fontWeight: '600',
                marginBottom: '0.25rem'
              }}>
                {testimonials[currentTestimonial].role}
              </p>
              
              <p style={{
                color: '#94A3B8',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                {testimonials[currentTestimonial].company}
              </p>

              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                padding: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#10B981',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.25rem'
                }}>
                  Project Type
                </div>
                <div style={{
                  color: '#FFFFFF',
                  fontWeight: '500'
                }}>
                  {testimonials[currentTestimonial].projectType}
                </div>
              </div>

              <div style={{
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                borderRadius: '12px',
                padding: '0.75rem'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#0EA5E9',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.25rem'
                }}>
                  Results Achieved
                </div>
                <div style={{
                  color: '#FFFFFF',
                  fontWeight: '500'
                }}>
                  {testimonials[currentTestimonial].results}
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div>
              <div style={{
                display: 'flex',
                marginBottom: '1.5rem'
              }}>
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              <blockquote style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: '#E2E8F0',
                fontStyle: 'italic',
                marginBottom: '2rem',
                position: 'relative'
              }}>
                <span style={{
                  fontSize: '4rem',
                  color: 'rgba(14, 165, 233, 0.3)',
                  position: 'absolute',
                  top: '-1rem',
                  left: '-1rem',
                  fontFamily: 'serif'
                }}>
                  "
                </span>
                {testimonials[currentTestimonial].content}
              </blockquote>
            </div>
          </div>

          {/* Navigation Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentTestimonial ? '#0EA5E9' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#94A3B8',
            marginBottom: '2rem'
          }}>
            Trusted by Leading Companies
          </h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            {clientLogos.map((client, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{client.logo}</span>
                <span style={{
                  color: '#CBD5E1',
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
