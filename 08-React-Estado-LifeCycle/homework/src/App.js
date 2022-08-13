import React, {useState} from 'react';
import Style from './App.css';
import Cards from "./components/Cards.jsx";
import Nav from './components/Nav.jsx';
import data, { Cairns } from "./data.js"

export default function App() {

 

  return (
    <div className={ Style.App }>
      <Nav onSearch={data}/>
      <Cards 
        cities={data}
        //cities={ciudades}
      />
    </div>      
  );
}
