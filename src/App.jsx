import { useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contributions from './components/Contributions';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import TechMarquee from './components/TechMarquee';

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e) => {
      el.style.setProperty('--mx', `${e.clientX}px`);
      el.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen bg-bg text-slate-custom font-sans selection:bg-accent/30">
      <div className="pointer-events-none fixed inset-0 z-0 spotlight" aria-hidden />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-20 lg:py-0">
        <div className="md:flex md:justify-between md:gap-10">
          <Sidebar />

          <main id="content" className="pt-4 md:w-1/2 md:py-24">
            <About />
            <TechMarquee />
            <Experience />
            <Projects />
            <Skills />
            <Contributions />
            <Achievements />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
