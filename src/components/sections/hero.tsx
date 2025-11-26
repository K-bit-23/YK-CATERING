import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/hooks/use-i18n';

const HeroSection = () => {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center !py-0 bg-banana-leaf">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-7xl lg:text-8xl">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105 shadow-lg shadow-accent/20">
            <Link href="#contact">{t('hero.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
