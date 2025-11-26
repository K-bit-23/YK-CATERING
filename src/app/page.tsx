import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import MenuSection from '@/components/sections/menu';
import AiSuggesterSection from '@/components/sections/ai-suggester';
import ReviewsSection from '@/components/sections/reviews';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
        <AiSuggesterSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
