import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const NavBar = () => (
  <header className="header">
    <NavLink className="logo" to="/">Bookstore CMS</NavLink>
    <ul className="nav-bar">
      <NavLink to="/" className="book-link"> BOOKS </NavLink>
      <NavLink to="/Categories" className="category-link">CATEGORIES</NavLink>
    </ul>
    <div className="ico-container">
      <ImUser className="user-icon primary-color" />
    </div>

  </header>
);

export default NavBar;
