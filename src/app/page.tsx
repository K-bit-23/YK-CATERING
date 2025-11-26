'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import MenuSection from '@/components/sections/menu';
import ReviewsSection from '@/components/sections/reviews';
import ContactSection from '@/components/sections/contact';
import { useI18n } from '@/hooks/use-i18n';
import { useEffect } from 'react';

export default function Home() {
  const { lang } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
