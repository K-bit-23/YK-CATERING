'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/hooks/use-i18n';
import { MessageCircle } from 'lucide-react';

export default function MenuSection() {
  const { t } = useI18n();
  return (
    <section id="menu" className="relative bg-transparent">
      <div className="absolute inset-0 bg-banana-leaf opacity-5"/>
      <div className="absolute inset-0 bg-gradient-overlay"/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('menu.title')}</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            {t('menu.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {menuItems.map((item) => {
            const image = PlaceHolderImages.find(img => img.id === item.imageId);
            const name = t(`data.menuItems.${item.id}.name`);
            const description = t(`data.menuItems.${item.id}.description`);
            const price = t(`data.menuItems.${item.id}.price`);
            return (
              <Card key={item.id} className="flex flex-col overflow-hidden bg-card/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-primary/10">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-headline text-xl text-primary">{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-2">
                  <CardDescription className="text-foreground/70">{description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-2">
                  <p className="font-semibold text-primary w-full">{price}</p>
                  <a href="https://wa.me/917448312744" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Enquire Now
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
