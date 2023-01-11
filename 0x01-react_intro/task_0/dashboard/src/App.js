import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="column">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="column dash">
          <h1>School dashboard</h1>
        </div>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
