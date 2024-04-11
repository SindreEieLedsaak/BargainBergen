import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../../services/productService";

export const ProductDetail = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productService.getProductById(category, productId).then((data) => {
      setProduct(data);
    });
  }, [category, productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h2 className="text-2xl font-bold mb-4">{product.header}</h2>
      <p className="text-xl text-gray-800 mb-2">${product.price}</p>
      <div className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        <img
          src={`data:image/jpeg;base64,${product.img}`}
          alt="Product"
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Additional details can be displayed in a structured way below */}
      <div className="mt-6 space-y-3 text-gray-700">
        <p className="text-sm md:text-base">{product.description}</p>
        {/* Include more details as needed, formatted nicely */}
      </div>
    </div>
  );
};
