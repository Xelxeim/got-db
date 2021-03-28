import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header";
import ItemList from "../ItemList/ItemList";
import RandomChar from "../RandomChar";

import CharactersPage from "../../pages/CharactersPage";
import HousesPage from "../../pages/HousesPage";
import BooksPage from "../../pages/BooksPage";

import './App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <RandomChar />
        <ItemList itemType="characters"/>

        <Route path="/characters" component={CharactersPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/houses" component={HousesPage} />
      </div>
    </Router>

  );
}

export default App;
