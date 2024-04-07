export const Layout = ({ menu, children, onFilterChange }) => {
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="flex flex-row bg-gray-800">
        <aside className="w-64 px-8 py-4 text-white flex flex-col">
          {/* Dynamic navigation menu items */}
          <nav className="pt-28">
            <ul className="space-y-2">
              {menu.map((menuItem, index) => (
                <li key={index}>
                  <button
                    onClick={() => onFilterChange(menuItem.filter)}
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
          <div className="bg-white-to-green min-h-screen">{children}</div>
        </main>
      </div>
    </div>
  );
};
