import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Lawgical Academy | Premier Judicial & Prosecution Coaching Institute',
  description:
    'Dedicated coaching institute for Civil Judge (Judiciary), ADPO (Prosecution Officers), and competitive legal examinations. Conceptual mastery, bare act analysis, and rigorous answer-writing.',
  keywords: [
    'The Lawgical Academy',
    'MP Judiciary Coaching',
    'Civil Judge Preparation',
    'ADPO Coaching',
    'Legal Education',
    'Judicial Services Exam',
    'Bare Act Classes',
  ],
  authors: [{ name: 'The Lawgical Academy' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thelawgicalacademy.com',
    title: 'The Lawgical Academy | Premier Judicial & Prosecution Coaching',
    description:
      'Mastering the Law with Precision, Rigour & Logic. Specialized coaching for Judicial Services and ADPO examinations.',
    siteName: 'The Lawgical Academy',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14243A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#252525] antialiased selection:bg-[#B79559] selection:text-white">
        {children}
      </body>
    </html>
  );
}
