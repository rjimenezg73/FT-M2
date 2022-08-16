import React, { useState } from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
// import data from './data.js'


function App() {

//   // A partir de aquí según M
   const [cities, setCities] = useState([]);
//   // cities = []
//   // setCities = f(que actualiza el estado)

  function onClose (id){
    setCities(oldCities => 
      oldCities.filter(c => c.id !== id))
  }

  
  function onSearch(city){
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
       .then(response => response.json())
       .then(response_json => {
         if(response_json.main !== undefined){
           // A trabajar
         
           const city = {
             min: Math.round(response_json.main.temp_min),
             max: Math.round(response_json.main.temp_max),
             id: response_json.id,
             img: response_json.weather[0].icon,
             wind: response_json.wind.speed,
             temp: response_json.main.temp,
             name: response_json.name,
             weather: response_json.weather[0].main,
             clouds: response_json.clouds.all,
             latitud: response_json.coord.lat,
             longitud: response_json.coord.lon,
           }
           setCities(oldCities => [...oldCities,city]);
          } else{
             alert('Ciudad no encontrada');
          }
       })
   };


   return (
     <div className="App">
       <div>

         <Nav
          onSearch={onSearch}
           // Se pasa la función, no la invocación a la unción
         />
       </div>
      
       <diV>
         <Cards 
            cities={cities}
            //cities={data}
            onClose={onClose}
         />
       </diV>

     </div>
   );
 }

 export default App;