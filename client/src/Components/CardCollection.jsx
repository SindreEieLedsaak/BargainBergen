import React from "react";
import { CategoryCard } from "./CategoryCard";
import { ProductCard } from "../Pages/Products/Components/ProductCard";

export const CardCollection = ({
  title,
  items,
  category = false,
  endpoint = "",
}) => {
  if (!category) {
    return (
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4prods:grid-cols-4 gap-x-4 gap-y-10">
          {items.map((product, index) => (
            <div key={index}>
              <ProductCard endpoint={endpoint} product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="p-5">
      <h1 className="text-3xl pt-16 px-3 text-primary-900 ">{title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
        {items.map((item, index) => (
          <div key={index}>
            <CategoryCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
