import { useState } from 'react';
import { motion } from 'framer-motion';
import StickyHeading from './StickyHeading';
import { profile } from '../data/resume';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqenjbrg';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      if (FORMSPREE_ENDPOINT.includes('your-id-here')) {
        await new Promise((r) => setTimeout(r, 500));
        setStatus({
          type: 'success',
          text: 'Demo submission received. Replace FORMSPREE_ENDPOINT in Contact.jsx with a real form ID.',
        });
      } else {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Network error');
        setStatus({ type: 'success', text: "Message sent. I'll be in touch soon." });
      }
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Send failed. Please try again or email me directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <StickyHeading>Contact</StickyHeading>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-custom leading-relaxed">
          I'm always open to frontend / full-stack roles, AI-product collaborations, and observability
          consulting. Reach me at{' '}
          <a href={`mailto:${profile.email}`} className="text-accent link-underline font-medium">
            {profile.email}
          </a>{' '}
          — or send a quick note below.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-surface/40 border border-border rounded p-2.5 text-text-light focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-muted mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-surface/40 border border-border rounded p-2.5 text-text-light focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-surface/40 border border-border rounded p-2.5 text-text-light focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="rounded border border-accent/60 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/10 transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
          {status && (
            <p className={`text-sm ${status.type === 'success' ? 'text-accent' : 'text-red-400'}`}>
              {status.text}
            </p>
          )}
        </form>

        <p className="mt-12 text-xs text-muted">
          Loosely designed in Figma and coded in VS Code. Built with{' '}
          <span className="text-text-light">React, Vite, Tailwind CSS</span> and{' '}
          <span className="text-text-light">Framer Motion</span>. Typeset in{' '}
          <span className="text-text-light">Inter</span> &{' '}
          <span className="text-text-light">JetBrains Mono</span>.
        </p>
      </motion.div>
    </section>
  );
}
