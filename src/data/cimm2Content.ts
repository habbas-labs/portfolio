/**
 * UNILOG CIMM2 ENTERPRISE E-COMMERCE CASE STUDY DATA
 * Verified historical enterprise Java project data
 * No invented metrics or unsupported technologies
 */

export interface Cimm2SystemNode {
  id: string;
  name: string;
  category: 'core' | 'integration' | 'search' | 'external';
  subtitle: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Cimm2FlowStep {
  id: string;
  step: number;
  label: string;
  sublabel: string;
  description: string;
  technicalDetails: string;
}

export interface Cimm2Decision {
  id: string;
  number: string;
  title: string;
  problem: string;
  approach: string;
  benefit: string;
  implementationNote: string;
}

export interface Cimm2Customer {
  name: string;
  industry: string;
  scope: string;
  customizations: string[];
  websiteUrl?: string;
}

export const cimm2Meta = {
  projectTitle: 'Unilog CIMM2',
  projectSubtitle: 'Enterprise B2B/B2C E-commerce Platform',
  tagline: 'Building digital commerce experiences on top of enterprise ERP systems.',
  organization: 'Unilog Content Solutions Pvt. Ltd.',
  location: 'Mysore, India',
  role: 'Software Developer',
  duration: 'Oct 2015 – Apr 2018',
  teamSize: '5 Engineers',
  domain: 'Enterprise E-commerce / B2B & B2C / ERP Integration / Catalog & Search',
  technologies: [
    'Java',
    'Spring',
    'Struts',
    'Hibernate / JPA',
    'Apache Solr',
    'Oracle',
    'JAX-RS',
    'XML / XSLT',
    'JavaScript / AJAX',
    'JBoss',
    'Maven',
  ],
};

export const cimm2BusinessProblem = {
  before: {
    title: 'Traditional Enterprise Distribution (Before CIMM2)',
    flow: ['Business Customers', 'Manual Sales Reps & Phone/Fax', 'ERP Core (Epicor / Infor SX)'],
    challenges: [
      'Offline, paper-based ordering with high sales-rep overhead',
      'Massive product catalogs with tens of thousands of SKUs difficult to browse',
      'Complex customer contract pricing hidden inside ERP tables',
      'Inventory availability not visible in real time to buyers',
      'Zero self-service digital capability for branch or job-site purchasing',
    ],
  },
  after: {
    title: 'Digital B2B/B2C Commerce Channel (With CIMM2)',
    flow: ['B2B / B2C Customers', 'CIMM2 E-Commerce Platform', 'Real-Time Adapters & Solr', 'ERP & Carrier Systems'],
    solutions: [
      'Self-service digital storefront accessible 24/7 across branches and mobile',
      'Faceted, millisecond catalog discovery powered by Apache Solr indexing',
      'Customer-specific contract pricing & catalog entitlement rules applied dynamically',
      'Live stock availability and warehouse allocation via ERP integration adapter',
      'Seamless multi-carrier freight calculations with UPS and FedEx integration',
    ],
  },
};

export const cimm2ArchitectureNodes: Cimm2SystemNode[] = [
  {
    id: 'cimm2-core',
    name: 'CIMM2 Core Platform',
    category: 'core',
    subtitle: 'Enterprise Commerce Engine',
    description: 'The central enterprise application handling session management, user roles, catalog navigation, shopping cart, and transaction orchestration.',
    responsibilities: [
      'Product catalog management and hierarchical category taxonomy',
      'Customer account, branch, and role-based access management',
      'B2B and B2C commerce business rules execution',
      'Real-time customer-specific pricing and inventory validation',
      'Multi-currency and multi-organization configuration',
    ],
    techStack: ['Java', 'Spring', 'Struts', 'Hibernate / JPA', 'Oracle', 'JBoss'],
  },
  {
    id: 'erp-adapter',
    name: 'ERP Integration Adapter',
    category: 'integration',
    subtitle: 'ERP Abstraction Layer',
    description: 'An architectural insulation layer designed to decouple the core e-commerce storefront from ERP-specific proprietary protocols and data formats.',
    responsibilities: [
      'Insulates commerce business logic from underlying ERP vendor nuances',
      'Transforms internal domain models into XML requests for target ERPs',
      'Parses and validates XML responses for pricing, customer credit, and order placement',
      'Coordinates live availability checks against warehouse inventories',
    ],
    techStack: ['Java', 'JAX-RS', 'XML', 'DOM / SAX Parsers', 'HTTP / REST'],
  },
  {
    id: 'solr-search',
    name: 'Apache Solr Engine',
    category: 'search',
    subtitle: 'Product Search & Discovery',
    description: 'Dedicated search and indexing infrastructure supporting faceted navigation, auto-suggest, and fast discovery across massive distributor product catalogs.',
    responsibilities: [
      'Full-text search across product titles, descriptions, MPNs, and attributes',
      'Faceted category filtering by brand, manufacturer, specification, and availability',
      'Batch and incremental catalog indexing pipeline from Oracle database',
      'Spell correction, synonym mapping, and keyword stemming for technical parts',
    ],
    techStack: ['Apache Solr', 'Lucene', 'SolrJ Client', 'XML / JSON Schemas'],
  },
  {
    id: 'epicor-infor',
    name: 'Epicor & Infor SX ERPs',
    category: 'integration',
    subtitle: 'Enterprise Backend Systems',
    description: 'Customer on-premise ERP systems functioning as the ultimate source of truth for general ledger, contract pricing, inventory, and order fulfillment.',
    responsibilities: [
      'Master repository for customer accounts, credit limits, and branch entities',
      'Execution of contract-pricing matrices and customer rebate tiers',
      'Warehouse inventory tracking across regional distribution centers',
      'Final order posting and accounts receivable processing',
    ],
    techStack: ['Epicor ERP', 'Infor SX ERP', 'Proprietary XML APIs', 'ODBC / SQL'],
  },
  {
    id: 'shipping-apis',
    name: 'Shipping & Freight Integration',
    category: 'external',
    subtitle: 'Carrier Service APIs',
    description: 'External logistics integration layer connecting checkout workflows to commercial freight and parcel carrier rating and tracking services.',
    responsibilities: [
      'Real-time parcel freight rate calculation during checkout',
      'Multi-box shipping weight and dimensional package estimation',
      'Live tracking number generation and delivery status queries',
      'Support for both standard parcel and LTL freight requirements',
    ],
    techStack: ['UPS Developer Kit', 'FedEx Web Services', 'XML / Web APIs'],
  },
];

export const productDiscoverySteps: Cimm2FlowStep[] = [
  {
    id: 'pd-1',
    step: 1,
    label: 'Customer Search Query',
    sublabel: 'User enters part number or keyword',
    description: 'A buyer enters a keyword, manufacturer part number (MPN), or partial description in the search bar.',
    technicalDetails: 'AJAX request dispatched from frontend to CIMM2 search controller with query token and customer session context.',
  },
  {
    id: 'pd-2',
    step: 2,
    label: 'CIMM2 Query Dispatch',
    sublabel: 'Session entitlement applied',
    description: 'CIMM2 identifies the active customer account and applies category restriction filters to the search request.',
    technicalDetails: 'Query enriched with customer-specific catalog visibility filter query (fq) parameters to restrict inaccessible products.',
  },
  {
    id: 'pd-3',
    step: 3,
    label: 'Apache Solr Execution',
    sublabel: 'Faceted search & scoring',
    description: 'Apache Solr processes the query across inverted indexes, executing tokenization, synonym matching, and facet aggregations.',
    technicalDetails: 'SolrJ client executes query against Solr cores with dismax/edismax parser, returning matching document IDs and facet counts.',
  },
  {
    id: 'pd-4',
    step: 4,
    label: 'Catalog Enrichment',
    sublabel: 'Database entity hydration',
    description: 'CIMM2 hydrates product entities from Oracle database cache using the indexed IDs returned by Solr.',
    technicalDetails: 'Hibernate second-level cache and indexed primary key lookups load rich product specifications, images, and documents.',
  },
  {
    id: 'pd-5',
    step: 5,
    label: 'Price & Stock Resolution',
    sublabel: 'ERP adapter invocation',
    description: 'Specific contract pricing and live warehouse stock levels are resolved for the hydrated product list.',
    technicalDetails: 'Customer contract matrix or ERP adapter XML check evaluates final customer pricing and immediate ship availability.',
  },
];

export const erpIntegrationSteps: Cimm2FlowStep[] = [
  {
    id: 'erp-1',
    step: 1,
    label: 'Commerce Trigger',
    sublabel: 'Price inquiry or order checkout',
    description: 'A customer adds items to cart or reaches the checkout screen requiring verified ERP pricing and credit validation.',
    technicalDetails: 'CIMM2 Service Layer triggers ERP integration event with customer ID, part numbers, quantities, and ship-to address.',
  },
  {
    id: 'erp-2',
    step: 2,
    label: 'ERP Adapter Abstraction',
    sublabel: 'Protocol insulation',
    description: 'The ERP Adapter abstracts whether the target backend is Epicor or Infor SX, converting internal models into standard request structures.',
    technicalDetails: 'Factory pattern selects appropriate adapter implementation (EpicorAdapter vs InforSXAdapter) based on tenant configuration.',
  },
  {
    id: 'erp-3',
    step: 3,
    label: 'XML Request Construction',
    sublabel: 'Payload formatting & validation',
    description: 'Adapter constructs an XML payload formatted specifically to the target ERP schema requirements.',
    technicalDetails: 'DOM/SAX or JAXB serialization generates structured XML request containing line items, customer account codes, and warehouse flags.',
  },
  {
    id: 'erp-4',
    step: 4,
    label: 'ERP Processing',
    sublabel: 'Epicor or Infor SX execution',
    description: 'The ERP processes the request against its internal business tables, calculating tiered discounts, taxes, and allocation.',
    technicalDetails: 'Synchronous or buffered XML transaction processed by ERP listener; response returned with line status and authorization code.',
  },
  {
    id: 'erp-5',
    step: 5,
    label: 'Response Ingestion',
    sublabel: 'Normalization into CIMM2 Domain',
    description: 'ERP XML response is parsed, error-checked, and converted back into normalized Java domain models.',
    technicalDetails: 'Adapter handles schema discrepancies, timeout retries, and error status codes before returning clean result to checkout controller.',
  },
];

export const b2bJourneySteps: Cimm2FlowStep[] = [
  {
    id: 'b2b-1',
    step: 1,
    label: 'Authenticated Login',
    sublabel: 'Company & User Authentication',
    description: 'B2B buyer logs in with corporate credentials tied to an enterprise parent account and specific branch office.',
    technicalDetails: 'Session authenticates user, retrieves company ID, branch hierarchy, credit terms, and purchasing authority limits.',
  },
  {
    id: 'b2b-2',
    step: 2,
    label: 'Customer-Specific Catalog',
    sublabel: 'Contract Entitlement Filtering',
    description: 'Only products approved under the buyer company contract agreement are visible in navigation and search.',
    technicalDetails: 'Solr query filter queries (fq) and category tree builders dynamically exclude non-entitled product lines.',
  },
  {
    id: 'b2b-3',
    step: 3,
    label: 'Custom Contract Pricing',
    sublabel: 'Tiered & Volume Discounting',
    description: 'Prices displayed reflect negotiated contract matrices, volume bracket breaks, or cost-plus agreements rather than MSRP.',
    technicalDetails: 'Pricing engine checks custom price schedules cached in database or requests live contract pricing via ERP adapter.',
  },
  {
    id: 'b2b-4',
    step: 4,
    label: 'Branch Warehouse Availability',
    sublabel: 'Multi-location inventory',
    description: 'Stock availability is displayed across the buyer assigned regional distribution center and secondary transfer branches.',
    technicalDetails: 'Multi-warehouse stock indicators queried through ERP availability APIs and displayed on product and cart pages.',
  },
  {
    id: 'b2b-5',
    step: 5,
    label: 'Enterprise Checkout',
    sublabel: 'PO Number & Account Terms',
    description: 'Checkout allows payment via Purchase Order (PO), Invoice on Account credit line, or corporate procurement terms.',
    technicalDetails: 'Order validation checks customer available credit limit against ERP before creating order record and routing for processing.',
  },
];

export const b2cJourneySteps: Cimm2FlowStep[] = [
  {
    id: 'b2c-1',
    step: 1,
    label: 'Guest / Public Access',
    sublabel: 'Open storefront exploration',
    description: 'Consumer or occasional retail buyer arrives on storefront via organic search, social, or direct URL without logging in.',
    technicalDetails: 'Anonymous guest session created with default locale, base price schedule, and public category taxonomy.',
  },
  {
    id: 'b2c-2',
    step: 2,
    label: 'Public Product Catalog',
    sublabel: 'Full retail product lines',
    description: 'Complete unrestricted retail product catalog is accessible for browsing and Solr search.',
    technicalDetails: 'Unfiltered Solr search core returns all active public SKUs with standard consumer-friendly category facets.',
  },
  {
    id: 'b2c-3',
    step: 3,
    label: 'Standard List / Promo Pricing',
    sublabel: 'MSRP & public discounts',
    description: 'Product displays standard Manufacturer Suggested Retail Price (MSRP) and active promotional discount codes.',
    technicalDetails: 'Pricing engine queries standard retail price book; promotion rule evaluator checks coupon codes and sitewide sales.',
  },
  {
    id: 'b2c-4',
    step: 4,
    label: 'Global Stock Availability',
    sublabel: 'Direct shipping inventory',
    description: 'Stock reflects centralized e-commerce fulfillment warehouse availability for parcel delivery.',
    technicalDetails: 'E-commerce warehouse inventory cache indicates "In Stock" or "Backorder" status directly on product page.',
  },
  {
    id: 'b2c-5',
    step: 5,
    label: 'Standard Credit Card Checkout',
    sublabel: 'Direct payment & parcel shipping',
    description: 'Buyer provides shipping details, selects UPS/FedEx ground or air delivery, and pays with credit card.',
    technicalDetails: 'Payment gateway tokenization processes card; carrier shipping API calculates immediate parcel freight.',
  },
];

export const shippingFlowSteps: Cimm2FlowStep[] = [
  {
    id: 'ship-1',
    step: 1,
    label: 'Cart Weight & Dimension Aggregation',
    sublabel: 'Packaging engine',
    description: 'CIMM2 calculates total shipment weight, item dimensions, and freight class for all items in the shopping cart.',
    technicalDetails: 'Package allocation algorithm estimates parcel count and package dimensions based on catalog SKU master attributes.',
  },
  {
    id: 'ship-2',
    step: 2,
    label: 'Origin & Destination Mapping',
    sublabel: 'Warehouse routing',
    description: 'Origin warehouse ZIP code is paired with the customer destination address to determine shipping zones.',
    technicalDetails: 'Fulfillment routing logic assigns closest stocking warehouse as shipment origin point.',
  },
  {
    id: 'ship-3',
    step: 3,
    label: 'Carrier API Invocation (UPS & FedEx)',
    sublabel: 'Real-time rating services',
    description: 'XML rate requests are sent to UPS Developer Kit and FedEx Web Services APIs requesting live service quotes.',
    technicalDetails: 'JAX-RS / HTTP client dispatches rating XML payloads; handles authentication tokens, rate negotiation codes, and timeouts.',
  },
  {
    id: 'ship-4',
    step: 4,
    label: 'Rate Normalization & Options Display',
    sublabel: 'Ground, 2-Day, Priority, Freight',
    description: 'Returned rates from carriers are formatted with company handling rules and presented to the buyer for selection.',
    technicalDetails: 'CIMM2 parses XML response rates, applies configured merchant markup or free-shipping thresholds, and updates cart total.',
  },
];

export const catalogPipelineSteps: Cimm2FlowStep[] = [
  {
    id: 'cat-1',
    step: 1,
    label: 'ERP & Supplier Data Import',
    sublabel: 'Bulk item loading',
    description: 'Raw product records, part numbers, base costs, and vendor descriptions are imported from ERP or supplier feeds.',
    technicalDetails: 'Batch import routines ingest scheduled CSV/XML flat files into staging tables in Oracle database.',
  },
  {
    id: 'cat-2',
    step: 2,
    label: 'Catalog & Taxonomy Classification',
    sublabel: 'Category hierarchies & attributes',
    description: 'Products are categorized into hierarchical taxonomy nodes with technical specifications (voltage, thread size, material).',
    technicalDetails: 'Relational mapping structures in Oracle organize category parent-child relations and attribute-value pairings.',
  },
  {
    id: 'cat-3',
    step: 3,
    label: 'Pricing & Availability Rules Binding',
    sublabel: 'Business matrix attachment',
    description: 'Price schedules, customer group permissions, and warehouse assignment rules are linked to newly loaded SKUs.',
    technicalDetails: 'Spring service layer processes business rule associations and updates relational entitlement records.',
  },
  {
    id: 'cat-4',
    step: 4,
    label: 'Apache Solr Index Generation',
    sublabel: 'Inverted index rebuild',
    description: 'Catalog data is indexed into Apache Solr cores with tokenizers, lower-casing filters, and facet field definitions.',
    technicalDetails: 'Data Import Handler (DIH) or custom indexing job transforms database rows into Solr XML/JSON documents.',
  },
  {
    id: 'cat-5',
    step: 5,
    label: 'Live Storefront Publishing',
    sublabel: 'Searchable & purchasable online',
    description: 'Products become instantly discoverable via search and category navigation with accurate pricing and shipping specs.',
    technicalDetails: 'Solr core commit triggers cache warm-up; storefront controllers immediately serve updated product views.',
  },
];

export const cimm2Decisions: Cimm2Decision[] = [
  {
    id: 'dec-1',
    number: '01',
    title: 'ERP Adapter Layer Architecture',
    problem: 'Enterprise distributor clients operated different ERP backends (Epicor ERP, Infor SX ERP), each with disparate proprietary XML APIs, data structures, and communication quirks.',
    approach: 'Designed an integration and adapter abstraction layer that normalized ERP interactions. The core e-commerce application communicated with a unified Java service interface, while underlying adapter classes handled target-specific XML marshaling, network communication, and error translation.',
    benefit: 'Insulated the core e-commerce product from client-specific ERP variations. Adding or updating an ERP integration did not require modifying checkout, catalog, or user management logic.',
    implementationNote: 'Simplified representation of enterprise integration pattern based on production project experience.',
  },
  {
    id: 'dec-2',
    number: '02',
    title: 'Dedicated Apache Solr Search Engine',
    problem: 'Distributor catalogs contained tens of thousands of technical SKUs with complex part numbers, attributes, and specifications. Executing SQL LIKE queries against Oracle relational tables created severe latency and lacked faceted filtering.',
    approach: 'Integrated Apache Solr as a dedicated search and discovery engine alongside the Oracle transactional database. Configured specialized tokenizers for hyphenated part numbers, phonetic matching, and dynamic faceted navigation.',
    benefit: 'Provided fast, responsive search and multifaceted category discovery across large catalogs without degrading relational database transaction performance.',
    implementationNote: 'Core search architecture integrated using Java SolrJ client and scheduled indexing pipelines.',
  },
  {
    id: 'dec-3',
    number: '03',
    title: 'Configurable Multi-Tier Business Rules',
    problem: 'B2B enterprise commerce requires fundamentally different business logic than standard retail commerce: different accounts receive different catalog subsets, negotiated price schedules, credit terms, and warehouse shipping rules.',
    approach: 'Implemented a configurable, customer-specific business rules engine within the Spring service layer that dynamically evaluated user identity, corporate account contract matrices, and geographic branches.',
    benefit: 'Allowed a single CIMM2 platform deployment to serve diverse enterprise distributor business models and their distinctive customer arrangements without branching the core codebase.',
    implementationNote: 'Rules evaluated during session establishment and checkout validation cycles.',
  },
];

export const cimm2Customers: Cimm2Customer[] = [
  {
    name: 'PSC Distribution',
    industry: 'Plumbing, Heating & Industrial Supplies',
    websiteUrl: 'https://www.pscia.com',
    scope: 'Enterprise B2B digital commerce channel with contractor-specific pricing, branch pickup options, and ERP connectivity.',
    customizations: [
      'Epicor ERP integration for real-time contractor pricing and customer credit checks',
      'Branch-level inventory routing across multiple supply depots',
      'Contractor job-account purchase order (PO) workflow validation',
    ],
  },
  {
    name: 'Bearings & Drives',
    industry: 'Power Transmission, Bearings & Industrial Motion',
    websiteUrl: 'https://www.4bdi.com',
    scope: 'Complex technical parts catalog with multifaceted parametric search across dimensions, tolerances, and manufacturer specs.',
    customizations: [
      'Apache Solr search customization for technical part numbers with punctuation and hyphenation',
      'Infor SX ERP adapter implementation for contract customer account data',
      'Multi-box freight rate calculations for high-weight industrial mechanical components',
    ],
  },
  {
    name: 'Turner Supply Company',
    industry: 'Industrial Supplies, Tools & Fasteners',
    websiteUrl: 'https://www.turnersupply.com',
    scope: 'Comprehensive distributor digital storefront supporting both commercial manufacturing accounts and walk-in retail buyers.',
    customizations: [
      'B2B / B2C dual commerce mode enabling guest checkout alongside authenticated corporate accounts',
      'UPS and FedEx shipping integration for standard ground and express package deliveries',
      'Custom catalog taxonomy management across broad industrial maintenance and safety product lines',
    ],
  },
];

export const cimm2TechTaxonomy = [
  {
    category: 'Application & Frameworks',
    items: [
      { name: 'Java', role: 'Primary backend language for business services, data models, and integration layers' },
      { name: 'Spring Framework', role: 'Dependency injection, service container, and transaction management' },
      { name: 'Apache Struts', role: 'MVC web presentation layer managing action dispatchers and forms' },
      { name: 'Hibernate / JPA', role: 'Object-relational mapping and database persistence operations' },
    ],
  },
  {
    category: 'Integration & Protocols',
    items: [
      { name: 'JAX-RS', role: 'RESTful web service endpoints for decoupled communications' },
      { name: 'XML / DOM / SAX', role: 'Data exchange format and parsing for ERP and carrier API communications' },
      { name: 'ERP Adapters', role: 'Custom abstraction layer interfacing with Epicor and Infor SX ERP systems' },
      { name: 'Carrier APIs', role: 'External rating and package tracking interfaces with UPS and FedEx' },
    ],
  },
  {
    category: 'Search & Database',
    items: [
      { name: 'Apache Solr', role: 'Faceted full-text search engine for large distributor product catalogs' },
      { name: 'Oracle Database', role: 'Relational database for transactional commerce, accounts, and catalog tables' },
    ],
  },
  {
    category: 'Frontend & Build System',
    items: [
      { name: 'JavaScript & AJAX', role: 'Dynamic page interactions, auto-complete search, and live price updates' },
      { name: 'Apache Maven', role: 'Project build automation, multi-module dependency resolution, and packaging' },
      { name: 'JBoss Application Server', role: 'Enterprise application deployment and runtime container' },
      { name: 'Apache Subversion (SVN)', role: 'Version control and release branch management' },
    ],
  },
];

export const cimm2Learnings = [
  {
    title: 'Enterprise Architecture & Abstraction',
    description: 'Learned the critical value of isolating core application logic from external systems via adapter patterns, preventing vendor ERP specifics from leaking into domain entities.',
  },
  {
    title: 'High-Volume Search Technology',
    description: 'Gained practical expertise integrating Apache Solr alongside relational databases, mastering inverted indexes, tokenizers, analyzers, and faceted catalog navigation.',
  },
  {
    title: 'B2B vs B2C Domain Complexity',
    description: 'Understood that enterprise B2B is driven by complex contractual agreements, multi-tier pricing, role permissions, and credit terms—fundamentally different from simple retail checkouts.',
  },
  {
    title: 'Foundational Enterprise Java Discipline',
    description: 'Deepened hands-on mastery of Spring IoC, Hibernate ORM tuning, XML request/response processing, and multi-tier application architecture on JBoss that paved the way for subsequent distributed microservices.',
  },
];
