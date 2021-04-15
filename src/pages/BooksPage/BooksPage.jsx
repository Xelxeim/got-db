import React, { useState, useEffect } from "react";

import ItemList from "../../components/ItemList";
import ItemDetails from "../../components/ItemDetails";

import "../page.scss";

const BooksPage = () => {
  const [selectedItem, setSelectedItem] = useState(undefined)

  const onSelect = (item) => {    
    setSelectedItem(item);
  }

  return (
    <div className="container">
      <ItemList itemType="books" onSelect={onSelect} />
      <ItemDetails selectedItem={selectedItem}/>
    </div>
  )
}

export default BooksPage;