'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Award, Users, Globe, Leaf, CheckCircle, ArrowRight } from 'lucide-react';

export function About() {
  const [visibleStats, setVisibleStats] = useState<boolean[]>([false, false, false, false]);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '50,000+', label: 'Happy Customers', color: 'from-blue-400 to-blue-600' },
    { icon: <Award className="w-8 h-8" />, value: '25+', label: 'Years Experience', color: 'from-yellow-400 to-yellow-600' },
    { icon: <Globe className="w-8 h-8" />, value: '15+', label: 'Cities Served', color: 'from-green-400 to-green-600' },
    { icon: <Leaf className="w-8 h-8" />, value: '100%', label: 'Eco-Friendly', color: 'from-purple-400 to-purple-600' }
  ];

  const features = [
    {
      title: 'Premium Materials',
      description: 'Only the finest wood, metal, and fabric materials sourced from sustainable suppliers worldwide.'
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Each piece is meticulously handcrafted by skilled artisans with decades of experience.'
    },
    {
      title: 'Custom Design',
      description: 'Personalized furniture solutions tailored to your unique style and space requirements.'
    },
    {
      title: 'Lifetime Warranty',
      description: 'Comprehensive warranty coverage ensuring your investment is protected for years to come.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleStats(prev => {
        const nextIndex = prev.findIndex(val => !val);
        if (nextIndex === -1) return prev;
        const newStats = [...prev];
        newStats[nextIndex] = true;
        return newStats;
      });
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(timer);
    }, 800);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/5 via-transparent to-transparent"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">About Royalwood</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Crafting Dreams
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Since 1999
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              For over two decades, Royalwood has been synonymous with luxury, quality, and timeless design. 
              What began as a small workshop has evolved into one of India's most trusted furniture brands, 
              serving discerning customers who appreciate the finest things in life.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Our commitment to excellence extends beyond beautiful furniture. We believe in sustainable 
              practices, ethical sourcing, and creating pieces that will be cherished for generations. 
              Every piece tells a story of dedication, artistry, and passion.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-yellow-400/30 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full group transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                    alt="Quality Materials"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
                    alt="Modern Design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg"
                    alt="Elegant Spaces"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`group text-center p-8 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl transition-all duration-500 hover:scale-105 transform ${
                visibleStats[index] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}