import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { menuItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MenuSection() {
  return (
    <section id="menu" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Offerings</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Explore our diverse menu packages, thoughtfully designed for any occasion.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {menuItems.map((item) => {
            const image = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {image && (
                    <div className="aspect-w-3 aspect-h-2 mb-4">
                      <Image
                        src={image.imageUrl}
                        alt={item.name}
                        width={600}
                        height={400}
                        className="rounded-md object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-primary">{item.price}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
