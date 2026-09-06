/* ═════════════════════════════════════════════════════════
   TYPES — Content Data Architecture
   Master Prompt V4 Compliant
   All content separated from presentation
   ═════════════════════════════════════════════════════════ */

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
  phone?: string;
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
  keyResponsibilities?: string[];
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
  context?: string;
  architecture?: string;
  technologies: string[];
  contribution?: string;
  challenges?: string[];
  decisions?: string[];
  dataFlow?: string;
  scalability?: string;
  reliability?: string;
  testing?: string;
  observability?: string;
  lessonsLearned?: string[];
  status: ContentStatus;
  repoUrl?: string;
  demoUrl?: string;
  interviewDiscussion?: string;
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
  dataFlow?: string;
  scalingStrategy: string;
  failureHandling: string;
  tradeoffs: string[];
  finalDesign?: string;
  status: ContentStatus;
}

export interface InterviewDepthContent {
  thirtySecond: string;
  twoMinute: string[];
  tenMinute: {
    architecture: string;
    tradeoffs: string[];
    scaling: string;
    failureHandling: string;
  };
  sampleQuestions: string[];
}

export interface InterviewTopicDetail {
  id: string;
  title: string;
  category: 'core' | 'distributed' | 'enterprise' | 'ai';
  icon: string;
  depth: InterviewDepthContent;
  tags: string[];
}

export interface JavaTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  deepDive: string;
  codeSnippet?: string;
  keyTakeaway: string;
}

export interface ArchitectureLabStep {
  id: string;
  name: string;
  type: 'client' | 'gateway' | 'service' | 'queue' | 'database' | 'observability';
  description: string;
  responsibilities: string[];
  failureMode: string;
}

export interface KafkaLabTopic {
  id: string;
  title: string;
  summary: string;
  deepDive: string;
  codeSnippet?: string;
  keyTradeoff: string;
}

export interface AIConceptNode {
  id: string;
  name: string;
  definition: string;
  purpose: string;
  relationship: string;
  whenToUse: string;
  limitations: string;
  example: string;
}

/* ═════════════════════════════════════════════════════════
   MASTER PROMPT V4 — CONSULTING & CLIENT TYPES
   ═════════════════════════════════════════════════════════ */

export interface ConsultingService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
}

export interface ProblemSolved {
  id: string;
  title: string;
  tag: string;
  problem: string;
  approach: string[];
  result: string;
  technologies: string[];
}

export interface EngagementModel {
  id: string;
  title: string;
  duration: string;
  description: string;
  idealFor: string;
  deliverables: string[];
}

export interface ClientJourneyStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface AISolutionPattern {
  id: string;
  title: string;
  category: string;
  summary: string;
  flow: string[];
  technologies: string[];
  useCase: string;
  status: ContentStatus;
}

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  project?: string;
  client?: string;
  team?: string;
  highlights: string[];
}

export interface ResumeProject {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    location: string;
    phone?: string;
    email: string;
    linkedin?: string;
    github?: string;
  };
  summary: string[];
  skills: {
    category: string;
    items: string;
  }[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  additionalInfo: string[];
}
