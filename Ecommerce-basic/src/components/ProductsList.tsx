import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/productsList.css";
import type { Product } from "../types/product";
import CartContext from "../contexts/CartContext";

interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductsList: React.FC = () => {
  const { addToCart } = useContext(CartContext);
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: ProductsApiResponse = await response.json();

        setProductsList(data.products);
      } catch (error) {
        console.log("Error fetching Products", error);
      }
    };
    getProductsList();
  }, []);

  return (
    <div className="Products-container">
      {productsList.map((item) => (
        <div className="card-wrapper">
          <ProductCard key={item.id} itemDetails={item} />
          <button className="add-btn" onClick={() => addToCart(item)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
