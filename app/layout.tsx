// @ts-ignore
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goodluck | Software Engineer',
  description: 'Software Engineer specializing in Next.js, TypeScript, and Full Stack Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0A0A] text-white antialiased selection:bg-amber-500 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}