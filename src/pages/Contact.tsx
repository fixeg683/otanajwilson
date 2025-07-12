import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { sendEmail, validateFormData, sanitizeFormData, initializeEmailService, isEmailServiceConfigured } from '../utils/emailService';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [emailServiceAvailable, setEmailServiceAvailable] = useState(false);

  // Initialize Email Service on component mount
  React.useEffect(() => {
    const checkEmailService = async () => {
      const isConfigured = await isEmailServiceConfigured();
      setEmailServiceAvailable(isConfigured);
    };
    
    initializeEmailService();
    checkEmailService();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear form errors when user starts typing
    if (formErrors.length > 0) {
      setFormErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setFormErrors([]);

    // Sanitize form data
    const sanitizedData = sanitizeFormData(formData);
    
    // Validate form data
    const validation = validateFormData(sanitizedData);
    
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await sendEmail(sanitizedData);
      
      if (result.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Show success message
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setErrorMessage(result.message);
        setShowError(true);
        setTimeout(() => setShowError(false), 8000);
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('An unexpected error occurred. Please contact me directly at jacobotana96@gmail.com');
      setShowError(true);
      setTimeout(() => setShowError(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'jacobotana96@gmail.com',
      link: 'mailto:jacobotana96@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+254 757769848',
      link: 'tel:+254757769848'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/otanajwilson',
      icon: 'fab fa-twitter',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/otanajwilson/',
      icon: 'fab fa-instagram',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jacob-otana-89b0b8209/',
      icon: 'fab fa-linkedin',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/fixeg683',
      icon: 'fab fa-github',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-700'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@fixe9940',
      icon: 'fab fa-youtube',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    }
  ];

  const emailConfigured = isEmailServiceConfigured();


  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            Get In Touch
          </h1>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-slate-600'
          }`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Send me a message
            </h2>

            {/* Email Configuration Warning */}
            {!emailServiceAvailable && (
              <div className={`mb-6 p-4 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  : 'bg-amber-50 border-amber-200 text-amber-600'
              }`}>
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Email Service Unavailable</span>
                </div>
                <p className="text-sm">
                  The email service is currently unavailable. Please contact me directly at jacobotana96@gmail.com or try again later.
                </p>
              </div>
            )}
            
            {/* Form Errors */}
            {formErrors.length > 0 && (
              <div className={`mb-6 p-4 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-red-500/10 border-red-500/20 text-red-400'
                  : 'bg-red-50 border-red-200 text-red-600'
              }`}>
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Please fix the following errors:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {formErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
                        : 'bg-white/50 border-white/30 text-slate-800 placeholder-slate-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
                        : 'bg-white/50 border-white/30 text-slate-800 placeholder-slate-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-slate-700'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
                      : 'bg-white/50 border-white/30 text-slate-800 placeholder-slate-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-slate-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
                      : 'bg-white/50 border-white/30 text-slate-800 placeholder-slate-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </GlassCard>

          {/* Contact Information */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`p-3 rounded-full mr-4 ${
                      theme === 'dark' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-blue-500/20 text-blue-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-slate-800'
                      }`}>
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className={`${
                          theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-800'
                        } transition-colors duration-300`}
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Social Media Links */}
            <GlassCard className="p-8">
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      theme === 'dark'
                        ? 'bg-white/10 text-white/80 hover:bg-white/20'
                        : 'bg-slate-200/50 text-slate-700 hover:bg-slate-300/50'
                    } ${social.color} ${social.bgColor}`}
                    title={social.name}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
              <p className={`text-sm mt-4 ${
                theme === 'dark' ? 'text-white/60' : 'text-slate-500'
              }`}>
                Follow me on social media for updates and behind-the-scenes content!
              </p>
            </GlassCard>

            {/* Response Time */}
            <GlassCard className="p-8">
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Response Time
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-white/70' : 'text-slate-600'
              }`}>
                I typically respond to messages within 24 hours. For urgent matters, feel free to call me directly.
              </p>
            </GlassCard>

            {/* Availability */}
            <GlassCard className="p-8">
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Availability
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-white/70' : 'text-slate-600'
              }`}>
                I'm currently accepting new projects and collaborations. Let's discuss how I can help bring your ideas to life!
              </p>
            </GlassCard>

            {/* Email Setup Instructions */}
            <GlassCard className="p-6">
              <div className="flex items-start">
                <div className={`p-2 rounded-full mr-3 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>
                    Email Service {emailServiceAvailable ? 'Active' : 'Unavailable'}
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                  }`}>
                    {emailServiceAvailable 
                      ? 'Gmail SMTP service is configured and ready to use.'
                      : 'Email service is currently unavailable. Please contact me directly at jacobotana96@gmail.com'
                    }
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <GlassCard className="p-8 max-w-md mx-auto text-center animate-in fade-in duration-300">
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Message Sent Successfully!
            </h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-white/70' : 'text-slate-600'
            }`}>
              Thank you for reaching out. I'll get back to you within 24 hours!
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300"
            >
              Close
            </button>
          </GlassCard>
        </div>
      )}

      {/* Error Popup */}
      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <GlassCard className="p-8 max-w-md mx-auto text-center animate-in fade-in duration-300">
            <div className="mb-4">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Message Failed to Send
            </h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-white/70' : 'text-slate-600'
            }`}>
              {errorMessage || 'There was an issue sending your message. Please try again or contact me directly.'}
            </p>
            <div className="flex space-x-3 justify-center">
              <button
                onClick={() => setShowError(false)}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full font-medium transition-all duration-300"
              >
                Close
              </button>
              <a
                href="mailto:jacobotana96@gmail.com"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300"
              >
                Email Directly
              </a>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default Contact;