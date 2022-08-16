import React, { useState } from "react";
import styles from '../styles/SearchBar.module.css';


export default function SearchBar({onSearch}) {
  // Estado Para guardar lo que se escribe
  
  let [value, setValue] = useState('');
  
  return (
    <div className={styles.searchBar}>
      <form onSubmit={(e) => {
          e.preventDefault();
          onSearch(value);
          setValue('');
        }}>
        <input 
          type='text' placeholder='Ciudad...'
          onChange={event => setValue(event.target.value)}
        />
        <input 
          type="submit"
          value="Buscar"
        />
      </form>
    </div>
  );
}



