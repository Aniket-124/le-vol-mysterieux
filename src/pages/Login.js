import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Login.module.scss'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const email=username;
      const response = await axios.post('http://localhost:5000/login', { email, password });
      // console.log(response);
      if(response.status===404){
        alert("user not found");
      }
      const token = response.data.token;

      // Save the token to local storage
      localStorage.setItem('token', token);

      // Redirect to the dashboard or perform any other action
      // For example, you can use React Router to navigate to the dashboard
      // history.push('/dashboard');
      // console.log('Login successful');
      window.location='/game';
    } catch (error) {
        alert("user not found please enter a valid email and password");
    }
  };

  return (
    <div className={styles.login}>
      <header className='page-header'>
        <h1 className='heading'>Login</h1>
      </header>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            className={styles.inputText}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            className={styles.inputText}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.submit} type="submit">Login</button>  
        <NavLink to ="/signup">Don't have an account? Signup</NavLink>
      </form>
    </div>
  );
}

export default Login;
