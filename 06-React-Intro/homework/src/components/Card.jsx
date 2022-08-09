import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h3>{name}</h3>
      <div>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imégen del Tiempo"></img>
    </div>
  )
};