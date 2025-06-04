import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "🚀"
    },
    {
      id: 2,
      title: "Why Your Business Needs a Mobile-First Website",
      excerpt: "Learn why mobile-first design is crucial for your business success and how it impacts user experience and search rankings.",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "📱"
    },
    {
      id: 3,
      title: "E-Commerce Security Best Practices",
      excerpt: "Essential security measures every online store should implement to protect customer data and build trust.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "🔒"
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Proven SEO techniques to improve your website's visibility and drive more organic traffic to your business.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Marketing",
      image: "📈"
    },
    {
      id: 5,
      title: "Building Fast Websites with Modern Frameworks",
      excerpt: "How React, Next.js, and other modern frameworks can dramatically improve your website's performance and user experience.",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "⚡"
    },
    {
      id: 6,
      title: "The Complete Guide to Website Maintenance",
      excerpt: "Everything you need to know about keeping your website secure, updated, and performing at its best.",
      date: "February 15, 2024",
      readTime: "8 min read",
      category: "Maintenance",
      image: "⚙️"
    }
  ];

  const categories = ["All", "Technology", "Design", "Security", "Marketing", "Development", "Maintenance"];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">Our Blog</h1>
            <p className="section-subtitle">
              Stay updated with the latest web development trends, insights, and best practices.
              Learn from our experience and grow your digital knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section style={{ padding: '2rem 0', background: 'white', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                style={{
                  padding: '0.5rem 1.5rem',
                  border: '2px solid #E2E8F0',
                  borderRadius: '25px',
                  background: category === 'All' ? 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)' : 'white',
                  color: category === 'All' ? 'white' : '#64748B',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => {
                  if (category !== 'All') {
                    e.currentTarget.style.borderColor = '#0EA5E9';
                    e.currentTarget.style.color = '#0EA5E9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (category !== 'All') {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#64748B';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="card" style={{ cursor: 'pointer' }}>
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
                  borderRadius: '12px'
                }}>
                  {post.image}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                    color: 'white',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#1E293B',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>

                <p style={{
                  color: '#64748B',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem'
                }}>
                  {post.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E2E8F0'
                }}>
                  <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                    {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    style={{
                      color: '#0EA5E9',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Stay Updated
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: '0.9'
            }}>
              Subscribe to our newsletter and get the latest web development tips,
              trends, and insights delivered directly to your inbox.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              maxWidth: '400px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '0.875rem 1rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button className="btn" style={{
                background: 'white',
                color: '#0EA5E9',
                fontWeight: '600',
                border: 'none'
              }}>
                📧 Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Featured Resources</h2>
          <p className="section-subtitle">
            Essential guides and resources to help you succeed in the digital world.
          </p>

          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-icon">📚</div>
              <h3 className="card-title">Web Development Guide</h3>
              <p className="card-text">
                Complete guide to modern web development practices, tools, and frameworks.
              </p>
              <Link to="/resources/web-dev-guide" className="btn btn-primary">
                Download Free
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">SEO Checklist</h3>
              <p className="card-text">
                Step-by-step checklist to optimize your website for search engines.
              </p>
              <Link to="/resources/seo-checklist" className="btn btn-primary">
                Get Checklist
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Design Inspiration</h3>
              <p className="card-text">
                Curated collection of modern website designs and UI/UX patterns.
              </p>
              <Link to="/resources/design-inspiration" className="btn btn-primary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
