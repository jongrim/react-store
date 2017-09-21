import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const sidebarContainer = {
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 195px',
  borderRight: '1px solid #f5f5f5'
};

const sidebarLinkStyle = {
  textDecoration: 'none',
  color: 'rgb(158, 158, 158)',
  padding: '0.5em 0 0.25em 1em'
};

const activeLinkStyle = {
  color: '#2d5199'
};

const sidebarLinks = {
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  WebkitPosition: 'sticky',
  top: '15px'
};

const Sidebar = props => {
  return (
    <div style={sidebarContainer}>
      <div style={sidebarLinks}>{props.children}</div>
    </div>
  );
};

const SidebarLink = props => {
  return (
    <NavLink
      style={sidebarLinkStyle}
      activeStyle={activeLinkStyle}
      to={props.to}>
      {props.children}
    </NavLink>
  );
};

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired
};

export { Sidebar, SidebarLink };
