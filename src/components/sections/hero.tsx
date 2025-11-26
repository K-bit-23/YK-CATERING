'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/hooks/use-i18n';
import { Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center text-center !py-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center max-w-4xl mx-auto">
        <div className="mb-4 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
          <span className="text-sm md:text-base font-medium text-white/90">
            {t('hero.blessing')}
          </span>
        </div>
        
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
          {t('hero.title')}
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-white/90 sm:text-xl font-medium drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="https://wa.me/917448312744" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 shadow-lg min-w-[160px]">
              <MessageCircle className="h-5 w-5" />
              {t('hero.whatsapp')}
            </Button>
          </a>
          
          <a href="tel:8925626963">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg min-w-[160px]">
              <Phone className="h-5 w-5" />
              {t('hero.call')}
            </Button>
          </a>
          
          <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white/20 backdrop-blur-sm min-w-[160px]">
            <Link href="#contact">{t('hero.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
