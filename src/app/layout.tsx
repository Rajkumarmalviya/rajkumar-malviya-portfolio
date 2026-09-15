import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajkumar Malviya — Software Engineer',
  description:
    'Portfolio of Rajkumar Malviya, a Software Engineer building production web applications, e-commerce storefronts, and motion-rich digital experiences with React, Next.js, Astro.js, and TypeScript.',
  openGraph: {
    title: 'Rajkumar Malviya — Software Engineer',
    description: 'Production web applications, e-commerce storefronts, and modern frontend systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Rajkumar Malviya — Software Engineer',
    description: 'Production web applications and modern frontend systems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
