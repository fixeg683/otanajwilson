import emailjs from '@emailjs/browser';

export function sendEmail(templateParams) {
  return emailjs.send(
    'service_219kj2a',           // Service ID
    'template_v55vaqt',          // Template ID
    templateParams,              // Parameters (object)
    '_0dyfkaxHCtQfwfmu'          // Public Key
  );
}