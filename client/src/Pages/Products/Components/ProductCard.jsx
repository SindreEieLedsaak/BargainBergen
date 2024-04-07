import { Link } from "react-router-dom";

export const ProductCard = ({ category, product }) => {
  return (
    <Link
      to={`/products/${category}/${product._id}`}
      className="w-60 h-80 md:w-60 lg:w-68 xl:w-72  3xl:w-80 rounded overflow-hidden shadow-lg bg-white block"
    >
      {/* <img
        className="w-full h-48 object-cover object-center"
        src={product.imageUrl}
        alt={product.header}
      /> */}
      {/* Placeholder box in place of the image */}
      <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
        <span className="text-gray-500">No Image Available</span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.header}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
        <p className="text-gray-700 text-base">{product._id}</p>
        <p className="text-gray-700 text-base">{product.category}</p>
      </div>
    </Link>
  );
};
