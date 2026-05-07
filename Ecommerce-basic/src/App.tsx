import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import ThemeContext from "./contexts/ThemeContext";
import CartContext from "./contexts/CartContext";
import type { Product } from "./types/product";

interface CartItem extends Product {
  quantity: number;
}
function App() {
  const [theme, setTheme] = useState<string>("light");

  const themeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Cart

  const [cartList, setCartList] = useState<CartItem[]>([]);

  const addToCart = (item: Product) => {
    setCartList((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prev.map((each) =>
          each.id === item.id
            ? {
                ...each,
                quantity: each.quantity + 1,
              }
            : each,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartList((prev) => prev.filter((each) => each.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCartList((prev) =>
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
    setCartList((prev) =>
      prev
        .map((each) =>
          each.id === id
            ? {
                ...each,
                quantity: each.quantity - 1,
              }
            : each,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      <main>
        <CartContext.Provider
          value={{
            cartList,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
          }}
        >
          <NavBar />
          <ProductsList />
        </CartContext.Provider>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
