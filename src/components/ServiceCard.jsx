import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';

export const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:border-brand-300 transition-all duration-300"
    >
      <div>
        {/* Header: Icon + Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100/80 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-200">
            <DynamicIcon name={service.icon} className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables / Feature Checklist */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            What's Included:
          </div>
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Inquire about this service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
