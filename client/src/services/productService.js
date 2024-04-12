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

export default { getAllProductsOfCategory, getProductById };
