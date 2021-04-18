import React, { useState } from "react";

import ItemList from "../../components/ItemList";
import ItemDetails from "../../components/ItemDetails";

import "../page.scss";

const HousesPage = () => {
  const [selectedItem, setSelectedItem] = useState(undefined)

  const onSelect = (item) => {    
    setSelectedItem(item);
  }

  return (
    <div className="container">
      <ItemList itemType="houses" onSelect={onSelect} />
      <ItemDetails itemType="house" selectedItem={selectedItem}/>
    </div>
  )
}

export default HousesPage;