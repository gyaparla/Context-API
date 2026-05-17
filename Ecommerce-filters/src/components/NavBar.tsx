import {
  LucideHeart,
  LucideShoppingCart,
  LucideUserCircle,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import CartView from "./CartView";

const NavBar: React.FC = () => {
  const { cartItems } = useCart();
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  const handleCart = () => {
    setIsOpenCart((prev) => !prev);
  };
  return (
    <>
      <nav className="bg-blue-200 p-4 sticky top-0 left-0 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          React-Store
        </Link>
        <div className="flex items-center justify-center gap-10">
          <Link to="/wishlist">
            <LucideHeart />
          </Link>
          <button className="relative cursor-pointer" onClick={handleCart}>
            <span className="absolute left-4 bottom-4 bg-amber-400 rounded w-6 h-6 text-center">
              {cartItems.length}
            </span>
            <LucideShoppingCart className="" />
          </button>
          <Link to="/Profile">
            <LucideUserCircle />
          </Link>
        </div>
      </nav>
      {isOpenCart && <CartView closeCart={handleCart} />}
    </>
  );
};

export default NavBar;
