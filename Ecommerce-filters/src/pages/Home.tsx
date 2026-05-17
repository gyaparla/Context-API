import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductsList from "../components/ProductsList";
import type { Product } from "../types/product";

interface FetchProductsResponse {
  products: Product[];
}
const Home: React.FC = () => {
  const [keyWords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirts",
  ]);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedKeyWord, setSelectedKeyWord] = useState<string>("");

  const getFilteredProducts = () => {
    let filteredProducts = productsList;

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= minPrice,
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price <= maxPrice,
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === selectedCategory,
      );
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();
  useEffect(() => {
    const fetchProducts = async () => {
      const url = selectedKeyWord
        ? `https://dummyjson.com/products/search?q=${selectedKeyWord}`
        : "https://dummyjson.com/products";
      try {
        const results = await fetch(url);
        const productsData: FetchProductsResponse = await results.json();
        setProductsList(productsData?.products);
        const uniqueCategories: string[] = Array.from(
          new Set(productsData?.products.map((product) => product.category)),
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error fetching Products:", error);
      }
    };
    fetchProducts();
  }, [selectedKeyWord]);

  return (
    <div className="flex justify-center items-center">
      <Sidebar
        categories={categories}
        keyWords={keyWords}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedKeyWord={selectedKeyWord}
        setSelectedKeyWord={setSelectedKeyWord}
      />
      <ProductsList products={filteredProducts} />
    </div>
  );
};

export default Home;
