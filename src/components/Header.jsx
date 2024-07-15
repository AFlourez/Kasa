import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import '../scss/Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;