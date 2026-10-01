import React from 'react';
import { servicesData } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-surface-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="What I Can Build For Your Business"
          subtitle="From simple business websites to custom web solutions, I build websites around your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
