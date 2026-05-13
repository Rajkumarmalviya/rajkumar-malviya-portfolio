import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import { projects } from '../data/resume';

function Card({ p, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-12 group relative grid grid-cols-8 gap-4 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-surface/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug text-text-light">
          <span className="inline-flex items-baseline font-medium leading-tight text-text-light group-hover:text-accent transition-colors">
            {p.title}
            <span aria-hidden="true" className="ml-1 inline-block translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
              →
            </span>
          </span>
        </h3>
        <p className="text-xs text-muted mt-0.5">{p.subtitle}</p>
        <p className="mt-2 text-sm leading-normal text-slate-custom">{p.description}</p>

        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
          {p.stack.map((t) => (
            <li key={t} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {t}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 mb-4 mt-1 sm:order-1 sm:col-span-2 sm:translate-y-1">
        <div className="aspect-video rounded border border-border bg-surface/40 flex items-center justify-center font-mono text-2xl text-accent/50 group-hover:text-accent/80 group-hover:border-accent/40 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-widest text-muted font-mono">{p.category}</p>
      </div>
    </motion.li>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <StickyHeading>Projects</StickyHeading>

      <ul className="group/list">
        {projects.map((p, i) => (
          <Card key={p.title} p={p} index={i} />
        ))}
      </ul>
    </section>
  );
}
