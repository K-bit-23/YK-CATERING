'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import StickyContact from '@/components/layout/sticky-contact';
import HeroSection from '@/components/sections/hero';
import MenuSection from '@/components/sections/menu';
import ContactSection from '@/components/sections/contact';
import { useI18n } from '@/hooks/use-i18n';
import { useEffect } from 'react';
import GallerySection from '@/components/sections/gallery';

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
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}
