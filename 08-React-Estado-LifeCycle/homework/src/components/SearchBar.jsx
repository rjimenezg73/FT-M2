import React from "react";
import Style from "../Styles/SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input
        className={Style.input}
        type="text"
        placeholder="Search your city..."
      />
      <button className={Style.boton} onClick={() => props.onSearch("Cairns")}>
        Agregar
      </button>
    </div>
  );
}
