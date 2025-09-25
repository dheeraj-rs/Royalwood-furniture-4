'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Heart, 
  ArrowRight,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  Tag
} from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const shipping = 0; // Free shipping
  const tax = getTotalPrice() * 0.18; // 18% GST
  const discount = appliedPromo ? getTotalPrice() * 0.1 : 0; // 10% discount if promo applied
  const finalTotal = getTotalPrice() + shipping + tax - discount;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'royal10') {
      setAppliedPromo(promoCode);
      setPromoCode('');
    } else {
      alert('Invalid promo code');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Checkout functionality would be implemented here');
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        
        <section className="pt-20 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingCart className="w-12 h-12 text-yellow-400" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Looks like you haven't added any items to your cart yet. 
                Discover our amazing furniture collection and find something you love.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-3 rounded-full"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Start Shopping
                  </Button>
                </Link>
                
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-yellow-400 px-8 py-3 rounded-full"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
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
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Shopping
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Cart
              </span>
            </h1>
            <p className="text-lg text-white/70">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Cart Items</h2>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>

              {items.map((item) => (
                <Card
                  key={item.id}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-white/60 text-sm mb-2">SKU: RW-{item.id}</p>
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                              ₹{item.price.toLocaleString()}
                            </span>
                            <Badge variant="outline" className="border-green-500/30 text-green-400">
                              In Stock
                            </Badge>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                          <div className="flex items-center bg-white/10 rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="text-white hover:bg-white/10 rounded-l-lg"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="px-4 py-2 text-white font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="text-white hover:bg-white/10 rounded-r-lg"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-white/60 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-white/60 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <span className="text-white/70">Subtotal:</span>
                        <span className="text-xl font-bold text-white">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-white/80 font-medium mb-2">Promo Code</label>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    />
                    <Button
                      onClick={handleApplyPromo}
                      disabled={!promoCode}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 disabled:opacity-50"
                    >
                      <Tag className="w-4 h-4" />
                    </Button>
                  </div>
                  {appliedPromo && (
                    <p className="text-green-400 text-sm mt-2">✓ Promo code "{appliedPromo}" applied!</p>
                  )}
                </div>

                <Separator className="bg-white/10 mb-6" />

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-white/80">
                    <span>Shipping</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  
                  <div className="flex justify-between text-white/80">
                    <span>Tax (GST 18%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount (10%)</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <Separator className="bg-white/10" />
                  
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold py-3 rounded-xl mb-4"
                >
                  {isCheckingOut ? (
                    'Processing...'
                  ) : (
                    <>
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:border-yellow-400/30 mb-6"
                  >
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/70">
                    <Truck className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Free shipping on all orders</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <RotateCcw className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">30-day return policy</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}