/**
 * SAKSHI WEB STUDIO - CENTRAL BUSINESS CONFIGURATION
 * 
 * Update your real contact details, links, and form endpoints here.
 * Any component in the application will automatically reflect these changes.
 */

export const siteConfig = {
  brandName: "Sakshi Web Studio",
  shortName: "Sakshi Studio",
  tagline: "Design. Develop. Launch.",
  positioning: "Professional Websites for Small Businesses",
  trustBadge: "Web Design & Development for Small Businesses",
  
  // Developer & Founder Info
  founder: {
    name: "Sakshi",
    role: "Full-Stack Web Developer & Designer",
    specialization: "Full-Stack Web Development & Modern UI",
    bio: "Sakshi Web Studio is a web development studio founded by Sakshi, focused on helping small businesses build a professional online presence through modern, responsive websites.",
    experienceSummary: "Extensive hands-on experience developing real-world business websites, food ordering systems, and web applications using modern frontend tools, Python/Django, FastAPI, Spring Boot, and MySQL."
  },

  // Contact Details (Replace these placeholders with your real details)
  contact: {
    whatsapp: "ADD_WHATSAPP_NUMBER_HERE", // e.g. "919876543210" (no +, no spaces)
    whatsappDisplay: "+91 ••••• •••••",
    email: "ADD_EMAIL_HERE", // e.g. "sakshi@sakshiwebstudio.com"
    location: "ADD_LOCATION_HERE", // e.g. "Maharashtra, India"
    
    // Social / Professional Links (Placeholders)
    instagram: "ADD_INSTAGRAM_URL_HERE", // e.g. "https://instagram.com/sakshiwebstudio"
    linkedin: "ADD_LINKEDIN_URL_HERE",   // e.g. "https://linkedin.com/in/sakshi"
    github: "ADD_GITHUB_URL_HERE",       // e.g. "https://github.com/sakshi"
  },

  // Default prefilled message for WhatsApp inquiries
  defaultWhatsAppMessage: "Hello Sakshi Web Studio, I would like to discuss a website for my business.",

  /**
   * OPTIONAL: Contact Form Webhook / Service Endpoint
   * To receive form submissions directly to your email without a custom backend:
   * 1. Sign up at https://web3forms.com or https://formspree.io (free plans available)
   * 2. Paste your form access key or endpoint URL below:
   * e.g. "https://api.web3forms.com/submit" or "https://formspree.io/f/your_form_id"
   */
  formEndpoint: "", // Leave blank to show safe simulated mode with copy-to-clipboard or direct WhatsApp prompt

  // SEO Defaults
  seo: {
    title: "Sakshi Web Studio | Professional Websites for Small Businesses",
    description: "Sakshi Web Studio designs and develops modern, responsive websites for small businesses, professionals and local brands. Design. Develop. Launch.",
    siteUrl: "https://sakshiwebstudio.vercel.app",
    ogImage: "/favicon.svg",
    keywords: "web development, small business websites, responsive design, website designer, web studio, affordable websites"
  }
};

/**
 * Helper to check if a configuration string is a real value or still a placeholder
 */
export const isConfigured = (value) => {
  if (!value) return false;
  const str = String(value).trim();
  return (
    str !== "" &&
    !str.startsWith("ADD_") &&
    !str.includes("•••••") &&
    str !== "#"
  );
};

/**
 * Helper to generate a clean WhatsApp click-to-chat URL
 */
export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || siteConfig.defaultWhatsAppMessage);
  if (isConfigured(siteConfig.contact.whatsapp)) {
    // Strip any non-numeric characters for safety
    const cleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanNumber}?text=${message}`;
  }
  // Graceful fallback when number is not yet replaced
  return `#contact`;
};

export default siteConfig;
