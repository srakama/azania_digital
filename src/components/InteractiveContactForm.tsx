import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface InteractiveContactFormProps {
  onSubmit?: (data: FormData) => void;
  formAction?: string;
  formTarget?: string;
}

const InteractiveContactForm: React.FC<InteractiveContactFormProps> = ({
  onSubmit,
  formAction = "https://formsubmit.co/hello@azaniadigital.co.za",
  formTarget = "hidden_iframe"
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Calculate form completion progress
  useEffect(() => {
    const fields = Object.values(formData);
    const filledFields = fields.filter(field => field.trim() !== '').length;
    setProgress((filledFields / fields.length) * 100);
  }, [formData]);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        // Remove all non-digit characters except + for validation
        const cleanPhone = value.replace(/[\s\-\(\)\.]/g, '');
        // Allow various phone number formats including South African numbers starting with 0
        const phoneRegex = /^(\+?[1-9]\d{1,14}|0\d{9,10})$/;
        return (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) ? 'Please enter a valid phone number (e.g., 0123456789 or +27123456789)' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // Don't prevent default - let the form submit to FormSubmit
    // e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault(); // Only prevent if there are validation errors
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Call the onSubmit callback for UI updates
    if (onSubmit) {
      onSubmit(formData);
    }

    // Show success state after a brief delay (form will submit in background)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
        setErrors({});
        setIsSubmitted(false);
      }, 3000);
    }, 1500);

    // Form will submit to FormSubmit via the action and target attributes
  };

  const getFieldStyle = (fieldName: string, hasError: boolean) => ({
    width: '100%',
    padding: '1rem 1.5rem',
    border: `2px solid ${hasError ? '#EF4444' : focusedField === fieldName ? '#0EA5E9' : '#E2E8F0'}`,
    borderRadius: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: focusedField === fieldName ? '#F8FAFC' : 'white',
    transform: focusedField === fieldName ? 'scale(1.02)' : 'scale(1)',
    boxShadow: focusedField === fieldName 
      ? '0 10px 25px rgba(14, 165, 233, 0.15), 0 0 0 3px rgba(14, 165, 233, 0.1)' 
      : hasError 
        ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
        : '0 2px 4px rgba(0, 0, 0, 0.05)',
    outline: 'none'
  });

  // Show success state
  if (isSubmitted) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
          animation: 'zoomIn 0.5s ease-out'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            animation: 'bounce 1s ease-in-out'
          }}>
            ✅
          </div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Message Sent Successfully!
          </h2>
          <p style={{
            fontSize: '1.125rem',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Thank you for reaching out! We'll get back to you within 24 hours with a personalized response.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* Progress Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748B' }}>
            Form Progress
          </span>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0EA5E9' }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#E2E8F0',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #0EA5E9, #3B82F6)',
            borderRadius: '4px',
            transition: 'width 0.5s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: progress > 0 ? 'shimmer 2s infinite' : 'none'
            }} />
          </div>
        </div>
      </div>

      <form
        action={formAction}
        method="POST"
        target={formTarget}
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        {/* FormSubmit Configuration Fields */}
        <input type="hidden" name="_subject" value="New Contact Form Submission - AzaniaDigital" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://azaniadigital.co.za/thank-you" />

        {/* Name Field */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#374151',
            transform: focusedField === 'name' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            style={getFieldStyle('name', !!errors.name)}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <div style={{
              color: '#EF4444',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
              animation: 'shake 0.5s ease-in-out'
            }}>
              {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#374151',
            transform: focusedField === 'email' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            style={getFieldStyle('email', !!errors.email)}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <div style={{
              color: '#EF4444',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
              animation: 'shake 0.5s ease-in-out'
            }}>
              {errors.email}
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#374151',
            transform: focusedField === 'phone' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => handleFocus('phone')}
            onBlur={handleBlur}
            style={getFieldStyle('phone', !!errors.phone)}
            placeholder="0123456789 or +27123456789"
          />
          {errors.phone && (
            <div style={{
              color: '#EF4444',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
              animation: 'shake 0.5s ease-in-out'
            }}>
              {errors.phone}
            </div>
          )}
        </div>

        {/* Service Field */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#374151',
            transform: focusedField === 'service' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}>
            Service Needed
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            onFocus={() => handleFocus('service')}
            onBlur={handleBlur}
            style={getFieldStyle('service', !!errors.service)}
          >
            <option value="">Select a service</option>
            <option value="website">Website Development</option>
            <option value="ecommerce">E-Commerce Store</option>
            <option value="maintenance">Website Maintenance</option>
            <option value="consultation">Free Consultation</option>
          </select>
        </div>

        {/* Budget Field */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#374151',
            transform: focusedField === 'budget' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}>
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            onFocus={() => handleFocus('budget')}
            onBlur={handleBlur}
            style={getFieldStyle('budget', !!errors.budget)}
          >
            <option value="">Select budget range</option>
            <option value="5000-10000">R5,000 - R10,000</option>
            <option value="10000-20000">R10,000 - R20,000</option>
            <option value="20000-50000">R20,000 - R50,000</option>
            <option value="50000+">R50,000+</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#374151',
            transform: focusedField === 'message' ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}>
            Project Details *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            rows={4}
            style={getFieldStyle('message', !!errors.message)}
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
          {errors.message && (
            <div style={{
              color: '#EF4444',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
              animation: 'shake 0.5s ease-in-out'
            }}>
              {errors.message}
            </div>
          )}
        </div>

        {/* General Error Display */}
        {errors.general && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '1rem',
            color: '#DC2626',
            fontSize: '0.875rem',
            fontWeight: '500',
            textAlign: 'center',
            animation: 'shake 0.5s ease-in-out'
          }}>
            {errors.general}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || progress < 50}
          style={{
            width: '100%',
            padding: '1rem 2rem',
            background: isSubmitting 
              ? '#94A3B8' 
              : progress < 50 
                ? '#E2E8F0'
                : 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #6366F1 100%)',
            color: progress < 50 ? '#64748B' : 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.125rem',
            fontWeight: '600',
            cursor: progress < 50 ? 'not-allowed' : isSubmitting ? 'wait' : 'pointer',
            transition: 'all 0.3s ease',
            transform: !isSubmitting && progress >= 50 ? 'translateY(0)' : 'translateY(0)',
            boxShadow: !isSubmitting && progress >= 50 
              ? '0 10px 30px rgba(14, 165, 233, 0.3)' 
              : '0 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting && progress >= 50) {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting && progress >= 50) {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(14, 165, 233, 0.3)';
            }
          }}
        >
          {isSubmitting ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Sending Message...
            </div>
          ) : progress < 50 ? (
            `Complete form to send (${Math.round(progress)}%)`
          ) : (
            '🚀 Send My Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default InteractiveContactForm;
