import React, { Component } from "react";
import photo from "./photo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={photo} className="App-logo" alt="logo" />
          <h1 className="App-title">ipvmak3r</h1>
        </header>
      </div>
    );
  }
}

export default App;
