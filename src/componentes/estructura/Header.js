import React from 'react';
import '../../styles/estructura/header.css'
import logo from '../../images/logo192.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Descripción de la imagen"></img>
    </header>
  );
}

export default Header;