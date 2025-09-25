'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === newItem.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
                : item
            )
          });
        } else {
          set({
            items: [...items, { ...newItem, quantity: newItem.quantity || 1 }]
          });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter(item => item.id !== id) });
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);