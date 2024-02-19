export type Location = {
  city: string;
  state: string;
  country: string;
}

export type Education = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  minor?: string;
  concentration?: string;
  summary?: string;
  location?: Location;
  startDate: Date;
  endDate: Date;
}

export enum SkillsCompetency {
  NONE = "",
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert"
};

export type Skills = {
  name: string;
  description: string;
  competency?: SkillsCompetency;
}

export type Experience = {
  company_name: string;
  title: string;
  summary?: string;
  location?: Location;
  startDate: Date;
  endDate: Date;
}