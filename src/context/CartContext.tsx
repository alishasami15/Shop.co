


import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the cart item structure
interface CartItem {
  id: number;
  name: string;
  price: number;
}

// Define the context value structure
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  toggleCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Toggle cart (implement your cart toggle logic)
  const toggleCart = () => {
    console.log("Cart toggled");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};



