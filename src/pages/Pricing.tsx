import React from 'react';
import PricingCalculator from '../components/PricingCalculator';
import SEOHead from '../components/SEOHead';
import { useButtonActions } from '../hooks/useButtonActions';

const Pricing: React.FC = () => {
  const { handleAction } = useButtonActions();
  const handleQuoteRequest = (quote: any) => {
    // Handle quote request - could send to backend, email, etc.
    console.log('Quote requested:', quote);
    
    // For now, show an alert (in production, you'd want a proper modal or redirect)
    alert(`Thank you for your interest! Your estimated project cost is ${new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0
    }).format(quote.totalPrice)}. We'll contact you soon with a detailed proposal.`);
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <SEOHead 
        title="Pricing Calculator - AzaniaDigital | Get Instant Project Estimates"
        description="Calculate the cost of your web development project instantly. Get transparent pricing for websites, e-commerce stores, and custom web applications in South Africa."
        keywords="web development pricing, website cost calculator, e-commerce pricing, South Africa web development costs, project estimate"
        url="https://azaniadigital.co.za/pricing"
      />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2'
          }}>
            Transparent Pricing
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#CBD5E1',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            No hidden fees, no surprises. Get an instant estimate for your project and see exactly what you're paying for.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                💰
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Transparent Pricing
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                margin: 0
              }}>
                No hidden costs or surprise fees
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                ⚡
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Instant Estimates
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                margin: 0
              }}>
                Get pricing in real-time
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Customizable Options
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                margin: 0
              }}>
                Tailor the quote to your needs
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                🤝
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                No Obligation
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                margin: 0
              }}>
                Free estimates, no commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)'
      }}>
        <PricingCalculator onQuoteRequest={handleQuoteRequest} />
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                question: "How accurate are these estimates?",
                answer: "Our estimates are based on industry standards and our experience with similar projects. Final pricing may vary by ±15% depending on specific requirements and project complexity."
              },
              {
                question: "What's included in the base price?",
                answer: "Base prices include design, development, basic testing, and initial setup. Additional features, integrations, and ongoing maintenance are available as add-ons."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes! We offer flexible payment plans with 50% upfront and the remainder upon completion. For larger projects, we can arrange milestone-based payments."
              },
              {
                question: "What if my project requirements change?",
                answer: "We understand that requirements can evolve. We'll provide updated quotes for any scope changes and work with you to find the best solution within your budget."
              },
              {
                question: "Is there a minimum project size?",
                answer: "We work with projects of all sizes, from simple landing pages to complex web applications. Our minimum project value is R3,500."
              }
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#0EA5E9'
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#CBD5E1',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            marginBottom: '1rem'
          }}>
            Ready to Start Your Project?
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Get a detailed proposal with timeline, deliverables, and exact pricing for your specific requirements.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => handleAction('free-consultation')}
              style={{
                background: 'white',
                color: '#0EA5E9',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                fontWeight: '700',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              💬 Get Free Consultation
            </button>
            
            <a
              href="tel:+27786511482"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
