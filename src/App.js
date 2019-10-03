import React from 'react';
import logo from './checked-shield.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Defenders of Azeroth</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome, Defender!</p>
        <a href="https://discord.gg/HVA2TX5" className="App-link">Click here to join Discord</a>
      </header>
    </div>
  );
}

export default App;
