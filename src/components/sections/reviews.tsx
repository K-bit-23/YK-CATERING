'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { reviews } from '@/lib/data';
import { useI18n } from '@/hooks/use-i18n';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('reviews.title')}</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            {t('reviews.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full flex flex-col justify-between bg-card/90 backdrop-blur-sm shadow-lg border-primary/10">
              <CardHeader className="pb-3">
                <div className="flex space-x-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="italic text-foreground/80">"{t(`data.reviews.${review.id}.quote`)}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start pt-3">
                <p className="font-bold text-primary">{t(`data.reviews.${review.id}.name`)}</p>
                <p className="text-sm text-muted-foreground">{t(`data.reviews.${review.id}.event`)}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
