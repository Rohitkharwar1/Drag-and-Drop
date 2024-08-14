// src/App.js
import React from "react";
import Canvas from "./components/Canvas";
import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="canvas-container">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
