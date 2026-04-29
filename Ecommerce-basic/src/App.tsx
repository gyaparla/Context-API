import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import ThemeContext from "./contexts/ThemeContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [theme, setTheme] = useState<string>("light");

  const themeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Cart

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {};

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      <main>
        <CartContext.Provider value={{ cartItems, addToCart }}>
          <NavBar />
          <ProductsList />
        </CartContext.Provider>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
