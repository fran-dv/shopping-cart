import type { Product } from "@/models";
import { create } from "zustand";

interface CartItem {
  id: number;
  amount: number;
  product: Product;
}

interface CartState {
  items: CartItem[];
  addItemToCart: (product: Product) => boolean;
  incrementItemAmount: (itemId: number) => boolean;
  removeItem: (itemId: number) => boolean;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItemToCart: (product: Product) => {
    const { items } = get();
    const exists = items.some((it) => it.id === product.id);
    if (exists) return false;
    set((state) => ({
      items: [...state.items, { id: product.id, amount: 1, product: product }],
    }));
    return true;
  },
  incrementItemAmount: (itemId: number) => {
    const { items } = get();
    const itemIndex = items.findIndex((it) => it.id === itemId);
    if (itemIndex === -1) return false;
    set((state) => ({
      items: state.items.map((it) =>
        it.id === itemId ? { ...it, amount: it.amount + 1 } : it,
      ),
    }));
    return true;
  },
  removeItem: (itemId: number) => {
    const { items } = get();
    const itemIndex = items.findIndex((it) => it.id === itemId);
    if (itemIndex === -1) return false;
    set((state) => ({
      items: state.items.filter((it) => it.id !== itemId),
    }));
    return true;
  },
}));
