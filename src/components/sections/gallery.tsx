'use client';

const images = [
  {
    alt: "A lavish South Indian catering buffet with traditional dishes.",
    src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1200&q=80",
  },
  {
    alt: "Traditional South Indian wedding feast on banana leaf.",
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  },
  {
    alt: "South Indian feast for special occasions and functions.",
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
  },
  {
    alt: "Professional catering setup for corporate events.",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
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
