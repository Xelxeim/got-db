import React, { useState } from "react";

import ItemList from "../../components/ItemList";
import ItemDetails from "../../components/ItemDetails";

import "../page.scss";

const CharactersPage = () => {
  const [selectedItem, setSelectedItem] = useState(undefined)

  const onSelect = (item) => {    
    setSelectedItem(item);
  }

  return (
    <div className="container">
      <ItemList itemType="characters" onSelect={onSelect} />
      <ItemDetails itemType="character" selectedItem={selectedItem}/>
    </div>
  )
  
}

export default CharactersPage;