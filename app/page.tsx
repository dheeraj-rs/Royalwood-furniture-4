import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { Categories } from '@/components/sections/Categories';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}