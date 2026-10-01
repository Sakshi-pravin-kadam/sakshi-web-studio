import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';
import { Code2, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const About = () => {
  const technologies = [
    'React.js',
    'JavaScript',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Python',
    'Django',
    'FastAPI',
    'MySQL',
    'Java / Spring Boot'
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-surface-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About The Studio"
          title="Meet the Developer Behind Sakshi Web Studio"
          subtitle="Proven full-stack development expertise combined with a genuine focus on helping businesses succeed online."
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-subtle p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Avatar / Studio Identity Emblem */}
            <div className="md:col-span-4 text-center">
              <div className="relative inline-block">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-navy-900 to-brand-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold shadow-lg mx-auto">
                  <span>S</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-white border border-slate-200 text-brand-600 flex items-center justify-center shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Sakshi
              </h3>
              <p className="text-xs text-brand-600 font-medium">
                Founder & Full-Stack Developer
              </p>

              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold border border-brand-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                <span>Full-Stack Web Developer</span>
              </div>
            </div>

            {/* Right Story & Approach */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Sakshi Web Studio is an independent web development studio focused on helping small businesses, local brands, and professionals build a high-converting, professional online presence through modern, responsive websites.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                I specialize in building practical, high-performing websites engineered around core business goals: presenting services cleanly, showcasing visual catalogs, displaying operating hours and location maps, and driving direct customer inquiries via WhatsApp and contact forms.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With proven hands-on experience developing and deploying production websites and full-stack web applications across modern React, Python/Django, FastAPI, Spring Boot, and MySQL, I bring clean code architecture, fast loading speeds, and responsive layouts tailored to each business.
              </p>

              {/* Technologies Toolbox */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
