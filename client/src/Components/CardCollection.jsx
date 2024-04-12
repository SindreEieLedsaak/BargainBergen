import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";
import React from "react";

const CardCollection = ({ title, items, cols }) => {
  // Function to map cols prop to Tailwind's grid-cols classes
  const getGridColsClass = (cols) => {
    switch (cols) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      default:
        return "grid-cols-1";
    }
  };

  const gridColsClass = getGridColsClass(cols);

  return (
    <div>
      <h1 className="text-3xl pt-16 px-3 text-primary-900 ">{title}</h1>
      <div
        className={`pt-3 px-3 gap-2 grid ${gridColsClass} sm:${gridColsClass}`}
      >
        {items.map((item, index) => (
          <div key={index}>
            <Link to={item.link}>
              <CardComponent item={item} uniqueKey={index} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCollection;
