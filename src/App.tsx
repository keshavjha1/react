import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> keshav jha
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactss
        </a>
      </header>
    </div>
  );
}

export default App;
