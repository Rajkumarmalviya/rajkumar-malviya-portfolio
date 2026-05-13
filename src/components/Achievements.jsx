import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import { achievements } from '../data/resume';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Achievements and contributions"
    >
      <StickyHeading>Recognition</StickyHeading>

      <ul className="space-y-4">
        {achievements.map((a, i) => (
          <motion.li
            key={a.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="grid grid-cols-8 gap-2 sm:gap-8"
          >
            <div className="col-span-8 text-xs font-semibold uppercase tracking-wide text-muted mt-1 sm:col-span-2">
              {a.badge}
            </div>
            <div className="col-span-8 sm:col-span-6">
              <p className="font-medium text-text-light">{a.title}</p>
              <p className="text-xs text-muted mt-0.5">{a.org}</p>
              <p className="mt-1.5 text-sm leading-normal text-slate-custom">{a.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
