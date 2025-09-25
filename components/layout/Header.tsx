'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { AuthModal } from '@/components/auth/AuthModal';
import { SearchModal } from '@/components/ui/SearchModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items } = useCart();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Royalwood
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-yellow-400 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-white/80 hover:text-yellow-400 hover:bg-white/10"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAuthOpen(true)}
                className="text-white/80 hover:text-yellow-400 hover:bg-white/10"
              >
                <User className="w-5 h-5" />
              </Button>
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-yellow-400 hover:bg-white/10 relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {items.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white/80 hover:text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10">
              <div className="px-4 py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-white/80 hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-white/80 hover:text-yellow-400"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsAuthOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-white/80 hover:text-yellow-400"
                  >
                    <User className="w-5 h-5" />
                  </Button>
                  <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/80 hover:text-yellow-400 relative"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {items.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                          {items.length}
                        </span>
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}