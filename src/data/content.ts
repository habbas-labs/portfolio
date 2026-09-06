import type { 
  Profile, 
  Skill, 
  TechNode, 
  JourneyEra, 
  Capability, 
  ThinkingStage, 
  ArchitectureDecision, 
  CodeExample, 
  InterviewTopic, 
  SystemDesign, 
  AILevel,
  JavaTopic,
  ArchitectureLabStep,
  KafkaLabTopic,
  AIConceptNode,
  InterviewTopicDetail,
  Project,
  ConsultingService,
  ProblemSolved,
  EngagementModel,
  ClientJourneyStep,
  AISolutionPattern,
  ResumeData
} from '../types';

/* ═══════════════════════════════════════════
   PROFILE
   ═══════════════════════════════════════════ */
export const profile: Profile = {
  name: 'Haider Abbas',
  tagline: 'Senior Java Engineer · Technical Lead · Spring AI & Agentic AI · Technology Consultant',
  headline: 'I Design Systems Before I Write Code.',
  subheadline: '14+ years building mission-critical backend systems, high-throughput distributed architectures, and modern AI-powered enterprise applications.',
  philosophy: 'Think architecturally before implementing. Understand the purpose, impact and consequences of a feature instead of simply writing code that satisfies the apparent requirement.',
  yearsExperience: 14,
  email: 'haider.abbas.solutions@gmail.com',
  linkedin: 'https://www.linkedin.com/in/haiderabbassolutions/',
  github: 'https://github.com/habbas-labs',
  location: 'Pune, Maharashtra, India',
  resumeUrl: './resume.docx',
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
    title: 'Enterprise Java & Airline Distribution Systems (Qatar Airways & Toqsoft)',
    period: '2012 — 2015',
    description: 'Engineered mission-critical web applications and enterprise services for Qatar Airways via Aufait Technologies, contributing to the New Sales Platform (NSP) and the Privilege Club loyalty program. Focused on high-volume airline booking workflows, passenger name record (PNR) retrieval, itinerary updates, and the Q-Calculator mileage accrual and redemption engine across multi-tier passenger classes and oneworld alliance partners. Developed resilient SOAP/XML integration layers connecting to the Amadeus Altéa Global Distribution System (GDS), incorporating robust exception handling, payload validation, and fail-safe recovery patterns. Began engineering career at Toqsoft Technologies building modular Java/J2EE web applications backed by Hibernate and Oracle SQL databases.',
    technologies: ['Java', 'JDBC', 'Servlets', 'JSP', 'JSF', 'Spring', 'Hibernate', 'Oracle', 'Amadeus GDS API', 'SOAP / XML'],
    highlights: [
      'Qatar Airways Privilege Club Loyalty Engine & Q-Calculator Accrual/Redemption',
      'Amadeus Altéa GDS API Integration with Resilient Fault Handling & Payload Validation',
      'High-Throughput Airline Booking & PNR Itinerary Management Workflows',
      'Enterprise Java/J2EE Core Services & Optimized Oracle SQL / Hibernate Persistence',
    ],
    keyResponsibilities: [
      'Engineered Java/J2EE business components supporting online flight booking, reservation processing, and PNR itinerary retrieval.',
      "Implemented core calculation logic for Qatar Airways' Q-Calculator, computing tier progression points (Qpoints) and mileage accrual/redemption (Qmiles/Avios) across fare classes and oneworld partner routes.",
      'Developed and enhanced mission-critical integrations with Amadeus Global Distribution System (GDS) APIs, implementing robust exception handling, response validation, and fail-safe retry mechanisms.',
      'Built and optimized data access layers with Hibernate ORM and Oracle database, tuning complex relational queries for flight schedules and customer loyalty accounts.',
      'Enhanced customer-facing application workflows related to passenger profiles, Privilege Club member tiers, and multi-currency payment processing.',
      'Conducted root-cause analysis, production troubleshooting, and hotfix delivery for high-priority integration defects during peak flight booking periods.',
      'Participated across full SDLC activities: requirement analysis, technical design, peer code reviews, JUnit unit testing, and production deployment support.',
      'Delivered enterprise-grade software in a highly integrated ecosystem with distributed airline transaction flows and strict uptime requirements.',
    ],
    status: 'VERIFIED',
  },
  {
    id: 'spring-evolution',
    title: 'Enterprise E-Commerce & ERP Integration (Unilog CIMM2)',
    period: '2015 — 2018',
    description: 'Engineered B2B and B2C enterprise e-commerce capabilities on the CIMM2 platform at Unilog Content Solutions for major industrial distributors (PSC Distribution, Bearings & Drives, Turner Supply Company). Developed an XML-based integration adapter layer connecting web storefronts to Epicor and Infor SX ERP systems, while isolating core commerce logic from proprietary ERP protocols. Integrated Apache Solr for faceted product discovery across massive technical catalogs, implemented customer-specific contract pricing and branch inventory rules, and integrated UPS and FedEx shipping APIs.',
    technologies: ['Java', 'Spring', 'Struts', 'Hibernate / JPA', 'Apache Solr', 'Oracle', 'JAX-RS', 'XML', 'JavaScript', 'AJAX', 'JBoss', 'Maven'],
    highlights: [
      'CIMM2 Enterprise B2B/B2C E-Commerce Platform for Industrial Distributors',
      'XML ERP Integration Adapter Layer for Epicor & Infor SX Backends',
      'Apache Solr Faceted Search & Discovery Engine for Large SKU Catalogs',
      'UPS & FedEx Multi-Carrier Rating & Freight Calculation Integrations',
    ],
    keyResponsibilities: [
      'Architected and developed integration adapters for Epicor ERP and Infor SX ERP using structured XML request/response communication.',
      'Integrated Apache Solr search engine, configuring tokenizers, facet categories, and indexing pipelines for fast product discovery across large catalogs.',
      'Implemented core B2B and B2C commerce business logic including customer-specific contract pricing, branch warehouse availability, and role-based access.',
      'Integrated external carrier logistics APIs (UPS Developer Kit & FedEx Web Services) for live package and freight shipping rate calculations.',
      'Developed service, DAO, and JPA mapping layers in Spring and Hibernate against Oracle transactional database schemas.',
      'Delivered tailored client customizations and production deployments for enterprise distributors including PSC Distribution, Bearings & Drives, and Turner Supply Company.',
    ],
    status: 'VERIFIED',
  },
  {
    id: 'microservices',
    title: 'Distributed Systems & Event-Driven Microservices (Avis & T-Mobile)',
    period: '2018 — 2021',
    description: 'Architected and developed high-scale distributed microservices across car rental booking platforms (NTT DATA for Avis Budget Group) and telecom/fintech infrastructures (HCLTech for T-Mobile Order Search & Reporting and Broadcom 3-D Secure Payment Authentication). Implemented Apache Kafka event streaming, containerized workloads with Docker/Kubernetes, and polyglot persistence across relational and NoSQL databases.',
    technologies: ['Spring Boot', 'Microservices', 'Apache Kafka', 'Docker', 'Kubernetes', 'PostgreSQL', 'Cassandra', 'Elasticsearch'],
    highlights: [
      'Avis Budget Group Global Car Rental & Booking Backend (NTT DATA)',
      'T-Mobile Order Search & Reporting (OSR) Streaming Microservices (HCLTech)',
      'Broadcom Paysec 3-D Secure EMV Payment Authentication Engine',
      'Apache Kafka Real-Time Event Pipelines & Containerized Deployments',
    ],
    keyResponsibilities: [
      'Architected and implemented distributed Spring Boot microservices with independent persistence boundaries.',
      'Developed real-time event streaming pipelines with Apache Kafka for order lifecycle and state updates.',
      'Engineered high-security payment authentication services following 3-D Secure EMV protocols.',
      'Optimized data querying across heterogeneous databases (PostgreSQL, Cassandra, Oracle, and Elasticsearch).',
      'Containerized microservices with Docker and deployed across Kubernetes and OpenShift environments.',
    ],
    status: 'PROVISIONAL',
  },
  {
    id: 'enterprise-leadership',
    title: 'Enterprise Implementation & Technical Leadership (SS&C DomaniRx)',
    period: '2021 — 2024',
    description: 'Worked closely with Enterprise Architects to implement high-throughput Java 21 / Spring Boot 3 microservices for the SS&C DomaniRx pharmacy claims adjudication platform (~600M annual claims) in strict accordance with architectural blueprints, domain designs, and CMS regulatory requirements. Modernized critical legacy COBOL adjudication routines into high-performance cloud services, implementing B1/B2/B3 transaction processing, real-time accumulator deductions, and clinical safety modules. As Technical Lead, collaborated in architectural design discussions, mentored offshore engineering teams, and enforced code quality and design compliance.',
    technologies: ['Java 21', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'IBM DB2', 'Docker', 'OpenShift', 'Virtual Threads'],
    highlights: [
      'SS&C DomaniRx Pharmacy Claims Adjudication (~600M Annual Claims) Implementation',
      'Close Collaboration with Enterprise Architects on Java 21 & Kafka Systems',
      'Legacy COBOL Adjudication Modernization to Modular Spring Boot Microservices',
      'Technical Lead Mentoring Offshore Developers & Enforcing Architecture Standards',
    ],
    keyResponsibilities: [
      'Collaborated closely with Enterprise Architects on microservices, REST API contracts, and Kafka event streaming design, implementing services in strict alignment with architectural blueprints and CMS regulatory requirements.',
      'Modernized complex legacy COBOL adjudication logic into high-throughput Java 21 / Spring Boot 3 microservices, translating business rules into maintainable domain models.',
      'Independently designed and developed Minimum/Maximum Dosage and Drug Hoarding / Early Refill Detection modules per clinical specifications.',
      'Implemented asynchronous Kafka event publication for post-adjudication reporting and downstream business workflows.',
      'Served as Technical Lead, conducting architectural code reviews, mentoring 4 offshore developers, and supporting defect triage and production deployments.',
    ],
    status: 'USER-PROVIDED',
  },
  {
    id: 'ai-evolution',
    title: 'AI Engineering & Multi-Agent Intelligent Systems (Spring AI & IBRS)',
    period: '2024 — Present',
    description: 'Extending 14+ years of distributed backend expertise into agentic AI and enterprise intelligence. Architected the Interactive Book Reading System (IBRS) multi-agent platform capable of processing multimodal documents up to 500MB, leveraging Spring AI, hybrid cloud/local LLMs (OpenAI GPT-4o & Ollama Llama 3), PGVector semantic retrieval, and Model Context Protocol (MCP) tool calling.',
    technologies: ['Spring AI', 'OpenAI API', 'Ollama (Llama 3)', 'PGVector', 'Vector DB', 'RAG', 'MCP', 'Agentic Workflows', 'Java 21'],
    highlights: [
      'Interactive Book Reading System (IBRS) Multi-Agent AI Platform',
      'Spring AI Integration with OpenAI GPT-4o & Local Ollama Llama 3',
      'RAG Pipelines with PGVector Embeddings & Semantic Document Search',
      'Tool Calling & Model Context Protocol (MCP) Autonomous Workflows',
    ],
    keyResponsibilities: [
      'Designed and engineered the Interactive Book Reading System (IBRS) processing multimodal documents up to 500MB.',
      'Implemented Retrieval-Augmented Generation (RAG) pipelines using Spring AI, PGVector, and semantic chunking.',
      'Integrated hybrid LLM architectures connecting cloud frontier models (OpenAI/Claude) with local Ollama instances.',
      'Developed tool-calling agents and multi-agent coordination using Model Context Protocol (MCP) and ReAct patterns.',
      'Evaluated cost, latency, context-window, and deterministic reliability trade-offs in enterprise AI systems.',
    ],
    status: 'USER-PROVIDED',
  },
];

/* ═════════════════════════════════════════════════════════
   ENGINEERING KNOWLEDGE MAP — Graph Nodes
   ═════════════════════════════════════════════════════════ */
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
   JAVA DEEP DIVE TOPICS
   ═══════════════════════════════════════════ */
export const javaTopics: JavaTopic[] = [
  {
    id: 'java-21',
    title: 'Modern Java & Virtual Threads (Loom)',
    category: 'Runtime & Concurrency',
    description: 'Java 21 Virtual Threads decouple thread creation from OS threads, enabling millions of concurrent lightweight tasks without reactive complexity.',
    deepDive: 'Traditional platform threads map 1:1 to OS threads, consuming ~1MB stack memory and limited by OS context switching. Virtual threads run on carrier threads (ForkJoinPool). When blocking on I/O (e.g. JDBC, HTTP, socket read), the runtime unmounts the virtual thread, freeing the carrier thread for other work. Eliminates callback hell and reactive complexity while maintaining thread-per-request programming model.',
    codeSnippet: `// Lightweight concurrency with Java 21 StructuredTaskScope
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {\n    Supplier<Eligibility> eligibility = scope.fork(() -> memberClient.checkEligibility(req));\n    Supplier<PricingRules> pricing = scope.fork(() -> pricingEngine.getPlanRules(req));\n    \n    scope.join();           // Wait for both concurrent tasks\n    scope.throwIfFailed();  // Propagate first failure immediately\n    \n    return adjudicator.process(eligibility.get(), pricing.get());\n}`,
    keyTakeaway: 'Adopt virtual threads for high-throughput I/O bound enterprise services; avoid pinning carrier threads by replacing synchronized blocks with ReentrantLock where needed.',
  },
  {
    id: 'jvm-memory',
    title: 'JVM Memory Architecture & GC Tuning',
    category: 'Performance & Internals',
    description: 'Understanding generational garbage collection (G1, ZGC) and memory regions (Eden, Survivor, Tenured, Metaspace) under heavy enterprise loads.',
    deepDive: 'The Weak Generational Hypothesis states most objects die young. Eden space handles allocations; survivors undergo aging tenures. G1GC dynamically manages regions to meet target pause times (-XX:MaxGCPauseMillis=200). ZGC provides sub-millisecond pauses by using colored pointers and load barriers to perform compaction concurrently with application threads. In high-volume claims engines, object pooling or zero-allocation pattern in hot loops prevents GC pressure.',
    codeSnippet: `// Production JVM tuning flags for low-latency Spring Boot services\n// -XX:+UseZGC -XX:+ZGenerational\n// -Xms8g -Xmx8g -XX:+AlwaysPreTouch\n// -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=512m\n// -XX:+ExitOnOutOfMemoryError`,
    keyTakeaway: 'Always benchmark GC behavior under realistic claim arrival distributions; ZGC Generational in Java 21 eliminates pause spikes for real-time SLAs.',
  },
  {
    id: 'collections-internals',
    title: 'Collections, Concurrency & Stream Internals',
    category: 'Core Language',
    description: 'Internals of HashMap binning (treeification), ConcurrentHashMap striped locks, and lazy evaluation pipelines in Streams.',
    deepDive: 'HashMap uses table doubling with power-of-two sizes. If hash collisions in a single bucket exceed TREEIFY_THRESHOLD (8) and table capacity >= 64, the linked list converts to a Red-Black Tree (O(log n) worst case). ConcurrentHashMap avoids global locking by employing CAS (Compare-And-Swap) on bucket heads and synchronized only on individual node heads during treeification. Streams are lazy: intermediate operations build a pipeline of Sink chains; execution happens only on terminal operation.',
    codeSnippet: `// Parallel streams must never share mutable state\n// Use custom ForkJoinPool to prevent saturating commonPool\nForkJoinPool customPool = new ForkJoinPool(Runtime.getRuntime().availableProcessors());\ntry {\n    customPool.submit(() ->\n        claims.parallelStream()\n              .filter(Claim::isEligibleForIRA2025)\n              .map(accumulatorService::calculateImpact)\n              .toList()\n    ).get();\n} finally {\n    customPool.shutdown();\n}`,
    keyTakeaway: 'Never use parallelStream() with blocking I/O calls without an isolated executor pool; choose ConcurrentHashMap or specialized concurrent structures for thread-safe state sharing.',
  },
  {
    id: 'clean-architecture',
    title: 'Clean Architecture, Hexagonal & SOLID',
    category: 'Architecture Patterns',
    description: 'Decoupling domain business rules from Spring Framework annotations, databases, and external messaging brokers.',
    deepDive: 'The domain model and business rules must be free of Spring or JPA annotations. Ports define incoming (Use Cases) and outgoing (Repositories, Message Publishers) interfaces. Adapters implement these interfaces using Spring Web controllers, JPA repositories, or Kafka producers. This makes testing pure domain rules instant and deterministic without booting Spring contexts.',
    codeSnippet: `// Pure Domain Use Case (no Spring dependency)\npublic class AdjudicateClaimUseCase {\n    private final ClaimRepositoryPort claimRepository;\n    private final AccumulatorPort accumulatorPort;\n\n    public AdjudicationResult execute(Claim claim) {\n        claim.validateBusinessRules();\n        var accumulators = accumulatorPort.load(claim.memberId());\n        var result = claim.adjudicate(accumulators);\n        claimRepository.save(claim);\n        return result;\n    }\n}`,
    keyTakeaway: 'Frameworks and ORMs are implementation details. Your core business rules should run independently in plain Java unit tests in milliseconds.',
  },
];

/* ═══════════════════════════════════════════
   SPRING & MICROSERVICES LAB STEPS
   ═══════════════════════════════════════════ */
export const springArchitectureSteps: ArchitectureLabStep[] = [
  {
    id: 'client',
    name: 'Client Application',
    type: 'client',
    description: 'Healthcare provider portal, pharmacy system, or downstream REST consumer sending batch or real-time claim payloads.',
    responsibilities: ['HTTPS/TLS termination', 'JWT bearer token transmission', 'Payload formatting (EDI / JSON)'],
    failureMode: 'Network disconnects, timeout retries with exponential backoff.',
  },
  {
    id: 'gateway',
    name: 'API Gateway (Spring Cloud Gateway)',
    type: 'gateway',
    description: 'Single perimeter gateway handling authentication, rate limiting, and route forwarding to microservices.',
    responsibilities: ['OAuth2 / JWT token validation', 'Token bucket rate limiting', 'Circuit breaker fallback', 'Distributed correlation ID injection'],
    failureMode: 'Gateway saturation: handled via auto-scaling and Redis-backed rate limiting.',
  },
  {
    id: 'service',
    name: 'Claim Adjudication Service',
    type: 'service',
    description: 'Core Spring Boot microservice running stateless business rules, eligibility verification, and accumulator updates.',
    responsibilities: ['Domain rule evaluation (B1/B2/B3)', 'Accumulator balance calculation', 'Saga orchestrator participant', 'Local database transaction'],
    failureMode: 'Service pod crash: Kubernetes restarts container, Kafka rebalances partition to healthy replica.',
  },
  {
    id: 'queue',
    name: 'Event Spine (Apache Kafka)',
    type: 'queue',
    description: 'Decoupled event broker streaming claim events (submitted, adjudicated, reversed) across bounded contexts.',
    responsibilities: ['At-least-once ordered delivery per claim ID', 'Compacted topics for accumulator state', 'DLT routing on deserialization/transient errors'],
    failureMode: 'Broker partition leader election: seamless failover with min.insync.replicas=2.',
  },
  {
    id: 'database',
    name: 'Polyglot Persistence (PostgreSQL & DB2)',
    type: 'database',
    description: 'Dedicated database per microservice following database-per-service pattern, plus legacy DB2 connectivity.',
    responsibilities: ['ACID local transactions', 'Optimistic locking on claim records', 'Read-replica queries for reporting'],
    failureMode: 'Lock contention: mitigated by fine-grained partition keys and optimistic version checks.',
  },
  {
    id: 'observability',
    name: 'Observability (OpenTelemetry & Prometheus)',
    type: 'observability',
    description: 'Full stack distributed tracing, SLI/SLO metrics, and centralized logging with correlation IDs.',
    responsibilities: ['Micrometer metrics export', 'Distributed trace propagation (W3C TraceContext)', 'Health check actuators'],
    failureMode: 'Collector latency: async buffer avoids impacting production request latency.',
  },
];

/* ═══════════════════════════════════════════
   KAFKA LAB TOPICS
   ═══════════════════════════════════════════ */
export const kafkaLabTopics: KafkaLabTopic[] = [
  {
    id: 'partitioning',
    title: 'Partitions & Strict Ordering Guarantees',
    summary: 'Kafka guarantees message ordering ONLY within a single partition, not across the entire topic.',
    deepDive: 'When producing a claim event, the record key (e.g., ClaimID or MemberID) is hashed via Murmur2 to determine the partition. By using MemberID or ClaimID as the key, all lifecycle transitions (B1 New Claim -> Adjudication -> B2 Reversal) are guaranteed to arrive at the consumer in the exact chronological sequence produced. Without a key, messages round-robin, risking out-of-order execution (e.g. processing a reversal before the original claim).',
    codeSnippet: `// Producer with explicit partition key for ordering\nProducerRecord<String, ClaimEvent> record = new ProducerRecord<>(\n    \"claims.adjudication.v1\",\n    claimEvent.getMemberId(), // Key ensures strict FIFO per member\n    claimEvent\n);\nkafkaTemplate.send(record);`,
    keyTradeoff: 'Hot partitions can emerge if one member or provider generates abnormal traffic volume. Mitigated by composite keys (MemberId + Date).',
  },
  {
    id: 'consumer-groups',
    title: 'Consumer Groups & Cooperative Sticky Rebalancing',
    summary: 'Consumer groups enable horizontal scaling by dividing partitions among instances.',
    deepDive: 'Each partition is consumed by exactly one consumer within a consumer group. In Kafka 3.x+, CooperativeStickyAssignor avoids "stop-the-world" eager rebalancing when pods scale up or down. Consumers continue processing unassigned partitions while only the migrating partition is reassigned, reducing latency spikes from seconds to milliseconds.',
    codeSnippet: `// Spring Kafka consumer configuration for zero-downtime rebalancing\nproperties.put(ConsumerConfig.PARTITION_ASSIGNMENT_STRATEGY_CONFIG,\n    List.of(CooperativeStickyAssignor.class.getName()));\nproperties.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);\nproperties.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000);`,
    keyTradeoff: 'Scaling consumers beyond the partition count yields idle instances. Topic partition count sets the upper concurrency ceiling.',
  },
  {
    id: 'retries-dlt',
    title: 'Non-Blocking Retries & Dead-Letter Topics (DLT)',
    summary: 'Handle transient network glitches without blocking the main partition pipeline.',
    deepDive: 'Blocking retries stop consumption on that partition, causing severe lag for subsequent healthy claims. Spring Kafka @RetryableTopic creates a chain of retry topics with increasing backoffs (e.g. claims-retry-10s, claims-retry-1m) and routes unrecoverable exceptions directly to a Dead Letter Topic (claims.dlt). Operations teams can inspect, re-inject, or alert on DLT records.',
    codeSnippet: `@RetryableTopic(\n    attempts = \"4\",\n    backoff = @Backoff(delay = 1000, multiplier = 2.0),\n    exclude = { ValidationException.class, SchemaViolationException.class },\n    dltTopicSuffix = \".dlt\"\n)\n@KafkaListener(topics = \"claims.inbound\", groupId = \"claims-processor\")\npublic void consume(ClaimEvent event) {\n    adjudicationService.process(event);\n}`,
    keyTradeoff: 'Retry topics create additional Kafka topics and lose strict cross-claim ordering for retried records, making idempotency non-negotiable.',
  },
  {
    id: 'idempotency-eos',
    title: 'Idempotency & Exactly-Once Semantics (EOS)',
    summary: 'Prevent double-billing or duplicate adjudication during network reconnects.',
    deepDive: 'At the producer level, enable.idempotence=true assigns each producer a PID and sequence numbers to deduplicate network retries at the broker. At the consumer level, network re-deliveries still occur during rebalances. Idempotency is enforced by recording processed event IDs in PostgreSQL within the same database transaction, or checking a distributed deduplication store before state alteration.',
    codeSnippet: `// Consumer-side deduplication pattern\n@Transactional\npublic void handleClaimAdjudicated(ClaimAdjudicatedEvent event) {\n    if (dedupRepository.existsByEventId(event.getEventId())) {\n        log.warn(\"Duplicate event {} ignored\", event.getEventId());\n        return;\n    }\n    accountBalance.applyDeductible(event.getAmount());\n    dedupRepository.save(new ProcessedEvent(event.getEventId(), Instant.now()));\n}`,
    keyTradeoff: 'EOS transactions introduce slight broker latency due to two-phase commit on transaction markers; standard at-least-once + consumer deduplication is frequently preferred.',
  },
];

/* ═══════════════════════════════════════════
   AI CONCEPT NODES (Interactive AI Knowledge Map)
   ═══════════════════════════════════════════ */
export const aiConceptNodes: AIConceptNode[] = [
  {
    id: 'llm',
    name: 'Foundation LLM',
    definition: 'Large Language Models (OpenAI GPT-4o, Claude 3.5, Gemini 1.5, Ollama Llama 3) trained on vast corpuses to predict next tokens.',
    purpose: 'Core reasoning engine for natural language understanding, synthesis, and code generation.',
    relationship: 'The base intelligence layer used by RAG pipelines and Autonomous Agents.',
    whenToUse: 'Text summarization, translation, code generation, and initial query analysis.',
    limitations: 'Knowledge cutoff, hallucinations, lacks access to proprietary enterprise data.',
    example: 'ChatClient.create(chatModel).prompt("Summarize pharmacy claim").call().content()',
  },
  {
    id: 'rag',
    name: 'RAG (Retrieval-Augmented Generation)',
    definition: 'Pattern that retrieves relevant private documents from a vector store and injects them into the prompt before sending to the LLM.',
    purpose: 'Eliminates hallucinations and gives LLMs access to proprietary, real-time enterprise documents.',
    relationship: 'Connects Vector DBs and Embeddings to the Foundation LLM.',
    whenToUse: 'Healthcare plan document lookup, CMS compliance guides, enterprise technical documentation.',
    limitations: 'Retrieval accuracy determines answer quality ("garbage in, garbage out"), chunking strategy sensitivity.',
    example: 'Spring AI VectorStore.similaritySearch(query) -> Prompt context injection.',
  },
  {
    id: 'embeddings',
    name: 'Vector Embeddings',
    definition: 'High-dimensional numerical representations of text where semantic similarity corresponds to geometric proximity (cosine distance).',
    purpose: 'Translates unstructured natural language into vector coordinates for fast similarity search.',
    relationship: 'Generates vectors stored and queried in Vector Databases.',
    whenToUse: 'Semantic search, duplicate detection, clustering customer claim dispute categories.',
    limitations: 'Domain-specific jargon (e.g. medical codes) may require fine-tuned embedding models.',
    example: 'embeddingModel.embed("Medicare Part D Accumulator Rule")',
  },
  {
    id: 'vectordb',
    name: 'Vector Database (Pgvector / Chroma)',
    definition: 'Specialized database engine designed to index and search millions of vector embeddings using algorithms like HNSW or IVFFlat.',
    purpose: 'Delivers sub-50ms approximate nearest neighbor (ANN) retrieval over large document repositories.',
    relationship: 'Storage and retrieval backbone for RAG.',
    whenToUse: 'Enterprise document repositories with 10k+ pages requiring semantic search.',
    limitations: 'Infrastructure overhead, requires synchronization when primary documents are updated.',
    example: 'SELECT * FROM documents ORDER BY embedding <=> query_vector LIMIT 5;',
  },
  {
    id: 'tools',
    name: 'Tool Calling (Function Calling)',
    definition: 'Mechanism allowing LLMs to emit structured JSON indicating which external function/API to invoke with what parameters.',
    purpose: 'Bridges LLMs with live databases, calculator services, and legacy enterprise systems.',
    relationship: 'Transforms passive LLMs into active problem-solving Agents.',
    whenToUse: 'Fetching member deductible balance from DB2, calculating drug tier pricing, checking real-time claim status.',
    limitations: 'LLM can generate invalid argument types without rigorous JSON schema validation.',
    example: '@Bean @Description("Query accumulator balance") public Function<Request, Response> getBalance()',
  },
  {
    id: 'agents',
    name: 'Autonomous AI Agents',
    definition: 'Loop-based architectures (ReAct: Reason + Act) that evaluate an objective, inspect state, select tools, and iterate until the task is complete.',
    purpose: 'Solves complex multi-step problems without hardcoded rule trees.',
    relationship: 'Combines LLM reasoning, Memory, and Tool Calling in an execution loop.',
    whenToUse: 'Automated claim triage, root-cause anomaly investigation, automated bug report synthesis.',
    limitations: 'Risk of infinite loops, non-deterministic execution paths, higher API cost.',
    example: 'Agent receives "Analyze failed batch claim #4821", queries logs, compares schema, generates fix report.',
  },
  {
    id: 'mcp',
    name: 'Model Context Protocol (MCP)',
    definition: 'Open standard protocol created by Anthropic allowing AI applications to connect securely to external tools and data sources via standardized JSON-RPC.',
    purpose: 'Standardizes tool definitions so agents can discover and call services without bespoke glue code.',
    relationship: 'Universal interface between AI Agents and Enterprise Data/Tools.',
    whenToUse: 'Exposing backend microservices, file systems, and database inspectors to coding and enterprise agents.',
    limitations: 'Requires protocol implementation on legacy systems, network latency overhead.',
    example: 'Spring Boot MCP Server exposing claim schema lookup tool to Claude/Gemini.',
  },
  {
    id: 'multiagent',
    name: 'Multi-Agent Systems & A2A',
    definition: 'Orchestrated network of specialized agents communicating peer-to-peer or via an Orchestrator/Supervisor pattern.',
    purpose: 'Divides complex tasks (e.g. Researcher, Coder, Reviewer) across isolated context windows for superior quality.',
    relationship: 'Top-tier architecture connecting specialized tool-calling agents.',
    whenToUse: 'Large-scale system migration, end-to-end claim policy validation with adversarial review.',
    limitations: 'High orchestration complexity, message overhead, requires distributed tracing.',
    example: 'Supervisor Agent delegates code translation to Modernization Agent and verification to QA Agent.',
  },
];

/* ═══════════════════════════════════════════
   INTERVIEW TOPIC DETAILS — 3 Levels of Depth
   ═══════════════════════════════════════════ */
export const interviewTopicDetails: InterviewTopicDetail[] = [
  {
    id: 'java-depth',
    title: 'Java 21 & Modern Concurrency',
    category: 'core',
    icon: 'Code',
    tags: ['Java 21', 'Virtual Threads', 'Concurrency', 'JVM', 'Memory Model'],
    depth: {
      thirtySecond: '13+ years of enterprise Java expertise. I architect high-throughput backend systems using Java 21, virtual threads (Project Loom), structured concurrency, and clean architectural principles that prioritize readability, testability, and deterministic performance under load.',
      twoMinute: [
        'Evolution: From Java 7/8 through modern Java 21 LTS, leveraging records, sealed hierarchies, and pattern matching for domain-driven modeling.',
        'Concurrency Shift: Moving away from reactive callback models to Java 21 Virtual Threads running on lightweight carriers, dramatically simplifying debugging while handling high I/O concurrency.',
        'Internals & Memory: Deep understanding of JVM memory layout (Eden, Survivor, Metaspace), garbage collection ergonomics (G1, ZGC), and memory visibility via the Java Memory Model (JMM).',
        'Clean Architecture: Separating business logic from Spring/JPA annotations via ports and adapters, ensuring 100% testable domain code.',
      ],
      tenMinute: {
        architecture: 'In high-volume services (e.g. healthcare claims), threads spend 90% of their lifespan blocked on I/O (database lookups, Kafka publishes, external REST calls). Platform threads consume ~1MB OS stack each, constraining throughput to several thousand concurrent threads. Virtual threads map thousands of lightweight tasks onto carrier threads. When a virtual thread hits blocking I/O, the JVM unmounts its continuation, letting carrier threads process other claims. We structure business steps using StructuredTaskScope to ensure child tasks terminate cleanly upon failure.',
        tradeoffs: [
          'Virtual Threads vs Reactive (WebFlux): Virtual threads retain synchronous debugging, standard stack traces, and thread-local patterns without the cognitive overhead and backpressure complexity of WebFlux.',
          'Synchronized Pinning: Synchronized blocks pin carrier threads in older libraries; we audit dependencies and substitute ReentrantLock where blocking operations occur.',
          'Garbage Collection Trade-off: High-rate allocations of short-lived objects favor ZGC or G1 with tuned young-gen sizes to maintain sub-50ms SLA pauses.',
        ],
        scaling: 'Scaled horizontally via stateless container pods running Java 21 with ContainerAware memory limits (-XX:MaxRAMPercentage=75.0) and JVM ahead-of-time pre-touching to avoid cold-start latency spikes.',
        failureHandling: 'Graceful degradation via circuit breakers (Resilience4j), bounded thread pools, timeout propagation across network hops, and structured cancellation of dangling subtasks.',
      },
      sampleQuestions: [
        'How do virtual threads differ from platform threads, and what is carrier thread pinning?',
        'How does the Java Memory Model guarantee happens-before consistency across CPU cores?',
        'When would you choose ZGC over G1GC for an enterprise application?',
      ],
    },
  },
  {
    id: 'kafka-depth',
    title: 'Apache Kafka & Event-Driven Systems',
    category: 'distributed',
    icon: 'Radio',
    tags: ['Kafka', 'Event Streaming', 'Partitioning', 'Idempotency', 'DLT'],
    depth: {
      thirtySecond: 'Designed and operated mission-critical Kafka event streaming architectures for enterprise claims processing. Deep experience in partition-level ordering, consumer group rebalances, non-blocking retry topics, dead-letter topics (DLT), and end-to-end idempotent processing.',
      twoMinute: [
        'Partitioning Strategy: Hashing member/claim keys ensures strict FIFO sequence for dependent operations (e.g. B1 new claim must precede B2 reversal).',
        'Consumer Scaling: Scaled horizontal consumer instances with CooperativeStickyAssignor to eliminate stop-the-world rebalance storms.',
        'Resilience: Implemented non-blocking retry topics with exponential backoff and dead-letter queues to keep main pipelines moving.',
        'Idempotency & Deduplication: Combining producer idempotence with database-level event deduplication to ensure exactly-once business outcomes.',
      ],
      tenMinute: {
        architecture: 'Claims are ingested through REST endpoints, converted to canonical domain events, and published to partitioned Kafka topics. We use ClaimID as the message key to route all events for a given claim to the same partition, guaranteeing chronological integrity. Downstream consumer pods process claims and write adjudication outcomes to PostgreSQL within a local transaction that simultaneously records the unique event ID in an event_log table. If a duplicate delivery occurs, the unique constraint blocks re-execution.',
        tradeoffs: [
          'Synchronous REST vs Asynchronous Kafka: Synchronous REST provides instant feedback but creates cascading failures; Kafka introduces eventual consistency but yields 99.99% availability and buffer absorption during peak loads.',
          'Retry Topic Multiplication: Non-blocking retries isolate bad messages but introduce out-of-order execution across different claims, requiring independent claim state machines.',
          'At-Least-Once + Deduplication vs Kafka Transactions (EOS): Consumer-side database deduplication is substantially faster and avoids 2-phase commit overhead across distributed brokers.',
        ],
        scaling: 'Partition count is calculated based on downstream database write latency (e.g., 32 partitions per topic, allowing up to 32 parallel consumer threads per consumer group). Lag is continuously monitored via Prometheus JMX exporters.',
        failureHandling: 'Transient exceptions (DB timeouts, network blips) route to retry topics with backoff. Permanent exceptions (malformed payloads, unrecoverable domain errors) route to DLT with failure context headers for operator triage.',
      },
      sampleQuestions: [
        'How do you achieve strictly ordered processing of related events in Kafka while maintaining high throughput?',
        'How does Cooperative Sticky Rebalancing improve consumer group stability compared to Eager Rebalance?',
        'What happens when a consumer crashes after writing to the database but before committing the Kafka offset?',
      ],
    },
  },
  {
    id: 'spring-microservices-depth',
    title: 'Spring Boot & Microservices Architecture',
    category: 'distributed',
    icon: 'GitBranch',
    tags: ['Spring Boot', 'Microservices', 'API Gateway', 'Saga Pattern', 'Observability'],
    depth: {
      thirtySecond: 'Expert in architecting Spring Boot microservices ecosystems with domain-driven design, API Gateway security, resilient inter-service communication, distributed data ownership, and OpenTelemetry observability.',
      twoMinute: [
        'Clean Layering: Strict separation between API controllers, application use-cases, domain business rules, and infrastructure adapters.',
        'Data Ownership: Enforcing database-per-service principles to eliminate hidden database couplings; cross-boundary queries handled via asynchronous event projections.',
        'Distributed Transactions: Managing multi-service workflows (claims, pricing, accumulators) using orchestration or choreography sagas with compensating actions.',
        'Production Observability: Micrometer, OpenTelemetry, Prometheus, and Grafana providing end-to-end distributed trace propagation using W3C TraceContext headers.',
      ],
      tenMinute: {
        architecture: 'The system decomposes into independent services: Claim Intake, Adjudication, Accumulator, and Pricing. Inbound requests hit Spring Cloud Gateway for JWT authentication, rate limiting, and correlation ID injection. Internal service-to-service communication is asynchronous via Kafka for state-modifying operations, and synchronous via REST with Resilience4j circuit breakers for read queries. Each microservice manages its own schema in PostgreSQL or DB2, communicating changes strictly via versioned event contracts.',
        tradeoffs: [
          'Choreography vs Orchestration Saga: Orchestration provides centralized visibility and easier debugging of complex claim reversals (B2/B3); Choreography offers looser coupling for simple linear notifications.',
          'Database per Service vs Shared DB: Eliminating shared databases increases operational overhead and requires event replication, but prevents cross-team lockups and schema migrations breaking multiple teams.',
          'Synchronous Feign/REST vs Kafka: REST chosen only where caller cannot proceed without immediate answer; Kafka chosen for 80% of backend pipeline.',
        ],
        scaling: 'Stateless Spring Boot containers scale dynamically on Kubernetes based on CPU and request queue depth. HikariCP connection pools tuned to match Postgres core saturation.',
        failureHandling: 'Circuit breakers trip when error rate exceeds 50% over 20 calls, falling back to cached plan rules. Distributed tracing pinpoints failing downstream spans immediately.',
      },
      sampleQuestions: [
        'How do you maintain data consistency across microservices without distributed two-phase commits?',
        'How do you design backward-compatible API contracts in an enterprise environment?',
        'How do you prevent cascading failures in a synchronous microservice dependency chain?',
      ],
    },
  },
  {
    id: 'enterprise-claims-depth',
    title: 'Healthcare Claims Adjudication & Legacy Modernization',
    category: 'enterprise',
    icon: 'Building2',
    tags: ['SS&C DomaniRx', 'B1/B2/B3 Claims', 'COBOL to Java', 'CMS Compliance', 'IRA 2025'],
    depth: {
      thirtySecond: 'Technical Lead on SS&C DomaniRx adjudication platform. Modernized critical legacy COBOL mainframe functionality into high-throughput Java 21 microservices, processing B1 (new), B2 (reversal), and B3 (reversal+new) claims while implementing regulatory mandates like IRA 2025.',
      twoMinute: [
        'Domain Scope: Real-time pharmacy/medical claim adjudication handling complex Medicare/Medicaid CMS compliance and accumulator calculations.',
        'Transaction Lifecycle: Supporting B1 new claims, B2 reversals with financial rollbacks, and atomic B3 transactions under sub-second SLAs.',
        'COBOL Modernization: Reverse-engineered business logic embedded in decades-old COBOL copybooks into modular, clean Java 21 domain components.',
        'Regulatory Compliance: Implemented IRA 2025 (Inflation Reduction Act) rules restructuring patient catastrophic phase out-of-pocket maximums.',
      ],
      tenMinute: {
        architecture: 'Legacy claims originally ran on mainframe batch cycles. The modernized architecture receives claims via secure API gateways, runs them through parallel eligibility, drug pricing, and accumulator engines, and persists outcomes with immutable audit logging. For COBOL modernization, we executed a strangler fig pattern: legacy copybook data structures were translated into Java records with automated parallel-run validation (comparing legacy mainframe output with Java service output on historical datasets) until achieving 100.00% zero-discrepancy parity.',
        tradeoffs: [
          'Strangler Fig Migration vs Big Bang: Big Bang migration carries catastrophic regulatory risk in healthcare; Strangler Fig allowed gradual, verifiable cutover service by service.',
          'Batch to Real-Time: Transitioning from overnight batch adjudication to real-time event-driven processing required rewriting accumulator locking to prevent concurrent claim race conditions.',
          'Preserving Obscure Legacy Rules: Decades of COBOL bug fixes had become expected business behavior; our golden master test suite preserved exact functional rules while radically simplifying code architecture.',
        ],
        scaling: 'Handled pharmacy peak morning bursts using Kafka partition distribution and optimized DB2/Postgres indexing on member accumulator balances.',
        failureHandling: 'Strict financial auditability: every claim decision includes raw input snapshot, adjudication rule trace, accumulator delta, and digital timestamp for CMS audit compliance.',
      },
      sampleQuestions: [
        'What was your methodology for validating that the Java rewrite matched legacy COBOL calculation output perfectly?',
        'How did you handle the B2 reversal transaction when downstream accumulator balances had already changed?',
        'How did IRA 2025 legislation impact accumulator calculation algorithms?',
      ],
    },
  },
  {
    id: 'ai-lab-depth',
    title: 'AI Engineering, Spring AI & RAG Architecture',
    category: 'ai',
    icon: 'Brain',
    tags: ['Spring AI', 'RAG', 'Vector DB', 'Embeddings', 'Enterprise AI'],
    depth: {
      thirtySecond: 'Applying 13+ years of robust backend engineering to enterprise AI systems. Building production-grade RAG and AI services using Spring AI, Vector DBs (Pgvector/Chroma), and local LLMs (Ollama) with deterministic fallback, validation, and zero hallucinations.',
      twoMinute: [
        'Backend-First AI: Treating LLMs as non-deterministic external services that require circuit breakers, input validation, structured output parsing, and observability.',
        'Spring AI Integration: Leveraging Spring AI ChatClient, VectorStore, and Advisors to inject context cleanly into prompts.',
        'RAG Pipeline: Document chunking, vector embeddings, similarity search, and prompt grounding to deliver hallucination-free compliance and technical answers.',
        'Local & Cloud Models: Designing model-agnostic abstraction layers supporting local Ollama models (for privacy/cost) and frontier models (OpenAI, Gemini, Claude).',
      ],
      tenMinute: {
        architecture: 'The RAG architecture comprises an Ingestion Pipeline and a Query Pipeline. Ingestion splits enterprise documentation (e.g. CMS policy guides) into 500-token chunks with 50-token overlap, computes vector embeddings, and stores them in PostgreSQL with pgvector (using HNSW indexing). During query execution, the user question is embedded, similarity-searched (top-k=4, cosine distance > 0.78), and assembled into a structured system prompt that commands the LLM to refuse speculation if context is insufficient.',
        tradeoffs: [
          'Direct LLM vs RAG: Direct LLM suffers from hallucination and lacks proprietary domain knowledge; RAG guarantees grounded, auditable answers with source citations.',
          'Chunk Size Trade-off: Small chunks (200 tokens) yield precise vector matching but lose broader context; large chunks (1000 tokens) preserve context but dilute vector similarity. 500-token semantic chunks proved optimal.',
          'Local Ollama vs Cloud APIs: Local models keep protected healthcare information (PHI) inside the enterprise VPC with zero data egress, while cloud frontier models handle complex multi-step reasoning.',
        ],
        scaling: 'Cached embeddings for common user queries in Redis to bypass vector similarity latency; read-replicas for vector database querying.',
        failureHandling: 'Confidence scoring: if vector search returns cosine similarity below threshold, system falls back to keyword BM25 search or prompts user for clarification rather than hallucinating.',
      },
      sampleQuestions: [
        'How do you prevent hallucinations in an enterprise RAG implementation?',
        'How do you choose between pgvector and a dedicated vector database like Pinecone or Milvus?',
        'How do you evaluate and monitor the accuracy of RAG retrieval over time?',
      ],
    },
  },
  {
    id: 'agentic-ai-depth',
    title: 'Agentic AI, MCP & Multi-Agent Orchestration',
    category: 'ai',
    icon: 'Bot',
    tags: ['AI Agents', 'Tool Calling', 'MCP', 'A2A Protocol', 'Multi-Agent'],
    depth: {
      thirtySecond: 'Exploring the frontier of autonomous AI systems. Implementing tool-calling agents and multi-agent orchestration using Model Context Protocol (MCP) and Agent-to-Agent (A2A) standards to automate complex enterprise backend operations.',
      twoMinute: [
        'Agent Anatomy: ReAct loops combining reasoning, planning, memory, and tool execution.',
        'Model Context Protocol (MCP): Utilizing open standards to expose backend Spring microservices, databases, and APIs as typed tools accessible to LLM agents.',
        'Multi-Agent Architecture: Dividing work across specialized roles (Orchestrator, Research Agent, Code Generator, Reviewer) rather than overloading a single context window.',
        'Guardrails & Safety: Enforcing human-in-the-loop approvals for sensitive write operations, execution timeouts, and strict schema validation.',
      ],
      tenMinute: {
        architecture: 'Complex engineering tasks (e.g. diagnosing a production claim failure) cannot be solved by a single prompt. We employ an Orchestrator Agent that breaks the problem into subtasks and dispatches them via JSON-RPC over MCP to specialized subagents. A Diagnostics Agent inspects Kafka lag and database error logs; a Policy Agent checks CMS compliance rules; a Synthesizer Agent reconciles findings into an actionable incident post-mortem. Tools are declared as typed JSON schemas with automated validation before execution.',
        tradeoffs: [
          'Single Agent vs Multi-Agent: Single agents suffer from prompt bloat, context dilution, and single-point-of-failure reasoning; Multi-agent separation isolates tool sets and context, but introduces latency and message passing overhead.',
          'Autonomous vs Human-in-the-Loop: Autonomous read actions run at full speed; any state-modifying action (e.g. re-running a failed claim batch) generates an approval artifact requiring engineer confirmation.',
          'Stateless vs Stateful Agents: We maintain state in a shared Redis/PostgreSQL workspace session, making individual agent workers disposable and recoverable upon timeout.',
        ],
        scaling: 'Agents run as background worker tasks communicating through asynchronous event queues, preventing long-running LLM loops from blocking user HTTP threads.',
        failureHandling: 'Iteration bounds (max 5 tool calls per step) prevent runaway billing loops. Failed tool responses trigger retry with alternative parameters or escalation to human operator.',
      },
      sampleQuestions: [
        'What is the Model Context Protocol (MCP) and why is it superior to custom function calling implementations?',
        'How do you prevent infinite loops and context exhaustion in autonomous agent workflows?',
        'How do you guarantee security when granting an AI agent access to execute tools against internal databases?',
      ],
    },
  },
  {
    id: 'system-design-depth',
    title: 'Distributed System Design & Resilience',
    category: 'distributed',
    icon: 'Network',
    tags: ['System Design', 'Saga', 'Idempotency', 'Partitioning', 'CAP Theorem'],
    depth: {
      thirtySecond: 'System designer prioritizing architecture before implementation. Designing fault-tolerant distributed systems with bounded contexts, choreography sagas, and clear consistency models.',
      twoMinute: [
        'Failure Isolation: Designing every service to anticipate network failure, partitioning, and downstream degradation.',
        'Data Flow Rigor: Mapping message lifecycles through ingress, validation, event streaming, and persistent storage.',
        'Consistency Choices: Deliberate trade-offs between ACID local databases and eventual consistency across distributed domains.',
        'Operational Observability: Designing telemetry and dead-letter reconciliation into the core architecture rather than bolting it on later.',
      ],
      tenMinute: {
        architecture: 'Every distributed design begins with requirement scoping: read vs write ratios, latency SLAs, availability targets, and consistency guarantees. We partition systems along domain boundaries, leverage Kafka event streams with deterministic hashing for ordering, and isolate failure blast radiuses with circuit breakers, token bucket rate limiters, and bulkhead thread isolation.',
        tradeoffs: [
          'Synchronous RPC vs Event Choreography: RPC offers instant feedback at the cost of coupling; Choreography maximizes availability while requiring eventual consistency handling.',
          'Single Monolith DB vs Database-per-Service: Monolith DB simplifies joins; Service DB isolates schema risk and enables independent scaling.',
        ],
        scaling: 'Horizontal scaling of stateless worker pods paired with partitioned data backbones (Kafka topics, PostgreSQL read replicas, Redis clusters).',
        failureHandling: 'Automated retry topics, dead-letter queues, idempotent consumer filters, and compensating reversal transactions.',
      },
      sampleQuestions: [
        'How do you design a distributed transaction across three microservices without two-phase commit?',
        'What is your approach to handling database read replicas during write replication lag?',
        'How do you prevent cascading failure when an downstream authorization service becomes slow?',
      ],
    },
  },
  {
    id: 'decisions-depth',
    title: 'Architecture Decision Records (ADRs)',
    category: 'core',
    icon: 'Scale',
    tags: ['ADR', 'Trade-offs', 'Architecture Governance', 'Decision Making'],
    depth: {
      thirtySecond: 'Architecture is about trade-offs. I document architectural decisions using formal ADRs, making assumptions, evaluated options, and consequences transparent to engineering teams.',
      twoMinute: [
        'Explicit Evaluation: Comparing synchronous REST vs Kafka, Monolith vs Microservices, and Direct LLM vs RAG.',
        'Impact Assessment: Evaluating latency, operational complexity, financial cost, and developer ergonomics before committing.',
        'Living Documentation: Version-controlling decisions alongside code in Git repositories.',
        'Team Alignment: Ensuring technical consensus and preventing recurring debates on established patterns.',
      ],
      tenMinute: {
        architecture: 'An effective ADR structure records: Context & Problem Statement, Options Considered (with concrete Pros and Cons), Decision Outcome, and Positive/Negative Consequences. We enforce ADRs for all cross-service boundaries, data storage models, and external protocol choices.',
        tradeoffs: [
          'Documentation Rigor vs Velocity: Lightweight ADR templates keep governance fast without burdening teams with bureaucratic paperwork.',
          'Reversing Decisions: Documenting assumptions allows teams to revisit decisions objectively when traffic patterns or constraints shift.',
        ],
        scaling: 'Scales engineering alignment across distributed teams and provides seamless onboarding context for new engineers.',
        failureHandling: 'Clear escalation protocols when architectural assumptions prove invalid in production benchmarks.',
      },
      sampleQuestions: [
        'When would you reverse an established Architecture Decision in production?',
        'How do you handle disagreement between senior architects on fundamental technology choices?',
      ],
    },
  },
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
   SYSTEM DESIGN EXAMPLES — Complete 6 Architectures
   (Master Prompt V3 & V4 Compliant)
   ═══════════════════════════════════════════ */
export const systemDesigns: SystemDesign[] = [
  {
    id: 'claims-processing',
    title: 'Distributed Claims Processing',
    problem: 'Process healthcare claims from providers at high throughput with regulatory compliance, auditability, and real-time adjudication.',
    requirements: ['High throughput claim ingestion', 'Real-time adjudication', 'Regulatory compliance (CMS)', 'Audit trail', 'Idempotent processing', 'B1/B2/B3 transaction support'],
    architectureDescription: 'Event-driven microservices with Kafka for inter-service communication. Claims ingested via REST API, processed through adjudication pipeline, results persisted with full audit trail.',
    dataFlow: 'REST Gateway / NCPDP Intake -> Kafka claims.inbound -> Adjudication Service (Virtual Threads) -> DB2 Accumulator Lock -> Audit Log -> Kafka claims.adjudicated',
    scalingStrategy: 'Horizontal scaling of stateless services. Kafka partitioning by member/claim ID for ordered processing. Read replicas for query-heavy operations.',
    failureHandling: 'Dead-letter topics for failed claims. Retry with exponential backoff. Circuit breakers for external dependencies. Compensating transactions for B2 reversals.',
    tradeoffs: ['Eventual consistency accepted for throughput', 'Kafka complexity traded for resilience', 'More infrastructure for better fault isolation'],
    finalDesign: 'Decoupled Hexagonal Domain Engine in pure Java 21 with non-blocking Kafka retry topics, optimistic accumulator locks, and zero-loss outbox persistence.',
    status: 'USER-PROVIDED',
  },
  {
    id: 'event-driven-orders',
    title: 'Event-Driven Order Processing',
    problem: 'Process orders asynchronously across inventory, payment, and shipping services with consistency guarantees.',
    requirements: ['Asynchronous processing', 'At-least-once delivery', 'Saga pattern for distributed transactions', 'Order status tracking'],
    architectureDescription: 'Choreography-based saga with Kafka events. Each service publishes domain events. Compensating actions for failure rollback.',
    dataFlow: 'Order Placed -> Kafka orders.created -> Inventory Service (Reserve Stock) -> Payment Service (Debit Card) -> Shipping Service (Generate Label) -> orders.fulfilled',
    scalingStrategy: 'Independent service scaling. Kafka consumer groups for parallel processing.',
    failureHandling: 'Compensating transactions, dead-letter queues, manual review for unrecoverable failures.',
    tradeoffs: ['Complexity of saga pattern', 'Eventual consistency', 'Better resilience and scalability'],
    finalDesign: 'Choreography-based Saga with Kafka transactional outbox, idempotent event consumers, and compensating reversal topics on downstream rejection.',
    status: 'PROVISIONAL',
  },
  {
    id: 'notification-system',
    title: 'High-Throughput Notification Engine',
    problem: 'Fan-out millions of personalized multi-channel notifications (SMS, Email, Push) under strict delivery SLAs without overwhelming external gateways.',
    requirements: ['Sub-second delivery SLA', 'Priority queueing (Critical vs Marketing)', 'Rate limiting per gateway', 'Delivery receipt tracking', 'Template hydration'],
    architectureDescription: 'Multi-tier queue topology with Kafka for ingestion and Redis Token Bucket for external provider rate limiting. Partitioned by recipient ID for per-user throttling.',
    dataFlow: 'Event Trigger -> Notification Gateway -> Kafka priority-topics -> Dispatch Workers -> Redis Rate Limiter -> Provider Gateways (Twilio/SendGrid) -> Status Webhook',
    scalingStrategy: 'Dynamic consumer scaling based on consumer lag metrics. Redis cluster for distributed token buckets. Priority topic routing prevents marketing blasts from starving OTPs.',
    failureHandling: 'Tiered retry queues with exponential jitter. Circuit breakers trip if provider gateway 5xx rate exceeds 5%. Dead-letter queue with alerting.',
    tradeoffs: ['Prioritizing delivery reliability over immediate consistency', 'Redis rate-limiter operational overhead vs third-party gateway rate penalty costs'],
    finalDesign: 'Priority-partitioned Kafka pipeline paired with Redis token buckets and asynchronous webhook receipt reconcilers.',
    status: 'PROVISIONAL',
  },
  {
    id: 'rag-assistant',
    title: 'RAG Knowledge Assistant',
    problem: 'Enterprise employees need accurate answers from internal documentation without hallucination.',
    requirements: ['Document ingestion pipeline', 'Semantic search', 'Grounded responses', 'Access control', 'Source attribution'],
    architectureDescription: 'Spring AI application with document ingestion → chunking → embedding → vector storage. User queries embedded and matched against stored documents. Top-k results provided as context to LLM.',
    dataFlow: 'PDF/Wiki Docs -> Ingestion Service -> Chunking/Tika -> Text Embeddings (text-embedding-3-small) -> PGVector Indexing -> User Query -> Similarity Search -> Augmented Context Prompt -> LLM Generation',
    scalingStrategy: 'Horizontal scaling of query service. Vector DB partitioning. Cached embeddings for frequent queries.',
    failureHandling: 'Fallback to keyword search if vector DB unavailable. Confidence thresholds to avoid low-quality responses.',
    tradeoffs: ['Vector DB infrastructure cost', 'Embedding quality affects retrieval', 'Better accuracy than direct LLM'],
    finalDesign: 'Spring AI RAG architecture with PGVector similarity indexing, metadata security filtering, and deterministic fallback guards on low cosine confidence.',
    status: 'PROVISIONAL',
  },
  {
    id: 'ai-agent-system',
    title: 'Standalone Tool-Calling AI Agent',
    problem: 'Autonomous execution of multi-step enterprise workflows requiring external API execution, database lookups, and stateful error recovery.',
    requirements: ['ReAct (Reasoning + Acting) loop', 'Secure Model Context Protocol (MCP) tool bindings', 'Stateful memory checkpointing', 'Human-in-the-loop approval thresholds'],
    architectureDescription: 'Stateful execution graph where LLM iteratively chooses tools based on schema definitions, receives tool outputs, updates scratchpad memory, and proceeds until task termination.',
    dataFlow: 'User Intent -> Agent Executor -> LLM Tool Call Generation -> MCP Protocol Dispatcher -> Database / REST Tool Execution -> Output Validation -> LLM Synthesis',
    scalingStrategy: 'Stateless agent workers with PostgreSQL checkpoint storage. Sandboxed tool execution runners to isolate external system side effects.',
    failureHandling: 'Tool retry loops with self-correction prompts. Hard iteration caps (max 10 steps) to prevent infinite loops. Human escalation on write operations.',
    tradeoffs: ['Step latency from multi-turn LLM calls', 'Nondeterministic reasoning loops requiring strict guardrails'],
    finalDesign: 'Spring AI with Model Context Protocol (MCP) tool servers, strict JSON Schema validations, and transaction rollback hooks.',
    status: 'PROVISIONAL',
  },
  {
    id: 'multi-agent-system',
    title: 'Multi-Agent Collaborative System',
    problem: 'Complex enterprise tasks require different AI capabilities — research, analysis, code generation, and communication.',
    requirements: ['Specialized agents', 'Inter-agent communication', 'Task orchestration', 'Tool access', 'Result aggregation'],
    architectureDescription: 'Orchestrator agent delegates to specialized agents via A2A protocol. Each agent has focused tools and context. MCP servers provide tool access.',
    dataFlow: 'User Complex Goal -> Supervisor / Orchestrator Agent -> Task Decomposition -> Research Agent -> Analysis Agent -> Validator Agent -> Final Synthesis',
    scalingStrategy: 'Independent agent scaling. Parallel task execution. Shared context store for collaboration.',
    failureHandling: 'Agent health monitoring. Task reassignment on failure. Timeout-based fallback. Human-in-the-loop for critical decisions.',
    tradeoffs: ['Orchestration complexity', 'Inter-agent latency', 'Better task specialization and quality'],
    finalDesign: 'Hierarchical supervisor architecture utilizing Agent-to-Agent (A2A) protocol with shared context memory and deterministic validation gates.',
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
  { id: 'java-deep-dive', title: 'Java Deep Dive', icon: 'FileCode', subtopics: ['Java 21', 'Virtual Threads', 'JVM internals', 'Clean Architecture'], route: '/#java-deep-dive' },
  { id: 'microservices-topic', title: 'Spring & Microservices', icon: 'GitBranch', subtopics: ['Service boundaries', 'Communication', 'Data ownership'], route: '/#microservices-lab' },
  { id: 'kafka-topic', title: 'Kafka Lab', icon: 'Radio', subtopics: ['Partitioning', 'Consumer groups', 'Exactly-once', 'DLT'], route: '/#kafka-lab' },
  { id: 'system-design', title: 'System Design', icon: 'Network', subtopics: ['Distributed systems', 'Data flow', 'Failure handling'], route: '/#system-design' },
  { id: 'enterprise', title: 'Enterprise Project', icon: 'Building2', subtopics: ['Healthcare claims', 'DomaniRx', 'Legacy modernization'], route: '/#experience' },
  { id: 'ai-lab', title: 'AI Engineering Lab', icon: 'Brain', subtopics: ['Spring AI', 'RAG', 'Tool calling', 'LLMs'], route: '/#ai-lab' },
  { id: 'agentic', title: 'Agentic AI', icon: 'Bot', subtopics: ['AI agents', 'MCP', 'A2A', 'Multi-agent'], route: '/#ai-lab' },
  { id: 'decisions', title: 'Engineering Decisions', icon: 'Scale', subtopics: ['REST vs Kafka', 'Sync vs Async', 'RAG vs Direct LLM'], route: '/#decisions' },
  { id: 'code', title: 'Code Showcase', icon: 'Terminal', subtopics: ['Kafka consumer', 'REST API', 'Spring AI RAG'], route: '/#code' },
];

/* ═══════════════════════════════════════════
   PROJECTS WORKBENCH (Master Prompt V3 & V4)
   Enterprise Systems + 7 AI Project Concept Templates
   ═══════════════════════════════════════════ */
export const projects: Project[] = [
  {
    id: 'unilog-cimm2-ecommerce',
    title: 'Unilog CIMM2 — Enterprise B2B/B2C E-Commerce Platform',
    category: 'enterprise',
    description: 'Enterprise digital commerce platform connecting distributor storefronts to on-premise ERP backends, high-speed Apache Solr catalog search, and multi-carrier logistics APIs.',
    businessProblem: 'Industrial distributors relied on manual sales reps and disconnected phone/fax ordering while operating complex customer contract pricing matrices locked inside legacy ERP backbones.',
    architecture: 'Multi-tier enterprise Java architecture on JBoss featuring an XML ERP integration adapter layer (Epicor / Infor SX), Apache Solr search core, and carrier APIs (UPS / FedEx).',
    technologies: ['Java', 'Spring', 'Struts', 'Hibernate / JPA', 'Apache Solr', 'Oracle', 'JAX-RS', 'XML', 'JBoss'],
    contribution: 'Software Developer: Built ERP integration adapters for Epicor and Infor SX, integrated Apache Solr search & indexing pipelines, implemented B2B/B2C customer pricing rules, and integrated UPS/FedEx shipping APIs.',
    challenges: [
      'Isolating core e-commerce storefront logic from disparate proprietary ERP communication protocols',
      'Enabling fast faceted search across large product catalogs with complex technical part numbers and attributes'
    ],
    decisions: [
      'Introduced an ERP integration adapter abstraction to insulate the web application from ERP-specific XML schemas',
      'Decoupled catalog discovery from Oracle transactional database by integrating Apache Solr as a dedicated search engine',
      'Engineered configurable customer-specific business rules to support multi-tenant distributor requirements'
    ],
    dataFlow: 'Customer -> CIMM2 Web Store -> Solr Search / Oracle DB -> ERP XML Adapter -> Epicor / Infor SX ERP & UPS / FedEx APIs',
    scalability: 'Decoupled Solr search clusters and connection-pooled database access layers on JBoss enterprise container.',
    reliability: 'Adapter fail-safe retry handling, schema validation, and defensive exception management for external service calls.',
    testing: 'JUnit unit testing for service layers, XML payload validation, and client integration test suites.',
    observability: 'Application logging, transaction error auditing, and ERP adapter communication diagnostics.',
    lessonsLearned: [
      'Adapter abstraction patterns are essential to keep enterprise business logic insulated from vendor ERP specifics',
      'Dedicated search engines (Solr) are vital for distributor discovery across deep technical SKU catalogs'
    ],
    status: 'VERIFIED',
    caseStudyUrl: '/cimm2',
  },
  {
    id: 'claims-adjudication-modernization',
    title: 'Enterprise Claims Adjudication Modernization',
    category: 'enterprise',
    description: 'Modernization of core pharmacy adjudication engine from legacy COBOL to Java 21 microservices and resilient Kafka event streaming.',
    businessProblem: 'CMS IRA 2025 regulatory mandates required dynamic real-time benefit accumulators and sub-50ms adjudication at the pharmacy counter, unachievable in legacy batch COBOL routines.',
    architecture: 'Hexagonal clean domain engine in Java 21, decoupled Spring Boot microservices, Kafka event streaming with partition keys hashed by member ID for strict FIFO sequence.',
    technologies: ['Java 21', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'DB2', 'Docker', 'Kubernetes'],
    contribution: 'Technical Lead: Led rule extraction, designed domain models using Java 21 records & sealed interfaces, built Kafka consumer idempotency pipelines.',
    challenges: [
      'Zero-downtime cutover without dropping live pharmacy counter transactions',
      'Golden-master parity validation against 40+ years of implicit COBOL edge-case rules'
    ],
    decisions: [
      'Decoupled pure Java domain engine from Spring framework',
      'Non-blocking retry topics over blocking consumer sleep'
    ],
    dataFlow: 'NCPDP D.0 claim payload -> Ingestion Gateway -> Kafka claims.inbound -> Adjudication Engine (Virtual Threads) -> DB2 Accumulators -> Kafka claims.adjudicated',
    scalability: 'Horizontal autoscaling of stateless intake and adjudication pods with 32 Kafka partitions per topic.',
    reliability: 'Dead-letter topic parking, transaction outbox pattern, and sub-second circuit breakers.',
    testing: 'Dual-run golden master replay test harness matching production claim responses byte-for-byte.',
    observability: 'OpenTelemetry tracing, Prometheus metrics for P95/P99 latency, Grafana consumer lag dashboards.',
    lessonsLearned: [
      'Domain isolation from framework dependencies is critical for long-term maintainability',
      'Kafka retry topics prevent head-of-line blocking in healthcare SLAs'
    ],
    status: 'USER-PROVIDED',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'event-driven-spine',
    title: 'High-Throughput Kafka Event Spine',
    category: 'system-design',
    description: 'Resilient event-driven streaming infrastructure processing millions of real-time transactions with strict ordering and zero data loss.',
    businessProblem: 'Point-to-point synchronous REST calls between microservices caused cascading timeouts and coupled deployments during traffic surges.',
    architecture: 'Publish-subscribe event backbone with Schema Registry, transactional outbox producers, and cooperative sticky consumer groups.',
    technologies: ['Apache Kafka', 'Java 21', 'Spring Cloud Stream', 'Avro / Schema Registry', 'Prometheus'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'rag-knowledge-assistant',
    title: 'RAG Knowledge Assistant',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'Engineers and operations teams spend hours navigating disparate confluence wikis, CMS policy PDFs, and legacy code documentation.',
    architecture: 'Spring AI + PGVector document indexing pipeline with semantic chunking and contextual prompt enrichment.',
    technologies: ['Spring AI', 'PGVector', 'OpenAI / Claude', 'Java 21', 'PostgreSQL'],
    contribution: 'Designed vector ingestion pipeline and contextual prompt templates with source citations.',
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'enterprise-knowledge-assistant',
    title: 'Enterprise Knowledge Assistant',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'Internal compliance teams require instant querying across regulatory healthcare mandates with strict source citations.',
    technologies: ['Spring AI', 'Ollama', 'PGVector', 'Docker', 'FastAPI'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'ai-log-analysis',
    title: 'AI Log Analysis & Anomaly Detection',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'Investigating high-cardinality distributed microservice exceptions during production incidents is time-prohibitive.',
    technologies: ['Spring AI', 'Kafka', 'Elasticsearch', 'LLM Agents'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'ai-claims-assistant',
    title: 'AI Claims Adjudication Assistant',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'High rejection rates due to pharmacy code mismatches require automated explanation and correction recommendations.',
    technologies: ['Spring AI', 'Java 21', 'RAG', 'Structured Outputs'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'tool-using-agent',
    title: 'Tool-Using AI Agent with MCP Integration',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'LLMs lack access to real-time production system states, database tables, and external APIs.',
    technologies: ['Model Context Protocol (MCP)', 'Spring AI', 'REST APIs', 'PostgreSQL'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'multi-agent-system-project',
    title: 'Multi-Agent Collaborative System',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'Complex enterprise tasks require multiple specialized AI agents collaborating with defined roles and supervisor review.',
    technologies: ['A2A Protocol', 'Multi-Agent Orchestration', 'Spring AI', 'LangGraph Patterns'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
  {
    id: 'ai-developer-assistant',
    title: 'AI Developer & Architecture Assistant',
    category: 'ai',
    description: 'Portfolio Concept / Template — Replace with actual implementation details before publishing.',
    businessProblem: 'Automating codebase scans for anti-patterns, missing Kafka idempotency checks, and circular microservice dependencies.',
    technologies: ['Spring AI', 'Java Parser', 'AST Analysis', 'Claude 3.5'],
    status: 'PROVISIONAL',
    repoUrl: 'https://github.com/habbas-labs',
  },
];

/* ═══════════════════════════════════════════
   MASTER PROMPT V4 — CONSULTING SERVICES
   (Section 12: Architecture Review to Advisory)
   ═══════════════════════════════════════════ */
export const consultingServices: ConsultingService[] = [
  {
    id: 'architecture-review',
    title: 'Architecture Review & Assessment',
    tagline: 'Identify bottlenecks, single points of failure, and scalability risks before they impact users.',
    description: 'A comprehensive evaluation of your backend architecture, microservice boundaries, database design, and event topologies with actionable remediation roadmaps.',
    deliverables: [
      'Current-state architecture diagram & component catalog',
      'Bottleneck & single-point-of-failure risk matrix',
      'Architecture Decision Records (ADRs)',
      'Target-state architecture & prioritized migration roadmap'
    ],
    technologies: ['Distributed Systems', 'Microservices', 'ADRs', 'C4 Model', 'Cloud / On-Prem'],
    icon: 'ShieldCheck',
  },
  {
    id: 'backend-engineering',
    title: 'High-Throughput Backend Engineering',
    tagline: 'Design and build resilient, low-latency Java & Spring Boot microservices at scale.',
    description: 'Hands-on design and implementation of mission-critical backend systems using modern Java 21, Spring Boot 3, and clean architecture principles.',
    deliverables: [
      'Modular microservices with clean domain boundaries',
      'Production-ready REST & gRPC APIs with OpenAPI specs',
      'Comprehensive automated test suites (unit, integration, contract)',
      'Observability instrumentation (metrics, traces, health checks)'
    ],
    technologies: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Kubernetes'],
    icon: 'Server',
  },
  {
    id: 'kafka-event-driven',
    title: 'Kafka & Event-Driven Architecture',
    tagline: 'Eliminate message loss, handle consumer lag, and build resilient event streams.',
    description: 'Architecting high-throughput Kafka streaming pipelines with guaranteed ordering, exactly-once semantics, non-blocking retries, and dead-letter parking.',
    deliverables: [
      'Topic topology & partitioning design',
      'Idempotent consumer & transactional outbox patterns',
      'Non-blocking retry & dead-letter queue architectures',
      'Consumer lag & backpressure tuning guidance'
    ],
    technologies: ['Apache Kafka', 'Schema Registry', 'Spring Cloud Stream', 'Redis', 'Prometheus'],
    icon: 'Radio',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Modernization (Monolith / COBOL → Java)',
    tagline: 'Safely decompose monolithic applications and legacy routines into modern microservices.',
    description: 'Extracting implicit business rules, designing dual-run validation test harnesses, and executing phased zero-downtime strangler migrations.',
    deliverables: [
      'Business rule extraction & specification documents',
      'Dual-run golden master automated parity test harness',
      'Strangler Fig migration strategy & API facades',
      'Zero-downtime cutover plan'
    ],
    technologies: ['Java 21', 'Spring Boot', 'Strangler Fig', 'COBOL Extraction', 'Golden Master Testing'],
    icon: 'Cpu',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration for Existing Software',
    tagline: 'Add intelligence to working enterprise software without risky full-system rewrites.',
    description: 'Integrating LLMs, RAG pipelines, and vector search directly into existing Spring Boot and Java backend workflows with safety guardrails.',
    deliverables: [
      'AI opportunity assessment for existing systems',
      'Spring AI integration & vector store setup (PGVector)',
      'Contextual RAG pipeline with source attribution',
      'Cost, token, and latency optimization guards'
    ],
    technologies: ['Spring AI', 'PGVector', 'RAG', 'OpenAI / Claude / Ollama', 'Embeddings'],
    icon: 'Brain',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Multi-Agent Systems',
    tagline: 'Autonomous tool-calling agents and collaborative multi-agent architectures.',
    description: 'Designing enterprise AI agents that interact with databases, internal APIs, and MCP tools with deterministic supervisor checkpoints.',
    deliverables: [
      'Tool-calling agent architecture with Model Context Protocol (MCP)',
      'Multi-agent coordination workflows (A2A Protocol)',
      'Human-in-the-loop escalation rules',
      'Comprehensive agent evaluation test suites'
    ],
    technologies: ['Model Context Protocol (MCP)', 'Agent-to-Agent (A2A)', 'Spring AI', 'Multi-Agent', 'Tools'],
    icon: 'Bot',
  },
  {
    id: 'technical-advisory',
    title: 'Technical Advisory & Engineering Leadership',
    tagline: 'Strategic architecture guidance and technical mentorship for growing engineering teams.',
    description: 'Partnering with technical leaders and founders to make sound technology choices, establish engineering standards, and navigate complex migrations.',
    deliverables: [
      'Architecture governance & review sessions',
      'Technical hiring assessments & interview rubric design',
      'Engineering standards & pattern templates',
      'Quarterly roadmap & risk audits'
    ],
    technologies: ['System Design', 'Tech Strategy', 'Mentorship', 'Code Reviews', 'Hiring'],
    icon: 'Compass',
  },
];

/* ═══════════════════════════════════════════
   MASTER PROMPT V4 — PROBLEMS I SOLVE
   (Section 11: Problem → Approach → Result)
   ═══════════════════════════════════════════ */
export const problemsSolved: ProblemSolved[] = [
  {
    id: 'backend-maintainability',
    title: 'Java Backend Maintainability & Coupling',
    tag: 'Architecture & Modernization',
    problem: 'Our Java backend has become difficult to maintain. Changes in one service unexpectedly break others, releases are high-stress, and test coverage is fragile.',
    approach: [
      'Perform domain boundary analysis to decouple entangled modules',
      'Re-architect into Clean Hexagonal Architecture separating domain rules from frameworks',
      'Introduce contract testing and isolated unit suites running in milliseconds',
      'Establish API versioning and backward compatibility patterns'
    ],
    result: 'A maintainable, modular service where features ship independently with predictable release cycles.',
    technologies: ['Java 21', 'Spring Boot 3', 'Clean Architecture', 'DDD'],
  },
  {
    id: 'kafka-scaling',
    title: 'Kafka Scalability, Consumer Lag & Message Loss',
    tag: 'Event Streaming & Kafka',
    problem: 'Our Kafka pipeline experiences severe consumer lag during peak bursts, intermittent message loss, and head-of-line blocking on downstream service failures.',
    approach: [
      'Audit topic partition count and consumer group concurrency',
      'Implement non-blocking retry topics with exponential backoff',
      'Deploy transactional outbox pattern to eliminate dual-write inconsistency',
      'Enforce idempotent consumer deduplication via database keys'
    ],
    result: 'Zero message loss, sub-second P99 processing latency, and decoupled failure handling preventing pipeline stalls.',
    technologies: ['Apache Kafka', 'Spring Cloud Stream', 'Redis', 'Prometheus'],
  },
  {
    id: 'legacy-monolith',
    title: 'Legacy Monolith / Mainframe Modernization',
    tag: 'Enterprise Modernization',
    problem: 'Core business logic is locked in decades-old legacy code (COBOL or monolithic Java) with no documentation and high risk of disruption if rewritten blindly.',
    approach: [
      'Extract implicit business rules and build automated golden-master test harnesses',
      'Re-architect business logic in pure, framework-independent Java domain entities',
      'Deploy Strangler Fig proxy facade to gradually shift live traffic',
      'Validate parity on 100% of historical production transactions'
    ],
    result: 'Risk-free zero-downtime cutover with validated byte-for-byte correctness and full modernization to modern Java.',
    technologies: ['Java 21', 'Spring Boot', 'Golden Master Harness', 'Strangler Fig'],
  },
  {
    id: 'ai-existing-software',
    title: 'Adding AI Without Rebuilding Working Systems',
    tag: 'AI Systems & RAG',
    problem: 'We want to add generative AI and knowledge search to our product, but cannot afford to rewrite reliable legacy systems or expose private data to external models.',
    approach: [
      'Identify specific high-value integration points (search, validation, summarization)',
      'Embed internal documents into private PGVector stores with role-based access',
      'Implement Spring AI RAG pipelines with deterministic guardrails',
      'Deploy local open-source models (Ollama) or private cloud endpoints'
    ],
    result: 'Grounded enterprise AI capability integrated cleanly into existing services with zero hallucination risk.',
    technologies: ['Spring AI', 'PGVector', 'RAG', 'Ollama', 'Security Guardrails'],
  },
];

/* ═══════════════════════════════════════════
   MASTER PROMPT V4 — ENGAGEMENT MODELS
   (Section 13: Ways to Work Together)
   ═══════════════════════════════════════════ */
export const engagementModels: EngagementModel[] = [
  {
    id: 'architecture-assessment',
    title: 'Architecture Assessment & Review',
    duration: '1 – 2 Weeks',
    description: 'A focused, high-impact review of your existing backend or event architecture to identify bottlenecks, scalability limits, and technical risks.',
    idealFor: 'Teams preparing for high-traffic events, funding milestones, or starting a major refactoring.',
    deliverables: ['Architecture Assessment Report', 'Risk & Bottleneck Matrix', 'Prioritized Action Plan & ADRs'],
  },
  {
    id: 'project-capability',
    title: 'Targeted Project Implementation',
    duration: '4 – 12 Weeks',
    description: 'End-to-end design and implementation of a critical backend service, Kafka event pipeline, or AI integration.',
    idealFor: 'Companies needing a senior specialist to own and deliver a high-complexity technical component.',
    deliverables: ['Production-ready codebase & tests', 'Architecture documentation & deployment manifests', 'Knowledge transfer & runbooks'],
  },
  {
    id: 'technical-advisory',
    title: 'Part-Time Technical Advisory',
    duration: 'Ongoing / Monthly Retainer',
    description: 'Regular advisory sessions providing architectural guidance, code reviews, design critiques, and engineering strategy.',
    idealFor: 'Startups, engineering managers, and technical leads seeking seasoned architecture oversight.',
    deliverables: ['Weekly / bi-weekly architecture sessions', 'PR reviews & system design reviews', 'On-demand technical guidance'],
  },
  {
    id: 'hands-on-engineering',
    title: 'Hands-on Senior Backend / AI Engineering',
    duration: 'Flexible Project Scope',
    description: 'Direct senior-level engineering contribution to write critical paths, establish foundational patterns, and elevate code quality.',
    idealFor: 'Teams needing high-caliber engineering firepower on complex Java 21, Spring, Kafka, or AI initiatives.',
    deliverables: ['High-throughput backend code', 'Performance tuning & benchmarking', 'Automated testing suites'],
  },
  {
    id: 'prototype-spike',
    title: 'Rapid Prototype to Production Spike',
    duration: '1 – 3 Weeks',
    description: 'Building a functional proof-of-concept for an AI workflow, RAG assistant, or event pipeline to validate viability before investing.',
    idealFor: 'Founders and product teams needing quick validation of technical feasibility and architecture.',
    deliverables: ['Working interactive prototype', 'Architecture feasibility report', 'Production roadmap'],
  },
];

/* ═══════════════════════════════════════════
   MASTER PROMPT V4 — CLIENT JOURNEY
   (Section 14: 8-Step Workflow)
   ═══════════════════════════════════════════ */
export const clientJourneySteps: ClientJourneyStep[] = [
  { step: '01', title: 'Tell Me the Problem', description: 'Reach out with your technical challenge, system bottleneck, or architectural goal.', deliverable: 'Initial problem brief' },
  { step: '02', title: 'Initial Technical Discussion', description: 'A 30-minute discovery call to discuss constraints, business objectives, and success criteria.', deliverable: 'Alignment on scope and feasibility' },
  { step: '03', title: 'Understand Existing System', description: 'Review current architecture diagrams, codebase structure, event topologies, and data flows.', deliverable: 'System baseline understanding' },
  { step: '04', title: 'Define Scope & Deliverables', description: 'Establish clear technical milestones, deliverables, timelines, and engagement model.', deliverable: 'Statement of work & technical objectives' },
  { step: '05', title: 'Architecture & Solution Proposal', description: 'Design target architecture, evaluate trade-offs, and produce concrete ADRs before writing code.', deliverable: 'Architecture proposal & ADRs' },
  { step: '06', title: 'Build / Advise / Modernize', description: 'Execute phased engineering implementation with continuous communication and testing.', deliverable: 'Clean, tested, documented code' },
  { step: '07', title: 'Benchmark, Review & Deliver', description: 'Validate performance against latency/throughput targets and verify zero-regression criteria.', deliverable: 'Benchmark results & deployment package' },
  { step: '08', title: 'Iterate & Knowledge Transfer', description: 'Walk your team through design decisions, runbooks, and handover documentation for long-term ownership.', deliverable: 'Team workshop & documentation' },
];

/* ═══════════════════════════════════════════
   MASTER PROMPT V4 — AI FOR EXISTING SOFTWARE
   (Section 33: Methodology Flow)
   ═══════════════════════════════════════════ */
export const aiExistingSoftwareFlow = [
  { step: '1', title: 'Existing Application', description: 'Identify the working production service, data stores, and business workflows without disrupting live users.' },
  { step: '2', title: 'Identify AI Opportunity', description: 'Pinpoint high-value operations: semantic search, document ingestion, error classification, automated assistance.' },
  { step: '3', title: 'Select Pattern', description: 'Choose the simplest sufficient abstraction level: Direct LLM, RAG, Tool-Calling Agent, or Multi-Agent.' },
  { step: '4', title: 'Architecture Design', description: 'Decouple AI orchestration from core domain using Spring AI, Vector DBs, and secure boundary adapters.' },
  { step: '5', title: 'Prototype & Benchmark', description: 'Validate retrieval accuracy, latency, and cost per query against real data with automated evaluation tests.' },
  { step: '6', title: 'Production Integration', description: 'Deploy with safety guardrails, monitoring, fallbacks, and audit logging for enterprise reliability.' },
];

/* ═══════════════════════════════════════════
   MASTER PROMPT V4 — AI SOLUTION CATALOG
   (Section 34: Visual Solution Patterns)
   ═══════════════════════════════════════════ */
export const aiSolutionCatalog: AISolutionPattern[] = [
  {
    id: 'knowledge-assistant',
    title: 'Enterprise Knowledge Assistant (RAG)',
    category: 'RAG & Semantic Retrieval',
    summary: 'Connect internal documentation, confluence wikis, and policy manuals to conversational AI with zero hallucination.',
    flow: ['Internal Documents', 'Embeddings Generator', 'PGVector Store', 'Similarity Retrieval', 'Spring AI Context Prompt', 'Grounded Response'],
    technologies: ['Spring AI', 'PGVector', 'OpenAI / Claude', 'PostgreSQL'],
    useCase: 'Compliance queries, internal engineering wikis, and customer support deflection.',
    status: 'PROVISIONAL',
  },
  {
    id: 'enterprise-ai-agent',
    title: 'Enterprise Tool-Calling AI Agent',
    category: 'Autonomous Agents & Tools',
    summary: 'Equip AI models with the ability to execute database queries, invoke REST APIs, and trigger asynchronous workflows safely.',
    flow: ['User Intent', 'Agent Reasoning Loop', 'Tool Registry (MCP)', 'External API / Database', 'Result Validation', 'Synthesized Action'],
    technologies: ['Model Context Protocol (MCP)', 'Spring AI', 'Java 21', 'REST APIs'],
    useCase: 'Automated claim investigations, incident triage, and automated reporting.',
    status: 'PROVISIONAL',
  },
  {
    id: 'multi-agent-system',
    title: 'Collaborative Multi-Agent Architecture',
    category: 'Multi-Agent Orchestration',
    summary: 'Deconstruct complex enterprise goals across specialized worker agents governed by an orchestrator with validation checkpoints.',
    flow: ['Complex Goal', 'Supervisor Agent', 'Worker Agent A (Research)', 'Worker Agent B (Execution)', 'A2A Inter-Agent Protocol', 'Supervisor Verification'],
    technologies: ['A2A Protocol', 'Multi-Agent Orchestration', 'Spring AI', 'LangGraph Patterns'],
    useCase: 'Complex regulatory audits, multi-source data reconciliation, and automated codebase modernization.',
    status: 'PROVISIONAL',
  },
];

/* ═══════════════════════════════════════════
   RESUME DATA (Extracted from verified resume.docx)
   ═══════════════════════════════════════════ */
export const resumeData: ResumeData = {
  name: 'HAIDER ABBAS',
  title: 'SENIOR JAVA ENGINEER | TECHNICAL LEAD | SPRING AI & AGENTIC AI',
  contact: {
    location: 'Pune, Maharashtra, India',
    email: 'haider.abbas.solutions@gmail.com',
    linkedin: 'https://www.linkedin.com/in/haiderabbassolutions/',
    github: 'https://github.com/habbas-labs',
  },
  summary: [
    'Senior Java Engineer / Technical Lead with 14+ years of experience designing and developing enterprise web applications, REST APIs, microservices and distributed systems using Java, Spring Boot and Kafka.',
    'Strong hands-on experience with Java 21, Spring Boot, Microservices, REST APIs, event-driven architecture, PostgreSQL, JPA/Hibernate, Docker, Kubernetes and AWS, with experience across healthcare, telecommunications, payment security, travel and e-commerce domains.',
    'Experienced in modernizing complex COBOL-based healthcare claims adjudication logic into Java/Spring Boot services powering a platform that processes approximately 600 million claims annually, implementing CMS-driven Medicare/Medicaid, Part D, Non-Part D and IRA 2025/2026 requirements.',
    'Progressed from Senior Software Developer to Technical Lead, with hands-on ownership of complex features, technical design, code reviews, developer mentoring and collaboration with architects.',
    'Growing specialization in Spring AI, LLM applications and Agentic AI, demonstrated through independently designing a multi-agent system (Interactive Book Reading System) integrating OpenAI and Ollama LLMs, applying enterprise backend, API, event-driven and distributed-systems expertise to modern AI application development.',
  ],
  skills: [
    { category: 'Languages', items: 'Java 21, Java, SQL, JavaScript, Python' },
    { category: 'Backend', items: 'Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs, JAX-RS, SOAP, Jackson, MapStruct' },
    { category: 'Architecture', items: 'Microservices, Event-Driven Architecture, Distributed Systems, Asynchronous Processing, CompletableFuture' },
    { category: 'Messaging', items: 'Apache Kafka' },
    { category: 'Databases', items: 'PostgreSQL, DB2, Oracle, MySQL, Cassandra' },
    { category: 'Cloud & DevOps', items: 'AWS, Docker, Kubernetes, OpenShift, Jenkins, Maven, Git' },
    { category: 'Testing & Quality', items: 'JUnit, Mockito, Integration Testing, JaCoCo, SonarQube' },
    { category: 'Observability', items: 'Splunk, Grafana' },
    { category: 'Search / Frontend', items: 'Elasticsearch, Apache Solr, ReactJS, JavaScript, HTML, CSS' },
    { category: 'AI / Agentic AI', items: 'Spring AI, LLM Applications, OpenAI API, Ollama, AI Agents, Agentic AI, RAG, Tool Calling, MCP, Agent Orchestration' },
  ],
  experience: [
    {
      role: 'Technical Lead / Senior Software Developer',
      company: 'SS&C Technologies',
      period: 'May 2023 – Aug 2026',
      project: 'DomaniRx Pharmacy Claims Adjudication Platform',
      team: '~10',
      highlights: [
        'Designed and developed Java 21/Spring Boot microservices for a pharmacy claims adjudication platform processing approximately 600 million claims annually, supporting Medicare and Medicaid programs and CMS-defined processing requirements.',
        'Modernized complex COBOL-based adjudication logic by understanding legacy business rules, implementing equivalent Java functionality, and then refactoring and extending it with new capabilities.',
        'Developed and integrated services covering claim processing, member eligibility, benefit configuration, accumulators, pricing and adjudication using REST APIs, JPA/Hibernate and PostgreSQL.',
        'Implemented complex pharmacy-benefit rules including deductible, coinsurance, prior authorization, formulary, quantity limits, accumulators, reversals and reprocessing; handled B1, B2 and B3 claim transactions.',
        'Implemented Medicare Part D and IRA 2025/2026 enhancements based on CMS requirements, extending the modernized Java adjudication capabilities.',
        'Independently designed and developed a Minimum/Maximum Dosage module using drug data, member age, prescribed/submitted quantity, days supply and historical claims, with rules for pediatric, adult and geriatric populations.',
        'Independently developed a Drug Hoarding / Early Refill Detection module using historical and current claims, quantity and days-supply calculations to identify premature or excessive medication requests against configured utilization rules.',
        'Implemented Kafka-based event publication for post-adjudication outcomes and downstream reporting/business workflows; used CompletableFuture-based asynchronous processing for distributed service operations.',
        'Contributed to Docker/Kubernetes and AWS-based cloud deployment using S3, API Gateway, Lambda and Secrets Manager; supported CI/CD with Jenkins and quality controls with JUnit, Mockito, JaCoCo and SonarQube.',
        'Promoted to Technical Lead; mentored 4 offshore developers, conducted code reviews, supported complex issue resolution, and participated in microservice, REST API and Kafka design discussions with architects.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'HCLTech',
      period: 'Jun 2020 – Apr 2023',
      client: 'T-Mobile | Project: OSR (Order Search & Reporting) | Team: ~12',
      highlights: [
        'Developed and enhanced Java/Spring Boot microservices for an order data repository supporting order search, lifecycle management and reporting.',
        'Implemented REST APIs and service customizations using Java 11, Spring Boot, Kafka, PostgreSQL, Cassandra and Elasticsearch.',
        'Analyzed requirements, performed impact analysis, implemented features and resolved complex defects across distributed services.',
        'Client: Broadcom Inc. | Project: Payment Security (Paysec) (Jun 2020 – Jan 2022): Designed and developed product services for 3-D Secure payment authentication using Java, Spring Boot, REST/SOAP APIs, Docker, Kubernetes, Hibernate and Oracle.',
        'Implemented customer-driven functionality, performed impact analysis, supported deployments and collaborated with release/change-management teams.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'NTT DATA',
      period: 'May 2018 – May 2020',
      client: 'Avis Budget Group | Project: Avis Digital Platform | Team: 8',
      highlights: [
        'Developed and enhanced web/mobile backend functionality for an online car-rental platform covering user registration, travel management and vehicle booking.',
        'Implemented Java/Spring Boot services, REST integrations, business customizations and application fixes; worked across the development lifecycle in an Agile environment.',
        'Contributed to Magnolia CMS development and supported team delivery and client-facing coordination.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Unilog Content Solutions Pvt. Ltd.',
      period: 'Oct 2015 – Apr 2018',
      project: 'CIMM2 / E-commerce Web Store | Team: 5',
      highlights: [
        'Developed B2B/B2C e-commerce functionality using Java, Struts, Spring, Hibernate, JAX-RS, Oracle and Apache Solr.',
        'Built ERP integration adapters for Epicor and Infor SX, integrated search and shipping/freight APIs, and implemented product, user, pricing and catalog business rules.',
        'Developed Spring service/DAO layers and JPA mappings and supported application customization for multiple enterprise clients.',
      ],
    },
    {
      role: 'IT Consultant / Software Developer',
      company: 'Aufait Technologies',
      period: 'Dec 2014 – Aug 2015',
      client: 'Qatar Airways, Doha, Qatar | Project: New Sales Platform (NSP) | Team: 15',
      highlights: [
        'Developed Java/Spring/Hibernate services and SOAP integrations with the Amadeus reservation system for an airline online sale and booking platform.',
        'Implemented business rules, request/response validation, error handling, internationalization and JPA-based persistence.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Toqsoft Technologies Pvt. Ltd.',
      period: 'Apr 2012 – Nov 2014',
      highlights: [
        'Developed Java/J2EE web applications and database-driven business functionality using Spring, Hibernate, JSP/Servlets, JDBC and related enterprise technologies.',
      ],
    },
  ],
  projects: [
    {
      title: 'Interactive Book Reading System (IBRS)',
      subtitle: 'Independent Project — Multi-Agent AI Platform',
      description: 'Built a multi-agent AI platform that lets an author/admin generate a book from a PDF, scanned pages, audio, video, or a YouTube-style source, and lets readers read or listen to it in any language and converse with it to ask questions from a single book, a group of similar books, or the entire collection.',
      highlights: [
        'Designed and directed multiple collaborating AI agents, integrating OpenAI LLM and locally-hosted Ollama models, architected to process books up to 500MB.',
        'Applied multi-agent orchestration, cloud and local LLM integration, multilingual conversational retrieval, and tool-calling patterns directly transferable to enterprise Agentic AI development.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.E. in Computer Science & Engineering',
      institution: 'RGPV University, Bhopal, Madhya Pradesh',
      year: '2011',
    },
  ],
  additionalInfo: [
    'Strong experience in Agile software development, requirements analysis, impact analysis, technical design, troubleshooting and integration problem solving.',
    'Career focus: Senior Java / Technical Lead / Backend Architecture roles with increasing specialization in Spring AI and Agentic AI.',
  ],
};
