export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: { title: string; description: string }[];
  deliveryRoadmap: { title: string; description: string }[];
  technologies: string[];
  benefits: { metric: string; description: string }[];
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  processSteps: { title: string; detail: string }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  industryContext: string;
  function: string;
  businessProblem: string;
  strategicIntervention: string;
  solutionArchitecture: string[];
  businessImpact: string[];
  whyThisMatters: string;
}

export interface TrainingProgram {
  slug: string;
  title: string;
  description: string;
  icon: string;
  targetAudience: string[];
  topics: string[];
  deliveryFormats: string[];
  duration: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  tier: "director" | "principal" | "manager";
  linkedin?: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}
