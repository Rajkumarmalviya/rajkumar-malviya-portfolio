export const profile = {
  name: 'Rajkumar Malviya',
  initials: 'RM',
  title: 'Frontend Software Engineer',
  tagline: 'Frontend Engineer · Observability & AI',
  summary:
    'Frontend Software Engineer with 2+ years of experience building scalable, performance-optimized web applications using Next.js, React Server Components, Astro.js, and TypeScript across 7+ high-traffic e-commerce platforms. Skilled in frontend architecture, API orchestration, Web Vitals, and observability. Passionate about AI-powered products and LLM API integration.',
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
  email: 'er.rajkumar.malviya@gmail.com',
  phone: '+91-7354489974',
  socials: {
    linkedin: 'https://www.linkedin.com/in/rajkumar-malviya/',
    github: 'https://github.com/',
    hackerrank: 'https://www.hackerrank.com/',
  },
  resumeUrl: '/Rajkumar_Malviya_Resume.pdf',
};

export const stats = [
  { value: '2+', label: 'Years of experience' },
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
];

export const skillGroups = ['All', 'Frontend', 'AI/LLM', 'E-commerce', 'Backend', 'Observability'];

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Primathon Technology Ventures',
    location: 'Indore, India',
    year: '2025',
    date: 'January 2025 – Present',
    bullets: [
      'Architected end-to-end PDP, PLP, and Checkout surfaces for the Kilrr e-commerce ecosystem using Next.js App Router, React Server Components, and TypeScript; integrated A/B testing and Data Layer pipelines for conversion experimentation.',
      'Led organization-wide Sentry rollout across 7+ high-traffic Shopify merchants including Aqualogica, BBlunt, and Wellversed; triaged production errors and reduced alert noise via custom rules and dashboards.',
      'Engineered 5+ JSON-driven, performance-optimized sales funnels using Astro.js and Shopify APIs, achieving sub-second page loads and strong Web Vitals.',
      'Built a Git submodule-based pre-commit testing framework integrated into CI/CD pipelines, significantly reducing regression risks across the merchant codebase.',
      'Owned full staging-to-production launch of the 7-Colonies 8-page marketing site featuring complex motion design.',
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
      'Engineered Mobilify, a low-code drag-and-drop platform for mobile app generation; designed the core form builder engine and scalable state management using Redux.',
      'Designed type-safe RESTful APIs using Node.js and Express.js, reducing server response latency by 40% through optimized query patterns and middleware.',
      'Drove Agile sprints and led technical code reviews, improving team deployment efficiency by 25%.',
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
    title: 'Kilrr — PDP/PLP/Checkout',
    subtitle: 'Conversion-optimised Storefront',
    description:
      'End-to-end Product Detail, Listing, and Checkout surfaces using Next.js App Router + RSC, with integrated A/B testing and a typed Data Layer pipeline for analytics.',
    challenges:
      'Coordinating server and client rendering boundaries while preserving interactivity for cart and recommendation widgets, and keeping LCP under 2.5s on mid-range mobile.',
    stack: ['Next.js', 'RSC', 'TypeScript', 'A/B Testing', 'Data Layer'],
    category: 'E-commerce',
  },
  {
    title: '7-Colonies Marketing Site',
    subtitle: 'Motion-rich Brand Site',
    description:
      'Owned the full staging-to-production launch of an 8-page marketing site featuring complex motion design and scroll-driven storytelling.',
    challenges:
      'Choreographing dozens of scroll-linked Framer Motion timelines without hurting Web Vitals on mobile. Used IntersectionObserver gating and asset prefetch budgets to keep CLS at zero.',
    stack: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    category: 'Frontend',
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
  },
  {
    title: 'Pre-commit Testing Framework',
    subtitle: 'Git Submodule · CI/CD',
    description:
      'Built a Git submodule-based pre-commit testing framework integrated into CI/CD pipelines, significantly reducing regression risks across the merchant codebase.',
    challenges:
      'Sharing test fixtures across 7+ merchant repos without duplication. Designed a submodule layout + GitHub Actions matrix so each merchant only runs the slice of tests relevant to its surface.',
    stack: ['GitHub Actions', 'Git Submodules', 'Node.js'],
    category: 'Observability',
  },
];

export const projectCategories = ['All', 'E-commerce', 'Observability', 'Frontend'];

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
