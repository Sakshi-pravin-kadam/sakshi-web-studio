import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Layers } from 'lucide-react';
import { isConfigured } from '../config/siteConfig';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

export const ProjectCard = ({ project, index, onOpenModal }) => {
  const hasLiveUrl = isConfigured(project.liveUrl);
  const hasGithubUrl = isConfigured(project.githubUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-subtle hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      {/* Visual Preview / Browser Mockup */}
      <div className="relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
        <ProjectPreviewMockup project={project} />
        
        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold shadow-xs border ${project.badgeColor || 'bg-white text-slate-800 border-slate-200'}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Primary View Details / Case Study */}
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {/* Quick Modal Trigger if provided */}
            {onOpenModal && (
              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
                title="Quick Overview"
              >
                Quick View
              </button>
            )}

            {/* Configurable Live Demo Link */}
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                aria-label={`Visit live website for ${project.title}`}
              >
                <span>Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {/* Configurable GitHub Link */}
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-slate-500 hover:text-slate-900 transition"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
