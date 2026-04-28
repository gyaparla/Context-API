import React from "react";
import "../styles/navbar.css"
import { FaShoppingCart } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div>
        <h2>E Commerce - Context API</h2>
      </div>
      <div>
        <button className="cart-btn"><span><FaShoppingCart/></span><span>0</span></button>
      </div>
    </nav>
  );
};

export default NavBar;
