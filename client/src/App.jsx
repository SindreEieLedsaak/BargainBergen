import React, { useEffect, useState } from 'react';
import NavigationBar from './Components/Navigationbar';
import { divider } from '@nextui-org/react';
import MainPage	 from './Pages/MainPage';


function App() {
  const [serverStatus, setServerStatus] = useState('Checking server...');

  useEffect(() => {
    // Define the function that will check the server status
    const checkServerStatus = async () => {
      try {
        const response = await fetch('/api'); // Assuming your server has a route for '/api'
        if (response.ok) {
          const data = await response.json();
          setServerStatus(`Server is up: ${data.message}`);
        } else {
          setServerStatus('Server responded with an error.');
        }
      } catch (error) {
        setServerStatus('Server is down or unreachable.');
      }
    };

    // Call the function
    checkServerStatus();
  }, []); // Empty dependency array means this effect will only run once, after the initial render

  return (
    
    <MainPage serverStatus={serverStatus} />
   
  );
}

export default App;