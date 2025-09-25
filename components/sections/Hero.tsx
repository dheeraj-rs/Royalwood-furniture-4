'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Luxury Furniture",
      subtitle: "Redefined",
      description: "Discover our exclusive collection of handcrafted furniture that transforms spaces into masterpieces",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      cta: "Explore Collection"
    },
    {
      title: "Modern Living",
      subtitle: "Reimagined",
      description: "Experience the perfect blend of contemporary design and timeless elegance",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      cta: "Shop Now"
    },
    {
      title: "Craftsmanship",
      subtitle: "Perfected",
      description: "Each piece is meticulously crafted using the finest materials and techniques",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      cta: "View Products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-center space-x-2 text-yellow-400">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-medium tracking-wider uppercase">Premium Collection</span>
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white mb-2 animate-fade-in-up">
            {slides[currentSlide].title}
          </span>
          <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            {slides[currentSlide].subtitle}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-yellow-400 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Watch Story
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}