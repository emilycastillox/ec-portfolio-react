import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Emily Castillo - Full Stack Web Developer',
  description: 'Emily Castillo Portfolio - Full Stack Web Developer specializing in React, Node.js, and modern web technologies',
  keywords: 'resume bootstrap template, resume / cv html template, html5 / css3 resume, Emily Castillo, Full Stack Developer',
  author: 'EmilyCastillo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}