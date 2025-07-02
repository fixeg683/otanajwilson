import React, { useRef } from 'react';
import { sendEmail } from '../emailService';

function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const form = formRef.current;
    const templateParams = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      message: form.message.value,
      to_email: 'jacobotana96@gmail.com', // Your receiving email
    };

    sendEmail(templateParams)
      .then((result) => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="from_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default ContactForm;