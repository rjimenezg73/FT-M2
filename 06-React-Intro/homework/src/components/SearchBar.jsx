import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type='text' placeholder='Ciudad...'></input>
      <button Onclick={() => props.OnSearch('Busca tu Ciudad...')}>Search</button>
    </div>
  )
};