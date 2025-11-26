import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { reviews } from '@/lib/data';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            We're proud to have been a part of so many special moments.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between">
                      <CardHeader>
                        <div className="flex space-x-1 text-yellow-500">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="italic text-foreground/90">"{review.quote}"</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start">
                        <p className="font-bold text-primary">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.event}</p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
