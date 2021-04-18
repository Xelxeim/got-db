import React, { useState, useEffect } from "react";

import Spinner from "../Spinner";

import gotAPIservice from "../../services/gotAPI-service";
import formatService from "../../services/format-service";

import "./ItemList.scss";

const ItemList = ({ itemType, onSelect }) => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gotAPIservice.getAllItems(itemType, page)
      .then(items => setData(items))
      .finally(() => setLoading(false))
  }, [page])

  const renderedContent = data.map((item, index) => {
    const { name } = item;
    return(
      <div key={index + (page - 1) * 10} className="itemlist__row" onClick={() => onSelect(item)}>
        <span>{name}</span>
      </div>
    )
  });

  const nextPage = async () => {
    setPage(page + 1);
    if(data.length < 10) setPage(page)
  }

  const prevPage = () => {
    if(page === 1) return
    setPage(page - 1)
  }

  return (
    <>
      <div key={page} className="itemlist">
        <h2>{formatService.firstLetterUpperCase(itemType)} list</h2>
        {loading ? <Spinner /> : renderedContent}
      </div>
      <div className="itemlist-navigation">
        <button onClick={() => prevPage()}>Назад</button>
        <span>{page}</span>
        <button onClick={() => nextPage()}>Вперед</button>
      </div>
    </>
  )
}

export default ItemList;