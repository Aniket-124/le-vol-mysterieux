import React, { useState } from 'react';
import axios from 'axios';
// import {NavLink} from 'react-router-dom';
function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const email=username;
      const response = await axios.post('http://localhost:5000/signup', { email, password });
      const token = response.data.token;

      // Save the token to local storage
      localStorage.setItem('token', token);

      // Redirect to the dashboard or perform any other action
      // For example, you can use React Router to navigate to the dashboard
      // history.push('/dashboard');
      // console.log('Signup successful');
      window.location="/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            name='email'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
