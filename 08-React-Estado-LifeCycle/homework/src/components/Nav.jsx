import React from 'react';
import Logo from '../img-screen/logoHenry.png'
import SearchBar from '../components/SearchBar.jsx';
import Style from '../Styles/Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={ Style.container}>
      <div className={ Style.logoHenry }>
        <img src={Logo} alt='Logo de Henry' />
      </div>
      <h3> Henry - Weather App</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
 