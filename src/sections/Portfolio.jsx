import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { Layers } from 'lucide-react';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-20 sm:py-28 bg-surface-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Selected Work"
          subtitle="A few websites and web applications I've built. Real projects developed for business and functional requirements."
        />

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Note on Real Work */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200/80 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 leading-relaxed">
            Every project listed above represents authentic software and websites I have designed and programmed. Click on any project card to view the comprehensive case study breakdown.
          </p>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;
