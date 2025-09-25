'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  ShoppingCart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Ruler,
  Palette,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Info
} from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

interface ProductDetailPageProps {
  productId: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  colors: { name: string; value: string; image?: string }[];
  materials: string[];
  dimensions: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
  inStock: boolean;
  stockCount: number;
}

export function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  
  const { addItem } = useCart();

  // Mock product data
  const mockProduct: Product = {
    id: productId,
    name: 'Royal Executive Chair',
    price: 24999,
    originalPrice: 32999,
    images: [
      'https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    ],
    category: 'office',
    rating: 4.9,
    reviews: 128,
    isNew: true,
    isFeatured: true,
    description: 'Experience ultimate comfort and luxury with our Royal Executive Chair. Crafted with premium materials and designed for long hours of comfortable seating, this chair combines ergonomic excellence with sophisticated aesthetics.',
    features: [
      'Premium genuine leather upholstery',
      'Ergonomic lumbar support system',
      'Height adjustable with pneumatic lift',
      '360-degree swivel with smooth casters',
      'Padded armrests for extra comfort',
      'Heavy-duty steel frame construction',
      'Weight capacity up to 150kg',
      'Easy assembly with included tools'
    ],
    specifications: {
      'Material': 'Genuine Leather, Steel Frame',
      'Dimensions': '70cm W x 75cm D x 110-120cm H',
      'Weight': '25kg',
      'Weight Capacity': '150kg',
      'Warranty': '5 Years',
      'Assembly': 'Required (Tools Included)',
      'Care Instructions': 'Wipe with damp cloth, use leather conditioner'
    },
    colors: [
      { name: 'Classic Black', value: '#000000' },
      { name: 'Rich Brown', value: '#8B4513' },
      { name: 'Executive White', value: '#FFFFFF' }
    ],
    materials: ['Genuine Leather', 'Steel Frame', 'High-Density Foam'],
    dimensions: {
      length: 70,
      width: 75,
      height: 115,
      weight: 25
    },
    inStock: true,
    stockCount: 15
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProduct(mockProduct);
      setIsLoading(false);
    }, 1000);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[selectedImageIndex],
        quantity: quantity
      });
    }
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= (product?.stockCount || 1)) {
      setQuantity(newQuantity);
    }
  };

  const nextImage = () => {
    if (product) {
      setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-20 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-white/70 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
              Browse Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-20 pb-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-white/60">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white capitalize">{product.category.replace('-', ' ')}</span>
            <span>/</span>
            <span className="text-yellow-400">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden group">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

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
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  )}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index 
                        ? 'border-yellow-400 scale-105' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400/80 text-sm font-medium capitalize">
                    {product.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`${isFavorite ? 'text-red-400' : 'text-white/60'} hover:text-red-400`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/60 hover:text-white"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/80 font-medium">{product.rating}</span>
                  <span className="text-white/50">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-white/50 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-white font-semibold mb-3">Color: {product.colors[selectedColor].name}</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === index 
                          ? 'border-yellow-400 scale-110' 
                          : 'border-white/30 hover:border-white/50'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {selectedColor === index && (
                        <Check className="w-6 h-6 text-white mx-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Stock */}
              <div className="flex items-center space-x-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Quantity</label>
                  <div className="flex items-center bg-white/10 rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-6 py-2 text-white font-medium min-w-[4rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stockCount}
                      className="text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    <span className={`font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  {product.inStock && (
                    <p className="text-white/60 text-sm">
                      {product.stockCount} items available
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold py-3 text-lg disabled:opacity-50"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ₹{(product.price * quantity).toLocaleString()}
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 hover:border-yellow-400/30 py-3"
                >
                  Buy Now
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <Truck className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-white/80 text-sm font-medium">Free Shipping</p>
                  <p className="text-white/50 text-xs">On all orders</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white/80 text-sm font-medium">5 Year Warranty</p>
                  <p className="text-white/50 text-xs">Comprehensive coverage</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white/80 text-sm font-medium">30-Day Returns</p>
                  <p className="text-white/50 text-xs">Hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10 rounded-xl">
                <TabsTrigger value="description" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Description
                </TabsTrigger>
                <TabsTrigger value="specifications" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Reviews ({product.reviews})
                </TabsTrigger>
                <TabsTrigger value="shipping" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Shipping & Returns
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Product Description</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-8">
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Info className="w-5 h-5 mr-2 text-yellow-400" />
                        General Information
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-white/10">
                            <span className="text-white/70">{key}</span>
                            <span className="text-white font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Ruler className="w-5 h-5 mr-2 text-yellow-400" />
                        Dimensions
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/70">Length</span>
                          <span className="text-white font-medium">{product.dimensions.length}cm</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/70">Width</span>
                          <span className="text-white font-medium">{product.dimensions.width}cm</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/70">Height</span>
                          <span className="text-white font-medium">{product.dimensions.height}cm</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/70">Weight</span>
                          <span className="text-white font-medium">{product.dimensions.weight}kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Reviews Coming Soon</h4>
                    <p className="text-white/60">Customer reviews will be displayed here once available.</p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="shipping" className="mt-8">
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Shipping & Returns</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Truck className="w-5 h-5 mr-2 text-green-400" />
                        Shipping Information
                      </h4>
                      <div className="space-y-3 text-white/80">
                        <p>• Free shipping on all orders across India</p>
                        <p>• Standard delivery: 5-7 business days</p>
                        <p>• Express delivery: 2-3 business days (additional charges apply)</p>
                        <p>• White glove delivery available for furniture items</p>
                        <p>• Professional assembly service available</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <RotateCcw className="w-5 h-5 mr-2 text-yellow-400" />
                        Return Policy
                      </h4>
                      <div className="space-y-3 text-white/80">
                        <p>• 30-day return window from delivery date</p>
                        <p>• Items must be in original condition</p>
                        <p>• Free return pickup for defective items</p>
                        <p>• Refund processed within 5-7 business days</p>
                        <p>• Exchange available for size/color variations</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}