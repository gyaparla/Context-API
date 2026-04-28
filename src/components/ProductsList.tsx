import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/productsList.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
}

interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductsList: React.FC = () => {

  const [productsList, setProductsList] = useState<Product[]>([]);

  const getProductsList = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data: ProductsApiResponse = await response.json();

      setProductsList(data.products);
    } catch (error) {
      console.log("Error fetching Products",error);
    }
  };

  useEffect(() => {
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
