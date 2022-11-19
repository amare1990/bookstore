import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const NavBar = () => (
  <header className="header">
    <div className="logo-navabr">
      <NavLink className="logo link" to="/">Bookstore CMS</NavLink>
      <ul className="nav-bar">
        <NavLink to="/" className="book-link link"> BOOKS </NavLink>
        <NavLink to="/Categories" className="category-link link">CATEGORIES</NavLink>
      </ul>
    </div>
    <div className="ico-container">
      <ImUser className="user-icon primary-color" />
    </div>

  </header>
);

export default NavBar;
