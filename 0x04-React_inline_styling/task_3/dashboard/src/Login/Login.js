import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const LoginCSS = StyleSheet.create({
  input: {
    lineHeight: '25px',
    border: '1px solid lightgrey',
    '@media (min-width: 900px)': {
      margin: '10px',
    },
    '@media (max-width: 900px)': {
      width: '200px',
    },
  },
  button: {
    width: '50px',
    height: '30px',
    '@media (max-width: 900px)': {
      marginTop: '10px',
    },
  },
  login: {
    paddingBottom: '25px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  }
})


function Login() {
  return (
  <div className={css(LoginCSS.login)}>
    <p>Login to access the full dashboard</p>
    <form className={css(LoginCSS.form)}>
      <label htmlFor="email">Email:</label>
      <input type="text" className={css(LoginCSS.input)} name="email"></input>
      <br></br>
      <label htmlFor="password">Password:</label>
      <input type="text" className={css(LoginCSS.input)} name="password"></input>
      <input className={css(LoginCSS.button)} type="submit" value="OK"></input>
    </form>
  </div>
  );
}

export default Login;
