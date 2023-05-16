import React, { useEffect, useState } from "react";
import styles from '../styles/Dashboard.module.scss';

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
      <div className={styles.Dashboard}>
        <header className='page-header'>
          <h1 className='heading'>The Mysterious Heist</h1>
        </header>
        {loggedIn ? (
          <div className={styles.content}>
            <h2>Welcome to the Dashboard</h2>
            <div>
              <button className={styles.logoutBtn} onClick={logout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className={styles.content}>
            <h2>Please log in to Play the Game</h2>
            <button className={styles.logIn}>
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
