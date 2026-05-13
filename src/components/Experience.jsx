import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import { experience, profile } from '../data/resume';

function Card({ job, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-12 group relative grid grid-cols-8 gap-4 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-surface/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
        aria-label={job.date}
      >
        {job.date}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-text-light">
          <span>
            <span className="inline-flex items-baseline font-medium leading-tight text-text-light group-hover:text-accent">
              {job.role} · {job.company}
            </span>
          </span>
          <p className="text-text text-sm mt-0.5">{job.location}</p>
        </h3>

        <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm leading-normal text-slate-custom marker:text-accent">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
          {job.stack.map((t) => (
            <li key={t} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {t}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <StickyHeading>Experience</StickyHeading>

      <ol className="group/list">
        {experience.map((job, i) => (
          <Card key={job.role + i} job={job} index={i} />
        ))}
      </ol>

      <div className="mt-6">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-baseline font-medium leading-tight text-text-light group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
            View Full <span className="whitespace-nowrap">Résumé</span>
          </span>
          <span aria-hidden="true" className="ml-1 inline-block translate-y-px transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
