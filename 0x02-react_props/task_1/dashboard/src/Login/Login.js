import React from 'react';
import './Login.css';


function Login() {
  return (
  <div>
    <p>Login to access the full dashboard</p>
    <form>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email"></input>
      <label for="password">Password:</label>
      <input type="text" id="password" name="password"></input>
      <input type="submit" value="OK"></input>
    </form>
  </div>
  );
}

export default Login;
