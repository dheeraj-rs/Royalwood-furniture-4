'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Heart, 
  ShoppingCart, 
  Eye, 
  Star,
  SlidersHorizontal,
  X,
  ChevronDown
} from 'lucide-react';
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
  description: string;
  colors: string[];
  materials: string[];
}

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const { addItem } = useCart();
  const productsPerPage = 12;

  // Mock products data
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Royal Executive Chair',
      price: 24999,
      originalPrice: 32999,
      image: 'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg',
      category: 'office',
      rating: 4.9,
      reviews: 128,
      isNew: true,
      isFeatured: true,
      description: 'Premium leather executive chair with ergonomic design',
      colors: ['Black', 'Brown', 'White'],
      materials: ['Leather', 'Steel', 'Wood']
    },
    {
      id: '2',
      name: 'Luxury Dining Set',
      price: 89999,
      originalPrice: 119999,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      category: 'dining',
      rating: 4.8,
      reviews: 95,
      isFeatured: true,
      description: '6-seater dining set with premium wood finish',
      colors: ['Walnut', 'Oak', 'Mahogany'],
      materials: ['Solid Wood', 'Fabric']
    },
    {
      id: '3',
      name: 'Modern Sofa Collection',
      price: 75999,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      category: 'living-room',
      rating: 4.7,
      reviews: 203,
      isNew: true,
      description: 'Contemporary 3-seater sofa with premium upholstery',
      colors: ['Grey', 'Beige', 'Navy'],
      materials: ['Fabric', 'Foam', 'Wood']
    },
    {
      id: '4',
      name: 'Designer Coffee Table',
      price: 18999,
      originalPrice: 25999,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      category: 'living-room',
      rating: 4.6,
      reviews: 67,
      description: 'Glass-top coffee table with modern metal base',
      colors: ['Clear', 'Smoked'],
      materials: ['Glass', 'Metal']
    },
    {
      id: '5',
      name: 'Premium Bookshelf',
      price: 35999,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      category: 'storage',
      rating: 4.8,
      reviews: 89,
      isFeatured: true,
      description: '5-tier bookshelf with adjustable shelves',
      colors: ['Walnut', 'White', 'Black'],
      materials: ['Engineered Wood', 'Metal']
    },
    {
      id: '6',
      name: 'Elegant Wardrobe',
      price: 65999,
      originalPrice: 85999,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      category: 'bedroom',
      rating: 4.9,
      reviews: 142,
      description: '3-door wardrobe with mirror and drawers',
      colors: ['White', 'Walnut', 'Oak'],
      materials: ['Engineered Wood', 'Mirror', 'Metal']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'living-room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'dining', label: 'Dining' },
    { value: 'office', label: 'Office' },
    { value: 'storage', label: 'Storage' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

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

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover our complete range of luxury furniture pieces crafted to perfection
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full lg:w-auto">
                <Search className="absolute left-4 top-3 w-5 h-5 text-white/50" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/95 backdrop-blur-xl border-white/10">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-white hover:bg-white/10">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/95 backdrop-blur-xl border-white/10">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white hover:bg-white/10">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'text-white hover:bg-white/10'}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-yellow-400 text-black' : 'text-white hover:bg-white/10'}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Advanced Filters Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-white/20 text-white hover:bg-white/10 hover:border-yellow-400/30"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={200000}
                      min={0}
                      step={1000}
                      className="w-full"
                    />
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-white font-medium mb-3">Minimum Rating</label>
                    <div className="flex space-x-2">
                      {[4, 4.5, 5].map((rating) => (
                        <Button
                          key={rating}
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-yellow-400/10 hover:border-yellow-400/30"
                        >
                          {rating}+ <Star className="w-3 h-3 ml-1 fill-current" />
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Special Offers */}
                  <div>
                    <label className="block text-white font-medium mb-3">Special Offers</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-white/20 text-white hover:bg-yellow-400/10">
                        On Sale
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-white hover:bg-yellow-400/10">
                        New Arrivals
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-white hover:bg-yellow-400/10">
                        Featured
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {filteredProducts.length} Products Found
              </h2>
              <p className="text-white/60">
                {selectedCategory !== 'all' && `in ${categories.find(c => c.value === selectedCategory)?.label}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {currentProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-64 flex-shrink-0' : 'aspect-[4/3]'
                  }`}>
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
                        <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-black">
                          NEW
                        </Badge>
                      )}
                      {product.isFeatured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                          FEATURED
                        </Badge>
                      )}
                      {product.originalPrice && (
                        <Badge className="bg-red-500 text-white">
                          SALE
                        </Badge>
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

                    {/* Add to Cart Button (Grid View) */}
                    {viewMode === 'grid' && (
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-400/80 text-sm font-medium capitalize">
                          {product.category.replace('-', ' ')}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white/80 text-sm font-medium">{product.rating}</span>
                          <span className="text-white/50 text-sm">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {product.name}
                      </h3>
                      
                      {viewMode === 'list' && (
                        <p className="text-white/70 mb-4 line-clamp-2">{product.description}</p>
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
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

                      {/* Colors */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-white/60 text-sm">Colors:</span>
                        <div className="flex space-x-1">
                          {product.colors.slice(0, 3).map((color, idx) => (
                            <div
                              key={idx}
                              className="w-4 h-4 rounded-full border border-white/20"
                              style={{ backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : color.toLowerCase() }}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-white/50 text-xs">+{product.colors.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* List View Actions */}
                    {viewMode === 'list' && (
                      <div className="flex items-center space-x-4 mt-4">
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className={`border-white/20 hover:bg-white/10 ${
                            favorites.has(product.id) ? 'text-red-400' : 'text-white'
                          }`}
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                        </Button>
                        <Link href={`/products/${product.id}`}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-white/30" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Products Found</h3>
              <p className="text-white/60 mb-8">Try adjusting your search criteria or browse our categories</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange([0, 200000]);
                }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
              >
                Previous
              </Button>
              
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? 'default' : 'outline'}
                  onClick={() => setCurrentPage(index + 1)}
                  className={
                    currentPage === index + 1
                      ? 'bg-yellow-400 text-black'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }
                >
                  {index + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}