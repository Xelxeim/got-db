import React, { useState, useEffect } from "react";

import Spinner from "../Spinner";

import gotAPIservice from "../../services/gotAPI-service";
import formatService from "../../services/format-service";

import "./ItemList.scss";

const ItemList = ({ itemType, onSelect }) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gotAPIservice.getAllItems(itemType)
      .then(items => setData(items))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const renderedContent = data.map((item, index) => {
    const { name } = item;
    return(
      <div key={index} className="itemlist__row" onClick={() => onSelect(item)}>
        <span>{name}</span>
      </div>
    )
  });

  return (
    <div className="itemlist">
      <h2>{formatService.firstLetterUpperCase(itemType)} list</h2>
      {loading ? <Spinner /> : renderedContent}
    </div>
  )
}

export default ItemList;