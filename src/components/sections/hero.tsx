import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/hooks/use-i18n';

const HeroSection = () => {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center !py-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={t('placeholders.hero-background.description')}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-200">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
            <Link href="#contact">{t('hero.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
