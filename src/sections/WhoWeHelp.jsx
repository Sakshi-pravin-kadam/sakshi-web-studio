import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { categoriesData } from '../data/categories';
import { SectionHeading } from '../components/SectionHeading';
import { DynamicIcon } from '../components/DynamicIcon';

export const WhoWeHelp = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who We Help"
          title="Built for Small Businesses"
          subtitle="Give your customers one professional place to learn about your business, services and contact options."
        />

        {/* The Digital Problem & Website Solution Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200/60">
                The Central Digital Hub
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Connect your social media, messaging, and physical location in one credible place.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Many local businesses operate mainly through Instagram direct messages, WhatsApp statuses, Google Business listings, or word of mouth. While those channels are valuable, having a dedicated business website unifies your brand, builds trust, and allows potential clients to find everything they need without endless back-and-forth messaging.
              </p>
            </div>

            {/* Channels vs Website Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Instagram</div>
                  <div className="text-[11px] text-slate-500">Great for daily photos, but hard for clients to find complete pricing.</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">WhatsApp</div>
                  <div className="text-[11px] text-slate-500">Perfect for quick chat, but repetitive answering the same questions.</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-50/70 border border-brand-200/80 text-brand-900">
                <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-brand-900">Your Business Website</div>
                  <div className="text-[11px] text-brand-700">
                    Your central showroom: catalog, pricing, location, reviews, and instant WhatsApp chat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Grid of Business Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoriesData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-brand-200 hover:bg-slate-50/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-brand-50 text-slate-700 group-hover:text-brand-600 flex items-center justify-center transition-colors">
                    <DynamicIcon name={category.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/50">
                    {category.tag}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {category.title}
                </h4>

                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-400 group-hover:text-brand-600 transition-colors">
                <span>Tailored for this industry</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
