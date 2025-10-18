// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <h1>Seu Painel Pizzaria</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Pedidos</a>
        <a href="#">Produtos</a>
      </nav>
    </header>
  );
}

export default Navbar;
