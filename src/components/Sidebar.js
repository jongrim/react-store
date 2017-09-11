import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return <div>{props.children}</div>;
};

const SidebarLink = props => {
  return (
    <Link to={props.to}>
      <p>{props.children}</p>
    </Link>
  );
};

export { Sidebar, SidebarLink };
