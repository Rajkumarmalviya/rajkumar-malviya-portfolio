import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import { profile } from '../data/resume';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <StickyHeading>About</StickyHeading>

      <motion.div {...fadeIn} className="space-y-4 text-slate-custom">
        <p>{profile.summary}</p>
        <p>
          Currently I'm an <span className="text-text-light">Associate Software Engineer at Primathon</span>,
          where I lead frontend architecture for high-traffic e-commerce platforms — building everything
          from PDP/PLP/Checkout surfaces with{' '}
          <span className="text-text-light">Next.js App Router + RSC</span> to JSON-driven sales funnels with{' '}
          <span className="text-text-light">Astro.js</span>.
        </p>
        <p>
          I also led organisation-wide <span className="text-text-light">Sentry rollout</span> across 7+
          merchants, built a Git submodule-based pre-commit testing framework, and shipped the
          motion-rich 7-Colonies marketing site end-to-end.
        </p>
        <p>
          Outside production work, I'm exploring{' '}
          <span className="text-text-light">LLM integrations, agentic workflows, and MCP</span> — the
          places where great frontends meet AI primitives.
        </p>
      </motion.div>
    </section>
  );
}
