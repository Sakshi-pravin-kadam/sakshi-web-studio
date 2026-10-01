import React from 'react';
import { pricingData, pricingNotice } from '../data/pricing';
import { SectionHeading } from '../components/SectionHeading';
import { PricingCard } from '../components/PricingCard';
import { HelpCircle, Info } from 'lucide-react';

export const Pricing = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pricing"
          title="Transparent, Business-Friendly Packages"
          subtitle="Clear starting rates designed for small business budgets with zero hidden surprises."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {pricingData.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
              onSelectTier={onSelectTier}
            />
          ))}
        </div>

        {/* Essential Transparent Disclaimer Note */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-slate-50 border border-slate-200/90 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-slate-600">
          <Info className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-800">Important Note: </span>
            {pricingNotice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
