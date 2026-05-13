import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import data from '../data/contributions.json';

const LEVELS = [
  'bg-border',
  'bg-accent/20',
  'bg-accent/40',
  'bg-accent/70',
  'bg-accent',
];

// Group days into weeks (columns)
function toWeeks(contributions) {
  const weeks = [];
  let week = [];
  contributions.forEach((day, i) => {
    week.push(day);
    if (week.length === 7) { weeks.push(week); week = []; }
  });
  if (week.length) weeks.push(week);
  return weeks;
}

export default function Contributions() {
  const weeks = toWeeks(data.contributions);
  const total = data.total.lastYear;

  return (
    <section
      id="contributions"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="GitHub contributions"
    >
      <StickyHeading>GitHub Activity</StickyHeading>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-custom mb-6">
          <span className="text-text-light font-medium">{total} contributions</span> in the last year
        </p>

        <div className="overflow-x-auto">
          <div className="flex gap-[3px]" style={{ minWidth: 'max-content' }}>
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                    className={`w-[10px] h-[10px] rounded-sm ${LEVELS[day.level]} transition-opacity hover:opacity-80`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted">
          <span>Less</span>
          {LEVELS.map((cls, i) => (
            <div key={i} className={`w-[10px] h-[10px] rounded-sm ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </motion.div>
    </section>
  );
}
