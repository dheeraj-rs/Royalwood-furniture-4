'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Clock, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Modern Sofa',
    'Dining Table',
    'Office Chair'
  ]);

  const trendingSearches = [
    'Luxury Bedroom Set',
    'Executive Desk',
    'Modular Wardrobe',
    'Coffee Table',
    'Recliner Chair',
    'Bookshelf'
  ];

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Add to recent searches
      setRecentSearches(prev => {
        const updated = [query, ...prev.filter(item => item !== query)].slice(0, 5);
        return updated;
      });
      
      // Close modal and perform search
      onClose();
      // Here you would typically navigate to search results
      console.log('Searching for:', query);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-black/95 backdrop-blur-xl border border-white/10 text-white p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Search Products
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-4">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-4 w-5 h-5 text-white/50" />
            <Input
              type="text"
              placeholder="Search for furniture, categories, or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:bg-white/15 rounded-xl"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-white/50 hover:text-white/80"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trending Searches */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Trending</h3>
              </div>
              <div className="space-y-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="w-full text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/30 rounded-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 group-hover:text-yellow-400">{search}</span>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Recent</h3>
                </div>
                {recentSearches.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearRecentSearches}
                    className="text-white/50 hover:text-white/80 text-sm"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                {recentSearches.length > 0 ? (
                  recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/30 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 group-hover:text-yellow-400">{search}</span>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-white/50 text-center py-8">No recent searches</p>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {['Living Room', 'Bedroom', 'Dining', 'Office', 'Storage'].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSearch(category)}
                  className="border-white/20 text-white/70 hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}