import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const WorkingContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Create a hidden form and submit it to FormSubmit
      const form = document.createElement('form');
      form.action = 'https://formsubmit.co/hello@azaniadigital.co.za';
      form.method = 'POST';
      form.style.display = 'none';

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Add FormSubmit configuration
      const configs = {
        '_subject': 'New Contact Form Submission - AzaniaDigital',
        '_captcha': 'false',
        '_template': 'table',
        '_next': window.location.origin + '/thank-you'
      };

      Object.entries(configs).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#E2E8F0',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const focusStyle: React.CSSProperties = {
    borderColor: '#0EA5E9',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.3)',
    background: 'rgba(255, 255, 255, 0.08)'
  };

  if (isSubmitted) {
    return (
      <div style={{
        background: 'rgba(16, 185, 129, 0.1)',
        border: '2px solid #10B981',
        borderRadius: '16px',
        padding: '3rem',
        textAlign: 'center',
        color: '#10B981'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#10B981' }}>
          Thank You!
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#E2E8F0' }}>
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '24px',
      padding: '3rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)'
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '800',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center'
      }}>
        Get Your Free Quote
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        {/* Name */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.name ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'
            }}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            placeholder="Enter your full name"
          />
          {errors.name && <div style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.name}</div>}
        </div>

        {/* Email */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.email ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'
            }}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            placeholder="your.email@example.com"
          />
          {errors.email && <div style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.email}</div>}
        </div>

        {/* Phone */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.phone ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'
            }}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            placeholder="0123456789 or +27123456789"
          />
          {errors.phone && <div style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.phone}</div>}
        </div>

        {/* Company */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            placeholder="Your company name (optional)"
          />
        </div>
      </div>

      {/* Service */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
          Service Needed *
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          style={{
            ...inputStyle,
            borderColor: errors.service ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'
          }}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        >
          <option value="">Select a service</option>
          <option value="website-development">Website Development</option>
          <option value="ecommerce-development">E-commerce Development</option>
          <option value="web-application">Web Application</option>
          <option value="mobile-app">Mobile App Development</option>
          <option value="seo-optimization">SEO Optimization</option>
          <option value="maintenance">Website Maintenance</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
        {errors.service && <div style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.service}</div>}
      </div>

      {/* Budget and Timeline */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under R10,000</option>
            <option value="10k-25k">R10,000 - R25,000</option>
            <option value="25k-50k">R25,000 - R50,000</option>
            <option value="50k-100k">R50,000 - R100,000</option>
            <option value="over-100k">Over R100,000</option>
            <option value="discuss">Let's discuss</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
            Project Timeline
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#E2E8F0', fontWeight: '600' }}>
          Project Details *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '120px',
            lineHeight: '1.5',
            fontFamily: 'inherit',
            borderColor: errors.message ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'
          }}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          placeholder="Tell us about your project, goals, and any specific requirements. Feel free to use spaces and describe in detail..."
        />
        {errors.message && <div style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{errors.message}</div>}
      </div>

      {/* Submit Button */}
      <div style={{ textAlign: 'center' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: isSubmitting 
              ? 'rgba(14, 165, 233, 0.5)' 
              : 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '1rem 3rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
            minWidth: '200px'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
            }
          }}
        >
          {isSubmitting ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Sending...
            </span>
          ) : (
            '📧 Send Message'
          )}
        </button>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
};

export default WorkingContactForm;
