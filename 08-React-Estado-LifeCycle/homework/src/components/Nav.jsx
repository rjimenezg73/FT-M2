import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from '../components/SearchBar.jsx';
import styles from '../styles/Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={ styles.container}>
      <div className={ styles.logoHenry }>
        <img src={Logo} alt='Logo de Henry' />
      </div>
        
      <div className={ styles.navTitulo }>
       <span>Henry - Weather App</span> 
      </div>

      <div className={ styles.navSearch }>
        <SearchBar
          onSearch={onSearch} 
          // onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      
    </div>
  );
};

export default Nav;
 