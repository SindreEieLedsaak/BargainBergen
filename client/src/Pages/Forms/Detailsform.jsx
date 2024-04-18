import React, { useState } from "react";

const Detailsform = ({ user }) => {
  const [language, setLanguage] = useState("English (US)");
  return (
    <div className="p-6">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={user.given_name + " " + user.family_name}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={user.email}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="avatar"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Avatar
              </label>
              <input
                type="file"
                id="avatar"
                className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="language"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Language
              </label>
              <select
                id="language"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                defaultValue="English (US)"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English (US)">English (US)</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="flex justify-center">
              {" "}
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detailsform;
