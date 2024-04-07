import { Layout } from "../../Components/Layout";
import CardComponent from "../../Components/CardComponent";

export const Clothing = () => {
  const clothingMenu = [
    { name: "Men", path: "men" },
    { name: "Women", path: "women" },
    { name: "Children", path: "children" },
    // ... other menu items ...
  ];

  // const carsMenu = [
  //   { name: "Sedans", path: "/cars/sedans" },
  //   { name: "SUVs", path: "/cars/suvs" },
  //   { name: "Trucks", path: "/cars/trucks" },
  //   // ... other menu items ...
  // ];
  const items = [
    { title: "H&M jakke", price: 200 },
    { title: "Bukse fra Levis", price: 150 },
    { title: "Hettegenser fra Polo", price: 100 },
    { title: "Echo sko strl 42", price: 250 },
    { title: "Hatt", price: 50 },
    { title: "Nike caps", price: 40 },
    { title: "T-skjorte", price: 30 },
  ];
  return (
    <Layout menu={clothingMenu}>
      <div className="p-10 flex flex-col gap-10">
        <div className="flex justify-left min-h-56">
          <h1 className="text-5xl pt-5 border-b w-full h-fit">Clothes</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {items.map((item, index) => (
            <CardComponent item={item} uniqueKey={index} />
            // <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      {/* Content specific to ClothingPage */}
    </Layout>
  );
};
