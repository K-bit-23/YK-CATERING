'use client';

const images = [
  {
    alt: "Crispy South Indian Dosa with sambar and chutney",
    src: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e47?w=800&q=80",
  },
  {
    alt: "Soft and fluffy Idli served with sambar and coconut chutney",
    src: "https://images.unsplash.com/photo-1599569936838-032479b1834a?w=800&q=80",
  },
  {
    alt: "A traditional South Indian thali with a variety of dishes",
    src: "https://images.unsplash.com/photo-1668665632262-e613e51a1419?w=800&q=80",
  },
  {
    alt: "Flavorful and aromatic South Indian style Biryani",
    src: "https://images.unsplash.com/photo-1589647363585-f4a7d38779df?w=800&q=80",
  },
  {
    alt: "Savory Ven Pongal, a popular South Indian breakfast dish",
    src: "https://images.unsplash.com/photo-1673327400346-5259f42b3a12?w=800&q=80",
  },
   {
    alt: "Crispy and savory Medu Vada with dipping sauces",
    src: "https://images.unsplash.com/photo-1628585352247-c46b5e080763?w=800&q=80",
  },
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
