'use client';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <marquee>
          <div className="flex space-x-4">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cookshideout.com%2Fwp-content%2Fuploads%2F2014%2F03%2FMixed-Vegetable-Kootu4S.jpg&tbnid=ecMN0PPFkeMXNM&vet=10CBAQxiAoBWoXChMIyPGu_uWQkQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.cookshideout.com%2Fdal-kootu-poritha-kootu-recipe&docid=H6KqyvOWvzX4yM&w=1200&h=1807&q=VEGETABLE%20KOOTU%20FOOD%20IMAGE%203D%20FOR%20WEB%20%5BPAGE%20&ved=0CBAQxiAoBWoXChMIyPGu_uWQkQMVAAAAAB0AAAAAEAc" alt="Wedding Catering" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80" alt="Function Catering" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" alt="Corporate Catering" className="h-48 rounded-lg" />
            <img src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=1200&q=80" alt="Indian Catering" className="h-48 rounded-lg" />
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default GallerySection;
