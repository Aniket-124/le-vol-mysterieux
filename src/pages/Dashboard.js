import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // Send a request to the backend to validate the token
          const response = await axios.get("http://localhost:5000/checkLogged", {
            headers: { Authorization: `Bearer ${token}` },
          });

          // If the response is successful, the user is logged in
          if (response.status === 200) {
            setLoggedIn(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoginStatus();
  }, []);


  function logout() {
    axios.post('http://localhost:5000/logout')
      .then(() => {
        // Clear the token from local storage
        localStorage.removeItem('token');
  
        // Redirect the user to the homepage or a login page
        // For example, you can use React Router to navigate to the homepage
        // history.push('/');
        console.log('Logout successful');
        setLoggedIn(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      {loggedIn ? (
        <div>
        <h2>Welcome to the Dashboard</h2>
        <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in to access the Dashboard</h2>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
