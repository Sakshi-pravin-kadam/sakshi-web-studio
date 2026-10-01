import React from 'react';
import { motion } from 'framer-motion';
import { whyUsData } from '../data/whyUs';
import { SectionHeading } from '../components/SectionHeading';
import { DynamicIcon } from '../components/DynamicIcon';

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-surface-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Work With Sakshi Web Studio?"
          subtitle="Honest, practical website development built around the needs of local businesses and direct client communication."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsData.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 border border-brand-200/60 px-2.5 py-1 rounded-md">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center">
                    <DynamicIcon name={item.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-400">
                <span>Standard with every project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
