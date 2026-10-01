import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig, getWhatsAppLink, isConfigured } from '../config/siteConfig';

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppLink();
  const configured = isConfigured(siteConfig.contact.whatsapp);

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      {/* Informative Tooltip on Desktop */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span>Chat on WhatsApp</span>
        <button 
          onClick={() => setShowTooltip(false)}
          className="text-slate-400 hover:text-slate-600"
          aria-label="Close tooltip"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Floating Action Trigger */}
      <a
        href={whatsappUrl}
        target={configured ? "_blank" : "_self"}
        rel={configured ? "noopener noreferrer" : undefined}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label="Open WhatsApp conversation with Sakshi Web Studio"
      >
        {/* Subtle Pulse Animation ring */}
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping" />
        
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </aside>
  );
};

export default WhatsAppButton;
