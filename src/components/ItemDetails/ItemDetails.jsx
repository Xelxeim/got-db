import React, { useState, useEffect } from 'react';

import Spinner from "../../components/Spinner";

import gotAPIservice from "../../services/gotAPI-service";
import formatService from "../../services/format-service";

import "./ItemDetails.scss";

const ItemDetails = ({ selectedItem, itemType }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (selectedItem) {
      setLoading(true);
      gotAPIservice.getItemWithFullUrl(selectedItem.url)
        .then(item => formatService.extractNecessaryProps(item, itemType))
        .then(item => formatService.transformItem(item))
        .then(item => setData(item))
        .finally(() => setLoading(false))
    }
  }, [selectedItem])

  const renderedContent = () => {
    return(
      <div>
        {data.map((item, index) => {  // receiving array with subarrays, consisting of heading and value 
          return (
            <p key={index}>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </p>
          )
        })}
      </div>
    )
  }

  return (
    <div className="item-details">
      {data ? 
        loading ? <Spinner /> : renderedContent() 
        : <p>Choose an element you interested in</p>
      }
    </div>
  )
}

export default ItemDetails;
