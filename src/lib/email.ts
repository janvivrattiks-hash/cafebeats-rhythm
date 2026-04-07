import emailjs from '@emailjs/browser';

/**
 * Professional EmailJS Configuration
 * You can safely edit these keys here and keep ContactPage.tsx clean.
 */
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_my17otp',
  TEMPLATE_ID: 'template_dhan09r',
  PUBLIC_KEY: 'HzoM6WpDtzhn_b9nM',
};

/**
 * Helper to send contact form data via EmailJS
 */
export const sendContactForm = async (formElement: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formElement,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.error('EmailJS Service Error:', error);
    throw error;
  }
};
