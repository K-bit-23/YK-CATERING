'use client';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <marquee>
          <div className="flex space-x-4">
            <img src="https://images.unsplash.com/photo-1606491048802-8342506d8434?w=800&q=80" alt="South Indian Dish" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80" alt="North Indian Dish" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1643282933725-751b7533d6e5?w=800&q=80" alt="South Indian Spread" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80" alt="North Indian Thali" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80" alt="Wedding Catering" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80" alt="Function Catering" className="h-48 rounded-lg" />
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default GallerySection;
