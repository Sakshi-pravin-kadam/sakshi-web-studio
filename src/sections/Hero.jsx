import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { BrowserMockup } from '../components/BrowserMockup';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div 
        className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand-50/70 via-slate-50/40 to-transparent -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust-oriented Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-subtle text-xs sm:text-sm font-medium text-slate-700 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
          <span>Web Design & Development for Small Businesses</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto"
        >
          Your Business Deserves a Website That Works.
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Modern, responsive websites designed to help small businesses build a professional online presence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto"
        >
          <Button
            href="#contact"
            variant="accent"
            size="lg"
            className="w-full sm:w-auto"
            rightIcon={ArrowRight}
          >
            Get a Website
          </Button>

          <Button
            href="#work"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            leftIcon={Eye}
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Hero Browser Mockup Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 sm:mt-18"
        >
          <BrowserMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
