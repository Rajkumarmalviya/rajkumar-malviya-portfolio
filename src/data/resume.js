export const profile = {
  name: 'Rajkumar Malviya',
  initials: 'RM',
  title: 'Software Engineer',
  tagline: 'Frontend architecture · E-commerce · AI systems',
  summary:
    'Software Engineer with 2.5+ years of experience building scalable, performance-focused web applications and storefronts using React, Next.js, Astro.js, and TypeScript. I work across frontend architecture, API orchestration, observability, and production delivery.',
  highlightKeywords: [
    'Next.js',
    'React Server Components',
    'Astro.js',
    'TypeScript',
    'Web Vitals',
    'Sentry',
    'LLM',
    'observability',
  ],
  location: 'Indore, India',
  availability: 'Open to Software Engineer and Frontend Engineer roles',
  email: 'er.rajkumar.malviya@gmail.com',
  phone: '+91-7354489974',
  socials: {
    linkedin: 'https://www.linkedin.com/in/engineer-rajkumar-malviya/',
    github: 'https://github.com/Rajkumarmalviya/',
    hackerrank: 'https://www.hackerrank.com/profile/rajmalvi789',
  },
};

export const stats = [
  { value: '2.5+', label: 'Years of experience' },
  { value: '7+', label: 'E-commerce platforms shipped' },
  { value: '5+', label: 'JSON-driven sales funnels' },
  { value: '1', label: 'Developer of the Month award' },
];

export const skills = [
  { name: 'JavaScript (ES6+)', group: 'Frontend' },
  { name: 'TypeScript', group: 'Frontend' },
  { name: 'React.js', group: 'Frontend' },
  { name: 'Next.js (App Router, RSC, SSR)', group: 'Frontend' },
  { name: 'Astro.js', group: 'Frontend' },
  { name: 'Redux', group: 'Frontend' },
  { name: 'TailwindCSS', group: 'Frontend' },
  { name: 'Framer Motion', group: 'Frontend' },

  { name: 'OpenAI API', group: 'AI/LLM' },
  { name: 'LLM Integration', group: 'AI/LLM' },
  { name: 'Prompt Engineering', group: 'AI/LLM' },
  { name: 'RAG Concepts', group: 'AI/LLM' },
  { name: 'Agentic Workflows', group: 'AI/LLM' },
  { name: 'MCP', group: 'AI/LLM' },

  { name: 'Shopify Admin/Storefront API', group: 'E-commerce' },
  { name: 'GoKwik', group: 'E-commerce' },
  { name: 'Google & Meta Pixel Events', group: 'E-commerce' },
  { name: 'A/B Testing', group: 'E-commerce' },
  { name: 'Data Layer', group: 'E-commerce' },
  { name: 'SEO', group: 'E-commerce' },

  { name: 'Node.js', group: 'Backend' },
  { name: 'Express.js', group: 'Backend' },
  { name: 'REST APIs', group: 'Backend' },
  { name: 'Type-safe APIs', group: 'Backend' },
  { name: 'API Orchestration', group: 'Backend' },

  { name: 'Sentry', group: 'Observability' },
  { name: 'Web Vitals', group: 'Observability' },
  { name: 'CI/CD', group: 'Observability' },
  { name: 'GitHub Actions', group: 'Observability' },
  { name: 'Docker', group: 'Observability' },
  { name: 'Git Submodules', group: 'Observability' },
  { name: 'Linux', group: 'Observability' },
  { name: 'PostgreSQL', group: 'Data & Testing' },
  { name: 'Prisma', group: 'Data & Testing' },
  { name: 'Playwright', group: 'Data & Testing' },
  { name: 'Jest', group: 'Data & Testing' },
];

export const skillGroups = ['All', 'Frontend', 'AI/LLM', 'E-commerce', 'Backend', 'Observability', 'Data & Testing'];

export const techStack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Astro.js',
  'JavaScript',
  'Tailwind CSS',
  'Framer Motion',
  'Redux',
  'Node.js',
  'Express.js',
  'Shopify APIs',
  'GoKwik',
  'Sentry',
  'Playwright',
  'GitHub Actions',
  'Docker',
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Primathon Technology Ventures',
    location: 'Indore, India',
    year: '2025',
    date: 'January 2025 – Present',
    bullets: [
      'Designed and developed scalable web applications and storefront experiences using React, Next.js, TypeScript, Astro.js, and modern frontend architecture.',
      'Implemented Sentry monitoring and observability across 7+ production Shopify storefronts, enabling faster debugging and proactive issue resolution.',
      'Developed reusable JSON-driven rendering architecture using Astro.js and Shopify APIs, accelerating onboarding of new storefront experiences.',
      'Built a Git submodule-based testing framework for CI/CD pre-commit validation, improving code quality and deployment reliability.',
      'Owned staging-to-production delivery of the 7 Colonies marketing platform and collaborated with designers, QA, product managers, and backend developers.',
    ],
    stack: ['Next.js', 'RSC', 'TypeScript', 'Astro.js', 'Shopify', 'Sentry', 'GitHub Actions'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'ITGeeks Technologies',
    location: 'Dewas, India',
    year: '2024',
    date: 'January 2024 – October 2024',
    bullets: [
      'Designed responsive React dashboard features for Mobilify, including Settings, Support, Notifications, Form Builder, and reusable UI components.',
      'Developed and integrated REST APIs using Node.js and Express.js for reliable frontend and backend communication.',
      'Collaborated in an Agile environment, participated in code reviews, resolved production issues, and improved deployment reliability.',
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express.js', 'REST'],
  },
];

export const projects = [
  {
    title: 'Open Store',
    subtitle: 'Scalable Storefront Platform',
    description:
      'Architecting a next-generation storefront framework with modular static-template registries, JSON-driven rendering, and reusable component libraries for rapid merchant onboarding.',
    challenges:
      'Designing a registry that stays type-safe across hundreds of template variants while keeping bundle size and TTFB low. Adopted React Server Components and JSON-driven routes to push rendering work to the edge.',
    stack: ['Next.js', 'TypeScript', 'Astro.js', 'Shopify APIs', 'RSC'],
    category: 'E-commerce',
  },
  {
    title: 'Sentry Automation & Observability Tooling',
    subtitle: 'Production Triage at Scale',
    description:
      'Co-developed internal tooling to automate merchant error monitoring and production triage; designed for extensibility into AI-driven anomaly detection.',
    challenges:
      'Aggregating noisy Sentry events across 7+ merchants and de-duplicating them with custom fingerprinting rules. Built a Node.js SDK wrapper exposing REST endpoints for dashboard ingestion.',
    stack: ['Node.js', 'Sentry SDK', 'REST APIs'],
    category: 'Observability',
  },
  {
    title: 'Kilrr - PDP/PLP/Checkout',
    subtitle: 'Conversion-optimised Storefront',
    description:
      'End-to-end Product Detail, Listing, and Checkout surfaces using Next.js App Router + RSC, with integrated A/B testing and a typed Data Layer pipeline for analytics.',
    challenges:
      'Coordinating server and client rendering boundaries while preserving interactivity for cart and recommendation widgets, and keeping LCP under 2.5s on mid-range mobile.',
    stack: ['Next.js', 'RSC', 'TypeScript', 'A/B Testing', 'Data Layer'],
    category: 'E-commerce',
  },
  {
    title: '7 Colonies Marketing Site',
    subtitle: 'Motion-rich Brand Site',
    description:
      'Owned the full staging-to-production launch of an 8-page marketing site featuring complex motion design and scroll-driven storytelling.',
    challenges:
      'Choreographing dozens of scroll-linked Framer Motion timelines without hurting Web Vitals on mobile. Used IntersectionObserver gating and asset prefetch budgets to keep CLS at zero.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'Frontend',
    url: 'https://www.7colonies.com/',
  },
  {
    title: 'JSON-driven Sales Funnels',
    subtitle: 'Astro.js + Shopify',
    description:
      'Engineered 5+ JSON-driven, performance-optimized sales funnels achieving sub-second page loads and strong Web Vitals.',
    challenges:
      'Decoupling marketing-controlled funnel content from code via JSON schemas, while ensuring Shopify checkout flows remain conversion-safe and analytics events fire reliably.',
    stack: ['Astro.js', 'Shopify APIs', 'JSON Schema'],
    category: 'E-commerce',
    links: [
      { label: 'Plix', url: 'https://store.plixlife.com/' },
      { label: 'Azah', url: 'https://shop.azah.in/' },
      { label: 'BBlunt', url: 'https://buy.bblunt.com/' },
      { label: 'Saku', url: 'https://zia.saku.co.in/' },
    ],
  },
  {
    title: 'Mobilify',
    subtitle: 'Drag-and-drop Mobile App Builder',
    description:
      'Contributed to a low-code mobile app generation platform that lets users build custom applications through drag-and-drop workflows and configurable UI sections.',
    challenges:
      'Building flexible section configuration and settings workflows while keeping complex Redux state predictable across authentication, notifications, and app customization screens.',
    stack: ['React.js', 'TypeScript', 'Redux', 'Node.js', 'Express.js'],
    category: 'Full-stack',
    url: 'https://www.mobilifyapp.com/',
  },
];

export const projectCategories = ['All', 'E-commerce', 'Observability', 'Frontend', 'Full-stack'];

export const achievements = [
  {
    icon: 'trophy',
    title: 'Developer of the Month',
    org: 'Primathon Technology Ventures',
    description:
      'Awarded for successfully delivering the Kilrr merchant to production — owning architecture, performance, and launch readiness end-to-end.',
    badge: 'Award',
  },
  {
    icon: 'certificate',
    title: 'HackerRank Certified — JavaScript (Intermediate)',
    org: 'HackerRank',
    description: 'Verified intermediate-level JavaScript problem-solving and language proficiency.',
    badge: 'Certification',
  },
  {
    icon: 'certificate',
    title: 'HackerRank Certified — Python (Basic)',
    org: 'HackerRank',
    description: 'Verified foundational Python problem-solving proficiency.',
    badge: 'Certification',
  },
  {
    icon: 'mentor',
    title: 'Observability Adoption & Mentoring',
    org: 'Primathon',
    description:
      'Spearheaded observability adoption across 7+ production Shopify merchants and mentored QA interns on test parameterization and edge-case validation.',
    badge: 'Leadership',
  },
];

export const education = {
  school: 'Devi Ahilya Vishwavidyalaya (DAVV)',
  degree: 'B.E. — Electrical and Instrumentation Engineering',
  year: '2019 – 2023',
  location: 'Indore, India',
};
