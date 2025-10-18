// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ isDark }) {
  return (
    <aside className={`sidebar ${isDark ? 'sidebar-dark' : 'sidebar-light'}`}>
      <div className="user-panel">
        <a href="#">Usuário</a>
        <span className="status active">Online</span>
      </div>
      <nav className="nav-sidebar">
        <ul>
          <li className="nav-item">
            <a className="nav-link active" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pedidos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Produtos</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
