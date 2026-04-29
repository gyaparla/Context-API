import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/productsList.css";
import type { Product } from "../types/product";

interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductsList: React.FC = () => {
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
        <ProductCard key={item.id} itemDetails={item} />
      ))}
    </div>
  );
};

export default ProductsList;
