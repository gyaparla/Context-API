import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
}

interface ProductCardProps {
  itemDetails: Product;
}

const ProductCard = ({ itemDetails }: ProductCardProps) => {

  return (
    <div className={`product-card`}>
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
