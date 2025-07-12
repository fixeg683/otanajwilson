import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gmail',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact', 
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here'
};

// Check if EmailJS is properly configured
export const isEmailJSConfigured = (): boolean => {
  return !!(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey);
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  if (isEmailJSConfigured()) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Function to send email using EmailJS
export const sendEmail = async (emailData: EmailData) => {
  // Check if EmailJS is configured
  if (!isEmailJSConfigured()) {
    return {
      success: false,
      message: 'Email service is not configured. Please contact me directly at jacobotana96@gmail.com'
    };
  }

  try {
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      to_email: 'jacobotana96@gmail.com',
      reply_to: emailData.email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again or contact me directly at jacobotana96@gmail.com';
    
    if (error instanceof Error) {
      if (error.message.includes('template ID not found')) {
        errorMessage = 'Email service configuration error. Please contact me directly at jacobotana96@gmail.com';
      } else if (error.message.includes('service ID')) {
        errorMessage = 'Email service configuration error. Please contact me directly at jacobotana96@gmail.com';
      }
    }
    
    return { 
      success: false, 
      message: errorMessage
    };
  }
};

// Alternative method using a simple form submission service (Formspree)
export const sendEmailViaFormspree = async (emailData: EmailData) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: emailData.name,
        email: emailData.email,
        subject: emailData.subject,
        message: emailData.message,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please try again or contact me directly.' 
    };
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

  if (!data.name.trim()) {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.subject.trim()) {
    errors.push('Subject is required');
  } else if (data.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  }

  if (!data.message.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Function to sanitize form data
export const sanitizeFormData = (data: EmailData): EmailData => {
  return {
    name: data.name.trim().slice(0, 100),
    email: data.email.trim().toLowerCase().slice(0, 100),
    subject: data.subject.trim().slice(0, 200),
    message: data.message.trim().slice(0, 2000)
  };
};