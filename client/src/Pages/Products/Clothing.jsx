import { useState, useEffect } from "react";
import productService from "../../services/productService";
import { Layout } from "../../Components/Layout";
import { CardCollection } from "../../Components/CardCollection";

export const Clothing = () => {
  const [clothing, setClothing] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    productService
      .getAllProductsOfCategory("clothings", selectedFilter)
      .then((initialClothing) => {
        setClothing(initialClothing);
      });
  }, [selectedFilter]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const clothingMenu = [
    { name: "All", filter: "" }, // Added to allow users to select all items
    { name: "Men", filter: "men" },
    { name: "Women", filter: "women" },
    { name: "Children", filter: "children" },
  ];

  return (
    <Layout menu={clothingMenu} onFilterChange={handleFilterChange}>
      <div className="p-10 flex flex-col gap-10">
        <div className="flex justify-left min-h-32">
          <h1 className="text-5xl pt-5 border-b w-full h-fit">
            Clothes <span className="text-2xl">{selectedFilter}</span>
          </h1>
        </div>
        <CardCollection items={clothing} endpoint="clothings" />
      </div>
    </Layout>
  );
};
