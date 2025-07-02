# Jacob Otana - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a beautiful glassmorphism design.

## Features

- **Modern Design**: Glassmorphism UI with blue color scheme
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Pages**: 
  - Home with hero section and feature highlights
  - About with skills, experience, and downloadable resume
  - Portfolio showcasing projects with filtering
  - Projects page with detailed technical breakdowns
  - Elevator Pitch with interactive timer
  - Contact form with email functionality
- **Email Integration**: Direct email sending capability
- **Smooth Animations**: Hover effects and micro-interactions
- **SEO Optimized**: Meta tags and semantic HTML

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Email**: EmailJS integration
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## Email Configuration

The contact form supports multiple email service providers. Choose one of the following options:

### Option 1: EmailJS (Recommended)

1. **Create an EmailJS account** at [EmailJS](https://www.emailjs.com/)
2. **Set up a service** (Gmail, Outlook, etc.)
3. **Create an email template** with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address
4. **Update configuration** in `src/utils/emailService.ts`:
   ```typescript
   export const EMAILJS_CONFIG = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key'
   };
   ```

### Option 2: Formspree (Alternative)

1. **Create a Formspree account** at [Formspree](https://formspree.io/)
2. **Create a new form** and get your form ID
3. **Update the form ID** in `src/utils/emailService.ts`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
4. **Use Formspree method** in the contact form by importing `sendEmailViaFormspree`

### Email Template Example (EmailJS)

```html
Subject: New Contact Form Message: {{subject}}

Hello Jacob,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{from_email}}
```

## Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── GlassCard.tsx   # Glassmorphism card component
│   └── Layout.tsx      # Main layout with navigation
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page with skills
│   ├── Portfolio.tsx   # Project showcase
│   ├── Projects.tsx    # Detailed technical projects
│   ├── ElevatorPitch.tsx # Interactive pitch presentation
│   └── Contact.tsx     # Contact form
├── utils/              # Utility functions
│   └── emailService.ts # Email configuration
└── App.tsx            # Main application component
```

## Customization

### Personal Information
- Update contact details in `src/pages/Contact.tsx`
- Modify personal information in respective page components
- Update project data in `Portfolio.tsx` and `Projects.tsx`
- Customize skills and experience in `About.tsx`

### Email Configuration
- Choose between EmailJS or Formspree
- Update configuration in `src/utils/emailService.ts`
- Test email functionality before deployment

### Colors & Theme
- Primary colors are defined in Tailwind classes
- Theme switching is handled by `ThemeContext`
- Glassmorphism effects use backdrop-blur and transparency

## Deployment

The site is ready for deployment on:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the build output

Build command: `npm run build`
Output directory: `dist`

## Email Service Setup Guide

### EmailJS Setup (Detailed)

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Add Email Service**:
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the authentication steps
3. **Create Email Template**:
   - Go to Email Templates
   - Click "Create New Template"
   - Use the template variables mentioned above
   - Test the template
4. **Get Integration Details**:
   - Service ID from Email Services
   - Template ID from Email Templates
   - Public Key from Account settings
5. **Update Configuration**:
   - Replace placeholders in `emailService.ts`
   - Test the contact form

### Security Notes

- EmailJS public key is safe to expose in frontend code
- Never expose private keys or passwords in frontend code
- Consider rate limiting for production use
- Implement spam protection if needed

## Performance Features

- Optimized images with proper sizing
- Lazy loading for better performance
- Minimal bundle size with tree shaking
- Efficient re-renders with React best practices
- Form validation and error handling
- Loading states and user feedback

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).