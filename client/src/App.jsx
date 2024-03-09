import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage.jsx";
import { Clothing } from "./Pages/Products/Clothing.jsx";
import MainPage from "./Pages/MainPage";

function App() {
  const [serverStatus, setServerStatus] = useState("Checking server...");

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage serverStatus={serverStatus} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/products/clothing" element={<Clothing />} />
      </Routes>
    </Router>
  );
}

export default App;
