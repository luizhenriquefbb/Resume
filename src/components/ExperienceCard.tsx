import { useState } from 'react';
import type { Experience } from '../types/resume';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-md border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-teal-200 ${
        isExpanded ? 'bg-teal-50' : ''
      }`}
      data-id={experience.id}
    >
      <div className="cursor-pointer" onClick={toggleExpanded}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{experience.company}</h3>
            <p className="text-teal-600 font-semibold">{experience.role}</p>
            <p className="text-sm text-slate-500 mt-1">{experience.period}</p>
          </div>
          <div className="text-teal-500 transform transition-transform duration-300">
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`mt-4 pt-4 border-t border-slate-200 ${
          isExpanded ? 'block' : 'hidden'
        }`}
      >
        <p className="italic text-slate-600 mb-4">{experience.about}</p>
        <p className="text-slate-600 mb-4">{experience.roleDescription}</p>
        <h4 className="font-bold text-slate-700 mb-2">Key Contributions:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-600">
          {experience.contributions.map((contribution, index) => (
            <li key={index}>
              <strong>{contribution.title}:</strong> {contribution.description}
            </li>
          ))}
        </ul>
        <h4 className="font-bold text-slate-700 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
