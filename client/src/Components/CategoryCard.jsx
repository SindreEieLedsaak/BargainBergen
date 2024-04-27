import { Link } from "react-router-dom";

export const CategoryCard = ({ item }) => {
  const { title, imageSrc } = item ?? {};
  if (!title) return null;
  const categoryToLower = title.toLowerCase();
  return (
    <Link
      to={`/products/${categoryToLower}/`}
      className="w-60 h-80 md:w-60 lg:w-68 xl:w-72  3xl:w-80 rounded overflow-hidden shadow-lg bg-white block"
    >
      {item.imageSrc != null ? (
        <img
          className="w-full h-48 object-cover object-center"
          src={imageSrc}
          alt={title}
        />
      ) : (
        <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </Link>
  );
};
