import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import '../scss/main.scss'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
