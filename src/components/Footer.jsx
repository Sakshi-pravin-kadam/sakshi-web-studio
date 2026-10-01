import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Instagram, 
  Linkedin, 
  Github, 
  MessageCircle, 
  Globe 
} from 'lucide-react';
import { siteConfig, isConfigured, getWhatsAppLink } from '../config/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    'Business Websites',
    'Landing Pages',
    'Portfolio Websites',
    'Service Websites',
    'Custom Web Solutions',
    'Website Deployment'
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                <span>S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.positioning}. Helping local brands, shops, and service providers establish a clean, credible online presence.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>
                  {isConfigured(siteConfig.contact.location) 
                    ? siteConfig.contact.location 
                    : "Serving clients remotely across India"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>
                  {isConfigured(siteConfig.contact.email)
                    ? siteConfig.contact.email
                    : "Direct contact via WhatsApp or Inquiry Form"}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-center transition-colors"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={isConfigured(siteConfig.contact.instagram) ? siteConfig.contact.instagram : "#contact"}
                target={isConfigured(siteConfig.contact.instagram) ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={isConfigured(siteConfig.contact.linkedin) ? siteConfig.contact.linkedin : "#contact"}
                target={isConfigured(siteConfig.contact.linkedin) ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={isConfigured(siteConfig.contact.github) ? siteConfig.contact.github : "#contact"}
                target={isConfigured(siteConfig.contact.github) ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Connect
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions about your website requirements? Let's discuss directly.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with clean code & modern web standards</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
