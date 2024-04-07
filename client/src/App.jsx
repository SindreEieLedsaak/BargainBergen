import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage.jsx";
import { Clothing } from "./Pages/Products/Clothing.jsx";
import MainPage from "./Pages/MainPage";
import { ProductDetail } from "./Pages/Products/Components/ProductDetail.jsx";

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
    <div className="3xl:flex 3xl:justify-center max-w-screen-3xl 3xl:mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage serverStatus={serverStatus} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/products/clothing" element={<Clothing />} />
          <Route
            path="/products/:category/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
