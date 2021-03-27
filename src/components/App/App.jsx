import React from "react";

import Header from "../Header";
import RandomChar from "../RandomChar";

import gotAPIservice from "../../services/gotAPI-service";

import './App.scss';

function App() {
  const navLinks = ["Characters", "Books", "Houses"];

  const service = new gotAPIservice();

  return (
    <div className="App">
      <Header navLinks={navLinks} />
      <RandomChar />
      
    </div>
  );
}

export default App;
