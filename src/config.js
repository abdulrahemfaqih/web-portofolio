export const config = {
  emailjs: {
    userId: import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID || '',
    serviceId: import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID || ''
  }
};