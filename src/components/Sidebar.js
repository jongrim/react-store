import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '192px',
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

const Sidebar = props => {
  return <div style={sidebarStyle}>{props.children}</div>;
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
