import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = props => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        <h2>Home</h2>
      </Link>
      <Link to="/shop" className="navbar-link">
        <h2>Shopping</h2>
      </Link>
      <Link to="/manage" className="navbar-link">
        <h2>Manage</h2>
      </Link>
    </div>
  );
};

export default Nav;
