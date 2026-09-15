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
    title: '7 Colonies',
    subtitle: 'Production Marketing Platform',
    description:
      'Built the complete production marketing website from scratch to deployment, delivering a responsive multi-page platform with motion-driven user experiences.',
    challenges:
      'Translated visual concepts into reusable Next.js and TypeScript systems across Home, Colonies, Forum, Characters, News, Discover, and About pages.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    url: 'https://www.7colonies.com/',
  },
  {
    title: 'E-commerce Funnel Platform Suite',
    subtitle: 'Conversion-focused storefronts',
    description:
      'Built high-performance one-page e-commerce funnels with Astro.js, Shopify GraphQL APIs, and GoKwik checkout integrations.',
    challenges:
      'Created reusable static section architectures and dynamic product rendering systems optimized for fast rendering, Core Web Vitals, SEO, and scalable merchant onboarding.',
    stack: ['Astro.js', 'TypeScript', 'Shopify GraphQL', 'GoKwik', 'JavaScript'],
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
    subtitle: 'Drag-and-drop mobile app builder',
    description:
      'Worked on a low-code platform that enables users to build custom mobile applications through drag-and-drop workflows and configurable UI sections.',
    challenges:
      'Developed section builders, settings management, notifications, authentication flows, and Redux-based state architecture in collaboration with backend teams.',
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
