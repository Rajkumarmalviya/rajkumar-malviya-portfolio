import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import { skills, skillGroups } from '../data/resume';

export default function Skills() {
  const groups = skillGroups.filter((g) => g !== 'All');

  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <StickyHeading>Skills</StickyHeading>

      <div className="space-y-6">
        {groups.map((g, i) => (
          <motion.div
            key={g}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">{g}</p>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.group === g)
                .map((s) => (
                  <span
                    key={s.name}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {s.name}
                  </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
