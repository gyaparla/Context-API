import { useContext } from "react";
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
    </div>
  );
};

export default ProductCard;
