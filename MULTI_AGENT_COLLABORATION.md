# Multi-Agent Collaboration Protocol & Architecture Guide
**Repository:** `haider-portfolio` (https://github.com/haiderabbas-labs/haider-portfolio)  
**Author / Subject:** Haider Abbas — Senior Backend Engineer · Distributed Systems · AI Systems  
**Core Motto:** *"I Design Systems Before I Write Code."*

---

## 1. Executive Summary & Objective

This repository contains the interactive engineering portfolio of Haider Abbas. It is built as a high-density, production-grade technical presentation designed for Engineering Leaders, Architects, Staff Engineers, and Technical Recruiters.

This document establishes the **Multi-Agent Collaboration Framework (MACF)** for autonomous and semi-autonomous AI coding agents (Claude, Gemini, OpenAI, Antigravity, GitHub Copilot) working concurrently or sequentially on this codebase.

---

## 2. The Multi-Agent Persona Matrix

When operating on this project, each AI subagent should adopt a defined persona to prevent scope creep, maintain separation of concerns, and preserve code quality.

```
                  ┌───────────────────────────────┐
                  │       Orchestrator Agent      │
                  │   (Task Planning & Triage)    │
                  └──────────────┬────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  Architect Agent │   │  Frontend/UI     │   │  Domain/Content  │
│ (System Design & │   │  (React, TW v4,  │   │  (Java, Kafka,   │
│  Trade-Offs)     │   │   Framer Motion) │   │   Spring AI)     │
└────────┬─────────┘   └────────┬─────────┘   └────────┬─────────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                ▼
                  ┌───────────────────────────────┐
                  │       QA / Verifier Agent     │
                  │ (TSC, Build, Lint & A11y)     │
                  └───────────────────────────────┘
```

### Agent Roles & Responsibilities

| Agent Role | Scope & Responsibilities | Key File Boundaries |
| :--- | :--- | :--- |
| **Orchestrator** | Task decomposition, work distribution, conflict resolution, git hygiene | `README.md`, `MULTI_AGENT_COLLABORATION.md` |
| **Architect** | System design diagrams, architecture trade-off tables, data models, state flows | `src/types/index.ts`, `src/components/sections/SystemDesignLab.tsx`, `src/components/sections/Decisions.tsx` |
| **Frontend/UI** | Component layout, micro-interactions, responsive styling, glassmorphism, Framer Motion animations | `src/components/*`, `src/pages/*`, `src/styles/globals.css` |
| **Domain/Content** | Technical accuracy of Java 21, Kafka, Spring Boot, Healthcare Claims, and Spring AI / MCP concepts | `src/data/content.ts`, `CONTENT_VERIFICATION.md` |
| **QA / Verifier** | TypeScript compilation, build validation (`npm run build`), link verification, accessibility (a11y) | `package.json`, `tsconfig.json`, GitHub Actions (`deploy.yml`) |

---

## 3. Strict Architectural Invariants (Must Never Break)

1. **Content / Presentation Decoupling**:
   - **Rule:** Never hardcode domain text, company names, project descriptions, or code snippets directly inside JSX presentation components.
   - **Convention:** All data MUST be declared in `src/data/content.ts` and strongly typed via `src/types/index.ts`.

2. **Truthfulness & Verification Metadata**:
   - **Rule:** Every enterprise claim, company metric, or technology experience must carry a `ContentStatus` badge:
     - `VERIFIED`: Confirmed by user or official resume.
     - `USER-PROVIDED`: Supplied by Haider directly in prompts.
     - `PUBLIC-CONTEXT`: Publicly verifiable industry standards (e.g. CMS IRA 2025 guidelines).
     - `PROVISIONAL`: Realistic architectural placeholder requiring final user validation.
     - `PLACEHOLDER`: Marked with `[BRACKETS]` for user input.

3. **Tailwind CSS v4 Engine**:
   - Use Tailwind CSS v4 directives (`@import "tailwindcss";`, `@theme`).
   - Use CSS custom properties defined in `src/styles/globals.css` (`var(--color-surface-0)`, `var(--color-accent)`, etc.) to preserve seamless dark/light theme switching.

4. **Reduced Motion & Accessibility**:
   - All Framer Motion animations must pass through `useReducedMotion()` from `src/hooks/useAnimations.ts`.
   - Never remove `prefers-reduced-motion` guards.

---

## 4. Multi-Agent Workflows & Protocols

### A. Subtask Handoff Protocol
When an agent completes an assigned chunk of work, it must output a structured handoff artifact:

```markdown
### 📋 Agent Handoff Summary
- **Agent Role:** [e.g., Domain/Content Agent]
- **Files Modified:**
  - `src/types/index.ts`: Added `KafkaLabTopic` interface
  - `src/data/content.ts`: Populated 4 detailed Kafka deep dive topics
- **State of Invariants:** All interfaces typed, no `any` types used.
- **Next Recommended Action:** [e.g., Frontend Agent should update `KafkaLab.tsx` to render the new fields.]
```

### B. Conflict Avoidance Protocol
To prevent merge conflicts when multiple agents run:
1. **Parallel Reads, Sequential Writes:** Only one agent may write to `src/data/content.ts` at a time.
2. **Component Granularity:** Keep section components modular (e.g., `JavaDeepDive.tsx`, `KafkaLab.tsx`, `SpringMicroservicesLab.tsx`). Agents should work in separate component files.

---

## 5. Verification & Quality Gates

Before declaring any agent task complete or proposing a commit:

```bash
# 1. Typecheck validation (Zero TypeScript errors allowed)
npx tsc --noEmit

# 2. Production build verification
npm run build

# 3. Check git status for unintended modifications
git status
```

---

## 6. Prompting Guidelines for Collaborating Agents

When instructing another agent to continue work, use this standardized prompt template:

```markdown
Role: [Frontend/UI Agent | Architect Agent | QA Agent]
Context: Reading MULTI_AGENT_COLLABORATION.md and MASTER PROMPT V3.
Objective: [Specific actionable task]
Constraints:
- Follow Content/Presentation separation in src/data/content.ts
- Respect Tailwind v4 tokens and theme variables
- Verify with `npx tsc --noEmit` before finishing
```

---

*Authored for the Haider Abbas Engineering Portfolio AI Ecosystem.*
