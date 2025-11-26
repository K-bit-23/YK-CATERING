import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { menuItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/hooks/use-i18n';

export default function MenuSection() {
  const { t } = useI18n();
  return (
    <section id="menu" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="font-headline">{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {image && (
                    <div className="aspect-w-3 aspect-h-2 mb-4">
                      <Image
                        src={image.imageUrl}
                        alt={name}
                        width={600}
                        height={400}
                        className="rounded-md object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-primary">{price}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
