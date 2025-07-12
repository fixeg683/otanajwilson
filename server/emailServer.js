const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Add your frontend URLs
  credentials: true
}));
app.use(express.json());

// Create Gmail transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    secure: true,
    port: 465
  });
};

// Email template
const createEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Message</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          text-align: center;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .field-label {
          font-weight: bold;
          color: #667eea;
          margin-bottom: 5px;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
        }
        .message-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          white-space: pre-wrap;
          line-height: 1.8;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          text-align: center;
          color: #6c757d;
          font-size: 14px;
        }
        .timestamp {
          color: #6c757d;
          font-size: 12px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Message</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Portfolio Website Contact Form</p>
        </div>
        
        <div class="field">
          <div class="field-label">From</div>
          <div class="field-value">${formData.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value">
            <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none;">
              ${formData.email}
            </a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Subject</div>
          <div class="field-value">${formData.subject}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-content">${formData.message}</div>
        </div>
        
        <div class="footer">
          <p>This message was sent from your portfolio website contact form.</p>
          <p>Reply directly to this email to respond to ${formData.name}.</p>
          <div class="timestamp">
            Received: ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    const formData = { name, email, subject, message };
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: createEmailTemplate(formData),
      text: `
New contact form message from ${name} (${email})

Subject: ${subject}

Message:
${message}

---
Sent from portfolio website contact form
Reply to: ${email}
Received: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    res.json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Failed to connect to email server. Please try again later.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Email server is running',
    timestamp: new Date().toISOString()
  });
});

// Test email configuration
app.get('/api/test-config', (req, res) => {
  const isConfigured = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  res.json({
    configured: isConfigured,
    user: process.env.GMAIL_USER ? '***@gmail.com' : 'Not set',
    password: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set'
  });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Gmail user: ${process.env.GMAIL_USER}`);
  console.log(`Contact email: ${process.env.CONTACT_EMAIL}`);
});

module.exports = app;