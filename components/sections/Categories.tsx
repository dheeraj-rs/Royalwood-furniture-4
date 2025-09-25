'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sofa, Bed, Coffee, BookOpen, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  productCount: number;
  color: string;
}

export function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'living-room',
      name: 'Living Room',
      description: 'Comfortable and stylish furniture for your living space',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      icon: <Sofa className="w-8 h-8" />,
      productCount: 156,
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      description: 'Create your perfect sanctuary with our bedroom collection',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      icon: <Bed className="w-8 h-8" />,
      productCount: 98,
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'dining',
      name: 'Dining',
      description: 'Elegant dining sets for memorable family moments',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      icon: <Users className="w-8 h-8" />,
      productCount: 72,
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'office',
      name: 'Office',
      description: 'Professional furniture for productive workspaces',
      image: 'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg',
      icon: <Briefcase className="w-8 h-8" />,
      productCount: 89,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'storage',
      name: 'Storage',
      description: 'Smart storage solutions for organized living',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      icon: <BookOpen className="w-8 h-8" />,
      productCount: 64,
      color: 'from-teal-400 to-teal-600'
    },
    {
      id: 'tables',
      name: 'Tables',
      description: 'Coffee tables, side tables, and more',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      icon: <Coffee className="w-8 h-8" />,
      productCount: 45,
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
            <Sofa className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">Shop by Category</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Explore Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            From living rooms to offices, discover furniture that perfectly complements your lifestyle and space.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {category.icon}
                  </div>
                </div>

                {/* Product Count Badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{category.productCount} items</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <Link href={`/categories/${category.id}`}>
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between text-white hover:text-yellow-400 hover:bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-yellow-400/30">
                  <div className={`absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full animate-ping`}></div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full animate-ping animation-delay-500`}></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Our design consultants are here to help you create the perfect space. Get personalized recommendations tailored to your style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Design Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-yellow-400 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Browse All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}