import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarStyle = {
  backgroundColor: '#2d5199',
  display: 'flex'
};

const navbarLinkStyle = {
  width: '60px',
  color: '#f5f5f5',
  textDecoration: 'none',
  padding: '1em',
  textAlign: 'center'
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
