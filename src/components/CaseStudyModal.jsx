import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle, ArrowRight } from 'lucide-react';
import { isConfigured, getWhatsAppLink } from '../config/siteConfig';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';
import { Button } from './Button';

export const CaseStudyModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const hasLiveUrl = isConfigured(project.liveUrl);
  const hasGithubUrl = isConfigured(project.githubUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 text-slate-800"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Visual Mockup */}
          <div className="rounded-t-3xl overflow-hidden bg-slate-900">
            <ProjectPreviewMockup project={project} />
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Category */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${project.badgeColor}`}>
                  {project.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">Case Study</span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Business Context & Need
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-600" />
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What Was Built / Outcome */}
            <div className="bg-brand-50/60 border border-brand-100 rounded-2xl p-4">
              <h3 className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-1">
                What Was Built
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {hasLiveUrl ? (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    size="sm"
                    variant="primary"
                    rightIcon={ExternalLink}
                  >
                    Visit Live Website
                  </Button>
                ) : (
                  <span className="text-xs text-slate-500 italic">
                    Production preview available upon request
                  </span>
                )}

                {hasGithubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    size="sm"
                    variant="secondary"
                    leftIcon={Github}
                  >
                    View Code
                  </Button>
                )}
              </div>

              <Button
                variant="accent"
                size="sm"
                href="#contact"
                onClick={onClose}
                rightIcon={ArrowRight}
              >
                Build Something Similar
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
