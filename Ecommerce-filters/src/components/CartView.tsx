import React from "react";
import useCart from "../hooks/useCart";
import { LucideXCircle } from "lucide-react";

interface CartViewProps {
  closeCart: () => void;
}
const CartView: React.FC<CartViewProps> = ({ closeCart }) => {
  const { cartItems } = useCart();

  return (
    <div className="absolute top-0 right-0 bg-amber-50 w-xl">
      <div className="flex justify-end">
        <button className="cursor-pointer" onClick={closeCart}>
          <LucideXCircle />
        </button>
      </div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((each) => {
            return (
              <div>
                <span>{each.title}</span>
                <span>{each.quantity}</span>
              </div>
            );
          })}
        </>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};

export default CartView;
