import { createContext } from "react";
import type { Product } from "../types/product";

interface CartContextType {
  cartItems: Product[];
  addToCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

export default CartContext;
