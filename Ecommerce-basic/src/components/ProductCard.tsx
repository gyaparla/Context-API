import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ThemeContext from "../contexts/ThemeContext";
import type { Product } from "../types/product";

interface ProductCardProps {
  itemDetails: Product;
}

const ProductCard = ({ itemDetails }: ProductCardProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`product-card ${theme}`}>
      <img src={itemDetails.thumbnail} alt={itemDetails.title} />

      <h4>{itemDetails.title}</h4>

      <div className="price-tag">
        <span>Price: ₹{itemDetails.price}</span>
        <span>Rating: {itemDetails.rating}</span>
      </div>
      <div className="add-cart">
        <button className="add-btn">
          <FaPlus />
        </button>
        <span>0</span>
        <button className="remove-btn">
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
