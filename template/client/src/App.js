import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [serverMessage, setServerMessage] = useState('Not connected');
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`
    fetch(url)
    .then(response => response.text())
    .then(text => setServerMessage(text))
    .catch(err => setServerMessage('Something went wrong'));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Server says: {serverMessage}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
