import React from 'react';
import { Smartphone, Layout, Zap, Target, LifeBuoy } from 'lucide-react';

export const TrustStrip = () => {
  const trustItems = [
    { title: "Responsive Design", icon: Layout },
    { title: "Mobile Friendly", icon: Smartphone },
    { title: "Fast Deployment", icon: Zap },
    { title: "Business Focused", icon: Target },
    { title: "Post-Launch Support", icon: LifeBuoy },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-white/70 py-6" aria-label="Core Principles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
