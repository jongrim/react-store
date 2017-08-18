import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: '#2d5199',
  display: 'flex'
};

const navbarLinkStyle = {
  color: '#f5f5f5',
  textDecoration: 'none',
  padding: '1em'
};

const activeStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.65)'
};

const Nav = () => {
  return (
    <div style={navbarStyle}>
      <NavLink exact to="/" style={navbarLinkStyle} activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/shop" style={navbarLinkStyle} activeStyle={activeStyle}>
        Shop
      </NavLink>
    </div>
  );
};

export default Nav;
