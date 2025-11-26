import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'K.Y. Catering Service',
  description: 'High Class Catering Service, Contract & Labour. Let us make your event unforgettable.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&family=Hind+Madurai:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
