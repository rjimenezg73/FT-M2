import React, {useState} from "react";
import Style from "../Styles/SearchBar.module.css";

export default function SearchBar({onSearch}) {
  // Estado Para guardar lo que se escribe
  
  return (
      <form className={ Style.formSearch } onSubmit={(e) => {
        e.preventDefault();  // Evito que se recargue la páguina. 
        onSearch('Cairns');
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
        />
        <input 
          type="submit"
          value="Agregar"
        />
      </form>
  );
}
