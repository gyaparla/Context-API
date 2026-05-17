import React from "react";
import type { Product } from "../types/product";
import CardItem from "./CardItem";
import useCart from "../hooks/useCart";

interface ProdctsListProps {
  products: Product[];
}
const ProductsList: React.FC<ProdctsListProps> = ({ products }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="h-screen p-4 overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((each) => {
          return (
            <div key={each.id} className="flex flex-col gap-2 border rounded">
              <CardItem item={each} />
              <button
                className="bg-green-700 text-white py-2 font-semibold border-none mt-auto cursor-pointer"
                onClick={() => addToCart(each)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
