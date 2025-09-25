'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const { addItem } = useCart();

  const products: Product[] = [
    {
      id: '1',
      name: 'Royal Executive Chair',
      price: 24999,
      originalPrice: 32999,
      image: 'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg',
      category: 'Office',
      rating: 4.9,
      reviews: 128,
      isNew: true,
      isFeatured: true
    },
    {
      id: '2',
      name: 'Luxury Dining Set',
      price: 89999,
      originalPrice: 119999,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      category: 'Dining',
      rating: 4.8,
      reviews: 95,
      isFeatured: true
    },
    {
      id: '3',
      name: 'Modern Sofa Collection',
      price: 75999,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      category: 'Living Room',
      rating: 4.7,
      reviews: 203,
      isNew: true
    },
    {
      id: '4',
      name: 'Designer Coffee Table',
      price: 18999,
      originalPrice: 25999,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      category: 'Living Room',
      rating: 4.6,
      reviews: 67
    },
    {
      id: '5',
      name: 'Premium Bookshelf',
      price: 35999,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      category: 'Storage',
      rating: 4.8,
      reviews: 89,
      isFeatured: true
    },
    {
      id: '6',
      name: 'Elegant Wardrobe',
      price: 65999,
      originalPrice: 85999,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      category: 'Bedroom',
      rating: 4.9,
      reviews: 142
    }
  ];

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">Featured Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Luxury
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Furniture
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium furniture pieces, each designed to transform your space into a masterpiece of elegance and comfort.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-green-400 to-green-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <Button
                    size="icon"
                    variant="ghost"
                    className={`bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                      favorites.has(product.id) ? 'text-red-400' : 'text-white'
                    }`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                  </Button>
                  
                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Hover Overlay Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 backdrop-blur-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400/80 text-sm font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white/80 text-sm font-medium">{product.rating}</span>
                    <span className="text-white/50 text-sm">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-white/50 line-through text-sm">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  {product.originalPrice && (
                    <div className="text-green-400 text-sm font-semibold">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-yellow-400/30 animate-pulse"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-12 py-3 rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              View All Products
              <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}