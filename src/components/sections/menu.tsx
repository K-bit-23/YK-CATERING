import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { menuItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/hooks/use-i18n';

export default function MenuSection() {
  const { t } = useI18n();
  return (
    <section id="menu" className="relative bg-transparent">
        <div className="absolute inset-0 bg-banana-leaf opacity-10"/>
        <div className="absolute inset-0 bg-gradient-overlay"/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('menu.title')}</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            {t('menu.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {menuItems.map((item) => {
            const image = PlaceHolderImages.find(img => img.id === item.imageId);
            const name = t(`data.menuItems.${item.id}.name`);
            const description = t(`data.menuItems.${item.id}.description`);
            const price = t(`data.menuItems.${item.id}.price`);
            return (
              <Card key={item.id} className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="font-headline text-primary">{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {image && (
                    <div className="aspect-w-3 aspect-h-2 mb-4 overflow-hidden rounded-md">
                      <Image
                        src={image.imageUrl}
                        alt={name}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-accent">{price}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
