import type { Experience } from "../types/resume";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceProps) => {
  const header = (
    <>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Experience</h2>
      <p className="mb-12 text-slate-600 max-w-3xl">
        Here is a timeline of my professional journey. Each role has provided
        unique challenges and opportunities for growth. Click on any job title
        to expand and see detailed contributions and the technologies I used.
      </p>
    </>
  );

  return (
    <section id="experience" className="mb-24 section-fade-in">
      {header}
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};
