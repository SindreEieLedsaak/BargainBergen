import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import HomePage from './HomePage';
import NavigationBar from './Components/Navigationbar';
import { divider } from '@nextui-org/react';
import MainPage	 from './Pages/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage serverStatus={serverStatus} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;