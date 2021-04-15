import React from "react";

import ItemList from "../../components/ItemList";
import ItemDetails from "../../components/ItemDetails";

import "../page.scss";

const HousesPage = () => {
  return (
    <div className="container">
      <ItemList itemType="houses" />
      <ItemDetails />
    </div>
  )
}

export default HousesPage;