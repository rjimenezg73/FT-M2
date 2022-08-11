import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={`${styles.btn} ${styles.btnColor}`} >X</button>
      
      <h3>{name}</h3>
      <div className={styles.middleDiv}>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img className={styles.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imégen del Tiempo"></img>
    </div>
  )
};