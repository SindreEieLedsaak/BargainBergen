const Passwordform = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Change Password
      </h2>
      <form>
        <div className="mb-6">
          <label
            htmlFor="current-password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="new-password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex justify-center pb-6">
          {" "}
          {/* Centering and padding for the button */}
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Passwordform;
