import CartContext from "../context/CartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw Error("Cart Context is not available");
  return context;
};

export default useCart;
