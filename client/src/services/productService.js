import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const baseUrl = process.env.VITE_API_URL || "http://localhost:3001";

const getAllProductsOfCategory = async (category, filter) => {
  // If a filter is provided, append a query string with the filter. Otherwise, just call the category endpoint.
  const url = filter
    ? `${baseUrl}/${category}?category=${encodeURIComponent(filter)}`
    : `${baseUrl}/${category}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const getProductById = async (category, productId) => {
  const url = `${baseUrl}/${category}/${encodeURIComponent(productId)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const createListing = async (data) => {
  const categoryWithS = data.category.endsWith("s")
    ? data.category
    : `${data.category}s`; // To match the endpoints in the backend (mongo db collections)
  const url = `${baseUrl}/${categoryWithS}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorResponse = await response.json();

    throw new Error(errorResponse.message || "Failed to create listing");
  }
}
// In productService.js or a similar service module
const addToCart = async ({ productId, quantity, userId }) => {
  console.log("Adding to cart");
  const response = await fetch(`${baseUrl}/orders/cart/add`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          // Optionally, you could still use Authorization if needed for other reasons,
          // "Authorization": `Bearer ${token}`,  
      },
      body: JSON.stringify({ productId, quantity, userId }),
  });
  if (!response.ok) {
      const error = await response.text();  // Use text to avoid JSON parse error if not JSON
      throw new Error("Failed to add to cart: " + error);
  }
  alert("Product has been added to your cart.");
  return response.json();
  
};

const getCurrentOrder = async (userId) => {
  console.log("Fetching current order for user", userId);
  const response = await fetch(`${baseUrl}/orders/current-order?userId=${userId}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      }
  });

  if (!response.ok) {
      const error = await response.text();  // Use text to avoid JSON parse error if not JSON
      throw new Error("Failed to fetch current order: " + error);
  }

  return response.json();
};

// Function to call the backend for AI-generated description
async function generateDescription(header, price, canShip, category, color) {
  try {
    const response = await fetch(`${baseUrl}/ai/generate-description`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        header: header,
        price: price,
        canShip: canShip,
        category: category,
        color: color
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.description;
  } catch (error) {
    console.error('Error generating description:', error);
    return "Failed to generate description. Please try again.";
  }
}



export default { getAllProductsOfCategory, getProductById, addToCart, getCurrentOrder, createListing, generateDescription };
