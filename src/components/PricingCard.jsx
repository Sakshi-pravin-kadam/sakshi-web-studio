import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const PricingCard = ({ tier, index, onSelectTier }) => {
  const isRecommended = tier.isPopular;

  const handleSelect = () => {
    if (onSelectTier) {
      onSelectTier(tier.name);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        isRecommended
          ? 'bg-navy-900 text-white border-2 border-brand-500 shadow-xl shadow-brand-900/20 lg:-translate-y-2'
          : 'bg-white text-slate-800 border border-slate-200/90 shadow-subtle hover:shadow-card'
      }`}
    >
      {/* Recommended Tag */}
      {isRecommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-600 text-white shadow-md">
            <Sparkles className="w-3 h-3" />
            Recommended
          </span>
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="mb-6">
          <h3 className={`text-xl font-bold tracking-tight ${isRecommended ? 'text-white' : 'text-slate-900'}`}>
            {tier.name}
          </h3>
          <p className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${isRecommended ? 'text-slate-300' : 'text-slate-500'}`}>
            {tier.tagline}
          </p>
        </div>

        {/* Pricing */}
        <div className="pb-6 mb-6 border-b border-slate-100/10">
          <div className="text-xs uppercase font-semibold tracking-wider text-brand-500 mb-1">
            {tier.pricePrefix}
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isRecommended ? 'text-white' : 'text-slate-900'}`}>
              {tier.price}
            </span>
          </div>
          <div className={`mt-2 text-xs ${isRecommended ? 'text-slate-400' : 'text-slate-500'}`}>
            <span className="font-medium">Best for: </span>
            {tier.idealFor}
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 mb-8">
          <div className={`text-xs font-bold uppercase tracking-wider ${isRecommended ? 'text-slate-400' : 'text-slate-500'}`}>
            Included in this package:
          </div>
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                isRecommended ? 'bg-brand-500/20 text-brand-400' : 'bg-emerald-50 text-emerald-600'
              }`}>
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className={isRecommended ? 'text-slate-200' : 'text-slate-700'}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <a
          href="#contact"
          onClick={handleSelect}
          className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
            isRecommended
              ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-md'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-subtle'
          }`}
        >
          <span>{tier.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default PricingCard;
