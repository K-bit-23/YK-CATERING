'use client';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <marquee>
          <div className="flex space-x-4">
            <img src="/image.png" alt="Gallery image 1" className="h-48 rounded-lg" />
            <img src="/favicon1.PNG" alt="Gallery image 2" className="h-48 rounded-lg" />
            <img src="/image.png" alt="Gallery image 3" className="h-48 rounded-lg" />
            <img src="/favicon1.PNG" alt="Gallery image 4" className="h-48 rounded-lg" />
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default GallerySection;
