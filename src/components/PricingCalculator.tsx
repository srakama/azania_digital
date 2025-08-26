import React, { useState, useEffect } from 'react';

interface PricingOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: string;
  features: string[];
  multiplier: number;
}

interface AddonOption {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: string;
}

const serviceOptions: PricingOption[] = [
  {
    id: 'basic-website',
    name: 'Basic Website',
    description: 'Perfect for small businesses and startups',
    basePrice: 4500,
    icon: '🌐',
    features: ['5-10 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', '3 Months Support'],
    multiplier: 1
  },
  {
    id: 'business-website',
    name: 'Business Website',
    description: 'Ideal for growing businesses',
    basePrice: 8500,
    icon: '💼',
    features: ['10-20 Pages', 'Custom Design', 'CMS Integration', 'Advanced SEO', 'Blog System', '6 Months Support'],
    multiplier: 1.5
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    description: 'Complete online store solution',
    basePrice: 15000,
    icon: '🛒',
    features: ['Product Catalog', 'Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Accounts', '12 Months Support'],
    multiplier: 2.2
  },
  {
    id: 'custom-app',
    name: 'Custom Web App',
    description: 'Tailored web application',
    basePrice: 25000,
    icon: '⚡',
    features: ['Custom Functionality', 'Database Design', 'User Authentication', 'API Integration', 'Admin Dashboard', '12 Months Support'],
    multiplier: 3
  }
];

const addonOptions: AddonOption[] = [
  { id: 'seo-package', name: 'SEO Optimization', description: 'Advanced SEO setup and optimization', price: 2500, icon: '📈', category: 'Marketing' },
  { id: 'social-media', name: 'Social Media Integration', description: 'Connect all social platforms', price: 1200, icon: '📱', category: 'Marketing' },
  { id: 'analytics', name: 'Analytics Setup', description: 'Google Analytics & tracking', price: 800, icon: '📊', category: 'Analytics' },
  { id: 'security', name: 'Security Package', description: 'SSL, firewall, and security monitoring', price: 1500, icon: '🔒', category: 'Security' },
  { id: 'backup', name: 'Backup System', description: 'Automated daily backups', price: 600, icon: '💾', category: 'Maintenance' },
  { id: 'speed-optimization', name: 'Speed Optimization', description: 'Performance optimization and CDN', price: 1800, icon: '⚡', category: 'Performance' },
  { id: 'multilingual', name: 'Multi-language Support', description: 'Support for multiple languages', price: 3500, icon: '🌍', category: 'Features' },
  { id: 'mobile-app', name: 'Mobile App', description: 'Companion mobile application', price: 12000, icon: '📱', category: 'Development' },
  { id: 'training', name: 'Staff Training', description: '4-hour training session', price: 1200, icon: '🎓', category: 'Support' },
  { id: 'maintenance', name: 'Monthly Maintenance', description: 'Ongoing updates and support', price: 800, icon: '🔧', category: 'Maintenance' }
];

interface PricingCalculatorProps {
  onQuoteRequest?: (quote: any) => void;
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onQuoteRequest }) => {
  const [selectedService, setSelectedService] = useState<PricingOption | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState(1);
  const [timeline, setTimeline] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Calculate total price
  useEffect(() => {
    if (!selectedService) {
      setTotalPrice(0);
      return;
    }

    let basePrice = selectedService.basePrice * projectComplexity;
    
    // Timeline multiplier
    const timelineMultiplier = timeline === 'rush' ? 1.5 : timeline === 'extended' ? 0.9 : 1;
    basePrice *= timelineMultiplier;

    // Add addon prices
    const addonPrice = selectedAddons.reduce((total, addonId) => {
      const addon = addonOptions.find(a => a.id === addonId);
      return total + (addon ? addon.price : 0);
    }, 0);

    setTotalPrice(basePrice + addonPrice);
  }, [selectedService, selectedAddons, projectComplexity, timeline]);

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const handleQuoteRequest = () => {
    const quote = {
      service: selectedService,
      addons: selectedAddons.map(id => addonOptions.find(a => a.id === id)),
      complexity: projectComplexity,
      timeline,
      totalPrice,
      timestamp: new Date().toISOString()
    };
    
    if (onQuoteRequest) {
      onQuoteRequest(quote);
    }
    
    // You could also send this to your backend or email service
    console.log('Quote requested:', quote);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      borderRadius: '20px',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Project Cost Calculator
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#94A3B8',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Get an instant estimate for your project. Select your requirements below to see pricing.
        </p>
      </div>

      {/* Service Selection */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: 'white'
        }}>
          1. Choose Your Service Type
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {serviceOptions.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              style={{
                background: selectedService?.id === service.id 
                  ? 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: selectedService?.id === service.id 
                  ? '2px solid #0EA5E9'
                  : '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (selectedService?.id !== service.id) {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                  e.currentTarget.style.borderColor = '#0EA5E9';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedService?.id !== service.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                {service.icon}
              </div>
              
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                {service.name}
              </h4>
              
              <p style={{
                color: selectedService?.id === service.id ? 'rgba(255, 255, 255, 0.9)' : '#94A3B8',
                marginBottom: '1rem',
                fontSize: '0.875rem'
              }}>
                {service.description}
              </p>
              
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '900',
                color: selectedService?.id === service.id ? 'white' : '#0EA5E9',
                marginBottom: '1rem'
              }}>
                From {formatPrice(service.basePrice)}
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      color: selectedService?.id === service.id ? 'rgba(255, 255, 255, 0.9)' : '#CBD5E1'
                    }}
                  >
                    <span style={{ color: '#10B981' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <>
          {/* Project Complexity */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              2. Project Complexity
            </h3>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <input
                type="range"
                min="0.8"
                max="2"
                step="0.1"
                value={projectComplexity}
                onChange={(e) => setProjectComplexity(parseFloat(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  background: 'linear-gradient(90deg, #10B981 0%, #F59E0B 50%, #EF4444 100%)',
                  outline: 'none',
                  marginBottom: '1rem'
                }}
              />
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.875rem',
                color: '#94A3B8'
              }}>
                <span>Simple</span>
                <span>Standard</span>
                <span>Complex</span>
              </div>
              
              <div style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white'
              }}>
                Complexity Multiplier: {projectComplexity}x
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              3. Project Timeline
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { id: 'extended', name: 'Extended (3+ months)', multiplier: '0.9x', discount: '10% discount' },
                { id: 'standard', name: 'Standard (1-2 months)', multiplier: '1x', discount: 'Standard rate' },
                { id: 'rush', name: 'Rush (2-4 weeks)', multiplier: '1.5x', discount: '50% premium' }
              ].map((option) => (
                <div
                  key={option.id}
                  onClick={() => setTimeline(option.id)}
                  style={{
                    background: timeline === option.id 
                      ? 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: timeline === option.id 
                      ? '2px solid #0EA5E9'
                      : '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'white'
                  }}>
                    {option.name}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: timeline === option.id ? 'white' : '#0EA5E9',
                    marginBottom: '0.25rem'
                  }}>
                    {option.multiplier}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: timeline === option.id ? 'rgba(255, 255, 255, 0.8)' : '#94A3B8'
                  }}>
                    {option.discount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              4. Additional Features (Optional)
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem'
            }}>
              {addonOptions.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => handleAddonToggle(addon.id)}
                  style={{
                    background: selectedAddons.includes(addon.id)
                      ? 'rgba(14, 165, 233, 0.2)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: selectedAddons.includes(addon.id)
                      ? '2px solid #0EA5E9'
                      : '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    minWidth: '40px'
                  }}>
                    {addon.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      color: 'white'
                    }}>
                      {addon.name}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#94A3B8',
                      marginBottom: '0.5rem'
                    }}>
                      {addon.description}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#0EA5E9',
                      fontWeight: '600'
                    }}>
                      {addon.category}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: selectedAddons.includes(addon.id) ? '#0EA5E9' : 'white'
                  }}>
                    {formatPrice(addon.price)}
                  </div>

                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid #0EA5E9',
                    background: selectedAddons.includes(addon.id) ? '#0EA5E9' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px'
                  }}>
                    {selectedAddons.includes(addon.id) && '✓'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #0EA5E9',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: 0
              }}>
                Project Estimate
              </h3>

              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  border: '1px solid #0EA5E9',
                  borderRadius: '8px',
                  color: '#0EA5E9',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {showBreakdown ? 'Hide' : 'Show'} Breakdown
              </button>
            </div>

            {showBreakdown && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                fontSize: '0.875rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#94A3B8' }}>Base Service ({selectedService.name}):</span>
                  <span style={{ color: 'white' }}>{formatPrice(selectedService.basePrice)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#94A3B8' }}>Complexity Multiplier ({projectComplexity}x):</span>
                  <span style={{ color: 'white' }}>{formatPrice(selectedService.basePrice * (projectComplexity - 1))}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#94A3B8' }}>Timeline Adjustment:</span>
                  <span style={{ color: 'white' }}>
                    {timeline === 'rush' ? '+50%' : timeline === 'extended' ? '-10%' : '0%'}
                  </span>
                </div>
                {selectedAddons.length > 0 && (
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                    {selectedAddons.map(addonId => {
                      const addon = addonOptions.find(a => a.id === addonId);
                      return addon ? (
                        <div key={addon.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                          <span style={{ color: '#94A3B8' }}>{addon.name}:</span>
                          <span style={{ color: 'white' }}>{formatPrice(addon.price)}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1rem',
              borderTop: '2px solid #0EA5E9'
            }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'white'
              }}>
                Total Estimated Cost:
              </span>
              <span style={{
                fontSize: '2rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {formatPrice(totalPrice)}
              </span>
            </div>

            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <p style={{
                margin: 0,
                fontSize: '0.875rem',
                color: '#10B981',
                textAlign: 'center'
              }}>
                💡 This is an estimate. Final pricing may vary based on specific requirements and project scope.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleQuoteRequest}
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
                minWidth: '200px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(14, 165, 233, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.3)';
              }}
            >
              🚀 Request Detailed Quote
            </button>

            <p style={{
              marginTop: '1rem',
              fontSize: '0.875rem',
              color: '#94A3B8',
              textAlign: 'center'
            }}>
              Get a personalized quote with detailed project breakdown and timeline
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PricingCalculator;
