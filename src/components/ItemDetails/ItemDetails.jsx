import React, { useState, useEffect } from 'react';

import Spinner from "../../components/Spinner";

import gotAPIservice from "../../services/gotAPI-service";

import "./ItemDetails.scss";

const ItemDetails = ({ selectedItem }) => {
  const [data, setData] = useState("Pick element you interested in");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setLoading(true);
      gotAPIservice.getItemWithFullUrl(selectedItem.url)
        .then(item => setData({

        }))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }
  }, [selectedItem])

  return (
    <div className="item-details">
      {loading ? <Spinner /> : data}
    </div>
  )
}

export default ItemDetails;
