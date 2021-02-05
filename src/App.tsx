import React from "react";
import logo from "./skynet_logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SkyTemplates coming soon.</p>
        <a
          className="App-link"
          href="https://siasky.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Skynet
        </a>
      </header>
    </div>
  );
}

export default App;
