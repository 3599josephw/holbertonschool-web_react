import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';


const HeaderCSS = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    color: '#E0354B',
    borderBottom: '3px #E0354B solid',
    marginBottom: '50px',
    paddingBottom: '20px'
  },
  h1: {
    fontSize: '36px',
    fontFamily: 'Arial',
    display: 'inline',
  },
  AppLogo: {
    width: '200px',
    height: '200px',
  },
  logout: {
    fontStyle: 'italic',
  },
})

function Header() {
  const { user, logOut } = React.useContext(AppContext);

  return (
    <header>
      <div className={css(HeaderCSS.AppHeader)}>
        <img src={logo} className={css(HeaderCSS.AppLogo)} alt="logo" />
        <h1 className={css(HeaderCSS.h1)}>School dashboard</h1>
      </div>
      {user.isLoggedIn ? (
        <div className={css(HeaderCSS.logoutSection)}>
          <p>Welcome {user.email} <span className={css(HeaderCSS.logout)} onClick={logOut}>(logout)</span></p>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
