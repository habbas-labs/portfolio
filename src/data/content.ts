import type { Profile, Skill, TechNode, JourneyEra, Capability, ThinkingStage, ArchitectureDecision, CodeExample, InterviewTopic, SystemDesign, AILevel } from '../types';

/* ═══════════════════════════════════════════
   PROFILE
   ═══════════════════════════════════════════ */
export const profile: Profile = {
  name: '[NAME]',
  tagline: 'Engineering Intelligent Systems',
  headline: 'I Design Systems Before I Write Code.',
  subheadline: 'Building scalable backend systems, distributed architectures, and intelligent AI-powered enterprise applications.',
  philosophy: 'Think architecturally before implementing. Understand the purpose, impact and consequences of a feature instead of simply writing code that satisfies the apparent requirement.',
  yearsExperience: 13,
  email: '[EMAIL]',
  linkedin: '[LINKEDIN_URL]',
  github: '[GITHUB_URL]',
  location: '[LOCATION]',
  resumeUrl: '[RESUME_URL]',
};

/* ═══════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════ */
export const skills: Skill[] = [
  { name: 'Java', category: 'core', proficiency: 'Expert' },
  { name: 'Spring Boot', category: 'framework', proficiency: 'Expert' },
  { name: 'Microservices', category: 'framework', proficiency: 'Strong' },
  { name: 'Kafka', category: 'data', proficiency: 'Strong' },
  { name: 'Distributed Systems', category: 'core', proficiency: 'Strong' },
  { name: 'API Design', category: 'core', proficiency: 'Strong' },
  { name: 'Database Design', category: 'data', proficiency: 'Comfortable' },
  { name: 'Caching', category: 'data', proficiency: 'Working' },
  { name: 'Concurrency', category: 'core', proficiency: 'Comfortable' },
  { name: 'Scalability', category: 'core', proficiency: 'Strong' },
  { name: 'Fault Tolerance', category: 'core', proficiency: 'Comfortable' },
  { name: 'Observability', category: 'devops', proficiency: 'Working' },
  { name: 'Security', category: 'core', proficiency: 'Comfortable' },
  { name: 'System Design', category: 'core', proficiency: 'Comfortable' },
  { name: 'Cloud', category: 'devops', proficiency: 'Comfortable' },
  { name: 'DevOps', category: 'devops', proficiency: 'Working' },
  { name: 'AI Architecture', category: 'ai', proficiency: 'Working' },
  { name: 'RAG Architecture', category: 'ai', proficiency: 'Working' },
  { name: 'Agent Architecture', category: 'ai', proficiency: 'Learning' },
  { name: 'PostgreSQL', category: 'data', proficiency: 'Strong' },
  { name: 'DB2', category: 'data', proficiency: 'Comfortable' },
  { name: 'Hibernate / JPA', category: 'framework', proficiency: 'Strong' },
  { name: 'Docker', category: 'devops', proficiency: 'Comfortable' },
  { name: 'Kubernetes', category: 'devops', proficiency: 'Working' },
  { name: 'React', category: 'other', proficiency: 'Working' },
  { name: 'Python', category: 'other', proficiency: 'Working' },
  { name: 'Spring AI', category: 'ai', proficiency: 'Working' },
  { name: 'MCP', category: 'ai', proficiency: 'Learning' },
  { name: 'A2A', category: 'ai', proficiency: 'Learning' },
];

/* ═══════════════════════════════════════════
   HOW I THINK — Engineering Process
   ═══════════════════════════════════════════ */
export const thinkingStages: ThinkingStage[] = [
  { id: 'problem', title: 'Business Problem', description: 'Understand the real problem before jumping to solutions. What is the business trying to achieve?', question: 'What problem are we actually solving?', icon: 'Target' },
  { id: 'why', title: 'Why?', description: 'Challenge the assumption. Is this the right problem? Is there a deeper root cause?', question: 'Why does this matter? What happens if we don\'t solve it?', icon: 'HelpCircle' },
  { id: 'impact', title: 'Impact', description: 'Measure the blast radius. Who is affected? What are the downstream consequences?', question: 'What is the impact on users, systems, and the business?', icon: 'Zap' },
  { id: 'requirements', title: 'Requirements', description: 'Translate the business problem into functional and non-functional requirements. Define the boundaries.', question: 'What must the system do? What constraints exist?', icon: 'ClipboardList' },
  { id: 'architecture', title: 'Architecture', description: 'Design the solution at the right level of abstraction. Choose patterns, define boundaries, plan data flow.', question: 'How should the system be structured?', icon: 'Layers' },
  { id: 'tradeoffs', title: 'Trade-offs', description: 'Every design decision has trade-offs. Make them explicit — consistency vs availability, complexity vs flexibility.', question: 'What are we gaining and what are we giving up?', icon: 'Scale' },
  { id: 'implementation', title: 'Implementation', description: 'Now write the code. With clear architecture and understood trade-offs, implementation becomes focused.', question: 'How do we build this cleanly and maintainably?', icon: 'Code' },
  { id: 'testing', title: 'Testing', description: 'Verify correctness at every level — unit, integration, contract, and end-to-end. Test the unhappy paths.', question: 'How do we verify this works correctly under all conditions?', icon: 'CheckCircle' },
  { id: 'observability', title: 'Observability', description: 'If you can\'t observe it, you can\'t operate it. Logs, metrics, traces, alerts — know what your system is doing.', question: 'How do we know the system is healthy in production?', icon: 'Activity' },
  { id: 'iteration', title: 'Iteration', description: 'Systems evolve. Requirements change. Technology improves. Build for change, learn from production.', question: 'How will this system need to change?', icon: 'RefreshCw' },
];

/* ═══════════════════════════════════════════
   ENGINEERING JOURNEY
   ═══════════════════════════════════════════ */
export const journeyEras: JourneyEra[] = [
  {
    id: 'java-foundations',
    title: 'Java & Enterprise Foundations',
    period: '2012 — 2015',
    description: 'Built the foundation in Java, OOP, enterprise patterns, and database-driven systems. Learned to write clean, maintainable code in large codebases.',
    technologies: ['Java', 'JDBC', 'Servlets', 'JSP', 'SQL', 'Oracle', 'Hibernate'],
    highlights: ['Core Java mastery', 'Enterprise application patterns', 'Database design fundamentals', 'Object-oriented thinking'],
    status: 'PROVISIONAL',
  },
  {
    id: 'spring-evolution',
    title: 'Spring & Modern Backend',
    period: '2015 — 2018',
    description: 'Adopted Spring ecosystem. Moved from monolithic to modular applications. Deepened understanding of dependency injection, AOP, and RESTful API design.',
    technologies: ['Spring', 'Spring Boot', 'REST APIs', 'Maven', 'JUnit', 'Git'],
    highlights: ['Spring Boot adoption', 'RESTful API design', 'Automated testing discipline', 'CI/CD introduction'],
    status: 'PROVISIONAL',
  },
  {
    id: 'microservices',
    title: 'Microservices & Distributed Systems',
    period: '2018 — 2021',
    description: 'Designed and built microservices architectures. Worked with event-driven patterns, Kafka, and distributed data management.',
    technologies: ['Microservices', 'Kafka', 'Docker', 'PostgreSQL', 'Spring Cloud', 'API Gateway'],
    highlights: ['Service boundary design', 'Event-driven architecture', 'Distributed data management', 'Containerization'],
    status: 'PROVISIONAL',
  },
  {
    id: 'enterprise-leadership',
    title: 'Enterprise & Technical Leadership',
    period: '2021 — 2024',
    description: 'Led engineering efforts in complex enterprise domains. Healthcare claims processing, legacy modernization, and cross-team technical decision-making.',
    technologies: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'DB2', 'Microservices'],
    highlights: ['Technical leadership', 'Legacy COBOL modernization', 'Healthcare claims domain', 'Architecture decisions'],
    status: 'USER-PROVIDED',
  },
  {
    id: 'ai-evolution',
    title: 'AI & Intelligent Systems',
    period: '2024 — Present',
    description: 'Extending years of backend engineering expertise into AI-powered enterprise systems. Building with Spring AI, RAG, tool-calling agents, and multi-agent architectures.',
    technologies: ['Spring AI', 'Ollama', 'OpenAI', 'RAG', 'Vector DB', 'MCP', 'A2A', 'AI Agents'],
    highlights: ['AI architecture patterns', 'RAG implementations', 'Tool-calling agents', 'Multi-agent systems'],
    status: 'USER-PROVIDED',
  },
];

/* ═══════════════════════════════════════════
   ENGINEERING KNOWLEDGE MAP — Interactive Graph Nodes
   ═══════════════════════════════════════════ */
export const techNodes: TechNode[] = [
  { id: 'java', label: 'Java', category: 'core', x: 15, y: 30, description: 'Core language — 13+ years. Java 21, concurrency, streams, modern patterns.', connections: ['spring', 'databases', 'concurrency'] },
  { id: 'spring', label: 'Spring Boot', category: 'framework', x: 35, y: 25, description: 'Primary framework. Auto-configuration, dependency injection, production-ready applications.', connections: ['microservices', 'apis', 'spring-ai'] },
  { id: 'microservices', label: 'Microservices', category: 'architecture', x: 55, y: 20, description: 'Service decomposition, bounded contexts, independent deployment, distributed data.', connections: ['kafka', 'apis', 'docker'] },
  { id: 'kafka', label: 'Kafka', category: 'messaging', x: 75, y: 30, description: 'Event streaming, pub/sub, partitioning, consumer groups, exactly-once semantics.', connections: ['distributed', 'microservices'] },
  { id: 'databases', label: 'Databases', category: 'data', x: 20, y: 55, description: 'PostgreSQL, DB2, schema design, query optimization, data modeling.', connections: ['java', 'distributed'] },
  { id: 'apis', label: 'API Design', category: 'architecture', x: 45, y: 45, description: 'RESTful APIs, versioning, pagination, error handling, documentation.', connections: ['spring', 'microservices'] },
  { id: 'distributed', label: 'Distributed Systems', category: 'architecture', x: 55, y: 60, description: 'CAP theorem, consistency, partitioning, replication, failure handling.', connections: ['kafka', 'databases', 'system-design'] },
  { id: 'system-design', label: 'System Design', category: 'architecture', x: 40, y: 75, description: 'Architecture patterns, scalability, reliability, trade-off analysis.', connections: ['distributed', 'microservices', 'ai-arch'] },
  { id: 'concurrency', label: 'Concurrency', category: 'core', x: 10, y: 50, description: 'Threads, executors, CompletableFuture, virtual threads, synchronization.', connections: ['java'] },
  { id: 'docker', label: 'Docker / K8s', category: 'data', x: 80, y: 50, description: 'Containerization, orchestration, deployment pipelines.', connections: ['microservices'] },
  { id: 'spring-ai', label: 'Spring AI', category: 'ai', x: 30, y: 85, description: 'AI integration with Spring ecosystem. Chat models, embeddings, vector stores.', connections: ['spring', 'rag', 'agents'] },
  { id: 'ai-arch', label: 'AI Architecture', category: 'ai', x: 55, y: 85, description: 'Designing AI-powered enterprise systems. Patterns, pipelines, evaluation.', connections: ['system-design', 'rag', 'agents'] },
  { id: 'rag', label: 'RAG', category: 'ai', x: 40, y: 95, description: 'Retrieval-Augmented Generation. Embeddings, vector databases, context injection.', connections: ['spring-ai', 'ai-arch'] },
  { id: 'agents', label: 'AI Agents', category: 'ai-advanced', x: 65, y: 95, description: 'Tool-calling agents, MCP, A2A protocol, multi-agent orchestration.', connections: ['spring-ai', 'ai-arch'] },
];

/* ═══════════════════════════════════════════
   WHAT I CAN BUILD — Capabilities
   ═══════════════════════════════════════════ */
export const capabilities: Capability[] = [
  { id: 'backend', title: 'Scalable Backend Systems', description: 'High-throughput Java/Spring Boot services with clean architecture, proper layering, and production-grade error handling.', technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'], icon: 'Server' },
  { id: 'microservices', title: 'Microservices Platforms', description: 'Independently deployable services with clear boundaries, API contracts, and distributed data management.', technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'API Gateway'], icon: 'GitBranch' },
  { id: 'event-driven', title: 'Event-Driven Systems', description: 'Asynchronous event streaming with Kafka — producers, consumers, partitioning, dead-letter topics, and idempotent processing.', technologies: ['Kafka', 'Spring Boot', 'Event Sourcing'], icon: 'Radio' },
  { id: 'enterprise', title: 'Enterprise Applications', description: 'Complex domain-driven applications in regulated industries. Healthcare claims, financial processing, compliance systems.', technologies: ['Java 21', 'Spring Boot', 'DB2', 'PostgreSQL'], icon: 'Building2' },
  { id: 'legacy-modern', title: 'Legacy Modernization', description: 'Migrating COBOL/mainframe systems to modern Java/Spring Boot microservices while preserving business logic integrity.', technologies: ['COBOL → Java', 'Spring Boot', 'Microservices'], icon: 'ArrowUpCircle' },
  { id: 'ai-apps', title: 'AI-Powered Applications', description: 'Intelligent enterprise applications leveraging LLMs, RAG, tool calling, and agentic patterns built on solid backend foundations.', technologies: ['Spring AI', 'RAG', 'Tool Calling', 'Agents'], icon: 'Brain' },
  { id: 'rag-systems', title: 'RAG Systems', description: 'Retrieval-Augmented Generation pipelines with embeddings, vector databases, and context-aware LLM responses.', technologies: ['Spring AI', 'Vector DB', 'Embeddings', 'LLMs'], icon: 'Search' },
  { id: 'agent-systems', title: 'AI Agent Systems', description: 'Tool-using AI agents and multi-agent orchestration using MCP, A2A protocol, and enterprise integration.', technologies: ['AI Agents', 'MCP', 'A2A', 'Multi-Agent'], icon: 'Bot' },
];

/* ═══════════════════════════════════════════
   ARCHITECTURE DECISIONS
   ═══════════════════════════════════════════ */
export const architectureDecisions: ArchitectureDecision[] = [
  {
    id: 'rest-vs-kafka',
    title: 'REST vs Kafka',
    problem: 'A microservice needs to communicate with downstream services after processing a claim. Should we use synchronous REST or asynchronous Kafka?',
    options: [
      { name: 'REST (Synchronous)', pros: ['Simple request/response', 'Immediate feedback', 'Easy debugging'], cons: ['Tight coupling', 'Cascading failures', 'Blocking threads'] },
      { name: 'Kafka (Asynchronous)', pros: ['Loose coupling', 'Resilient to failures', 'Scalable consumers', 'Event replay'], cons: ['Eventual consistency', 'Harder debugging', 'Infrastructure complexity'] },
    ],
    decision: 'Kafka for inter-service communication',
    reason: 'In a claims processing system, loose coupling and resilience outweigh the need for synchronous responses. Claims can tolerate eventual consistency.',
    tradeoffs: ['Accepted eventual consistency', 'Added Kafka infrastructure', 'Required idempotent consumers', 'Gained fault tolerance and replay capability'],
    status: 'PROVISIONAL',
  },
  {
    id: 'sync-vs-async',
    title: 'Synchronous vs Asynchronous Processing',
    problem: 'Claim adjudication involves multiple steps. Should each step be synchronous within a single service, or asynchronous across services?',
    options: [
      { name: 'Synchronous Pipeline', pros: ['Simple flow', 'Easy transaction management', 'Predictable latency'], cons: ['Single point of failure', 'Cannot scale independently', 'Long-running transactions'] },
      { name: 'Asynchronous Choreography', pros: ['Independent scaling', 'Fault isolation', 'Technology flexibility'], cons: ['Complex error handling', 'Distributed tracing needed', 'Eventual consistency'] },
    ],
    decision: 'Hybrid approach — synchronous within bounded contexts, asynchronous between services',
    reason: 'Critical claim steps that must be atomic stay synchronous. Cross-service coordination uses events for resilience.',
    tradeoffs: ['Increased complexity', 'Required saga pattern for distributed transactions', 'Better fault isolation'],
    status: 'PROVISIONAL',
  },
  {
    id: 'rag-vs-direct',
    title: 'RAG vs Direct LLM',
    problem: 'Building an enterprise knowledge assistant. Should we send queries directly to the LLM or use Retrieval-Augmented Generation?',
    options: [
      { name: 'Direct LLM', pros: ['Simple architecture', 'No vector DB needed', 'Fast setup'], cons: ['Hallucination risk', 'No private data', 'Stale knowledge'] },
      { name: 'RAG', pros: ['Grounded in real data', 'Reduced hallucination', 'Private knowledge', 'Up-to-date'], cons: ['More complex architecture', 'Embedding pipeline needed', 'Retrieval quality matters'] },
    ],
    decision: 'RAG with Spring AI',
    reason: 'Enterprise knowledge must be accurate and grounded in actual documents. RAG provides verifiable, up-to-date responses from private data.',
    tradeoffs: ['Added vector database infrastructure', 'Required embedding pipeline', 'Better accuracy and trustworthiness'],
    status: 'PROVISIONAL',
  },
  {
    id: 'single-vs-multi-agent',
    title: 'Single Agent vs Multi-Agent',
    problem: 'Building an AI system that needs to handle diverse tasks — research, coding, analysis, and communication.',
    options: [
      { name: 'Single Agent', pros: ['Simple architecture', 'One context window', 'Easy debugging'], cons: ['Context overload', 'Cannot specialize', 'Single point of failure'] },
      { name: 'Multi-Agent', pros: ['Specialized agents', 'Parallel execution', 'Better context management'], cons: ['Complex orchestration', 'Inter-agent communication', 'Higher cost'] },
    ],
    decision: 'Multi-agent with orchestrator pattern',
    reason: 'Complex enterprise tasks benefit from specialized agents that can work in parallel, each with focused context and tools.',
    tradeoffs: ['Increased architectural complexity', 'Required A2A/MCP protocols', 'Better task specialization and scalability'],
    status: 'PROVISIONAL',
  },
];

/* ═══════════════════════════════════════════
   AI ARCHITECTURE LEVELS
   ═══════════════════════════════════════════ */
export const aiLevels: AILevel[] = [
  {
    level: 1,
    title: 'Direct LLM Integration',
    description: 'Simple prompt → response pattern. Application sends a question, LLM returns an answer.',
    nodes: [
      { id: 'app1', label: 'Application', x: 15, y: 50 },
      { id: 'llm1', label: 'LLM', x: 50, y: 50 },
      { id: 'res1', label: 'Response', x: 85, y: 50 },
    ],
    connections: [{ from: 'app1', to: 'llm1' }, { from: 'llm1', to: 'res1' }],
  },
  {
    level: 2,
    title: 'RAG — Retrieval-Augmented Generation',
    description: 'Queries are enriched with relevant context from a vector database before being sent to the LLM.',
    nodes: [
      { id: 'user2', label: 'User', x: 10, y: 30 },
      { id: 'app2', label: 'Application', x: 30, y: 30 },
      { id: 'retriever2', label: 'Retriever', x: 50, y: 15 },
      { id: 'vectordb2', label: 'Vector DB', x: 75, y: 15 },
      { id: 'context2', label: 'Context', x: 50, y: 50 },
      { id: 'llm2', label: 'LLM', x: 75, y: 50 },
      { id: 'res2', label: 'Response', x: 50, y: 75 },
    ],
    connections: [
      { from: 'user2', to: 'app2' }, { from: 'app2', to: 'retriever2' },
      { from: 'retriever2', to: 'vectordb2' }, { from: 'vectordb2', to: 'context2' },
      { from: 'context2', to: 'llm2' }, { from: 'llm2', to: 'res2' },
    ],
  },
  {
    level: 3,
    title: 'Tool-Calling Agent',
    description: 'An AI agent that can select and invoke external tools to gather information and take actions.',
    nodes: [
      { id: 'user3', label: 'User', x: 10, y: 50 },
      { id: 'agent3', label: 'Agent', x: 35, y: 50 },
      { id: 'tools3', label: 'Tool Selection', x: 60, y: 30 },
      { id: 'tool3', label: 'External Tool', x: 85, y: 30 },
      { id: 'result3', label: 'Result', x: 60, y: 70 },
      { id: 'res3', label: 'Response', x: 85, y: 70 },
    ],
    connections: [
      { from: 'user3', to: 'agent3' }, { from: 'agent3', to: 'tools3' },
      { from: 'tools3', to: 'tool3' }, { from: 'tool3', to: 'result3' },
      { from: 'result3', to: 'agent3' }, { from: 'agent3', to: 'res3' },
    ],
  },
  {
    level: 4,
    title: 'Multi-Agent Orchestration',
    description: 'An orchestrator delegates tasks to specialized agents, each with their own tools and context.',
    nodes: [
      { id: 'orch4', label: 'Orchestrator', x: 50, y: 15 },
      { id: 'agentA', label: 'Agent A', x: 20, y: 50 },
      { id: 'agentB', label: 'Agent B', x: 50, y: 50 },
      { id: 'agentC', label: 'Agent C', x: 80, y: 50 },
      { id: 'toolsA', label: 'Tools', x: 20, y: 80 },
      { id: 'toolsB', label: 'Tools', x: 50, y: 80 },
      { id: 'toolsC', label: 'Tools', x: 80, y: 80 },
    ],
    connections: [
      { from: 'orch4', to: 'agentA' }, { from: 'orch4', to: 'agentB' }, { from: 'orch4', to: 'agentC' },
      { from: 'agentA', to: 'toolsA' }, { from: 'agentB', to: 'toolsB' }, { from: 'agentC', to: 'toolsC' },
    ],
  },
];

/* ═══════════════════════════════════════════
   SYSTEM DESIGN EXAMPLES
   ═══════════════════════════════════════════ */
export const systemDesigns: SystemDesign[] = [
  {
    id: 'claims-processing',
    title: 'Distributed Claims Processing',
    problem: 'Process healthcare claims from providers at high throughput with regulatory compliance, auditability, and real-time adjudication.',
    requirements: ['High throughput claim ingestion', 'Real-time adjudication', 'Regulatory compliance (CMS)', 'Audit trail', 'Idempotent processing', 'B1/B2/B3 transaction support'],
    architectureDescription: 'Event-driven microservices with Kafka for inter-service communication. Claims ingested via REST API, processed through adjudication pipeline, results persisted with full audit trail.',
    scalingStrategy: 'Horizontal scaling of stateless services. Kafka partitioning by claim ID for ordered processing. Read replicas for query-heavy operations.',
    failureHandling: 'Dead-letter topics for failed claims. Retry with exponential backoff. Circuit breakers for external dependencies. Compensating transactions for B2 reversals.',
    tradeoffs: ['Eventual consistency accepted for throughput', 'Kafka complexity traded for resilience', 'More infrastructure for better fault isolation'],
    status: 'PROVISIONAL',
  },
  {
    id: 'event-driven-orders',
    title: 'Event-Driven Order Processing',
    problem: 'Process orders asynchronously across inventory, payment, and shipping services with consistency guarantees.',
    requirements: ['Asynchronous processing', 'At-least-once delivery', 'Saga pattern for distributed transactions', 'Order status tracking'],
    architectureDescription: 'Choreography-based saga with Kafka events. Each service publishes domain events. Compensating actions for failure rollback.',
    scalingStrategy: 'Independent service scaling. Kafka consumer groups for parallel processing.',
    failureHandling: 'Compensating transactions, dead-letter queues, manual review for unrecoverable failures.',
    tradeoffs: ['Complexity of saga pattern', 'Eventual consistency', 'Better resilience and scalability'],
    status: 'PROVISIONAL',
  },
  {
    id: 'rag-assistant',
    title: 'RAG Knowledge Assistant',
    problem: 'Enterprise employees need accurate answers from internal documentation without hallucination.',
    requirements: ['Document ingestion pipeline', 'Semantic search', 'Grounded responses', 'Access control', 'Source attribution'],
    architectureDescription: 'Spring AI application with document ingestion → chunking → embedding → vector storage. User queries embedded and matched against stored documents. Top-k results provided as context to LLM.',
    scalingStrategy: 'Horizontal scaling of query service. Vector DB partitioning. Cached embeddings for frequent queries.',
    failureHandling: 'Fallback to keyword search if vector DB unavailable. Confidence thresholds to avoid low-quality responses.',
    tradeoffs: ['Vector DB infrastructure cost', 'Embedding quality affects retrieval', 'Better accuracy than direct LLM'],
    status: 'PROVISIONAL',
  },
  {
    id: 'multi-agent-system',
    title: 'Multi-Agent AI System',
    problem: 'Complex enterprise tasks require different AI capabilities — research, analysis, code generation, and communication.',
    requirements: ['Specialized agents', 'Inter-agent communication', 'Task orchestration', 'Tool access', 'Result aggregation'],
    architectureDescription: 'Orchestrator agent delegates to specialized agents via A2A protocol. Each agent has focused tools and context. MCP servers provide tool access.',
    scalingStrategy: 'Independent agent scaling. Parallel task execution. Shared context store for collaboration.',
    failureHandling: 'Agent health monitoring. Task reassignment on failure. Timeout-based fallback. Human-in-the-loop for critical decisions.',
    tradeoffs: ['Orchestration complexity', 'Inter-agent latency', 'Better task specialization and quality'],
    status: 'PROVISIONAL',
  },
];

/* ═══════════════════════════════════════════
   CODE EXAMPLES
   ═══════════════════════════════════════════ */
export const codeExamples: CodeExample[] = [
  {
    id: 'kafka-consumer',
    title: 'Idempotent Kafka Consumer',
    language: 'java',
    code: `@KafkaListener(topics = "claims.submitted", groupId = "adjudication")
public void processClaim(ConsumerRecord<String, ClaimEvent> record) {
    String claimId = record.key();
    
    // Idempotency check — prevent duplicate processing
    if (processedClaimRepository.existsByClaimId(claimId)) {
        log.info("Claim {} already processed, skipping", claimId);
        return;
    }
    
    try {
        ClaimResult result = adjudicationService.adjudicate(record.value());
        processedClaimRepository.save(new ProcessedClaim(claimId, result));
        kafkaTemplate.send("claims.adjudicated", claimId, result);
    } catch (TransientException e) {
        // Retry via Kafka retry topic
        throw e;
    } catch (PermanentException e) {
        // Send to dead-letter topic for manual review
        deadLetterPublisher.send(record, e);
    }
}`,
    whyItMatters: 'In distributed systems, messages can be delivered more than once. Idempotent consumers ensure that processing the same message twice produces the same result.',
    designConsideration: 'The idempotency check happens before any business logic. We distinguish transient failures (retry) from permanent failures (dead-letter).',
    interviewDiscussion: 'How do you handle exactly-once semantics in Kafka? What happens when the database write succeeds but the Kafka publish fails?',
    status: 'PROVISIONAL',
  },
  {
    id: 'spring-ai-rag',
    title: 'RAG with Spring AI',
    language: 'java',
    code: `@Service
public class KnowledgeAssistant {
    private final ChatClient chatClient;
    private final VectorStore vectorStore;
    
    public String answer(String userQuestion) {
        // Retrieve relevant documents
        List<Document> relevantDocs = vectorStore.similaritySearch(
            SearchRequest.query(userQuestion).withTopK(5)
        );
        
        // Build context-enriched prompt
        String context = relevantDocs.stream()
            .map(Document::getContent)
            .collect(Collectors.joining("\\n\\n"));
        
        return chatClient.prompt()
            .system("Answer based on the provided context. " +
                    "If the answer isn't in the context, say so.")
            .user(u -> u.text("Context:\\n{context}\\n\\nQuestion: {question}")
                       .param("context", context)
                       .param("question", userQuestion))
            .call()
            .content();
    }
}`,
    whyItMatters: 'RAG grounds LLM responses in actual data, dramatically reducing hallucination. Spring AI provides a clean abstraction over the retrieval pipeline.',
    designConsideration: 'The system prompt explicitly instructs the LLM to only answer from context. The top-k parameter controls retrieval breadth vs precision.',
    interviewDiscussion: 'How do you evaluate RAG quality? What happens when relevant documents aren\'t in the vector store? How do you handle document updates?',
    status: 'PROVISIONAL',
  },
  {
    id: 'api-design',
    title: 'Clean REST API Design',
    language: 'java',
    code: `@RestController
@RequestMapping("/api/v1/claims")
public class ClaimController {

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ClaimResponse submitClaim(
            @Valid @RequestBody ClaimRequest request) {
        
        Claim claim = claimService.submit(request.toDomain());
        
        return ClaimResponse.builder()
            .claimId(claim.getId())
            .status(claim.getStatus())
            .submittedAt(claim.getSubmittedAt())
            .links(Map.of(
                "self", "/api/v1/claims/" + claim.getId(),
                "status", "/api/v1/claims/" + claim.getId() + "/status"
            ))
            .build();
    }
    
    @GetMapping("/{claimId}")
    public ClaimDetailResponse getClaim(
            @PathVariable String claimId) {
        return claimService.findById(claimId)
            .map(ClaimDetailResponse::from)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Claim", claimId));
    }
}`,
    whyItMatters: 'API design is a contract with consumers. HTTP 202 Accepted signals async processing. HATEOAS links enable discoverability. Validation happens at the boundary.',
    designConsideration: 'The controller handles HTTP concerns only — mapping, status codes, response shapes. Business logic lives in the service layer. Domain objects are separate from DTOs.',
    interviewDiscussion: 'Why 202 instead of 201? How do you version APIs? How do you handle backward compatibility?',
    status: 'PROVISIONAL',
  },
];

/* ═══════════════════════════════════════════
   INTERVIEW TOPICS
   ═══════════════════════════════════════════ */
export const interviewTopics: InterviewTopic[] = [
  { id: 'journey', title: 'Engineering Journey', icon: 'Compass', subtopics: ['Career evolution', 'Technology progression', 'Domain expertise'], route: '/#journey' },
  { id: 'expertise', title: 'Technical Expertise', icon: 'Code', subtopics: ['Java', 'Spring Boot', 'Databases', 'APIs'], route: '/#expertise' },
  { id: 'architecture', title: 'Architecture', icon: 'Layers', subtopics: ['System design patterns', 'Trade-offs', 'Scalability'], route: '/#system-design' },
  { id: 'system-design', title: 'System Design', icon: 'Network', subtopics: ['Distributed systems', 'Data flow', 'Failure handling'], route: '/#system-design' },
  { id: 'kafka-topic', title: 'Kafka', icon: 'Radio', subtopics: ['Partitioning', 'Consumer groups', 'Exactly-once', 'DLT'], route: '/#kafka' },
  { id: 'microservices-topic', title: 'Microservices', icon: 'GitBranch', subtopics: ['Service boundaries', 'Communication', 'Data ownership'], route: '/#microservices' },
  { id: 'enterprise', title: 'Enterprise Project', icon: 'Building2', subtopics: ['Healthcare claims', 'DomaniRx', 'Legacy modernization'], route: '/#experience' },
  { id: 'ai-lab', title: 'AI Lab', icon: 'Brain', subtopics: ['Spring AI', 'RAG', 'Tool calling', 'LLMs'], route: '/#ai-lab' },
  { id: 'agentic', title: 'Agentic AI', icon: 'Bot', subtopics: ['AI agents', 'MCP', 'A2A', 'Multi-agent'], route: '/#ai-lab' },
  { id: 'decisions', title: 'Engineering Decisions', icon: 'Scale', subtopics: ['REST vs Kafka', 'Sync vs Async', 'RAG vs Direct LLM'], route: '/#decisions' },
  { id: 'code', title: 'Code', icon: 'FileCode', subtopics: ['Kafka consumer', 'REST API', 'Spring AI RAG'], route: '/#code' },
];
