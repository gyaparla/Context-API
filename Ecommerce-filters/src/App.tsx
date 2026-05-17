import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <div className="flex h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<h1>Wishlist page</h1>} />
            <Route path="/cart" element={<h1>Cart page</h1>} />
            <Route path="/profile" element={<h1>Profile page</h1>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
