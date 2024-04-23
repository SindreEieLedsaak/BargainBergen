import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../../services/productService";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';


export const ProductDetail = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);
  const { token } = useKindeAuth();  // Accessing token directly in the component


  useEffect(() => {
    productService.getProductById(category, productId).then((data) => {
      setProduct(data);
    });
  }, [category, productId]);

  const addToCart = async () => {
    console.log("Token: " + token)
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }
    console.log('Attempting to add to cart:', product);
    try {
      const response = await productService.addToCart({
        productId: product._id,
        quantity: 1,
        token  // Pass the token to your service function
      });
      console.log('Product added to cart:', response);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

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
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
        {/* Include more details as needed, formatted nicely */}

      </div>
    </div>
  );
};
