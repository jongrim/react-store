import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarContainer = {
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 192px',
  backgroundColor: '#f5f5f5'
};

const sidebarLinkStyle = {
  textDecoration: 'none',
  color: 'rgb(158, 158, 158)',
  padding: '0.5em 0 0.25em 1em',
  borderBottom: '1px solid #dddddd'
};

const activeLinkStyle = {
  backgroundColor: 'rgba(25, 25, 25, 0.5)',
  color: '#f5f5f5'
};

const sidebarLinks = {
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
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

export { Sidebar, SidebarLink };
