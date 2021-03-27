import React from "react";

import Header from "../Header";
import RandomChar from "../RandomChar";

import './App.scss';

function App() {
  const navLinks = ["Characters", "Books", "Houses"];

  return (
    <div className="App">
      <Header navLinks={navLinks} />
      <RandomChar />
      
    </div>
  );
}

export default App;
