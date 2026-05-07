import React, { useContext } from "react";
import "../styles/cartItems.css";
import CartContext from "../contexts/CartContext";
import ProductCard from "./ProductCard";
import { FaTrashCan } from "react-icons/fa6";
import { FaMinus, FaPlus, FaTimesCircle } from "react-icons/fa";

interface CloseCart {
  closeCart: () => void;
}

const CartItems: React.FC<CloseCart> = ({ closeCart }) => {
  const {
    cartList,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  if (cartList.length === 0) {
    return (
      <div className="cart-container">
        <h3>Your cart is empty please go and shop</h3>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <button className="close-cart-btn" onClick={closeCart}>
        <FaTimesCircle />
      </button>
      {cartList &&
        cartList.map((each) => {
          return (
            <div className="cartItem-wrapper" key={each.id}>
              <ProductCard itemDetails={each} />
              <div className="qty-btn-wrapper">
                <button
                  className="remove-qty-btn"
                  disabled={each.quantity === 1}
                  onClick={() => decreaseQuantity(each.id)}
                >
                  <FaMinus />
                </button>
                <span>{each.quantity}</span>
                <button
                  className="add-qty-btn"
                  onClick={() => {
                    increaseQuantity(each.id);
                  }}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="delete-btn"
                onClick={() => removeFromCart(each.id)}
              >
                <FaTrashCan />
              </button>
            </div>
          );
        })}
      <button className="empty-cart-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default CartItems;
