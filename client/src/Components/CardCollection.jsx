import React from "react";
import CardComponent from "./CardComponent";

const CardCollection = ({ title, items, cols }) => {
  // Function to map cols prop to Tailwind's grid-cols classes
  const getGridColsClass = (cols) => {
    switch (cols) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      default: return "grid-cols-1";
    }
  };

  const gridColsClass = getGridColsClass(cols);
  if (!title)
    return (<div>
      <div className={`pt-3 px-3 gap-2 grid ${gridColsClass} sm:${gridColsClass}`}>
        {items.map((item, index) => (
          <CardComponent item={item} uniqueKey={index} key={index} />
        ))}
      </div>
    </div>)

  return (
    <div>
      <h1 className="text-3xl pt-16 px-3 text-primary-900 ">{title}</h1>
      <div className={`pt-3 px-3 gap-2 grid ${gridColsClass} sm:${gridColsClass}`}>
        {items.map((item, index) => (
          <CardComponent item={item} uniqueKey={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardCollection;