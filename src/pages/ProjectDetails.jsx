import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { siteConfig, isConfigured, getWhatsAppLink } from '../config/siteConfig';
import { ProjectPreviewMockup } from '../components/ProjectPreviewMockup';
import { Button } from '../components/Button';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug || p.id === slug);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Project Not Found</h1>
        <p className="text-slate-600 mb-6">The requested case study could not be located.</p>
        <Button to="/#work" variant="primary" leftIcon={ArrowLeft}>
          Back to Selected Work
        </Button>
      </div>
    );
  }

  const hasLiveUrl = isConfigured(project.liveUrl);
  const hasGithubUrl = isConfigured(project.githubUrl);

  return (
    <article className="pt-28 pb-20 sm:pt-32 sm:pb-28 bg-surface-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Card */}
        <header className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle p-6 sm:p-10 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.badgeColor}`}>
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {hasLiveUrl ? (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  variant="primary"
                  size="md"
                  rightIcon={ExternalLink}
                >
                  Visit Live Website
                </Button>
              ) : (
                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg">
                  Live preview accessible upon request
                </span>
              )}

              {hasGithubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  variant="secondary"
                  size="md"
                  leftIcon={Github}
                >
                  View Source Code
                </Button>
              )}
            </div>

            <Button
              to="/#contact"
              variant="accent"
              size="md"
              rightIcon={ArrowRight}
            >
              Discuss Your Project
            </Button>
          </div>
        </header>

        {/* High-Fidelity Visual Mockup */}
        <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-xl mb-12 bg-slate-950">
          <ProjectPreviewMockup project={project} />
        </div>

        {/* Detailed Breakdown Sections */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Problem */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  The Business Challenge
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>
            </section>

            {/* The Solution */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  The Implemented Solution
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>
          </div>

          {/* Key Features */}
          <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-4">
              Key Features & Deliverables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Outcome / What Was Built */}
          <section className="bg-brand-50/70 border border-brand-200/80 rounded-3xl p-6 sm:p-8 shadow-subtle">
            <h2 className="text-lg sm:text-xl font-bold text-brand-950 tracking-tight mb-2">
              Outcome & Deliverable
            </h2>
            <p className="text-sm sm:text-base text-brand-900 leading-relaxed">
              {project.outcome}
            </p>
          </section>

          {/* Bottom Conversion Callout */}
          <div className="pt-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Interested in a website like this for your business?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
              Let's discuss what sections, features, and integrations make sense for your specific business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/#contact" variant="accent" size="lg" rightIcon={ArrowRight}>
                Start Your Project
              </Button>
              <Button href={getWhatsAppLink()} target="_blank" variant="whatsapp" size="lg">
                Ask a Question on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
