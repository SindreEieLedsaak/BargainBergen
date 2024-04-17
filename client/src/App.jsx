import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage.jsx";
import { Clothing } from "./Pages/Products/Clothing.jsx";
import MainPage from "./Pages/MainPage";
import { ProductDetail } from "./Pages/Products/Components/ProductDetail.jsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import ProfilePage from "./Pages/ProfilePage";
import { NavigationBar } from "./Components/Navigationbar";
import React from "react";

function App() {
  const [serverStatus, setServerStatus] = useState("Checking server...");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Define the function that will check the server status
    const checkServerStatus = async () => {
      try {
        const response = await fetch("/api"); // Assuming your server has a route for '/api'
        if (response.ok) {
          const data = await response.json();
          setServerStatus(`Server is up: ${data.message}`);
        } else {
          setServerStatus("Server responded with an error.");
        }
      } catch (error) {
        setServerStatus("Server is down or unreachable.");
      }
    };

    // Call the function
    checkServerStatus();
  }, []); // Empty dependency array means this effect will only run once, after the initial render

  const maybeCreateUserDB = (user, app_state) => {
    if (user) {
      fetch('http://localhost:3001/users/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "_id": user.id, "email": user.email, "roles": "user" })
      })
        .then(response => response.json())
        .then(data => {
          console.log("User added to DB");
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <KindeProvider
      clientId="70f77d0ff99d4eeeafb649dc8c28c00f"
      domain="https://bargianbergen.kinde.com"
      redirectUri="http://localhost:5173/home"
      logoutUri="http://localhost:5173"
      onRedirectCallback={maybeCreateUserDB}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<MainPage serverStatus={serverStatus} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/products/clothing" element={<Clothing />} />
          <Route
            path="/products/:category/:productId"
            element={<ProductDetail />}
          />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </KindeProvider>
  );
}

export default App;
