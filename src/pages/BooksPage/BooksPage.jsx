import React, { useState } from "react";

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
      <ItemDetails itemType="book" selectedItem={selectedItem}/>
    </div>
  )
}

export default BooksPage;