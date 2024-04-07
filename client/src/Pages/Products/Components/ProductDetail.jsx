import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clothingServices from "../../../services/productService";

export const ProductDetail = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    clothingServices.getProductById(category, productId).then((data) => {
      setProduct(data);
    });
  }, [category, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <h2>{product.header}</h2>
      <p>${product.price}</p>
      {/* Display more details as needed */}
    </div>
  );
};
