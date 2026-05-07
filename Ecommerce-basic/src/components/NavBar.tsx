import React, { useContext, useState } from "react";
import "../styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import ThemeContext from "../contexts/ThemeContext";
import CartContext from "../contexts/CartContext";
import CartItems from "./CartItems";

const NavBar: React.FC = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  const { cartList } = useContext(CartContext);

  const [openCart, setOpenCart] = useState<boolean>(false);

  const handleCart = () => {
    setOpenCart((prev) => !prev);
  };
  return (
    <>
      <nav>
        <div>
          <h2>E Commerce - Context API</h2>
        </div>
        <div>
          <button className="cart-btn" onClick={handleCart}>
            <span>
              <FaShoppingCart />
            </span>
            <span>{cartList?.length}</span>
          </button>
        </div>
        <div className={`themeSwitcher ${theme}`}>
          <button onClick={themeToggle}>{theme}</button>
        </div>
      </nav>
      {openCart && <CartItems closeCart={handleCart} />}
    </>
  );
};

export default NavBar;
