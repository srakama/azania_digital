// Form validation utilities for consistent validation across all forms

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationRules {
  [fieldName: string]: ValidationRule;
}

export interface ValidationErrors {
  [fieldName: string]: string;
}

// Common validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[0-9\s\-\(\)]{10,}$/,
  url: /^https?:\/\/.+\..+/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

// Common validation rules
export const COMMON_RULES: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    custom: (value: string) => {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        return 'Name can only contain letters and spaces';
      }
      return null;
    }
  },
  email: {
    required: true,
    pattern: VALIDATION_PATTERNS.email,
    maxLength: 100
  },
  phone: {
    pattern: VALIDATION_PATTERNS.phone,
    custom: (value: string) => {
      if (value && value.length < 10) {
        return 'Phone number must be at least 10 digits';
      }
      return null;
    }
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100
  }
};

/**
 * Validate a single field value against a validation rule
 */
export function validateField(value: string, rule: ValidationRule, fieldName: string = 'Field'): string | null {
  // Required validation
  if (rule.required && (!value || value.trim().length === 0)) {
    return `${fieldName} is required`;
  }

  // Skip other validations if field is empty and not required
  if (!value || value.trim().length === 0) {
    return null;
  }

  const trimmedValue = value.trim();

  // Minimum length validation
  if (rule.minLength && trimmedValue.length < rule.minLength) {
    return `${fieldName} must be at least ${rule.minLength} characters`;
  }

  // Maximum length validation
  if (rule.maxLength && trimmedValue.length > rule.maxLength) {
    return `${fieldName} must be no more than ${rule.maxLength} characters`;
  }

  // Pattern validation
  if (rule.pattern && !rule.pattern.test(trimmedValue)) {
    if (rule.pattern === VALIDATION_PATTERNS.email) {
      return 'Please enter a valid email address';
    } else if (rule.pattern === VALIDATION_PATTERNS.phone) {
      return 'Please enter a valid phone number';
    } else if (rule.pattern === VALIDATION_PATTERNS.url) {
      return 'Please enter a valid URL';
    } else {
      return `${fieldName} format is invalid`;
    }
  }

  // Custom validation
  if (rule.custom) {
    const customError = rule.custom(trimmedValue);
    if (customError) {
      return customError;
    }
  }

  return null;
}

/**
 * Validate multiple fields against their respective rules
 */
export function validateForm(data: Record<string, string>, rules: ValidationRules): ValidationErrors {
  const errors: ValidationErrors = {};

  Object.entries(rules).forEach(([fieldName, rule]) => {
    const value = data[fieldName] || '';
    const error = validateField(value, rule, formatFieldName(fieldName));
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}

/**
 * Format field name for display in error messages
 */
function formatFieldName(fieldName: string): string {
  return fieldName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

/**
 * Check if form data is valid
 */
export function isFormValid(data: Record<string, string>, rules: ValidationRules): boolean {
  const errors = validateForm(data, rules);
  return Object.keys(errors).length === 0;
}

/**
 * Get form completion percentage
 */
export function getFormCompletionPercentage(data: Record<string, string>, rules: ValidationRules): number {
  const requiredFields = Object.entries(rules)
    .filter(([_, rule]) => rule.required)
    .map(([fieldName]) => fieldName);

  if (requiredFields.length === 0) return 100;

  const completedFields = requiredFields.filter(fieldName => {
    const value = data[fieldName] || '';
    return value.trim().length > 0;
  });

  return Math.round((completedFields.length / requiredFields.length) * 100);
}

/**
 * Sanitize form data
 */
export function sanitizeFormData(data: Record<string, string>): Record<string, string> {
  const sanitized: Record<string, string> = {};

  Object.entries(data).forEach(([key, value]) => {
    // Trim whitespace
    let sanitizedValue = value.trim();

    // Remove potentially dangerous characters for basic XSS prevention
    sanitizedValue = sanitizedValue
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]*>/g, '');

    sanitized[key] = sanitizedValue;
  });

  return sanitized;
}

/**
 * Format error messages for display
 */
export function formatErrorMessage(error: string): string {
  // Capitalize first letter and ensure proper punctuation
  const formatted = error.charAt(0).toUpperCase() + error.slice(1);
  return formatted.endsWith('.') ? formatted : formatted + '.';
}

/**
 * Debounce function for real-time validation
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Create a validation hook for React components
 */
export function createValidationHook(rules: ValidationRules) {
  return function useFormValidation(initialData: Record<string, string> = {}) {
    const [data, setData] = React.useState(initialData);
    const [errors, setErrors] = React.useState<ValidationErrors>({});
    const [touched, setTouched] = React.useState<Record<string, boolean>>({});

    const validateSingleField = (fieldName: string, value: string) => {
      const rule = rules[fieldName];
      if (!rule) return null;

      return validateField(value, rule, formatFieldName(fieldName));
    };

    const validateAllFields = () => {
      return validateForm(data, rules);
    };

    const updateField = (fieldName: string, value: string) => {
      setData(prev => ({ ...prev, [fieldName]: value }));
      
      // Real-time validation for touched fields
      if (touched[fieldName]) {
        const error = validateSingleField(fieldName, value);
        setErrors(prev => ({
          ...prev,
          [fieldName]: error || ''
        }));
      }
    };

    const touchField = (fieldName: string) => {
      setTouched(prev => ({ ...prev, [fieldName]: true }));
      
      // Validate field when touched
      const error = validateSingleField(fieldName, data[fieldName] || '');
      setErrors(prev => ({
        ...prev,
        [fieldName]: error || ''
      }));
    };

    const isValid = isFormValid(data, rules);
    const completionPercentage = getFormCompletionPercentage(data, rules);

    return {
      data,
      errors,
      touched,
      isValid,
      completionPercentage,
      updateField,
      touchField,
      validateAllFields,
      setData,
      setErrors
    };
  };
}
