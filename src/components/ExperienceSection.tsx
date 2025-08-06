import { useState } from 'react';
import type { Experience } from '../types/resume';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceProps) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredExperiences = experiences.filter(exp =>
    activeFilter === 'All' || exp.technologies.includes(activeFilter)
  );

  if (filteredExperiences.length === 0) {
    return (
      <section id="experience" className="mb-24 section-fade-in">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Experience</h2>
        <p className="mb-12 text-slate-600 max-w-3xl">
          Here is a timeline of my professional journey. Each role has provided unique challenges and opportunities for growth.
          Click on any job title to expand and see detailed contributions and the technologies I used.
        </p>
        <div className="text-center p-8 bg-white rounded-lg shadow-md border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-700">
            No projects match the filter "{activeFilter}".
          </h3>
          <p className="text-slate-500 mt-2">Please select another skill or reset the filter.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="mb-24 section-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Experience</h2>
      <p className="mb-12 text-slate-600 max-w-3xl">
        Here is a timeline of my professional journey. Each role has provided unique challenges and opportunities for growth.
        Click on any job title to expand and see detailed contributions and the technologies I used.
      </p>
      <div className="space-y-8">
        {filteredExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};
