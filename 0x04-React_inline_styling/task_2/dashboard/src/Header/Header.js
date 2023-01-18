import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
  }
})

function Header() {
  return (
    <header className={css(HeaderCSS.AppHeader)}>
      <img src={logo} className={css(HeaderCSS.AppLogo)} alt="logo" />
      <h1 className={css(HeaderCSS.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
