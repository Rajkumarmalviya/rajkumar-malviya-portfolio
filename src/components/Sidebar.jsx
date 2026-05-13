import { useEffect, useState } from 'react';
import { profile } from '../data/resume';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Sidebar() {
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const handler = () => {
      let current = '#about';
      for (const n of NAV) {
        const el = document.querySelector(n.href);
        if (el && el.getBoundingClientRect().top <= 200) current = n.href;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      id="top"
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-16"
    >
      <div>
        <img
          src="/raj-image.webp"
          alt={profile.name}
          className="mb-6 h-40 w-40 rounded-full object-cover ring-2 ring-accent/30"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tightish text-text-light">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-text sm:text-xl">{profile.title}</h2>
        <p className="mt-4 max-w-xs leading-normal text-muted">{profile.tagline}</p>

        <nav className="nav hidden lg:block mt-16" aria-label="In-page navigation">
          <ul className="w-max">
            {NAV.map((n) => {
              const isActive = active === n.href;
              return (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group flex items-center py-3 active:text-text-light"
                  >
                    <span
                      className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-text-light'
                          : 'w-8 bg-muted/60 group-hover:w-16 group-hover:bg-text-light'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-text-light'
                          : 'text-muted group-hover:text-text-light'
                      }`}
                    >
                      {n.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            className="block text-muted hover:text-text-light transition-colors"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="block text-muted hover:text-text-light transition-colors"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.08V21h-4v-5.36c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.06 1.39-2.06 2.83V21h-4V9z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="block text-muted hover:text-text-light transition-colors"
            href={profile.socials.hackerrank}
            target="_blank"
            rel="noreferrer"
            aria-label="HackerRank"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.116.642 10.886 0 12C21.75 19.114 13.285 24 12 24c-1.285 0-9.75-4.886-10.392-6-.642-1.114-.642-10.884 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.928c0-.141-.114-.258-.258-.258h-.844c-.144 0-.258.115-.258.258v10.146c0 .141.114.258.258.258h.844c.144 0 .258-.115.258-.258v-4.319h4.074v4.319c0 .141.114.258.258.258h.844c.144 0 .258-.115.258-.258V7.057c0-.141-.114-.258-.258-.258h-.844z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="block text-muted hover:text-text-light transition-colors"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}
