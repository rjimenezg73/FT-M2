import React from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.searchBar}>
      <input type='text' placeholder='Ciudad...'></input>
      <button Onclick={() => props.OnSearch('Busca tu Ciudad...')}>Search</button>
    </div>
  )
};