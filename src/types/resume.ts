export interface Contribution {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  about: string;
  roleDescription: string;
  contributions: Contribution[];
  technologies: string[];
}

export interface Skills {
  [category: string]: string[];
}

export interface ResumeData {
  experiences: Experience[];
  skills: Skills;
}
