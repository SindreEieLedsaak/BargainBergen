export const Layout = ({ menu, children, onCategoryChange }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 px-8 py-4 bg-gray-800 text-white flex flex-col h-full">
        {/* Dynamic navigation menu items */}
        <nav className="flex-grow fixed pt-28">
          <ul className="space-y-2">
            {menu.map((menuItem, index) => (
              <li key={index}>
                <button
                  onClick={() => onCategoryChange(menuItem.filter)}
                  className="block py-2 px-4 rounded hover:bg-gray-700 text-left w-full"
                >
                  {menuItem.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-grow overflow-auto">
        <div className="bg-white min-h-screen">{children}</div>
      </main>
    </div>
  );
};
