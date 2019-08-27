import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [ apiMessage, setMessage ] = useState('')

  useEffect(() => {
    axios.get('/api').then(res => { setMessage(res.data.message) })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { apiMessage && (
          <p>Message: {apiMessage}</p>
        )}
      </header>
    </div>
  );
}

export default App;
