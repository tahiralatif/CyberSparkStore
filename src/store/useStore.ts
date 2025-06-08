import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

interface StoreState {
  // Products
  products: Product[];
  setProducts: (products: Product[]) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // User
  user: User | null;
  setUser: (user: User | null) => void;
  
  // UI
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  // Products
  products: [],
  setProducts: (products) => set({ products }),
  
  // Cart
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  
  clearCart: () => set({ cart: [] }),
  
  // User
  user: null,
  setUser: (user) => set({ user }),
  
  // UI
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));