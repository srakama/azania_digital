import React, { useState, useRef } from 'react';
import { AccessibleButton, ScreenReaderAnnouncement, AccessibleLoader } from './AccessibilityEnhancements';
import { useAnalytics } from './Analytics';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  newsletter: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const EnhancedContactForm: React.FC = () => {
  const { trackFormSubmission, trackEvent } = useAnalytics();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters except + for validation
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');

    // Allow various phone number formats:
    // - South African: 0123456789, +27123456789
    // - International: +1234567890, +27123456789
    // - Local: 0123456789, 123456789
    const phoneRegex = /^(\+?[1-9]\d{1,14}|0\d{9,10})$/;

    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 0123456789 or +27123456789)';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Track form interaction
    trackEvent({
      action: 'form_field_interaction',
      category: 'engagement',
      label: name
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage('Please correct the errors below');
      trackFormSubmission('contact_form', false);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      let submissionSuccess = false;

      // Method 1: Try EmailJS first (most reliable)
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Not specified',
          service: formData.service,
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          message: formData.message,
          newsletter: formData.newsletter ? 'Yes' : 'No',
          to_email: 'hello@azaniadigital.co.za'
        };

        // Initialize EmailJS (you'll need to set up your EmailJS account)
        await emailjs.send(
          'service_azania', // Replace with your EmailJS service ID
          'template_contact', // Replace with your EmailJS template ID
          templateParams,
          'your_public_key' // Replace with your EmailJS public key
        );

        submissionSuccess = true;
        console.log('Email sent successfully via EmailJS');
      } catch (emailjsError) {
        console.log('EmailJS failed, trying FormSubmit...', emailjsError);

        // Method 2: Fallback to FormSubmit.co
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('company', formData.company);
        formDataToSend.append('service', formData.service);
        formDataToSend.append('budget', formData.budget);
        formDataToSend.append('timeline', formData.timeline);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('newsletter', formData.newsletter.toString());
        formDataToSend.append('_subject', 'New Contact Form Submission - AzaniaDigital');
        formDataToSend.append('_captcha', 'false');
        formDataToSend.append('_template', 'table');
        formDataToSend.append('_next', window.location.origin + '/thank-you');

        const response = await fetch('https://formsubmit.co/hello@azaniadigital.co.za', {
          method: 'POST',
          body: formDataToSend
        });

        if (response.ok) {
          submissionSuccess = true;
          console.log('Email sent successfully via FormSubmit');
        }
      }

      if (submissionSuccess) {
        // Track successful submission
        trackFormSubmission('contact_form', true);
        trackEvent({
          action: 'lead_generated',
          category: 'conversion',
          label: formData.service,
          value: 1
        });

        setIsSubmitted(true);
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');

        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            timeline: '',
            message: '',
            newsletter: false
          });
          setIsSubmitted(false);
          setSubmitMessage('');
        }, 5000);
      } else {
        throw new Error('All submission methods failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      trackFormSubmission('contact_form', false);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '2px solid rgba(255, 255, 255, 0.05)',
    background: 'rgba(255, 255, 255, 0.02)',
    color: '#E2E8F0',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const focusStyles: React.CSSProperties = {
    borderColor: '#0EA5E9',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.3)',
    background: 'rgba(255, 255, 255, 0.03)'
  };

  const errorStyles: React.CSSProperties = {
    borderColor: '#EF4444',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.3)'
  };

  return (
    <AccessibleLoader isLoading={isSubmitting} loadingText="Sending your message...">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          maxWidth: '800px',
          margin: '0 auto'
        }}
        noValidate
        aria-label="Contact form"
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#E2E8F0',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              style={{
                ...inputStyles,
                ...(errors.name ? errorStyles : {})
              }}
              onFocus={(e) => Object.assign(e.target.style, focusStyles)}
              onBlur={(e) => Object.assign(e.target.style, inputStyles)}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div
                id="name-error"
                role="alert"
                style={{
                  color: '#EF4444',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}
              >
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#E2E8F0',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              style={{
                ...inputStyles,
                ...(errors.email ? errorStyles : {})
              }}
              onFocus={(e) => Object.assign(e.target.style, focusStyles)}
              onBlur={(e) => Object.assign(e.target.style, inputStyles)}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <div
                id="email-error"
                role="alert"
                style={{
                  color: '#EF4444',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}
              >
                {errors.email}
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#E2E8F0',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              style={{
                ...inputStyles,
                ...(errors.phone ? errorStyles : {})
              }}
              onFocus={(e) => Object.assign(e.target.style, focusStyles)}
              onBlur={(e) => Object.assign(e.target.style, inputStyles)}
              placeholder="0123456789 or +27123456789"
            />
            {errors.phone && (
              <div
                id="phone-error"
                role="alert"
                style={{
                  color: '#EF4444',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}
              >
                {errors.phone}
              </div>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label
              htmlFor="company"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#E2E8F0',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={inputStyles}
              onFocus={(e) => Object.assign(e.target.style, focusStyles)}
              onBlur={(e) => Object.assign(e.target.style, inputStyles)}
              placeholder="Your company name (optional)"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div style={{ marginBottom: '2rem' }}>
          <label
            htmlFor="service"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#E2E8F0',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}
          >
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
            style={{
              ...inputStyles,
              ...(errors.service ? errorStyles : {})
            }}
            onFocus={(e) => Object.assign(e.target.style, focusStyles)}
            onBlur={(e) => Object.assign(e.target.style, inputStyles)}
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
          {errors.service && (
            <div
              id="service-error"
              role="alert"
              style={{
                color: '#EF4444',
                fontSize: '0.875rem',
                marginTop: '0.5rem'
              }}
            >
              {errors.service}
            </div>
          )}
        </div>

        {/* Budget and Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <label
              htmlFor="budget"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#E2E8F0',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={inputStyles}
              onFocus={(e) => Object.assign(e.target.style, focusStyles)}
              onBlur={(e) => Object.assign(e.target.style, inputStyles)}
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
            <label
              htmlFor="timeline"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#E2E8F0',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
            >
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              style={inputStyles}
              onFocus={(e) => Object.assign(e.target.style, focusStyles)}
              onBlur={(e) => Object.assign(e.target.style, inputStyles)}
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

        {/* Message Field */}
        <div style={{ marginBottom: '2rem' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#E2E8F0',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            rows={6}
            style={{
              ...inputStyles,
              resize: 'vertical',
              minHeight: '120px',
              fontFamily: 'inherit',
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              ...(errors.message ? errorStyles : {})
            }}
            onFocus={(e) => {
              Object.assign(e.target.style, focusStyles);
              e.target.style.fontFamily = 'inherit';
            }}
            onBlur={(e) => {
              Object.assign(e.target.style, inputStyles);
              e.target.style.fontFamily = 'inherit';
            }}
            onKeyDown={(e) => {
              // Ensure spacebar works properly
              if (e.key === ' ') {
                e.stopPropagation();
              }
            }}
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
          {errors.message && (
            <div
              id="message-error"
              role="alert"
              style={{
                color: '#EF4444',
                fontSize: '0.875rem',
                marginTop: '0.5rem'
              }}
            >
              {errors.message}
            </div>
          )}
        </div>

        {/* Newsletter Checkbox */}
        <div style={{ marginBottom: '2rem' }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#CBD5E1',
              fontSize: '0.875rem',
              cursor: 'pointer'
            }}
          >
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#0EA5E9'
              }}
            />
            Subscribe to our newsletter for web development tips and updates
          </label>
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center' }}>
          <AccessibleButton
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting || isSubmitted}
            style={{
              minWidth: '200px',
              marginBottom: '1rem'
            }}
          >
            {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
          </AccessibleButton>

          {submitMessage && (
            <ScreenReaderAnnouncement 
              message={submitMessage} 
              priority={isSubmitted ? 'polite' : 'assertive'} 
            />
          )}

          {submitMessage && (
            <div
              role="status"
              style={{
                color: isSubmitted ? '#10B981' : '#EF4444',
                fontSize: '0.875rem',
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: '8px',
                background: isSubmitted 
                  ? 'rgba(16, 185, 129, 0.1)' 
                  : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${isSubmitted ? '#10B981' : '#EF4444'}`
              }}
            >
              {submitMessage}
            </div>
          )}
        </div>
      </form>
    </AccessibleLoader>
  );
};

export default EnhancedContactForm;
