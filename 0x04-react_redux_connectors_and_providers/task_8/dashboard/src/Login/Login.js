import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


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


function Login({ loginRequest }) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    enableSubmit: false
  })

  function handleLoginSubmit(e) {
    e.preventDefault();
    if (state.enableSubmit) {
      loginRequest({email: state.email, password: state.password}).then((res) => {
        res.payload ? res.payload() : null;
      })
    }
  }

  function handleChangeEmail(e) {
    if (state.password !== '' && state.email !== '') {
      state.enableSubmit = true;
    }
    setState({...state, email: e.target.value});
  }

  function handleChangePassword(e) {
    if (state.password !== '' && state.email !== '') {
      state.enableSubmit = true;
    }
    setState({...state, password: e.target.value});
  }

  return (
    <div className={css(LoginCSS.login)}>
      <p>Login to access the full dashboard</p>
      <form className={css(LoginCSS.form)} onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input onChange={handleChangeEmail} type="text" className={css(LoginCSS.input)} name="email"></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChangePassword} type="text" className={css(LoginCSS.input)} name="password"></input>
        <input className={css(LoginCSS.button)} type="submit" value="OK"></input>
      </form>
    </div>
  );
}

/*
Login.propTypes = {
  logIn: PropTypes.func
}

Login.defaultProps = {
  logIn: () => {}
}
*/

export default Login;
