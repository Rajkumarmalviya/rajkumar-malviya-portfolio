import { techStack } from '../data/resume';

function StackRow() {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
      {techStack.map((technology) => (
        <li
          key={technology}
          className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-text"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {technology}
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <section className="mb-16 overflow-hidden border-y border-border/70 py-4 md:mb-24 lg:mb-36" aria-label="Technology stack">
      <div className="marquee-track flex w-max">
        <StackRow />
        <StackRow />
      </div>
    </section>
  );
}