/* ═══════════════════════════════════════════
   TYPES — Content Data Architecture
   All content separated from presentation
   ═══════════════════════════════════════════ */

export type ContentStatus = 'VERIFIED' | 'USER-PROVIDED' | 'PUBLIC-CONTEXT' | 'PROVISIONAL' | 'PLACEHOLDER';

export interface Profile {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  philosophy: string;
  yearsExperience: number;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'framework' | 'data' | 'devops' | 'ai' | 'other';
  proficiency: 'Expert' | 'Strong' | 'Comfortable' | 'Working' | 'Learning';
  icon?: string;
}

export interface TechNode {
  id: string;
  label: string;
  category: 'core' | 'framework' | 'data' | 'messaging' | 'architecture' | 'ai' | 'ai-advanced';
  x: number;
  y: number;
  description: string;
  connections: string[];
}

export interface JourneyEra {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  status: ContentStatus;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  evidence?: string;
}

export interface ThinkingStage {
  id: string;
  title: string;
  description: string;
  question: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'enterprise' | 'ai' | 'system-design' | 'open-source';
  description: string;
  businessProblem?: string;
  architecture?: string;
  technologies: string[];
  contribution?: string;
  challenges?: string[];
  decisions?: string[];
  dataFlow?: string;
  lessonsLearned?: string[];
  status: ContentStatus;
  repoUrl?: string;
  demoUrl?: string;
}

export interface ArchitectureDecision {
  id: string;
  title: string;
  problem: string;
  options: { name: string; pros: string[]; cons: string[] }[];
  decision: string;
  reason: string;
  tradeoffs: string[];
  status: ContentStatus;
}

export interface AILevel {
  level: number;
  title: string;
  description: string;
  nodes: { id: string; label: string; x: number; y: number }[];
  connections: { from: string; to: string }[];
}

export interface CodeExample {
  id: string;
  title: string;
  language: string;
  code: string;
  whyItMatters: string;
  designConsideration: string;
  interviewDiscussion: string;
  status: ContentStatus;
}

export interface InterviewTopic {
  id: string;
  title: string;
  icon: string;
  subtopics: string[];
  route: string;
}

export interface SystemDesign {
  id: string;
  title: string;
  problem: string;
  requirements: string[];
  architectureDescription: string;
  scalingStrategy: string;
  failureHandling: string;
  tradeoffs: string[];
  status: ContentStatus;
}
