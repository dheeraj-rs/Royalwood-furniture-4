'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sofa, Bed, Coffee, BookOpen, Users, Briefcase, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  productCount: number;
  color: string;
  featured: boolean;
  subcategories: string[];
}

export function CategoriesPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'living-room',
      name: 'Living Room',
      description: 'Transform your living space with our premium collection of sofas, coffee tables, and entertainment units',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      icon: <Sofa className="w-8 h-8" />,
      productCount: 156,
      color: 'from-blue-400 to-blue-600',
      featured: true,
      subcategories: ['Sofas', 'Coffee Tables', 'TV Units', 'Recliners', 'Side Tables']
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      description: 'Create your perfect sanctuary with our luxurious bedroom furniture collection',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      icon: <Bed className="w-8 h-8" />,
      productCount: 98,
      color: 'from-purple-400 to-purple-600',
      featured: true,
      subcategories: ['Beds', 'Wardrobes', 'Dressers', 'Nightstands', 'Mattresses']
    },
    {
      id: 'dining',
      name: 'Dining',
      description: 'Elegant dining furniture for memorable family moments and entertaining guests',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      icon: <Users className="w-8 h-8" />,
      productCount: 72,
      color: 'from-green-400 to-green-600',
      featured: true,
      subcategories: ['Dining Tables', 'Dining Chairs', 'Bar Stools', 'Buffets', 'China Cabinets']
    },
    {
      id: 'office',
      name: 'Office',
      description: 'Professional furniture solutions for productive and comfortable workspaces',
      image: 'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg',
      icon: <Briefcase className="w-8 h-8" />,
      productCount: 89,
      color: 'from-orange-400 to-orange-600',
      featured: false,
      subcategories: ['Office Chairs', 'Desks', 'Filing Cabinets', 'Bookcases', 'Conference Tables']
    },
    {
      id: 'storage',
      name: 'Storage',
      description: 'Smart storage solutions to keep your home organized and clutter-free',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      icon: <BookOpen className="w-8 h-8" />,
      productCount: 64,
      color: 'from-teal-400 to-teal-600',
      featured: false,
      subcategories: ['Bookcases', 'Storage Cabinets', 'Shelving Units', 'Wardrobes', 'Chests']
    },
    {
      id: 'tables',
      name: 'Tables',
      description: 'Versatile table collection including coffee tables, side tables, and accent pieces',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      icon: <Coffee className="w-8 h-8" />,
      productCount: 45,
      color: 'from-pink-400 to-pink-600',
      featured: false,
      subcategories: ['Coffee Tables', 'Side Tables', 'Console Tables', 'Accent Tables', 'Nesting Tables']
    },
    {
      id: 'outdoor',
      name: 'Outdoor',
      description: 'Weather-resistant outdoor furniture for patios, gardens, and balconies',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      icon: <Home className="w-8 h-8" />,
      productCount: 38,
      color: 'from-emerald-400 to-emerald-600',
      featured: false,
      subcategories: ['Patio Sets', 'Garden Chairs', 'Outdoor Tables', 'Loungers', 'Umbrellas']
    },
    {
      id: 'decor',
      name: 'Decor & Accessories',
      description: 'Beautiful decorative pieces and accessories to complete your interior design',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      icon: <Sparkles className="w-8 h-8" />,
      productCount: 127,
      color: 'from-rose-400 to-rose-600',
      featured: false,
      subcategories: ['Mirrors', 'Lighting', 'Rugs', 'Wall Art', 'Vases']
    }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
              <Sofa className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">Furniture Categories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Explore Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Collections
              </span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover furniture that perfectly complements your lifestyle. From modern living rooms to elegant bedrooms, 
              find everything you need to create your dream space.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Categories
            </h2>
            <p className="text-white/70 text-lg">
              Our most popular furniture categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {featuredCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {category.icon}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                      FEATURED
                    </Badge>
                  </div>

                  {/* Product Count */}
                  <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <span className="text-white text-sm font-medium">{category.productCount} items</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Subcategories */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.subcategories.slice(0, 3).map((sub, idx) => (
                      <Badge key={idx} variant="outline" className="border-white/20 text-white/60 text-xs">
                        {sub}
                      </Badge>
                    ))}
                    {category.subcategories.length > 3 && (
                      <Badge variant="outline" className="border-white/20 text-white/60 text-xs">
                        +{category.subcategories.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Link href={`/categories/${category.id}`}>
                    <Button
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold group/btn transition-all duration-300"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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

          {/* All Categories Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Categories
            </h2>
            <p className="text-white/70 text-lg">
              Browse our complete furniture collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">{category.productCount}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <Link href={`/categories/${category.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-white hover:text-yellow-400 hover:bg-white/5 border border-white/10 hover:border-yellow-400/30"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Our design experts are here to help you find the perfect furniture for your space. 
                Get personalized recommendations and professional advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full"
                >
                  Get Design Consultation
                </Button>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-yellow-400 px-8 py-3 rounded-full"
                  >
                    Browse All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}