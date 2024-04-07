const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

const getAllClothing = async (category) => {
  // If a category is provided, append a query string with the category. Otherwise, just call the base endpoint.
  const url = category
    ? `${baseUrl}/clothings?category=${encodeURIComponent(category)}`
    : `${baseUrl}/clothings`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default { getAllClothing };
