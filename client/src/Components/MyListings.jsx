import React, { useEffect, useState } from "react";
import productService from "../services/productService";
import { CardCollection } from "./CardCollection";

export function MyListings({ sellerID }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    productService
      .getProductsBySeller(sellerID)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [sellerID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <CardCollection items={products} endpoint="clothings" />
    </div>
  );
}
