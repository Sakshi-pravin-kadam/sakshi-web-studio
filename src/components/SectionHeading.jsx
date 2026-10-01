import React from 'react';
import { motion } from 'framer-motion';

/**
 * Standardized Section Heading component with typography hierarchy and subtle animation.
 */
export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-3"
        >
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
            dark 
              ? 'bg-brand-500/20 text-brand-300 border border-brand-400/30' 
              : 'bg-brand-50 text-brand-700 border border-brand-200/80'
          }`}>
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          } ${isCentered ? 'max-w-2xl mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
