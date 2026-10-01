import React from 'react';
import { motion } from 'framer-motion';
import { processStepsData } from '../data/process';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Process"
          title="How It Works"
          subtitle="A clear, organized development roadmap from our initial conversation to your website going live."
        />

        {/* Timeline Grid (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          {/* Subtle Connecting Line for Desktop */}
          <div 
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-emerald-200 -z-0"
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {processStepsData.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-navy-900 text-white font-mono text-sm font-bold flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Step {index + 1} of 6
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub details note */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 mt-0.5 shrink-0" />
                  <span>{step.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            You are involved at every stage with previews and revisions so there are never any surprises at launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
