import React from "react";

import ItemList from "../../components/ItemList";
import ItemDetails from "../../components/ItemDetails";

import "../page.scss";

const CharactersPage = () => {
  return (
    <div className="container">
      <ItemList itemType="characters" />
      <ItemDetails />
    </div>
  )
  
}

export default CharactersPage;