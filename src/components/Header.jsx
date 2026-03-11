import React from 'react';
import logo from '../assets/react.svg'; 
import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa Logo" style={{ height: '68px' }} />
      </div>
      <nav className="header__nav">
        <a href="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#FF6060' }}>Accueil</a>
        <a href="/about" style={{ textDecoration: 'none', color: '#FF6060' }}>A Propos</a>
      </nav>
    </header>
  );
}

export default Header;