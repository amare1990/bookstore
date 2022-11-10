import React from "react";
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <header className="header">
        <h1>Bookstore CMS</h1>
        <ul className="nav-bar">
          <NavLink to="/" className={({ isActive }) => (isActive ? isActive : undefined)}>BOOKS</NavLink>
          <NavLink to="/Categories" className={({ isActive }) => (isActive ? isActive : undefined)}>CATEGORIES</NavLink>
        </ul>

      </header>
    );
  }
}

export default NavBar;