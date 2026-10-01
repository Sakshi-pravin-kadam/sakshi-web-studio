import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles, 
  Coffee, 
  ArrowRight, 
  CheckCircle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

/**
 * Interactive Hero Browser Mockup
 * Shows a realistic, fictional small business website demo (The Artisan Roast & Cafe).
 * Clearly marked as an interactive demo preview.
 */
export const BrowserMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-2xl border border-slate-700/60 bg-navy-900 shadow-2xl shadow-navy-950/40 overflow-hidden text-left">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-navy-950/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Browser URL bar */}
        <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/60 rounded-lg px-3 py-1 text-xs text-slate-300 w-full max-w-sm mx-2">
          <Globe className="w-3.5 h-3.5 text-brand-400 shrink-0" />
          <span className="truncate text-slate-300 font-mono text-[11px]">
            https://artisan-cafe.preview/menu
          </span>
          <span className="ml-auto px-1.5 py-0.2 text-[9px] font-semibold bg-brand-500/20 text-brand-300 rounded">
            DEMO
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-slate-400">Live Preview</span>
        </div>
      </div>

      {/* Demo Website Viewport Content */}
      <div className="bg-slate-50 text-slate-900 p-4 sm:p-6 lg:p-7 select-none overflow-hidden relative">
        {/* Subtle Watermark Pill */}
        <div className="absolute top-3 right-3 z-10 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-[11px] font-medium text-slate-600 shadow-sm">
          <Sparkles className="w-3 h-3 text-brand-600" />
          <span>Demo Business Layout</span>
        </div>

        {/* Mini Navbar inside Demo Site */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm tracking-tight leading-none">The Artisan Roast</div>
              <div className="text-[10px] text-slate-500 font-medium">Specialty Coffee & Bakery</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-600">
            <span className="text-brand-600 font-semibold cursor-pointer">Home</span>
            <span className="hover:text-slate-900 cursor-pointer">Menu</span>
            <span className="hover:text-slate-900 cursor-pointer">About Us</span>
            <span className="hover:text-slate-900 cursor-pointer">Find Us</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-[11px] bg-brand-600 hover:bg-brand-700 text-white font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm transition">
              <MessageCircle className="w-3 h-3" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Demo Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div className="md:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[11px] font-medium text-amber-800">
              <span>Freshly Brewed Every Morning</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Handcrafted Coffee & Artisan Bakes In Your Neighborhood.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Step into warm conversations, ethically sourced espresso, and freshly baked sourdough pastries every day from 8 AM to 10 PM.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center text-[11px] font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-xs">
                <MapPin className="w-3 h-3 text-red-500 mr-1" /> Shivaji Nagar, Pune
              </span>
              <span className="inline-flex items-center text-[11px] font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-xs">
                <Clock className="w-3 h-3 text-emerald-600 mr-1" /> Open Today until 10 PM
              </span>
            </div>
          </div>

          {/* Demo Visual Card */}
          <div className="md:col-span-5">
            <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 pb-2 border-b border-slate-100">
                <span>Today's Highlights</span>
                <span className="text-brand-600 text-[11px]">4.9 ★ (210+ reviews)</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">
                      ☕
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Vanilla Bean Flat White</div>
                      <div className="text-[10px] text-slate-500">Double espresso • oat milk</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-900">₹180</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
                      🥐
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Almond Butter Croissant</div>
                      <div className="text-[10px] text-slate-500">Flaky butter pastry</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-900">₹160</span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600" /> Dine-in & Takeaway
                </span>
                <span className="font-medium text-brand-600 flex items-center gap-0.5">
                  View Full Menu <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Bottom Bar inside Mockup */}
        <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center gap-4">
            <span>✓ Mobile Optimized</span>
            <span>✓ WhatsApp Integrated</span>
            <span>✓ Google Maps Linked</span>
          </div>
          <span className="text-slate-400 font-mono text-[10px]">
            Design by Sakshi Web Studio
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
