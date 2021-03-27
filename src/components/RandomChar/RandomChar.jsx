import React, { useEffect, useState } from "react";

import Spinner from "../Spinner";

import gotAPIservice from "../../services/gotAPI-service";

import "./RandomChar.scss";

const RandomChar = () => {
  const [character, setCharacter] = useState({}),
    [error, setError] = useState(false),
    [loading, setLoading] = useState(true);

  const apiService = new gotAPIservice();
  
  useEffect(() => {
    const timer = setInterval( () => {
      const currentId = Math.floor(Math.random() * 250 + 25 )
      apiService.getItem(`characters/${currentId}`)
        .then(character => {
          setCharacter(character);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, 1500);
    return () => clearInterval(timer);
  }, []);


  const { name, gender, culture, born, died } = character;
  const renderedContent = () => (
    <> 
      <div className="randomchar__row">
        <span className="randomchar__label">Name:</span>
        <span className="randomchar__value">{name}</span>
      </div>
      <div className="randomchar__row">
        <span className="randomchar__label">Gender:</span>
        <span className="randomchar__value">{gender}</span>
      </div>
      <div className="randomchar__row">
        <span className="randomchar__label">Culture:</span>
        <span className="randomchar__value">{culture}</span>
      </div>
      <div className="randomchar__row">
        <span className="randomchar__label">Born:</span>
        <span className="randomchar__value">{born}</span>
      </div>
      <div className="randomchar__row">
        <span className="randomchar__label">Died:</span>
        <span className="randomchar__value">{died}</span>
      </div>
    </>
  );

  return(
    <div className="randomchar">
      {loading ? <Spinner /> : renderedContent()}
    </div>
  );
}

export default RandomChar;