import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const LoginCSS = StyleSheet.create({
  email: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  password: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  login: {
    paddingBottom: '25px'
  }
})


function Login() {
  return (
  <div className={css(LoginCSS.login)}>
    <p>Login to access the full dashboard</p>
    <form>
      <label htmlFor="email">Email:</label>
      <input type="text" className={css(LoginCSS.email)} name="email"></input>
      <label htmlFor="password">Password:</label>
      <input type="text" className={css(LoginCSS.password)} name="password"></input>
      <input type="submit" value="OK"></input>
    </form>
  </div>
  );
}

export default Login;
