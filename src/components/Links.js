import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <React.Fragment>

      <NavLink exact activeClassName='menu__nav__active' to="/">Home</NavLink>
      <NavLink activeClassName='menu__nav__active' to="/sites">Sites</NavLink>
      <NavLink activeClassName='menu__nav__active' to="/projects">projects</NavLink>
      <NavLink activeClassName='menu__nav__active' to="/gallery">gallery</NavLink>

    </React.Fragment>
  );
};

export default Links;
