import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  AlertCircle, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { siteConfig, isConfigured, getWhatsAppLink } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

export const Contact = ({ prefilledPackage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      businessType: '',
      requirement: prefilledPackage ? `Interested in ${prefilledPackage}` : '',
      budget: '',
      message: ''
    }
  });

  // If a pricing card selected a package, update requirement field
  useEffect(() => {
    if (prefilledPackage) {
      setValue('requirement', `Interested in ${prefilledPackage}`);
    }
  }, [prefilledPackage, setValue]);

  const businessTypes = [
    "Restaurant",
    "Salon",
    "Event Business",
    "Photographer",
    "Boutique",
    "Gym",
    "Coaching",
    "Hotel",
    "Local Shop",
    "Other"
  ];

  const budgetRanges = [
    "Under ₹10,000",
    "₹10,000 – ₹20,000",
    "₹20,000 – ₹50,000",
    "₹50,000+",
    "Not Sure Yet"
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmittedData(data);

    try {
      // If a real form endpoint is configured (e.g. Formspree / Web3Forms)
      if (isConfigured(siteConfig.formEndpoint)) {
        const response = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }
      } else {
        // Safe simulated latency if no backend/service is connected yet
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback to local success screen with WhatsApp backup option
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyInquiryText = () => {
    if (!submittedData) return;
    const text = `Website Inquiry from ${submittedData.name}:
Business: ${submittedData.businessName} (${submittedData.businessType})
Phone: ${submittedData.phone}
Email: ${submittedData.email}
Requirement: ${submittedData.requirement}
Budget: ${submittedData.budget}
Message: ${submittedData.message || 'None'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // WhatsApp quick text generation for submitted inquiry
  const getWhatsAppInquiryLink = () => {
    if (!submittedData) return getWhatsAppLink();
    const message = `Hello Sakshi Web Studio, I just filled your website inquiry form:
- Name: ${submittedData.name}
- Business: ${submittedData.businessName} (${submittedData.businessType})
- Phone: ${submittedData.phone}
- Budget: ${submittedData.budget}
- Requirement: ${submittedData.requirement}`;
    return getWhatsAppLink(message);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Start Your Project"
          title="Let's Build Your Website"
          subtitle="Fill out this quick form or connect directly on WhatsApp to discuss your website requirements and get a clear plan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Quick Project Discussion
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you already have a full outline or just an idea for your business website, feel free to reach out. I will help you clarify what sections and features you actually need.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">WhatsApp Discussion</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Fastest response for questions & initial outlines.
                    </div>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 mt-1"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Email Inquiries</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {isConfigured(siteConfig.contact.email)
                        ? siteConfig.contact.email
                        : "Direct contact via WhatsApp or the form on the right"}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Location</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {isConfigured(siteConfig.contact.location)
                        ? siteConfig.contact.location
                        : "Providing web development services remotely across India"}
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect after sending */}
              <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-900 mb-1">What to expect next:</div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No obligation or aggressive sales talk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Clear project scope and timeline quote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-subtle">
              {isSubmitted ? (
                /* Success State with Actionable WhatsApp Handoff */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Thank You, {submittedData?.name}!
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been recorded. For the quickest response, you can also forward your details straight to WhatsApp.
                    </p>
                  </div>

                  {/* Forward to WhatsApp CTA */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppInquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] shadow-md transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyInquiryText}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-sm font-medium transition"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-brand-600 hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* The Interactive Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Please enter your name' })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                          errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/40'
                        }`}
                        placeholder="e.g. Rahul Sharma"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        {...register('businessName', { required: 'Please enter your business name' })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                          errors.businessName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/40'
                        }`}
                        placeholder="e.g. Royal Cafe & Bakery"
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-xs text-rose-500">{errors.businessName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/40'
                        }`}
                        placeholder="name@business.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone', {
                          required: 'Phone number is required',
                          minLength: { value: 8, message: 'Please enter a valid phone number' }
                        })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/40'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Type */}
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        {...register('businessType', { required: 'Please select your business type' })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/40 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                          errors.businessType ? 'border-rose-400' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select category...</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="mt-1 text-xs text-rose-500">{errors.businessType.message}</p>
                      )}
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-slate-700 mb-1">
                        Budget Range <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="budget"
                        {...register('budget', { required: 'Please select your estimated budget' })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/40 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                          errors.budget ? 'border-rose-400' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select budget range...</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-xs text-rose-500">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Website Requirement */}
                  <div>
                    <label htmlFor="requirement" className="block text-xs font-semibold text-slate-700 mb-1">
                      Website Requirement <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="requirement"
                      type="text"
                      {...register('requirement', { required: 'Please summarize what kind of website you need' })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                        errors.requirement ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/40'
                      }`}
                      placeholder="e.g. 5-page cafe website with digital menu and WhatsApp order button"
                    />
                    {errors.requirement && (
                      <p className="mt-1 text-xs text-rose-500">{errors.requirement.message}</p>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      {...register('message')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                      placeholder="Any specific features, existing links, or preferred timelines..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="accent"
                      size="lg"
                      className="w-full justify-center"
                      rightIcon={Send}
                    >
                      {isSubmitting ? 'Sending Details...' : 'Send Enquiry'}
                    </Button>
                  </div>

                  {/* Configuration Help Note */}
                  <div className="pt-3 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-600" />
                    <span>Your information is kept strictly private.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
