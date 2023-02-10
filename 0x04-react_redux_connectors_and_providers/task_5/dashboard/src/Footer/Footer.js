import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import AppContext from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';
import { connect, useStore } from 'react-redux';


const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '18px',
    fontFamily: 'Arial',
  }
})

export function Footer({ user }) {
  // const { user } = React.useContext(AppContext);
  const year = getFullYear();
  const footerText = getFooterCopy(true);
  return (
    <div>
      <p className={css(styles.footerText)}>
        Copyright {year} - {footerText}
      </p>
      {user.isLoggedIn ? (<p className={css(styles.footerText)}><a href='#'>Contact Us</a></p>) : null}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    user: state.ui.get('user')
  }
}

export const ReduxFooter = connect(mapStateToProps, null, null)(Footer);
