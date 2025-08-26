import React, { useState } from 'react';

interface NewsletterSubscriptionProps {
  style?: React.CSSProperties;
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  style,
  className,
  variant = 'default'
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError('');
    setIsValid(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Don't prevent default - let form submit to FormSubmit
    // The form will submit in the background via hidden iframe

    // Show success state after a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);

    // Form will submit to FormSubmit automatically
  };

  const getInputStyle = () => ({
    flex: variant === 'inline' ? '1' : undefined,
    minWidth: variant === 'compact' ? '200px' : '250px',
    width: variant === 'default' ? '100%' : undefined,
    padding: variant === 'compact' ? '0.75rem 1rem' : '0.875rem 1rem',
    border: `2px solid ${error ? '#EF4444' : isValid && email ? '#10B981' : '#E2E8F0'}`,
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    color: '#1E293B',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
    boxShadow: error 
      ? '0 0 0 3px rgba(239, 68, 68, 0.1)' 
      : isValid && email 
        ? '0 0 0 3px rgba(16, 185, 129, 0.1)'
        : 'none'
  });

  const getButtonStyle = () => ({
    background: isSubmitting 
      ? '#94A3B8' 
      : isSubscribed 
        ? '#10B981'
        : 'white',
    color: isSubmitting || isSubscribed ? 'white' : '#0EA5E9',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    padding: variant === 'compact' ? '0.75rem 1.5rem' : '0.875rem 1.5rem',
    cursor: isSubmitting ? 'wait' : 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    minWidth: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: isSubscribed 
      ? '0 4px 12px rgba(16, 185, 129, 0.3)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)',
    transform: isSubscribed ? 'scale(1.05)' : 'scale(1)'
  });

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: variant === 'default' ? 'column' : 'row',
    gap: '1rem',
    maxWidth: variant === 'default' ? '400px' : undefined,
    margin: variant === 'default' ? '0 auto' : undefined,
    alignItems: variant === 'inline' ? 'flex-start' : 'center',
    ...style
  };

  if (isSubscribed) {
    return (
      <div style={containerStyle} className={className}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          color: 'white',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: '600',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
          animation: 'slideInUp 0.5s ease-out'
        }}>
          <span style={{ fontSize: '1.25rem' }}>✅</span>
          <span>Successfully subscribed! Check your email for confirmation.</span>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle} className={className}>
      <form
        action="https://formsubmit.co/hello@azaniadigital.co.za"
        method="POST"
        target="newsletter_iframe"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: variant === 'default' ? 'column' : 'row',
          gap: '1rem',
          width: '100%',
          alignItems: variant === 'inline' ? 'flex-start' : 'center'
        }}
      >
        {/* FormSubmit Configuration Fields */}
        <input type="hidden" name="_subject" value="New Newsletter Subscription - AzaniaDigital" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://azaniadigital.co.za/thank-you" />

        <div style={{
          flex: variant === 'inline' ? '1' : undefined,
          width: variant === 'default' ? '100%' : undefined
        }}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            disabled={isSubmitting}
            style={getInputStyle()}
            onFocus={(e) => {
              if (!error && !isValid) {
                e.target.style.borderColor = '#0EA5E9';
                e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!error && !isValid) {
                e.target.style.borderColor = '#E2E8F0';
                e.target.style.boxShadow = 'none';
              }
            }}
          />
          {error && (
            <div style={{
              color: '#EF4444',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
              fontWeight: '500',
              animation: 'shake 0.5s ease-in-out'
            }}>
              {error}
            </div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !email.trim()}
          style={getButtonStyle()}
          onMouseEnter={(e) => {
            if (!isSubmitting && !isSubscribed) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(14, 165, 233, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting && !isSubscribed) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }
          }}
        >
          {isSubmitting ? (
            <>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Subscribing...
            </>
          ) : isSubscribed ? (
            <>
              <span>✅</span>
              Subscribed!
            </>
          ) : (
            <>
              <span>📧</span>
              Subscribe
            </>
          )}
        </button>
      </form>
      
      {variant === 'default' && (
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          marginTop: '0.5rem',
          lineHeight: '1.5'
        }}>
          Join 10,000+ developers getting weekly updates. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
};

export default NewsletterSubscription;
