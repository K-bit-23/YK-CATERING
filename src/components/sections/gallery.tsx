'use client';

const images = [
  { src: 'https://images.unsplash.com/photo-1606491048802-8342506d8434?w=800&q=80', alt: 'South Indian Dish' },
  { src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80', alt: 'North Indian Dish' },
  { src: 'https://images.unsplash.com/photo-1643282933725-751b7533d6e5?w=800&q=80', alt: 'South Indian Spread' },
  { src: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80', alt: 'North Indian Thali' },
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', alt: 'Wedding Catering' },
  { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80', alt: 'Function Catering' },
  { src: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e47?w=800&q=80', alt: 'Dosa' },
  { src: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8426?w=800&q=80', alt: 'Samosas' },
  { src: 'https://images.unsplash.com/photo-1589647363585-f4a7d38779df?w=800&q=80', alt: 'Biryani' },
  { src: 'https://images.unsplash.com/photo-1628585352247-c46b5e080763?w=800&q=80', alt: 'Vada' },
  { src: 'https://images.unsplash.com/photo-1617191519105-a57c9bd54ed9?w=800&q=80', alt: 'Butter Chicken' },
  { src: 'https://images.unsplash.com/photo-1626080660934-c366ecda6831?w=800&q=80', alt: 'Chole Bhature' },
  { src: 'https://images.unsplash.com/photo-1608733330900-9df86e8a5e33?w=800&q=80', alt: 'Paneer Butter Masala' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <marquee>
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="h-48 rounded-lg" />
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default GallerySection;
