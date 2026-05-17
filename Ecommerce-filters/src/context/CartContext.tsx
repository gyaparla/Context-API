import { createContext, useState, type ReactNode } from "react";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((existing) => existing.id === product.id);

      if (existingItem) {
        return prev.map((each) =>
          each.id === product.id
            ? { ...each, quantity: each.quantity + 1 }
            : each,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id === id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((each) =>
        each.id === id
          ? {
              ...each,
              quantity: each.quantity + 1,
            }
          : each,
      ),
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.filter((each) =>
        each.id === id ? { ...each, quantity: each.quantity - 1 } : each,
      ),
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
