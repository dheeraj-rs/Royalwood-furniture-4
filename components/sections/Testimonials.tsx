'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
  location: string;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      role: 'Interior Designer',
      company: 'Elegant Interiors',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      text: 'The quality of Royalwood furniture is absolutely exceptional. Every piece we\'ve ordered has exceeded our expectations. The attention to detail and craftsmanship is remarkable.',
      product: 'Executive Desk Set',
      location: 'Mumbai'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'Tech Innovations Ltd',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      text: 'We furnished our entire corporate office with Royalwood. The professionalism, delivery timeline, and quality were impeccable. Highly recommended for commercial projects.',
      product: 'Office Collection',
      location: 'Bangalore'
    },
    {
      id: '3',
      name: 'Anjali Mehta',
      role: 'Homemaker',
      company: 'Residence',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      rating: 5,
      text: 'Our living room transformation with Royalwood has been amazing. The sofa set is incredibly comfortable and the design perfectly matches our aesthetic vision.',
      product: 'Modern Sofa Collection',
      location: 'Delhi'
    },
    {
      id: '4',
      name: 'Vikram Singh',
      role: 'Architect',
      company: 'Modern Spaces',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'As an architect, I appreciate fine craftsmanship. Royalwood consistently delivers furniture that complements our architectural vision perfectly.',
      product: 'Custom Dining Set',
      location: 'Pune'
    },
    {
      id: '5',
      name: 'Sneha Patel',
      role: 'Boutique Owner',
      company: 'Chic Boutique',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      rating: 5,
      text: 'The bedroom furniture we ordered is simply divine. The quality, finish, and comfort level is outstanding. Worth every penny spent.',
      product: 'Luxury Bedroom Set',
      location: 'Ahmedabad'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent"></div>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">Customer Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              What Our Customers
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied customers who have transformed their spaces with Royalwood furniture.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-3xl p-8 md:p-12 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10">
                    {/* Quote Icon */}
                    <div className="mb-8">
                      <div className="inline-flex p-4 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full">
                        <Quote className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Product Info */}
                    <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-8 inline-block">
                      <span className="text-yellow-400 font-medium">Purchased: {testimonial.product}</span>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <Avatar className="w-16 h-16 border-2 border-yellow-400/30">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-bold text-white text-lg">{testimonial.name}</div>
                        <div className="text-yellow-400 font-medium">{testimonial.role}</div>
                        <div className="text-white/60 text-sm">{testimonial.company} • {testimonial.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white hover:text-yellow-400 transition-all duration-300 rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white hover:text-yellow-400 transition-all duration-300 rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/70 text-lg mb-8">
              Join thousands of satisfied customers who have transformed their spaces with Royalwood.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}