import React, { useContext } from "react";
import "../styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import ThemeContext from "../contexts/ThemeContext";
import CartContext from "../contexts/CartContext";

const NavBar: React.FC = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  const { cartItmes } = useContext(CartContext);
  return (
    <nav>
      <div>
        <h2>E Commerce - Context API</h2>
      </div>
      <div>
        <button className="cart-btn">
          <span>
            <FaShoppingCart />
          </span>
          <span>{cartItmes?.length}</span>
        </button>
      </div>
      <div className={`themeSwitcher ${theme}`}>
        <button onClick={themeToggle}>{theme}</button>
      </div>
    </nav>
  );
};

export default NavBar;
