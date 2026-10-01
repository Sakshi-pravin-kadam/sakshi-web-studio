/**
 * PRICING DATA
 * Transparent, modular packages for small businesses.
 * "Starting from" pricing format as requested.
 */

export const pricingData = [
  {
    id: "starter",
    name: "Starter Website",
    tagline: "Ideal for small local businesses establishing their first online presence.",
    price: "₹7,000",
    pricePrefix: "Starting from",
    isPopular: false,
    ctaText: "Choose Starter",
    idealFor: "Salons, small boutiques, photographers, and local service providers.",
    features: [
      "4–5 core sections / single page layout",
      "100% Mobile & tablet responsive design",
      "Business overview & services display",
      "Photo gallery or work showcase",
      "Direct WhatsApp chat integration",
      "Contact details & Google Maps location",
      "Free cloud deployment & domain setup"
    ]
  },
  {
    id: "business",
    name: "Business Website",
    tagline: "Comprehensive online presence for established businesses seeking inquiries.",
    price: "₹15,000",
    pricePrefix: "Starting from",
    isPopular: true,
    badge: "Recommended",
    ctaText: "Get Started",
    idealFor: "Restaurants, hotels, event decorators, gyms, and coaching institutes.",
    features: [
      "Multi-page architecture with custom design",
      "Dedicated services & catalog pages",
      "Interactive photo & video galleries",
      "Custom contact & customer enquiry forms",
      "Direct WhatsApp button & click-to-call",
      "Google Maps embed & business hours",
      "Subtle smooth animations & micro-interactions",
      "SEO-ready technical foundation",
      "Deployment & domain connection included"
    ]
  },
  {
    id: "custom",
    name: "Custom Website",
    tagline: "Tailored web applications with custom workflows, forms, or admin features.",
    price: "Custom Quote",
    pricePrefix: "Flexible scope",
    isPopular: false,
    ctaText: "Discuss Your Project",
    idealFor: "Businesses requiring databases, booking flows, or administrative dashboards.",
    features: [
      "Tailored custom design & development",
      "Database integration (MySQL / PostgreSQL)",
      "Admin management panels or dashboards",
      "Custom enquiry/booking flow systems",
      "Custom API endpoints & integrations",
      "Role-based authentication (if required)",
      "High performance & optimized architecture",
      "Dedicated deployment & launch walkthrough"
    ]
  }
];

export const pricingNotice = "Final pricing depends on the number of pages, specific design requirements, and custom functionality needed for your business.";

export default pricingData;
