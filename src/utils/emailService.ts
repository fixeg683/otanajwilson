interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

// Email service configuration
const EMAIL_API_URL = import.meta.env.VITE_EMAIL_API_URL || 'http://localhost:3001/api';

// Function to send email via backend API
export const sendEmail = async (emailData: EmailData): Promise<EmailResponse> => {
  try {
    // Validate form data before sending
    const validation = validateFormData(emailData);
    if (!validation.isValid) {
      return {
        success: false,
        message: `Validation failed: ${validation.errors.join(', ')}`
      };
    }

    // Sanitize form data
    const sanitizedData = sanitizeFormData(emailData);

    const response = await fetch(`${EMAIL_API_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || 'Email sent successfully!',
        messageId: result.messageId
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to send email. Please try again or contact me directly at jacobotana96@gmail.com'
      };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Handle different types of errors
    let errorMessage = 'Failed to send email. Please try again or contact me directly at jacobotana96@gmail.com';
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = 'Unable to connect to email service. Please contact me directly at jacobotana96@gmail.com';
    }
    
    return {
      success: false,
      message: errorMessage,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Function to check if email service is available
export const checkEmailService = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${EMAIL_API_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.ok;
  } catch (error) {
    console.error('Email service check failed:', error);
    return false;
  }
};

// Function to test email configuration
export const testEmailConfig = async () => {
  try {
    const response = await fetch(`${EMAIL_API_URL}/test-config`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Config test failed:', error);
    return { configured: false, error: 'Unable to connect to email service' };
  }
};

// Function to validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate form data
export const validateFormData = (data: EmailData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Name validation
  if (!data.name?.trim()) {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email.trim())) {
    errors.push('Please enter a valid email address');
  } else if (data.email.trim().length > 100) {
    errors.push('Email must be less than 100 characters');
  }

  // Subject validation
  if (!data.subject?.trim()) {
    errors.push('Subject is required');
  } else if (data.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  } else if (data.subject.trim().length > 200) {
    errors.push('Subject must be less than 200 characters');
  }

  // Message validation
  if (!data.message?.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (data.message.trim().length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Function to sanitize form data
export const sanitizeFormData = (data: EmailData): EmailData => {
  return {
    name: data.name?.trim().slice(0, 100) || '',
    email: data.email?.trim().toLowerCase().slice(0, 100) || '',
    subject: data.subject?.trim().slice(0, 200) || '',
    message: data.message?.trim().slice(0, 2000) || ''
  };
};

// Function to format error message for display
export const formatErrorMessage = (error: string): string => {
  // Common error message mappings
  const errorMappings: { [key: string]: string } = {
    'EAUTH': 'Email authentication failed. Please contact me directly at jacobotana96@gmail.com',
    'ECONNECTION': 'Unable to connect to email server. Please contact me directly at jacobotana96@gmail.com',
    'ETIMEDOUT': 'Email service timed out. Please try again or contact me directly at jacobotana96@gmail.com',
    'ENOTFOUND': 'Email service unavailable. Please contact me directly at jacobotana96@gmail.com'
  };

  // Check if error matches any known patterns
  for (const [code, message] of Object.entries(errorMappings)) {
    if (error.includes(code)) {
      return message;
    }
  }

  return 'Failed to send email. Please try again or contact me directly at jacobotana96@gmail.com';
};

// Initialize email service (can be called on app startup)
export const initializeEmailService = async () => {
  try {
    const isAvailable = await checkEmailService();
    if (isAvailable) {
      console.log('Email service is available');
      return true;
    } else {
      console.warn('Email service is not available');
      return false;
    }
  } catch (error) {
    console.error('Failed to initialize email service:', error);
    return false;
  }
};

// Export configuration check
export const isEmailServiceConfigured = async (): Promise<boolean> => {
  try {
    const config = await testEmailConfig();
    return config.configured;
  } catch (error) {
    return false;
  }
};