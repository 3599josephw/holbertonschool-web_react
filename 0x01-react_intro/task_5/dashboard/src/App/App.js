import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  const year = getFullYear();
  const footerText = getFooterCopy(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email"></input>
          <label for="password">Password:</label>
          <input type="text" id="password" name="password"></input>
          <input type="submit" value="OK"></input>
        </form>
      </div>

      <footer className="App-footer">
        <p>
          Copyright {year} - {footerText}
        </p>
      </footer>
    </div>
  );
}

export default App;
