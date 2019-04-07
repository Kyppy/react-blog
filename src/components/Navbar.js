import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-wrapper blue darken-3">
    <div className="container">
      <a className="brand-logo">My blog</a>
      <ul className="right">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
