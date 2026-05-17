import React from "react";
import type { Product } from "../types/product";
import { Link } from "react-router-dom";

interface CardItemprops {
  item: Product;
}
const CardItem: React.FC<CardItemprops> = ({ item }) => {
  return (
    <div className="p-4">
      <Link to={`/products/${item.id}`} className="">
        <img
          src={item.thumbnail}
          alt={`Image of ${item.title}`}
          className="w-full h-28 object-contain mb-2"
        />
        <h2 className="font-semibold text-center">{item.title}</h2>
        <p className="text-center">Price: {item.price}</p>
      </Link>
    </div>
  );
};

export default CardItem;
