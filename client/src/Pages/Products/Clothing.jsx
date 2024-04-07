import { useState, useEffect } from "react";
import clothingServices from "../../services/clothingService";
import { Layout } from "../../Components/Layout";

export const Clothing = () => {
  const [clothing, setClothing] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    clothingServices
      .getAllClothing(selectedCategory)
      .then((initialClothing) => {
        setClothing(initialClothing);
      });
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory);
  console.log(clothing);

  const clothingMenu = [
    { name: "All", filter: "" }, // Added to allow users to select all items
    { name: "Men", filter: "men" },
    { name: "Women", filter: "women" },
    { name: "Children", filter: "children" },
  ];

  return (
    <Layout menu={clothingMenu} onCategoryChange={handleCategoryChange}>
      <div className="p-10 flex flex-col gap-10">
        <div className="flex justify-left min-h-56">
          <h1 className="text-5xl pt-5 border-b w-full h-fit">Clothes</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {clothing.map((item, index) => (
            <div key={index}>
              {item.header} {item.price} {item.sellerName}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
