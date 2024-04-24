import React, { useState } from "react";
import Navigationbar from "../Components/Navigationbar";
import Detailsform from "./Forms/Detailsform";
import Passwordform from "./Forms/Passwordform";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const ProfilePage = () => {
  const user = useKindeAuth();
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-white-to-green min-h-screen">
      
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-800">Your Account</h1>
          <hr className="my-4 border-t-2 border-gray-200" />
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="flex justify-center border-b">
            <div className="w-full">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                <li className="mr-2">
                  <a
                    onClick={() => handleTabClick("details")}
                    className={`inline-block p-4  rounded-t-lg border-b-2 ${
                      activeTab === "details"
                        ? "border-blue-600"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    My Details
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    onClick={() => handleTabClick("password")}
                    className={`inline-block p-4 rounded-t-lg border-b-2 ${
                      activeTab === "password"
                        ? "border-blue-600"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    Password
                  </a>
                </li>
                {/* More tabs */}
              </ul>
            </div>
          </div>
          {/* Tab Content */}
          {activeTab === "details" && <Detailsform user={user.getUser()} />}
          {activeTab === "password" && <Passwordform />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
