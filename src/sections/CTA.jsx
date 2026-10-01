import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink, isConfigured } from '../config/siteConfig';
import { Button } from '../components/Button';

export const CTA = () => {
  const whatsappUrl = getWhatsAppLink();
  const configured = isConfigured(siteConfig.contact.whatsapp);

  return (
    <section className="py-16 sm:py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/30">
            Let's Talk About Your Website
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Your Business Website?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell me about your business and what you need. I'll help you plan a website that fits your goals.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href="#contact"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={ArrowRight}
            >
              Start Your Project
            </Button>

            <Button
              href={whatsappUrl}
              target={configured ? "_blank" : "_self"}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={MessageCircle}
            >
              WhatsApp Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
